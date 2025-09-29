"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./main-logo.png"; // Ensure this is the correct path
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    Cookies.set("token", response.data.token);

    if (response.data.success) {
      router.push("/admin/blog");
    } else {
      toast.error("Login failed");
    }

  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error("Email or Password is Incorrect");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-red-950 to-red-800 w-full max-w-lg">
        <div className="bg-black rounded-xl p-8 sm:p-10 flex flex-col items-center">
          {/* Logo */}
          <Image
            src={logo}
            alt="Startex Logo"
            width={140}
            height={140}
            className="mb-4"
          />

          {/* Admin Login Heading */}
          <h2 className="text-2xl font-semibold text-orange-400 mb-6 text-center">
            STARTEX ADMIN LOGIN
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div>
              <label className="block text-orange-300 mb-1">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-orange-300 mb-1">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
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
};

export default Login;
