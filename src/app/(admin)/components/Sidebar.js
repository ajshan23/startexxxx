'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from './main-logo.png'; // Adjust path as needed
import {
  Home,
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Menu,
  FileJson
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import  cookies from 'js-cookie';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
   const router = useRouter(); // ✅ Correct way

  console.log("Current Path:", pathname);
  
  const signOut = ()=>{
    console.log(cookies.remove('token'))
    router.push("/admin")

  }

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-black p-4 flex justify-between items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 border border-gray-700 bg-black text-white flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center py-6">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </div>

          {/* Divider */}
          <hr className="border-gray-700 mx-4" />

          {/* Navigation */}
          <nav className="mt-6 px-4 flex flex-col gap-2 text-sm font-medium">
            <Link href="/admin/blog">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/blog'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <Home size={18} />
                BlogList
              </div>
            </Link>

            <Link href="/admin/blog/new">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/blog/new'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <LayoutDashboard size={18} />
                Create-Blog
              </div>
            </Link>

            <hr className="border-gray-700 mx-4" />

            <Link href="/admin/hiring">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/hiring'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <Users size={18} />
                Careers
              </div>
            </Link>

            <Link href="/admin/hiring/new">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/hiring/new'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <FileText size={18} />
                Hire-Someone
              </div>
            </Link>

            <hr className="border-gray-700 mx-4" />

            <Link href="/admin/form/message">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/form/message'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <FileText size={18} />
                Messages
              </div>
            </Link>

            <Link href="/admin/form/bot-message">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/form/bot-message'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <FileJson size={18} />
                Bot Message
              </div>
            </Link>

            <Link href="/admin/form/consultant">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/form/consultant'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <FileText size={18} />
                Consultant
              </div>
            </Link>

            <Link href="/admin/form/activity">
              <div
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  pathname === '/admin/form/activity'
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-500'
                }`}
              >
                <MessageSquare size={18} />
                Activity
              </div>
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div className="text-center text-xs flex flex-col items-center text-gray-500 gap-y-2.5 pb-4">
         <button onClick={() => signOut()} className='text-grey-500 bg-red-800 py-2 px-4 rounded w-8/12  '>
          logout
         </button>
          © 2025 Startex Hub
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
