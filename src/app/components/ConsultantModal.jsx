// ConsultantModal.jsx - Updated Component
'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState, useEffect, forwardRef } from 'react'
import { Calendar, X } from 'lucide-react'
import Image from 'next/image'
import cu1 from '../../../public/assets/images/consultsnt/aiswarya.webp'
import cu2 from '../../../public/assets/images/consultsnt/zul-fathima.webp'
import cu3 from '../../../public/assets/images/consultsnt/thasla.webp'
import cu4 from '../../../public/assets/images/consultsnt/mona-riza.webp'
import cu5 from '../../../public/assets/images/consultsnt/afrin.webp'
import cu8 from '../../../public/assets/images/consultsnt/monisha.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import Logo from '../home/Logo'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const consultants = [
  {
    type: 'License',
    name: 'Aiswarya',
    img: cu1,
    available: '9AM - 10PM',
    experience: '3 Years',
    languages: ['Arabic', 'English', 'Malayalam', 'Tamil']
  },
  {
    type: 'License',
    name: 'Zul-Fathima',
    img: cu2,
    available: '9AM - 10PM',
    experience: '5 Years',
    languages: ['Hindi', 'English']
  },
  {
    type: 'PRO',
    name: 'Thasla',
    img: cu3,
    available: '9AM - 10PM',
    experience: '4 Years',
    languages: ['Arabic', 'Malayalam', 'English']
  },
  {
    type: 'PRO',
    name: 'Mona Rinza',
    img: cu4,
    available: '9AM - 10PM',
    experience: '2 Years',
    languages: ['Arabic', 'Malayalam', 'English']
  },
  {
    type: 'PRO',
    name: 'Afrin',
    img: cu5,
    available: '9AM - 10PM',
    experience: '2 Years',
    languages: ['Arabic', 'Malayalam', 'English']
  },
   {
    type: 'License',
    name: 'Monisha',
    img: cu8,
    available: '9AM - 10PM',
    experience: '2 Years',
    languages: ['Arabic', 'Malayalam', 'English']
  }
]

