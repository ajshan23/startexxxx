import React, { useState } from 'react';
import { Call, RightArrow, WhatsApp } from './Icons';
import ScAasset from "../../../public/assets/images/home/asset-1.svg";
import chatAsset from "../../../public/assets/images/chat.png";
import Image from 'next/image';
import ChatbotButton from './ChatbotButton';
import Chat from './Chat';
import { motion } from 'framer-motion';
import Link from 'next/link';

function ScheduleChat() {
  const [isChatOpen, setIsChatOpen] = useState(false); // state to control chatbot open/close
    const phoneNumber = '+971509119224'; // your WhatsApp number
      const phoneNumber2 = '+971509119224'; // your WhatsApp number
  const message = encodeURIComponent('Hello! I would like to chat.');

  return (
    <div>
      <div className="bg-white text-black py-6 px-10 rounded-xl relative z-10">
        <div>
          <h4 className="md:text-[27px] text-[18px] font-[700]">
            Hurry? Get Support Right <br className='md:bloxk hidden' /> Away!
          </h4>
          <p className="md:text-[14px] text-[12px] pt-3 ">
            Short on time? Call us or chat with us on WhatsApp instantly.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-5">
           <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Link
          href={`https://wa.me/${phoneNumber2}?text=${encodeURIComponent(message)}`}
          className="wtsp-btn flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg"
        >
          <WhatsApp />
        </Link>
      </motion.div>

      {/* Call button with pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Link
          href={`tel:${phoneNumber}`}
          className="call-btn flex items-center justify-center w-12 h-12 rounded-full  text-white shadow-lg"
        >
          <Call />
        </Link>
      </motion.div>
          <div className='ms-auto'>
            <button
  onClick={() => setIsChatOpen(true)}
  className="bg-[#221D23] text-white md:w-[230px] px-3 py-3 rounded-[6px] md:text-[17px] text-[12px] flex justify-between items-center font-[300] relative 
             transition-transform duration-300 ease-in-out hover:scale-105"
>
  Chat Now
  <span className="ps-2 transition-transform duration-300 group-hover:translate-x-1">
    <RightArrow />
  </span>
  <Image
    src={chatAsset}
    alt="asset"
    width={500}
    height={500}
    className="absolute bottom-[-14px] left-[10px] w-[12px] h-[15px] z-50"
  />
</button>
          </div>
        </div>
        <div>
          <Image
            src={ScAasset}
            alt="asset"
            width={1000}
            height={1000}
            className="absolute top-0 left-[-10px] w-[25px] h-full"
          />
        </div>
      </div>

      {/* Chatbot Component Rendered */}
      <Chat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}

export default ScheduleChat;
