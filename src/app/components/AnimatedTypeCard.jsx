"use client";
import React, { useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TitleCard = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    ref.current.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative md:min-h-90 min-h-80 rounded-xl title-card-3d"
    >
      <div className="absolute inset-4 grid place-content-center rounded-xl grid-cols-[83%] md:grid-cols-[80%] grid-rows-[83%] md:grid-rows-[80%] title-card-inner">
        {children}
      </div>
    </div>
  );
};

export default TitleCard;