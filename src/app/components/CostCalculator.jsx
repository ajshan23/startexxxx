'use client';
import React, { useEffect, useState } from 'react';

const steps = ['Activity', 'Your Information', 'Additional Details'];

export default function CostCalculator() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [customActivity, setCustomActivity] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: '',
    lastName: '',
    Email: '',
    Phone: '',
    Message: '',
    Details: '',
  });
  const [loading, setLoading] = useState(false);
  const activities = [
    'E-commerce', 'General Trading', 'Media', 'Freelancing',
    'IT Consultant & Trading', 'Management Consultancy', 'Event Management',
    'PR', 'Digital Marketing', 'Educational Support Activities'
  ];
  const [selected, setSelected] = useState('');

const nextStep = () => {
  if (validateStep()) {
    setStep((prev) => prev + 1);
  }
};

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const closeModal = () => {
    setShow(false);
    setStep(0);
    setSelected('');
    setCustomActivity('');
    setFormData({
      Name: '',
      lastName: '',
      Email: '',
      Phone: '',
      Message: '',
      Details: '',
    });
  };

  const handleSubmit = async () => {
     if (!validateStep()) return;
    setLoading(true);

  const payload = {
    Activity: selected || customActivity,
    Name: formData.Name,
    lastName: formData.lastName,
    Email: formData.Email,
    Phone: formData.Phone,
    Message: formData.Message,
    Details: formData.Details,
  };

    try {
      const response = await fetch('/api/business-activity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        // alert('Form submitted successfully!');
        closeModal();
      } else {
        // alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };
const validateStep = () => {
  let newErrors = {};

  if (step === 0) {
    if (!selected && !customActivity.trim()) {
      newErrors.activity = 'Please select or enter a business activity.';
    }
  }

  if (step === 1) {
    if (!formData.Name.trim()) newErrors.Name = 'Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.Email.trim()) {
      newErrors.Email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid.';
    }
    if (!formData.Phone.trim()) {
      newErrors.Phone = 'Phone is required.';
    } else if (!/^\d{7,15}$/.test(formData.Phone)) {
      newErrors.Phone = 'Phone number is invalid.';
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  useEffect(() => {
  const body = document.body;
  window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));
  if (show) {
    body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'lock' }));
  } else {
    body.style.overflow = '';
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));
  }

  return () => {
    body.style.overflow = '';
    window.dispatchEvent(new CustomEvent('lenis-scroll-lock', { detail: 'unlock' }));
  };
}, [show]);

  return (
    <>
     <button
  onClick={() => setShow(true)}
  className="bg-progress text-white px-4 py-2 rounded rounded-b-none fixed bottom-[250px] right-[-59px] z-[50] transform rotate-[270deg] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_12px_rgba(252,90,90,0.8)]"
>
  Cost Calculator
</button>

      {show && (
        <div className="fixed md:pt-0 pt-[70px] overflow-auto inset-0 bg-[#000000b4] bg-opacity-60 z-[100] flex md:justify-center justify-start md:items-center items-start md:px-4 px-2">
          <div className="bg-white max-w-2xl w-full rounded-xl md:p-6 p-3 relative">
            <button onClick={closeModal} className="absolute right-4 top-4 text-black text-xl font-bold">&times;</button>

            <h2 className="md:text-[25px] text-black font-[400]">Cost Calculator</h2>
            <p className="text-[18px] text-black pt-4">Get an estimate of your setup costs</p>
            <p className='text-[14px] text-black pt-2 font-[400]'>Begin your journey by filling in the details below. Our precise cost calculator ensures you pay only for what your business needs.</p>

            <div className="text-sm font-medium text-gray-500 mb-4 pt-8">{steps[step]}</div>

            <div className="w-full bg-gray-200 rounded-full h-2 my-4">
              <div className="bg-progress h-2 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
            </div>

            {step === 0 && (
              <>
                <p className="mb-4 font-medium text-black pt-5">Select your Business Activity</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activities.map((act, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(act)}
                      className={`md:px-4 px-2 py-2 rounded-md border text-gray-500 ${selected === act ? 'bg-progress text-white' : 'border-gray-300'} text-sm`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
                {errors.activity && <p className="text-red-500 text-sm mt-1">{errors.activity}</p>}
                <p className='pt-5 text-[14px] font-[400] text-gray-500'>Cannot find your preferred activity above? Please add it here and we will get back to you.</p>
                <input
                  type="text"
                  value={customActivity}
                  onChange={(e) => setCustomActivity(e.target.value)}
                  placeholder="Your Custom Activity"
                  className="w-full mt-2 border border-gray-300 rounded px-3 py-2 text-sm mb-6 text-black"
                />
              </>
            )}

            {step === 1 && (
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      
                      value={formData.Name}
                      onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                      placeholder="Enter your name"
                      required
                    />
                    {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                      placeholder="Enter your last name"
                      required
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      value={formData.Email}
                      onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                      placeholder="Enter your email"
                      required
                    />
                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      value={formData.Phone}
                      onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>}

                  </div>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    value={formData.Message}
                    onChange={(e) => setFormData({ ...formData, Message: e.target.value })}
                    rows="4"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="details">Any Additional Message</label>
                  <textarea
                    id="details"
                    name="Details"
                    value={formData.Details}
                    onChange={(e) => setFormData({ ...formData, Details: e.target.value })}
                    rows="4"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                    placeholder="Your additional message"
                  ></textarea>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-between">
              {step > 0 ? (
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded"
                >
                  Previous
                </button>
              ) : <div></div>}

              {step < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="bg-progress text-white px-6 py-2 rounded"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-progress text-white px-6 py-2 rounded"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}