export default function ConsultantModal({
  isOpen,
  setIsOpen,
  selectedDate: propSelectedDate,
  setSelectedDate: propSetSelectedDate
}) {
  const [selectedTab, setSelectedTab] = useState('License')
  const [showConsultantModal, setShowConsultantModal] = useState(false)
  const [activeConsultant, setActiveConsultant] = useState(null)

  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Internal state management for selectedDate
  const [internalSelectedDate, setInternalSelectedDate] = useState('')

  // Use internal state if props are not provided (for backwards compatibility)
  const selectedDate = propSelectedDate !== undefined ? propSelectedDate : internalSelectedDate
  const setSelectedDate = propSetSelectedDate || setInternalSelectedDate

  useEffect(() => {
    setMounted(true)
    setIsClient(true)
  }, [])

  const filteredConsultants = consultants.filter(c => c.type === selectedTab)

  const openConsultantPopup = consultant => {
    setActiveConsultant(consultant)
    setShowConsultantModal(true)
  }

  const handleConsultantSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setSuccessMsg('')

    // Debug logging to see what values we have
    console.log('Debug values:', {
      userName: userName,
      userPhone: userPhone,
      userEmail: userEmail,
      selectedDate: selectedDate,
      activeConsultant: activeConsultant
    })

    // More specific validation with better error messages
    if (!userName?.trim()) {
      setSuccessMsg('Please enter your name')
      setLoading(false)
      return
    }
    
    if (!userEmail?.trim()) {
      setSuccessMsg('Please enter your email')
      setLoading(false)
      return
    }
    
    if (!userPhone?.trim()) {
      setSuccessMsg('Please enter your phone number')
      setLoading(false)
      return
    }
    
    if (!selectedDate) {
      setSuccessMsg('Please select a date')
      setLoading(false)
      return
    }
    
    if (!activeConsultant) {
      setSuccessMsg('Please select a consultant')
      setLoading(false)
      return
    }

    const payload = {
      Name: userName.trim(),
      Phone: userPhone.trim(),
      Email: userEmail.trim(),
      date: selectedDate,
      Consultant: activeConsultant.name
    }

    console.log('Sending payload:', payload)

    try {
      const res = await axios.post('/api/consultant', payload, {
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.data.success) {
        setSuccessMsg('Booking successful!')
        setTimeout(() => {
          setSuccessMsg('')
          setUserName('')
          setUserEmail('')
          setUserPhone('')
          setShowConsultantModal(false)
          setLoading(false)
        }, 2000)
      } else {
        setSuccessMsg('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch (err) {
      console.error('Booking error:', err.response?.data || err.message)
      setSuccessMsg('Failed to book consultant. Please try again later.')
      setLoading(false)
    }
  }

  useEffect(() => {
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

  function getNextLocalDateString(date) {
    if (!date) return ''
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      onClick={onClick}
      className='flex items-center bg-transparent text-gradient text-sm px-3 py-2 rounded cursor-pointer border border-gray-300 w-[150px]'
    >
      <input
        ref={ref}
        readOnly
        value={value}
        className='flex-1 bg-transparent outline-none border-none cursor-pointer w-[50px]'
      />
      <Calendar className='w-4 h-4 text-white ml-2' />
    </div>
  ))

  // Initialize selectedDate if it's not set
  useEffect(() => {
    if (!selectedDate) {
      const today = new Date()
      setSelectedDate(getNextLocalDateString(today))
    }
  }, [selectedDate, setSelectedDate])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-100' onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm' />
        <div className='fixed inset-0 w-full overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-4 py-8'>
            <Dialog.Panel className='w-full md:h-[80vh] transform overflow-hidden rounded-2xl bg-black text-white shadow-xl transition-all md:p-6 p-3 relative z-[999]'>
              <button
                className='absolute top-4 right-4 text-white hover:text-red-500'
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Tabs + Date */}
              <div className='flex flex-wrap items-center justify-between md:mb-10 pt-10'>
                <div className='flex gap-2'>
                  {['License', 'PRO'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-4 py-2 text-sm rounded transition-all ${
                        selectedTab === tab
                          ? 'bg-progress text-white px-2'
                          : 'bg-black text-gray-300 hover:bg-gray-700 border-1 border-white px-2'
                      }`}
                    >
                      {tab === 'License'
                        ? 'Licence Consultants'
                        : 'PRO Consultant'}
                    </button>
                  ))}
                </div>

                {/* Date Picker */}
                {mounted && (
                  <div className='relative flex md:mt-0 mt-5 items-center gap-2 bg-gray-900 px-4 py-2 rounded text-white'>
                    <span className='text-sm'>Schedule For</span>
                    <DatePicker
                      selected={
                        selectedDate ? new Date(selectedDate) : new Date()
                      }
                      onChange={date => {
                        const dateString = getNextLocalDateString(date)
                        console.log('Date selected:', dateString) // Debug log
                        setSelectedDate(dateString)
                      }}
                      customInput={<CustomInput />}
                      calendarClassName='z-50'
                      popperPlacement='bottom-start'
                      minDate={new Date()} // Prevent selecting past dates
                    />
                  </div>
                )}
              </div>

              {/* Swiper */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className='md:pb-10 pb-5 md:pt-10 pt-5 relative z-0'>
                    {isClient && (
                      <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                          768: { slidesPerView: 3 },
                          1024: { slidesPerView: 4 }
                        }}
                      >
                        {filteredConsultants.map((person, index) => (
                          <SwiperSlide key={index}>
                            <div
                              onClick={() => openConsultantPopup(person)}
                              className='cursor-pointer group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300'
                            >
                              <Image
                                src={person.img}
                                alt={person.name}
                                className='w-full md:h-[400px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105'
                                width={300}
                                height={400}
                                unoptimized
                              />
                              <div className='absolute bottom-0 left-0 right-0 bg-black/70 p-4 m-3 rounded-[10px]'>
                                <h3 className='text-gradient font-[400] text-[20px]'>
                                  {person.name}
                                </h3>
                                <p className='text-sm pt-4 text-gray-300'>
                                  Available: {person.available}
                                </p>
                                <p className='text-sm pt-4 text-gray-300'>
                                  Experience: {person.experience}
                                </p>
                                <p className='text-sm pt-4 text-gray-300'>
                                  Lang: {person.languages.join(', ')}
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              <Logo />
            </Dialog.Panel>
          </div>
        </div>

        {/* Consultant Booking Modal */}
        <Transition appear show={showConsultantModal} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-[9999]'
            onClose={() => setShowConsultantModal(false)}
          >
            <div className='fixed inset-0 bg-black/60 backdrop-blur-sm' />
            <div className='fixed inset-0 w-full overflow-y-auto flex items-center justify-center px-2'>
              <Dialog.Panel className='bg-white text-black w-full max-w-md rounded-xl p-6 relative z-[10000] mx-2'>
                <button
                  className='absolute top-4 right-4 text-black'
                  onClick={() => setShowConsultantModal(false)}
                >
                  <X size={24} />
                </button>
                <h2 className='text-xl font-semibold mb-4'>Book Consultant</h2>
                {activeConsultant && (
                  <>
                    <p>
                      <strong>Consultant:</strong> {activeConsultant.name}
                    </p>
                    <p>
                      <strong>Selected Date:</strong> {selectedDate || 'No date selected'}
                    </p>
                    <form className='space-y-4 mt-4' onSubmit={handleConsultantSubmit}>
                      <input
                        type='text'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
                        placeholder='Enter your name'
                        required
                      />
                      <input
                        type='email'
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                        className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
                        placeholder='Enter your email'
                        required
                      />
                      <input
                        type='tel'
                        value={userPhone}
                        onChange={e => setUserPhone(e.target.value)}
                        className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
                        placeholder='Enter your phone number'
                        required
                      />
                      <button
                        type='submit'
                        disabled={loading}
                        className='w-full bg-progress text-white px-4 py-2 rounded disabled:opacity-50'
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                      {successMsg && (
                        <p className={`text-sm text-center mt-2 ${
                          successMsg.includes('successful') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {successMsg}
                        </p>
                      )}
                    </form>
                  </>
                )}
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      </Dialog>
    </Transition>
  )
}

// ========================================
// Example of how parent components should look:
// ========================================

// SceduleSection.js (or wherever ConsultantModal is used)
export function SceduleSection() {
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div>
      {/* Your schedule section content */}
      <button onClick={() => setIsConsultantModalOpen(true)}>
        Open Consultant Modal
      </button>
      
      <ConsultantModal
        isOpen={isConsultantModalOpen}
        setIsOpen={setIsConsultantModalOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  )
}

// VerticalSlider.js (if it's used there)
export function VerticalSlider() {
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div>
      {/* Your slider content */}
      <ConsultantModal
        isOpen={isConsultantModalOpen}
        setIsOpen={setIsConsultantModalOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  )
}