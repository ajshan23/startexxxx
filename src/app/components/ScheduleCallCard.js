'use client';
import { useRef, useState, useMemo } from 'react';
import { motion, useInView } from "framer-motion";
import ConsultantModal from './ConsultantModal';

// Utility to get array of next 7 days including today
const getNext7Days = () => {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    return {
      date: String(nextDate.getDate()).padStart(2, '0'),
      day: weekdays[nextDate.getDay()],
      fullDate: [
        nextDate.getFullYear(),
        String(nextDate.getMonth() + 1).padStart(2, '0'),
        String(nextDate.getDate()).padStart(2, '0')
      ].join('-'),
    };
  });
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


export default function ScheduleCallCard() {
  const days = useMemo(() => getNext7Days(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(days[0].fullDate); // use ISO date string
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative z-10 w-full md:w-[40%] mb-10 md:mb-0"
    >
      {/* Background skew box */}
      <div className="absolute top-0 left-0 w-full h-full skew-box custom-gradient-bg -z-10 rounded-2xl"></div>

      <div className="custom-gradient-bg border border-[#6E6E6E] rounded-2xl px-6 py-8 shadow-lg relative z-20 md:pt-20 pb-10">
        <h2 className="text-[25px] md:text-[35px] font-medium mb-3">Schedule a <br className='hidden md:block' /> Call</h2>
        <p className="text-sm text-gray-300 mb-6">
          Set up a convenient time to speak with our expert consultant and get the personalized assistance you need.
        </p>

        {/* Date Selector */}
        <div className="flex  gap-1 md:mb-6">
          {days.map((d) => (
           <div
  key={d.fullDate}
  onClick={() => setSelectedDate(d.fullDate)}
  className={`cursor-pointer w-12 h-14 flex flex-col items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out
    ${
      selectedDate === d.fullDate
        ? 'bg-white text-[#FC5A5A] border-2 border-[#FC5A5A]'
        : 'text-gray-400 hover:bg-white hover:text-[#FC5A5A] hover:border-2 hover:border-[#FC5A5A]'
    }`}
>
  <span>{d.date}</span>
  <span>{d.day}</span>
</div>
          ))}
        </div>

        {/* Schedule Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#564A5A] hover:bg-[#6d5d95] mt-4 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-between px-4"
        >
          Schedule meeting
          <span className="ml-2 text-lg">›</span>
        </button>

        <ConsultantModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </motion.div>
  );
}
