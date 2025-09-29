"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [heading, setHeading] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({ heading: "", description: "", location: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors= {};
    if (!heading.trim()) newErrors.heading = "Heading is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!location.trim()) newErrors.location = "Location is required.";
    if (!type.trim()) newErrors.type = "Type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      const response = await axios("/api/hiring", {
        method: "POST",
        data: {
          Heading: heading,
          Description: description,
          Location: location,
          Type: type,
        },
      });
      console.log(response.data);
      // Reset fields
      setHeading("");
      setDescription("");
      setLocation("");
      setType("");
      setErrors({ heading: "", description: "", location: "", type: "" });
      // router.push('/');
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-8 space-y-5 w-full max-w-4xl text-gray-300"
      >
        <h2 className="text-2xl font-bold text-orange-500">Create Hiring</h2>
        <p className="text-gray-400">Fill in the details to publish .</p>

        <div>
          <label className="block text-sm font-semibold">Heading</label>
          <input
            type="text"
            placeholder="Enter Job title"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className={`mt-1 w-full rounded-lg p-3 border ${
              errors.heading ? "border-red-600" : "border-orange-700"
            } focus:outline-none focus:border-orange-500`}
          />
          {errors.heading && <p className="text-red-500 text-sm mt-1">{errors.heading}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            placeholder="Write your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`mt-1 w-full rounded-lg p-3 border ${
              errors.description ? "border-red-600" : "border-orange-700"
            } focus:outline-none focus:border-orange-500`}
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="grid flex md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold">Location</label>
            <input
              type="text"
              placeholder="Location of the post"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`mt-1 w-full rounded-lg p-3 border ${
                errors.location ? "border-red-600" : "border-orange-700"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Type</label>
            <input
              type="text"
              placeholder="Type of Post"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`mt-1 w-full rounded-lg p-3 border ${
                errors.type ? "border-red-600" : "border-orange-700"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-orange-600 text-white rounded-lg py-3 w-full hover:bg-orange-700 
            ${isSubmitting && "opacity-50 cursor-not-allowed"}`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Page;

