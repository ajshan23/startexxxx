import { NextResponse } from "next/server";
import { connectDB } from "../../config/database";
import Hiring from "../../models/Hiring-model";


export async function POST (req){
    try {
        const data = await req.json();
        const { Heading, Description , Type , Location} = data
        if(!Heading || !Description || !Type || !Location){
            return NextResponse.json({message:"All fields are required"},{status:400});
        }
        await connectDB();
        const hiring = await Hiring.create({Heading,Description,Type,Location})
        return NextResponse.json({
            success : true,
            message : "succesFully uploaded "
        });
        
    } catch (error) {
        console.log(error.message)
         return NextResponse.json({
            success : false,
            message : "Internal server error"
        });
    }
} 



export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 5;

    const skip = (page - 1) * limit;

    const hiring = await Hiring.find().skip(skip).limit(limit);
    const total = await Hiring.countDocuments();

    return NextResponse.json({
      success: true,
      posts: hiring,
      total,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}


export async function DELETE(req){
    try {
        await connectDB();
        const data = await req.json();
        const {id} = data
        const hiring = await Hiring.findByIdAndDelete(id);
        return NextResponse.json({
            success : true,
            message : "succesFully deleted "
        });
        
    } catch (error) {
        console.log(error.message)
         return NextResponse.json({
            success : false,
            message : "Internal server error"
        });
    }
}

export async function PUT (req){
    try {
        await connectDB();
        const data = await req.json();
          const { Heading, Description , Type , Location , id} = data
        if(!Heading || !Description || !Type || !Location){
            return NextResponse.json({message:"All fields are required"},{status:400});
        }

        const hiring = await Hiring.findByIdAndUpdate(id,{Heading,Description,Type,Location});
        return NextResponse.json({
            success : true,
            message : "succesFully updated "
        });

    } catch (error) {
           console.log(error.message)
         return NextResponse.json({
            success : false,
            message : error.message
        });
        
    }
}

