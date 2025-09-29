"use client"
import Image from "next/image";
import React from "react";
import SetubVideoBg from "../../../public/assets/images/services/trade.webp";
import YtpIcon from "../../../public/assets/images/guide/ytp.webp";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const overlayContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3
        }
    }
};

const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: "backOut"
        }
    }
};

function VideoPackage() {
  const handleVideoClick = () => {
    window.open('https://youtube.com', '_blank');
  };

  return (
    <motion.div 
      className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={titleVariants}>
        <h3 className="text-gradient md:text-[50px] text-[27px] text-center">
          How to get our Exclusive Investor Visa Package
        </h3>
      </motion.div>

      <motion.div 
        className="pt-10 relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        variants={videoContainerVariants}
        onClick={handleVideoClick}
      >
        <Image
          src={SetubVideoBg}
          alt="SetubVideoBg"
          width={1000}
          height={1000}
          className="w-full md:h-[500px] h-[300px] rounded-[15px] object-cover"
        />

        <motion.div 
          className="absolute md:top-0 top-3 left-0 w-full h-full flex flex-col justify-center items-center"
          variants={overlayContentVariants}
        >
          <motion.div variants={iconVariants}>
            <Image
              src={YtpIcon}
              alt="YtpIcon"
              width={200}
              height={200}
              className="md:w-[70px] w-[40px] h-[40px] md:h-[70px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default VideoPackage;
