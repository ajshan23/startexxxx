"use client";
import { uploadToCloudinary } from "@/app/(admin)/actions/upload";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import "suneditor/dist/css/suneditor.min.css";

function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const heading = form.heading.value.trim();
    const tag = form.tag.value.trim();
    const file = form.file.files[0];

    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!heading) newErrors.heading = "Heading is required.";
    if (!tag) newErrors.tag = "Tag is required.";
    if (!file) newErrors.file = "Image is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);

    const formData = new FormData(form);
    const response = await uploadToCloudinary(formData);
    console.log(response);
    setLoading(false);
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-8 space-y-5 w-full max-w-4xl text-gray-300"
      >
        <h2 className="text-2xl font-bold text-orange-500">
          Create New Blog Post
        </h2>
        <p className="text-gray-400">
          Fill in the details to publish a new post.
        </p>

        <div>
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog post title"
            className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">Description</label>
          {/* <textarea
            // name="description"
            placeholder="Write your blog post description here..."
            className="mt-1 w-full rounded-lg p-3 border border-orange-700 focus:outline-none focus:border-orange-500"
            rows="4"
          />{" "} */}
          {/* <div className="mt-1 w-full rounded-lg p-3 border border-orange-700 focus-within:border-orange-500 "> */}
            <SunEditor
              setOptions={{
                buttonList: [
                  ["undo", "redo"],
                  ["bold", "italic", "underline", "strike"],
                  ["list", "align", "fontColor", "hiliteColor"],
                  ["link", "codeView"],
                ],
                height: "200px",
              }}
              setDefaultStyle="background-color: black ; color: white; font-size: 16px; border: 1px solid #ffad20" // ✅ Text styling
              placeholder="Write your blog content here..."
              onChange={(content) => console.log(content)}
              name="description"
            />
          {/* </div> */}
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="grid flex md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold">Heading</label>
            <input
              type="text"
              name="heading"
              placeholder="Heading of the post"
              className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
            />
            {errors.heading && (
              <p className="text-red-500 text-sm mt-1">{errors.heading}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Tag</label>
            <input
              type="text"
              name="tag"
              placeholder="Tag for the post"
              className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
            />
            {errors.tag && (
              <p className="text-red-500 text-sm mt-1">{errors.tag}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold">Image</label>
          <input
            type="file"
            accept="image/*"
            name="file"
            className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
          />
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white rounded-lg py-3 w-full hover:bg-orange-700"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Page;
