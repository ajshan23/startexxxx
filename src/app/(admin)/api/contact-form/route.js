import { NextResponse } from "next/server";
import { connectDB } from "../../config/database";
import Form from "../../models/Form-model";
import { createZohoLead } from "@/app/lib/zoho";



export async function POST(req) {
  try {
    const data = await req.json();
    const { Name, Message, Email, Phone, Requirement,lastName } = data;
    console.log("hi",data);
    
    // Validate required fields
    if (!Name || !Message || !Email || !Phone|| !lastName) {
      return NextResponse.json(
        { message: "All fields (Name, Message, Email, Phone) are required", success: false },
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

    console.log("📝 Processing form submission:", { Name, Email, Phone, Requirement: Requirement || 'Not specified' });

    // 1️⃣ Save to MongoDB
    await connectDB();
    const formUpload = await Form.create({
      name: Name,
      message: Message,
      email: Email,
      phone: Phone,
      requirement: Requirement,
    });
    console.log("✅ Saved to MongoDB:", formUpload._id);

    // 2️⃣ Create lead in Zoho CRM
    const zohoLeadData = {
      First_Name:Name,
      Last_Name:lastName, // Use full name if no space
      Company: Requirement || "Web Inquiry", // Use requirement or default
      Email: Email,
      Mobile: Phone,
      Description: Message,
      Lead_Source: "Website Form (website)",
      // Custom fields - adjust these according to your Zoho CRM setup
      requirement: Requirement || "General Inquiry",

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
      console.log("✅ Zoho CRM integration successful");
    } catch (zohoError) {
      console.error("❌ Zoho CRM integration failed:", zohoError.message);
      // Continue with the response even if Zoho fails
      // You might want to save this error to a queue for retry later
    }

    return NextResponse.json(
      {
        message: "Form submitted successfully",
        success: true,
        mongoId: formUpload._id,
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