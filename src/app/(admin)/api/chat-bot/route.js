import { NextResponse } from "next/server";
import { connectDB } from "../../config/database";
import ChatBot from "../../models/ChatBot-model";
import { createZohoLead } from "@/app/lib/zoho";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { 
          error: 'All fields (name, phone, email, message) are required',
          success: false 
        }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          error: "Invalid email format",
          success: false 
        },
        { status: 400 }
      );
    }

    console.log("🤖 Processing ChatBot submission:", { 
      name, 
      email, 
      phone, 
      message: message.length > 50 ? `${message.substring(0, 50)}...` : message
    });

    // 1️⃣ Save to MongoDB
    await connectDB();
    const upload = await ChatBot.create({ name, phone, email, message });

    if (!upload) {
      return NextResponse.json(
        { success: false, message: "Failed to save data" }, 
        { status: 400 }
      );
    }

    console.log("✅ Saved to MongoDB:", upload._id);

    // 2️⃣ Create lead in Zoho CRM
    const zohoLeadData = {
      First_Name: name.split(' ')[0] || name,
      Last_Name: name.split(' ')[1] || name, // Use full name if no space
      Company: "ChatBot Inquiry", // Default company name for chatbot leads
      Email: email,
      Mobile: phone,
      Description: `ChatBot Conversation\n\nMessage: ${message}\n\nThis lead was generated from a ChatBot interaction on the website.`,
      Lead_Source: "ChatBot (website)", // This identifies the source
      // Custom fields - adjust these according to your Zoho CRM setup
      requirement: "ChatBot Support",
      
      // Layout ID - make sure this matches your Zoho CRM layout
      Layout: {
        id: process.env.ZOHO_LAYOUT_ID || "6954861000000091055"
      },

      // Add these mandatory fields only if they exist in your CRM
      // Remove or modify according to your actual CRM fields
      ...(process.env.ZOHO_INCLUDE_CUSTOM_FIELDS === 'true' && {
        Sponser: "Parent",
        Minimum_Salary_is_AED_4000_Per_Month: "Yes",
        Do_you_have_a_tenancy_contract_in_your_name: "No"
      }),

      // Add custom fields for chatbot if they exist in your Zoho CRM
      // Uncomment and modify if you have custom fields
      // Chat_Bot_Session: "Yes",
      // Initial_Message: message.substring(0, 100) // First 100 chars of message
    };

    let zohoResponse = null;
    try {
      zohoResponse = await createZohoLead(zohoLeadData);
      console.log("✅ Zoho CRM integration successful for ChatBot");
    } catch (zohoError) {
      console.error("❌ Zoho CRM integration failed:", zohoError.message);
      // Continue with the response even if Zoho fails
      // You might want to save this error to a queue for retry later
    }

    return NextResponse.json(
      {
        success: true,
        message: "ChatBot submission processed successfully",
        mongoId: upload._id,
        zohoSuccess: !!zohoResponse,
        zohoResponse: zohoResponse || null
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ Error processing ChatBot request:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
        success: false
      }, 
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = (page - 1) * limit;

    const total = await ChatBot.countDocuments();
    const ChatBotResult = await ChatBot.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: ChatBotResult,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error('❌ Error fetching ChatBot data:', error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const data = await req.json();
    const { id } = data;

    if (!id) {
      return NextResponse.json(
        { 
          message: "ID is required", 
          success: false 
        },
        { status: 400 }
      );
    }

    const chatBot = await ChatBot.findByIdAndDelete(id);

    if (!chatBot) {
      return NextResponse.json(
        { 
          message: "ChatBot record not found", 
          success: false 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "ChatBot record deleted successfully",
      data: chatBot
    });

  } catch (error) {
    console.error('❌ Error deleting ChatBot record:', error);
    return NextResponse.json({
      message: "Internal server error",
      error: error.message,
      success: false
    }, { status: 500 });
  }
}