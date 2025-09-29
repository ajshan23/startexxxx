'use client'

import React from "react";
import PricingCards from "./PricingCards";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function VisaPackages() {
  return (
    <motion.div
      className="pt-10 items-center px-4 md:px-8 lg:px-[90px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-gradient md:text-[50px] text-[27px] text-center"
        variants={titleVariants}
      >
        Visa Packages
      </motion.h2>
      <PricingCards />
    </motion.div>
  );
}

export default VisaPackages;
