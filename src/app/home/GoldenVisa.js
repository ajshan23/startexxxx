'use client';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PopupForm from '../components/PopupForm';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom * 0.2,
    },
  }),
};

function GoldenVisa() {
  const playerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      const player = playerRef.current;
      if (player && player.getInternalPlayer) {
        const internal = player.getInternalPlayer();
        if (internal && internal.play) {
          internal.play().catch(() => {
            // Autoplay blocked
          });
        }
      }
    };
    tryPlay();
  }, []);

  return (
    <div ref={sectionRef} className='px-4 md:px-8 lg:px-[90px] md:py-20 py-10 bg-black'>
      <motion.h6
        className='text-secondary font-[300] md:text-[18px] text-[16px] text-center'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        Premium service
      </motion.h6>

      <motion.h2
        className='md:text-[55px] text-[30px] font-[600] pt-5 bg-gradient-to-r from-[#EB7C06] to-[#FEDC66] bg-clip-text text-transparent text-center'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
      >
        GOLDEN VISA
      </motion.h2>

      <motion.div
        className="w-full p-5"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={2}
      >
        <ReactPlayer
          ref={playerRef}
          url="/assets/images/home/golden2.mp4"
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="100%"
          playsinline={true}
          className="md:!h-[400px] !h-[180px]"
        />
      </motion.div>

      <motion.h4
        className='text-secondary text-center font-[300] md:text-[22px] text-[18px]'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={3}
      >
        The golden privilege to premium residents
      </motion.h4>

      <motion.div
        className='text-center'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={4}
      >
        <button className="gr-btn mt-8 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" onClick={() => setIsPopupOpen(true)}>
          Apply Now
        </button>
      </motion.div>

      {isPopupOpen && (
        <PopupForm
          onClose={() => setIsPopupOpen(false)}
          activity="Golden Visa Application"
        />
      )}
    </div>
  );
}

export default GoldenVisa;
