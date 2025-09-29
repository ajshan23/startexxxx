"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chat = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 How can I help you?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const chatRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Reset chat when reopened
  useEffect(() => {
    if (isOpen) {
      setMessages([{ sender: "bot", text: "Hi there! 👋 How can I help you?" }]);
      setStep(0);
    }
  }, [isOpen]);

  // Prevent page scroll when chat is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", text: inputValue };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let botReply = "";

      if (step === 0) {
        botReply = "Thank you for reaching out. May I kindly have your name to proceed?";
        setStep(1);
      } else if (step === 1) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(inputValue)) {
          botReply = "Please enter a valid name (letters only).";
        } else {
          setFormData(prev => ({ ...prev, name: inputValue }));
          botReply = "Please enter your phone number.";
          setStep(2);
        }
      } else if (step === 2) {
        const phoneRegex = /^([6-9]\d{9}|5\d{8})$/;
        if (!phoneRegex.test(inputValue)) {
          botReply = "Please enter a valid phone number.";
        } else {
          setFormData(prev => ({ ...prev, phone: inputValue }));
          botReply = "Enter your email address.";
          setStep(3);
        }
      } else if (step === 3) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValue)) {
          botReply = "Please enter a valid email address.";
        } else {
          setFormData(prev => ({ ...prev, email: inputValue }));
          botReply = "Any message you would like to share?";
          setStep(4);
        }
      } else if (step === 4) {
        if (inputValue.length < 5) {
          botReply = "Please enter a message (at least 5 characters).";
        } else {
          const finalData = { ...formData, message: inputValue };
          setFormData(finalData);
          botReply = "Thank you! We will contact you soon. 😊";
          setStep(5);

          // Submit to backend
          fetch("/api/chat-bot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalData)
          })
            .then(res => res.json())
            .then(data => {
              console.log("Chatbot submission:", data);
            })
            .catch(err => {
              console.error("Chatbot error:", err);
            });
        }
      } else {
        botReply = "Conversation completed. Refresh to start again.";
      }

      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    }, 500);

    setInputValue("");
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));
  
    return () => {
      window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chatbox"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-24 right-5 z-[1000] flex items-center justify-center"
        >
          <div className="fixed bottom-40 md:right-20 right-5 w-[350px] max-w-[90vw] bg-[#f0f0f0] rounded-[10px] shadow-lg flex flex-col overflow-hidden z-[1001]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff572f] to-[#ffad20] text-white p-2 font-bold text-center flex justify-between items-center">
              <span>Chat with us</span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="p-2 max-h-[300px] min-h-[300px] overflow-y-auto flex flex-col gap-2 bg-[#e5ddd5] scroll-smooth"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`p-2 rounded-[10px] max-w-[70%] text-[14px] break-words ${
                    msg.sender === "bot"
                      ? "bg-white self-start rounded-tl-none text-black"
                      : "bg-[#dcf8c6] self-end rounded-tr-none text-black"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-2 bg-[#f0f0f0]">
              <input
                type="text"
                value={inputValue}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 rounded-[10px] outline-none text-black text-[15px] md:w-auto w-[100px"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-[#ff572f] to-[#ffad20] text-white rounded-[10px] cursor-pointer hover:opacity-90 md:w-auto w-[80px]" 
              >
                Send
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chat;
