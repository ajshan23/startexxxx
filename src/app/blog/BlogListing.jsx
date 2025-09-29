"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../public/assets/images/about/b1.webp"; // fallback image

function BlogListing() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://startex-admin.vercel.app/api/get-blog"
        );
        console.log("API Response:", response);

        if (response.status === 200 && Array.isArray(response.data)) {
          setBlogPosts(response.data); // use the direct array
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-white py-10">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="pt-10 px-4 md:px-8 lg:px-[90px]">
      <h4 className="md:text-[35px] text-[20px] font-[500] text-gradient">
        Recent Blog Posts
      </h4>

      <div className="flex flex-wrap gap-6 pt-10 pb-10">
        {blogPosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._id}`}
            className="md:w-[32%] w-full block group"
          >
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-[#00000079] border-amber-700 border py-1 px-3 rounded-md w-fit absolute top-5 right-5 z-50">
                <p className="text-white text-sm">{post.tag}</p>
              </div>
            </div>

            <h3 className="text-white text-[20px] font-[400] pt-5 group-hover:text-amber-400 transition-colors truncate">
              {post.title}
            </h3>
            <p className="text-[16px] font-[300] pt-3 text-white">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogListing;
