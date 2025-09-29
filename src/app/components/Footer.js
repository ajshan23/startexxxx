import Image from "next/image";
import Logo from "../../../public/assets/images/main-logo.webp";
import watermark from "../../../public/assets/images/home/start.png";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import ChatbotButton from "./ChatbotButton";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import CostCalculator from "./CostCalculator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-2 relative overflow-hidden">
      {/* Top Section */}
      <div className=" px-4 md:px-8 lg:px-[90px]  mx-auto flex flex-col md:flex-row md:justify-between md:items-start  pb-8 mb-8">
        {/* Logo and Contact */}
        <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col gap-4">
          <div className="min-w-[250px]"> {/* Added min-width to ensure logo area doesn't shrink too much */}
            <Image src={Logo} alt="Startex Hub" width={250} height={40} priority className=" main-Logo" />
          </div>
        </div>
        {/* Contact, Hours, Social (aligned to match the image layout) */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Get in Touch */}
          <div className="text-white text-sm">
            <div className="font-[200] text-[14px] mb-2">Get in Touch</div>
            <div className="mb-3 font-[300] text-[15px]">+971509119224</div>
            <div className="mb-3 font-[300] text-[15px]">info@startexhub.com</div>
            <div className="font-[300] text-[15px] leading-snug mt-3">
             Office# 610, Al Moosa Tower 1, Sheikh Zayed Rd, Opp- Emirates Tower, Near- Future Museum

            </div>
          </div>
          {/* Working Hours */}
          <div className="text-white text-sm">
            <div className="font-[200] text-[14px] mb-2">Working Hours</div>
            <div className="mb-3 font-[300] text-[16px]">Monday to Friday – 9:00 AM to 6:00 PM</div>
            <div className="mb-3 font-[300] text-[16px]">Saturday – 12:00 PM to 4:00 PM</div>
          </div>
          {/* Social */}
          <div className="flex flex-col items-start">
            <div className="font-[200] text-[14px] mb-2">Connect with us on Social Networks</div>
            <div className="flex gap-4 items-center">
              <Link href="https://www.facebook.com/startexhub" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
                <FaFacebookF size={22} />
              </Link>
              <Link href="https://www.instagram.com/startex_hub/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
                <FaInstagram size={22} />
              </Link>
              <Link href="https://www.linkedin.com/company/startex-hub" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition">
                <FaLinkedinIn size={22} />
              </Link>
              <Link href="https://www.youtube.com/@StartexHub" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition">
                <FaYoutube size={22} />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Section (Links) */}
      <div className=" px-4 md:px-8 lg:px-[90px] mx-auto  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm mb-8">
        <div>
          <div className="font-[200] text-[14px] mb-2">Company</div>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:underline ">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-[200] text-[14px] mb-2">Licensing</div>
          <ul className="space-y-3">
            <li><Link href="/business-license/mainland-license" className="hover:underline">Mainland License</Link></li>
            <li><Link href="/business-license/freezone-license" className="hover:underline">Free Zone License</Link></li>
            <li><Link href="/business-license/offshore-license" className="hover:underline">Offshore License</Link></li>
          </ul>
        </div>
        {/* <div>
            <div className="font-[200] text-[14px] mb-2">Guide</div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Where</a></li>
              <li><a href="#" className="hover:underline">How</a></li>
              <li><a href="#" className="hover:underline">Why</a></li>
            </ul>
          </div> */}
        <div>
          <div className="font-[200] text-[14px] mb-2">Service</div>
          <ul className="space-y-3">
            <li><Link href="/services/trademark-registration" className="hover:underline">Trade Service</Link></li>
            <li><Link href="/services/open-bank-account" className="hover:underline">Open Bank Account</Link></li>
            <li><Link href="/services/company-liquidation" className="hover:underline">Company Liquidation</Link></li>
            <li><Link href="/services/pro-services" className="hover:underline">Pro Services</Link></li>
            <li><Link href="/services/brand-protection" className="hover:underline">Brand Protection</Link></li>
            <li><Link href="/services/sponsorship-services" className="hover:underline">UAE National Sponsorship</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-[200] text-[14px] mb-2">Workspace</div>
          <ul className="space-y-3">
            <li><Link href="/workspace/business-center" className="hover:underline">Business Center</Link></li>
            <li><Link href="/workspace/virtual-office" className="hover:underline">Virtual Office</Link></li>
            <li><Link href="/workspace/flexi-desk" className="hover:underline">Flexi Desks</Link></li>
            <li><Link href="/workspace/rent-cabin" className="hover:underline">Rent a Cabin</Link></li>

          </ul>
        </div>
        <div>
          <div className="font-[200] text-[14px] mb-2">Accounting</div>
          <ul className="space-y-3">
            <li><Link href="/accounting/vat-registration" className="hover:underline">VAT Registration</Link></li>
            <li><Link href="/accounting/accounting-book-keeping  " className="hover:underline">Accounting & Bookkeeping</Link></li>
            <li><Link href="/accounting/auditing-services" className="hover:underline">Auditing services</Link></li>
            <li><Link href="/accounting/vat-return" className="hover:underline">VAT Return Filing</Link></li>
            <li><Link href="/accounting/cfo-services" className="hover:underline">CFO Services</Link></li>
          </ul>
        </div>
        <div> {/* Added Visa section */}
          <div className="font-[200] text-[14px] mb-2">Visa</div>
          <ul className="space-y-3">
            <li><Link href="/visa/dubai-investor" className="hover:underline">Dubai Investors Visa</Link></li>
            <li><Link href="/visa/business" className="hover:underline">Business Visa</Link></li>
            <li><Link href="/visa/tourist" className="hover:underline">Tourist Visa</Link></li>
            <li><Link href="/visa/freelance" className="hover:underline">Freelance Visa</Link></li>
            <li><Link href="/visa/family" className="hover:underline">Family Visa</Link></li>
            <li><Link href="/visa/maid" className="hover:underline">Maid Visa</Link></li>
            <li><Link href="/visa/work-visa" className="hover:underline">Work Visa</Link></li>
            <li><Link href="/visa/investor" className="hover:underline">Investor Visa</Link></li>
          </ul>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute left-0 right-0 bottom-12 flex justify-center pointer-events-none select-none ">
        <div className="px-4 md:px-8 lg:px-[90px] w-full">
        <Image src={watermark} alt="Watermark" width={1000} height={1000} className="opacity-100 w-full " />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-8 lg:px-[90px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-3 mt-8 text-xs">
        <div>
          © Copyright 2025 Startex Hub, All Rights Reserved
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0"> {/* Increased gap slightly */}
          {/* Assumed powered icon path */}
          {/* <Image src="/powered-icon.svg" alt="Powered" width={16} height={16} /> */}
          <Link href="/terms-and-condition" className="hover:underline">Terms and Conditions</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>

      <div>
        <WhatsAppButton />
        <CallButton />

<div>
  
</div>
        
        <ChatbotButton />

              <CostCalculator />
      </div>

    </footer>
  );
}