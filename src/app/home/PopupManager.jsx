"use client";
import { useState, useEffect } from "react";
import PopupForm from "../components/PopupForm";

export default function PopupManager() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return showPopup ? <PopupForm onClose={() => setShowPopup(false)} /> : null;
}