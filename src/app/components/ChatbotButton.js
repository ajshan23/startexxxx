"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 How can I help you?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: inputValue }];
    setMessages(newMessages);

    setTimeout(() => {
      let botReply = '';

      if (step === 0) {
        botReply = 'Thank you for reaching out. May I kindly have your name to proceed?';
        setStep(1);
      } else if (step === 1) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(inputValue)) {
          botReply = 'Please enter a valid name (letters only).';
          setStep(1);
        } else {
          setFormData(prev => ({ ...prev, name: inputValue }));
          botReply = 'Please enter your phone number.';
          setStep(2);
        }
      } else if (step === 2) {
        const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
        if (!phoneRegex.test(inputValue)) {
          botReply = 'Please enter a valid phone dddnumber.';
          setStep(2);
        } else {
          setFormData(prev => ({ ...prev, phone: inputValue }));
          botReply = 'Enter your email address.';
          setStep(3);
        }
      } else if (step === 3) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValue)) {
          botReply = 'Please enter a valid email address.';
          setStep(3);
        } else {
          setFormData(prev => ({ ...prev, email: inputValue }));
          botReply = 'Any message you would like to share?';
          setStep(4);
        }
      } else if (step === 4) {
        if (inputValue.length < 5) {
          botReply = 'Please enter a message (at least 5 characters).';
          setStep(4);
        } else {
          const finalData = { ...formData, message: inputValue };
          setFormData(finalData);
          botReply = 'Thank you! We will contact you soon. 😊';
          setStep(5);

          // API CALL
          fetch('/api/chat-bot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
          })
            .then(res => res.json())
            .then(data => {
              console.log('Chatbot API response:', data);
            })
            .catch(err => {
              console.error('Chatbot API error:', err);
            });
        }
      } else {
        botReply = 'Conversation completed. Refresh to start again.';
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);

    setInputValue('');
  };


  useEffect(() => {
  window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));

  if (isOpen) {
    document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));
  } else {
    document.body.style.overflow = "auto";
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));


  }

  return () => {
    document.body.style.overflow = "auto";
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));

  };
}, [isOpen]);





  return (
    <div className="fixed bottom-24 right-0 z-[60] flex items-center justify-center">
      
      <button
        className="md:w-[60px] h-[40px] md:h-[60px] w-[40px] bg-gradient-to-r from-[#ff572f] to-[#ffad20] rounded-l-[10px] flex items-center justify-center text-white text-[28px] cursor-pointer transform transition-transform hover:scale-110 hover:shadow-[0_4px_12px_rgba(252,90,90,0.8)]"
        aria-label="Toggle Chatbot"
        onClick={toggleChatbot}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM6 11h12v2H6v-2zm0-3h12v2H6V8z" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-40 md:right-20 right-5 w-[350px] max-w-[90vw] bg-[#f0f0f0] rounded-[10px] shadow-lg flex flex-col overflow-hidden z-[60]"
          >
            <div className="bg-gradient-to-r from-[#ff572f] to-[#ffad20] text-white p-2 font-bold text-center">
              Chat with us
            </div>

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
                    msg.sender === 'bot'
                      ? 'bg-white self-start rounded-tl-none text-black'
                      : 'bg-[#dcf8c6] self-end rounded-tr-none text-black'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 p-2 bg-[#f0f0f0]">
              <input
                type="text"
                value={inputValue}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 rounded-[10px] outline-none text-black text-[15px] md:w-auto w-[100px]"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-[#ff572f] to-[#ffad20] text-white rounded-[10px] cursor-pointer hover:opacity-90 md:w-auto w-[80px]"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ChatbotButton;
