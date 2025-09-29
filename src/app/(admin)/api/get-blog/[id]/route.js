import { connectDB } from "@/app/(admin)/config/database";
import BlogModel from "../../../models/Blog-model"
import { NextResponse } from "next/server"
export async function GET(req , { params }) {
  try {
  
    const { id } = await params;
    await connectDB();
    const blog = await BlogModel.findById(id);
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
