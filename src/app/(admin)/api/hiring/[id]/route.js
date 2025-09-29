import { connectDB } from "@/app/(admin)/config/database";
import Hiring from "@/app/(admin)/models/Hiring-model";
import { NextResponse } from "next/server";

export async function GET (req ,{ params }){
    try {
        await connectDB();
        // const data = await req.json();
         const { id } = await params;
         console.log(id , "============")
          

        const hiring = await Hiring.findById(id)
        console.log(hiring)
        return NextResponse.json(hiring);

    } catch (error) {
           console.log(error.message)
         return NextResponse.json({
            success : false,
            message : error.message
        });
        
    }
}