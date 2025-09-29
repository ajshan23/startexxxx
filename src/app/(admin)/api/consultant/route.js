import { NextResponse } from "next/server";
import { connectDB } from "../../config/database";
import ConsultantModel from "../../models/Consultant-model";
import { createZohoLead } from "@/app/lib/zoho";

export async function POST(req) {
  try {
    const data = await req.json();
    const { Name, Email, Consultant, Phone, date } = data;

    // Validate required fields
    if (!Name || !Email || !Consultant || !Phone || !date) {
      return NextResponse.json(
        { message: "All fields (Name, Email, Consultant, Phone, Date) are required", success: false },
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

    // Validate date format (basic check)
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return NextResponse.json(
        { message: "Invalid date format", success: false },
        { status: 400 }
      );
    }

    console.log("🗓️ Processing consultant booking:", { 
      Name, 
      Email, 
      Phone, 
      Consultant,
      Date: Date
    });

    // 1️⃣ Save to MongoDB
    await connectDB();
    const consultant = await ConsultantModel.create({
      name: Name,
      email: Email,
      consultant: Consultant,
      phone: Phone,
      date: date
    });
    console.log("✅ Saved to MongoDB:", consultant._id);

    // 2️⃣ Create lead in Zoho CRM
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const zohoLeadData = {
      First_Name: Name.split(' ')[0] || Name,
      Last_Name: Name.split(' ').slice(1).join(' ') || Name, // Use full name if no space
      Company: `${Consultant} Consultation`, // Use consultant type as company
      Email: Email,
      Mobile: Phone,
      Description: `Consultant Booking Request\n\nConsultant Type: ${Consultant}\nRequested Date: ${formattedDate}\n\nThis lead was generated from a consultant booking form.`,
      Lead_Source: "Consultant Booking (website)", // This identifies the source
      // Custom fields - adjust these according to your Zoho CRM setup
      requirement: `${Consultant} Consultation`,
      
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

      // Add custom field for appointment date if it exists in your Zoho CRM
      // Uncomment and modify if you have a custom date field
      // Appointment_Date: Date,
      // Consultant_Type: Consultant
    };

    let zohoResponse = null;
    try {
      zohoResponse = await createZohoLead(zohoLeadData);
      console.log("✅ Zoho CRM integration successful for consultant booking");
    } catch (zohoError) {
      console.error("❌ Zoho CRM integration failed:", zohoError.message);
      // Continue with the response even if Zoho fails
      // You might want to save this error to a queue for retry later
    }

    return NextResponse.json(
      {
        message: "Consultant booking submitted successfully",
        success: true,
        mongoId: consultant._id,
        zohoSuccess: !!zohoResponse,
        zohoResponse: zohoResponse || null,
        bookingDetails: {
          consultant: Consultant,
          date: formattedDate
        }
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

export async function DELETE(req) {
  try {
    await connectDB();
    const data = await req.json();
    const { id } = data;
    
    if (!id) {
      return NextResponse.json(
        { message: "ID is required", success: false },
        { status: 400 }
      );
    }

    const consultant = await ConsultantModel.findByIdAndDelete(id);
    
    if (!consultant) {
      return NextResponse.json(
        { message: "Consultant booking not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Consultant booking deleted successfully",
      data: consultant
    });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server error",
      error: error.message,
      success: false
    }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      ConsultantModel.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      ConsultantModel.countDocuments(),
    ]);

    return NextResponse.json({
      data,
      total,
      page,
      limit,
      success: true,
    });
    
  } catch (error) {
    console.error(error.message);
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