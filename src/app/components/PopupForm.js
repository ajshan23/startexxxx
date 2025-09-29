import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import PaymentImg from '../../../public/assets/images/home/payment.png';
import tabyImg from '../../../public/assets/images/home/taby.png';
import { toast } from 'react-toastify';

export default function PopupForm({ onClose, activity = 'Entrepreneurial Journey' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    lastName: '',
    Phone: '',
    Email: '',
    Message: '',
    Requirement: '',
    Activity: activity,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, Activity: activity }));
  }, [activity]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      const response = await axios.post('/api/contact-form', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

    if (response.data.success) {
        toast.success('Form submitted successfully!');
        setFormData({
          Name: '',
          lastName: '',
          Phone: '',
          Email: '',
          Message: '',
          Requirement: '',
          Activity: 'Entrepreneurial Journey',
        });
          onClose();
      } else {
        toast.error('Unexpected server response.');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Submission error.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));

    return () => {
      window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-[#000000be] flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div
        data-lenis-prevent
        className={`relative z-10 bg-black border border-[#ffffff4f] md:h-auto h-full md:m-0 m-4 md:mt-0 mt-10 rounded-[10px] md:p-9 p-5 w-full max-w-4xl shadow-xl transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } overflow-y-auto `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl w-[30px] h-[30px] rounded-full flex justify-center items-center bg-progress"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h2 className="text-gradient pt-5 md:text-[30px] text-[27px] font-medium mb-2">
              Start Your Business Today, Pay Later
            </h2>
            <p className="text-grey text-[16px] mb-4 text-white">Pay Easily with Tabby & Tamara</p>
            <div className="m-auto">
              <div className="flex justify-center">
                <Image src={PaymentImg} alt="" width={500} height={500} className="w-[80%] h-[50%] object-contain" />
              </div>
              <div className="mt-0 m-auto w-full text-center flex justify-center">
                <Image src={tabyImg} alt="" width={500} height={500} className="w-[50%] h-[50%] object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-2 rounded border border-black bg-white"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-2 rounded border border-black bg-white"
                  required
                />
              </div>
              <div className="flex bg-white rounded border border-black">
                <select className="p-2 rounded-l">
                  <option value="+91">+91</option>
                  <option value="+971">+971</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+966">+966</option>
                  <option value="+880">+880</option>
                  <option value="+974">+974</option>
                  <option value="+20">+20</option>
                  <option value="+63">+63</option>
                  <option value="+7">+7</option>
                  <option value="+86">+86</option>
                </select>
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full p-2 rounded-r"
                  required
                />
              </div>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 rounded bg-white border border-black"
                required
              />
              <input
                type="text"
                name="Requirement"
                value={formData.Requirement}
                onChange={handleChange}
                placeholder="Your Requirement"
                className="w-full p-2 rounded border border-black bg-white"
                required
              />
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2 rounded h-24 bg-white border border-black"
                required
              />
              <button
                type="submit"
                className="bg-gradient text-white py-2 px-4 rounded w-full"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}