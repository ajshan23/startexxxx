"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import banner1 from "../../../public/assets/images/home/banner-1.png";
import banner2 from "../../../public/assets/images/home/banner-2.png";
import banner3 from "../../../public/assets/images/home/banner-3.png";
import banner4 from "../../../public/assets/images/home/banner-4.png";

import { motion, AnimatePresence } from "framer-motion";
import ConsultantModal from "./ConsultantModal";

const tabs = [
  {
    name: "Restaurant",
    image: banner1,
    title: "Want to Setup",
    highlight: "Resturant in Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-first",
  },
  {
    name: "Industrial",
    image: banner2,
    title: "Looking for an",
    highlight: "Industrial License in Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-second",
  },
  {
    name: "Ecommerce",
    image: banner3,
    title: "Register an",
    highlight: "E-commerce License in Dubai",
    cta: "Schedule Meet",
    bgColor: "bg-third",
  },
  {
    name: "Fruits Trading",
    image: banner4,
    title: "Want to Export",
    highlight: "Fruits from Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-fourth",
  },
];

const getNext7Days = () => {
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    return {
      date: String(nextDate.getDate()).padStart(2, "0"),
      day: weekdays[nextDate.getDay()],
      fullDate: nextDate.toISOString().split("T")[0],
    };
  });
};

export default function BusinessTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const days = useMemo(() => getNext7Days(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(days[0].fullDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.name === prevTab.name);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className=" pe-0 rounded-2xl text-white w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative flex items-center justify-between p-6 pb-0 pt-0 pe-0">
          <div className="w-full md:mt-[-36px]">
            {/* AnimatePresence around image and card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.8,          // slower transition
                  ease: "easeInOut",      // smoother easing
                }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="md:w-[90%] h-full"
                >
                  <Image
                    src={activeTab.image}
                    alt={activeTab.name}
                    width={1000}
                    height={1000}
                    className="rounded-[18px] w-full h-full object-contain"
                    priority
                  />
                </motion.div>

                <div
                  className={`absolute md:top-10 card-b right-4 text-white p-4 rounded-xl shadow-lg md:w-56 transition-all duration-500 ${activeTab.bgColor}`}
                >
                  <p className="md:text-[15px] text-[12px] font-[300]">{activeTab.title}</p>
                  <h4 className="md:font-bold text-[14px]">{activeTab.highlight}</h4>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedDate([
                        new Date().getFullYear(),
                        String(new Date().getMonth() + 1).padStart(2, '0'),
                        String(new Date().getDate()).padStart(2, '0')
                      ].join('-'));
                    }}
                    className="mt-3 banner-sc px-4 py-1 rounded-full md:text-[14px] text-[12px] font-[300]"
                  >
                    {activeTab.cta}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tabs */}
        <div className="md:flex md:gap-4 gap-2 justify-center banner-tab mb-6 mt-0 md:mt-[-15px]">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab)}
              className={`md:px-4 px-2 py-2 md:rounded-full rounded-[10px] text-sm transition ${activeTab.name === tab.name
                  ? "bg-[#2b2b2b] text-white font-semibold "
                  : "bg-transparent text-[14px]"
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <ConsultantModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </motion.div>
    </div>
  );
}
