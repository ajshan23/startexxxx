"use client";
import { uploadToCloudinary } from "@/app/(admin)/actions/upload";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { updateToCloudinary } from "@/app/(admin)/actions/update";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import "suneditor/dist/css/suneditor.min.css";
function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [post , setPost] = useState([])
  const {id} = useParams()


  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [heading, setHeading] = useState(null);
  const [tag, setTag] = useState(null);
  const [file, setFile] = useState(null);
  const [temp, setTemp]  = useState("");

  
  
  const handleGetRequest = useCallback(async()=>{
    try {
      // setLoading(true)
      const response = await axios(`/api/get-blog/${id}`);
      setPost(response.data)
      console.log(response.data)
      // setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [id]);

 useEffect(() => {
  handleGetRequest();
  
}, [id]);

const handleFileChnage = (e)=>{
  setFile(e.target.files[0]);
  setTemp(URL.createObjectURL(e.target.files[0]))

}

  const handleSubmit = async (e) => {

    e.preventDefault();
    // if(file == null){
    //   return toast.error("Image is required.");
    // }
    // if(title.length === 0 || description.length == 0 || heading.length == 0 || tag.length == 0){
    //   return toast.error("All fields are required.");
      
    // }

  const formData = new FormData(e.target);
          const response = await updateToCloudinary(formData);
          console.log(response);
          router.push("/admin/blog");
  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-8 space-y-5 w-full max-w-4xl text-gray-300"
      >
        <h2 className="text-2xl font-bold text-orange-500">Edit the BLog Post</h2>
        <p className="text-gray-400">Fill in the details to publish a new post.</p>

        <div>
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={title === null ? post.title : title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title"
            className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
            
           
          />
          {/* {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>} */}
        </div>

        {/* <div>
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            value={description === null ? post.description : description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your blog post description here..."
            className="mt-1 w-full rounded-lg p-3 border border-orange-700 focus:outline-none focus:border-orange-500"
            rows="4"
          
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div> */}

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
              defaultValue={description === null ? post.description : description}
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
              value={heading === null ? post.heading : heading}
              onChange={(e) => setHeading(e.target.value)}
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
              value={tag === null ? post.tag : tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Tag for the post"
              className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
              
            />
            {errors.tag && <p className="text-red-500 text-sm mt-1">{errors.tag}</p>}
          </div>
        </div>
           <input
              type="hidden"
              name="id"
              placeholder="Tag for the post"
              className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
              value={id}
             
            />

        <div>
          <label className="block text-sm font-semibold">Image</label>
          <input
            type="file"
            onChange={(e) =>handleFileChnage(e)}
            accept="image/*"
            name="file"
            className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
          />
           {/* <input
            type="text"
            value={post.image}
            name="image"
            className="mt-1 w-full rounded-lg p-3  border border-orange-700 focus:outline-none focus:border-orange-500"
          /> */}
          <Image  src={temp ? temp : post.image} alt="image" width={150} height={150} />
          {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white rounded-lg py-3 w-full hover:bg-orange-700"
        >
          Submit
        </button>
        <Link href="/admin/blog" className="border border-amber-600 text-white rounded-lg py-3 w-full hover:bg-orange-700">
        <button
          type="submit"
          className=" text-white rounded-lg py-3 w-full hover:bg-orange-700"
        >

          Cancel
        </button>
        </Link>
      </form>
       <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
    </div>
  );
}

export default Page;
