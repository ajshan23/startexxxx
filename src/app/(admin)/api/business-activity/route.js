import { NextResponse } from "next/server";
import { connectDB } from "../../config/database";
import ActivityModel from "../../models/Activity-model";
import { createZohoLead } from "@/app/lib/zoho";

export async function POST(req) {
  try {
    const data = await req.json();
    const { Name, Email, Message, Phone, Activity, Details ,lastName} = data;

    // Validate required fields
    if (!Name || !Email || !Message || !Phone || !Activity || !Details, !lastName) {
      return NextResponse.json(
        { message: "All fields (Name, Email, Message, Phone, Activity, Details) are required", success: false },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return NextResponse.json(
        { message: "Invalid email format", success: false },
        { status: 400 }
      );
    }

    console.log("📊 Processing cost calculator submission:", { 
      Name, 
      Email, 
      Phone, 
      Activity, 
      Details: Details ? 'Present' : 'Not provided' ,
      lastName
    });

    // 1️⃣ Save to MongoDB
    await connectDB();
    const activity = await ActivityModel.create({
      name: Name,
      email: Email,
      message: Message,
      phone: Phone,
      activity: Activity,
      details: Details
    });
    console.log("✅ Saved to MongoDB:", activity._id);

    // 2️⃣ Create lead in Zoho CRM
    const zohoLeadData = {
      First_Name:Name,
      Last_Name: lastName, 
      Company: Activity || "Cost Calculator Inquiry", // Use activity as company
      Email: Email,
      Mobile: Phone,
      Description: `${Message}\n\nActivity: ${Activity}\n\nDetails: ${JSON.stringify(Details, null, 2)}`,
      Lead_Source: "Cost Calculator (website)", // This is the key difference
      // Custom fields - adjust these according to your Zoho CRM setup
      requirement: Activity,
      
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
      })
    };

    let zohoResponse = null;
    try {
      zohoResponse = await createZohoLead(zohoLeadData);
      console.log("✅ Zoho CRM integration successful for cost calculator");
    } catch (zohoError) {
      console.error("❌ Zoho CRM integration failed:", zohoError.message);
      // Continue with the response even if Zoho fails
      // You might want to save this error to a queue for retry later
    }

    return NextResponse.json(
      {
        message: "Cost calculator form submitted successfully",
        success: true,
        mongoId: activity._id,
        zohoSuccess: !!zohoResponse,
        zohoResponse: zohoResponse || null
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
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
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const skip = (page - 1) * limit;

    const [activities, total] = await Promise.all([
      ActivityModel.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      ActivityModel.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      data: activities,
      total,
      page,
      limit,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
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
    const activity = await ActivityModel.findByIdAndDelete(id);
    return NextResponse.json(activity);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server error",
      error: error.message,
      success: false
    }, { status: 500 });
  }
}