"use server";

// import cloudinary from '@/lib/cloudinary';
import fs from "fs/promises";
import path from "path";
import { writeFile } from "fs/promises";
import os from "os";
import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "../config/database";
import BlogModel from "../models/Blog-model";
import { redirect } from "next/navigation";

cloudinary.config({
  cloud_name: "desvgqarv",
  api_key: "145346287342629",
  api_secret: "QKV7NMERDvVo5V9IOr1A0sR51yg",
});

export async function updateToCloudinary(formData) {
  try {
    const title = formData.get("title");
    const file = formData.get("file");
    const tag = formData.get("tag");
    const heading = formData.get("heading");
    const description = formData.get("description");
    const id = formData.get("id");
    console.log(title, file, tag, heading, description, id);
    await connectDB();

    if ( file.size === 0) {
      console.log(tag , heading , description)
      const updateToDatabse = await BlogModel.findByIdAndUpdate(id, {
        title,
        description,
        tag,
        heading,
        date: new Date(),
      });

      console.log(updateToDatabse);
      return {
        title,
      };
    } else {
      // 🔴 Limit: 5MB
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        return { error: "File size exceeds 5MB limit." };
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tmpPath = path.join(os.tmpdir(), file.name);
      await writeFile(tmpPath, buffer);

      const result = await cloudinary.uploader.upload(tmpPath);

      const updateToDatabse = await BlogModel.findByIdAndUpdate(id, {
        title,
        description,
        tag,
        heading,
        image: result.secure_url,
        date: new Date(),
      });

      console.log(updateToDatabse);
      return {
        title,
        imageUrl: result.secure_url,
      };
    }
  } catch (err) {
    console.error("Cloudinary error:", err);
    return { error: "Upload failed" };
  }
}

export default updateToCloudinary;