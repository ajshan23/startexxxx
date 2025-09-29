import { connectDB } from "../../config/database";
import BlogModel from "../../models/Blog-model"


export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    const total = await BlogModel.countDocuments(); // total blogs
    const blogPosts = await BlogModel.find()
      .skip(skip)
      .limit(limit).sort({ createdAt: -1 });

    return Response.json({
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: blogPosts,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
