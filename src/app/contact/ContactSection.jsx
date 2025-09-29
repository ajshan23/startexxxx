'use client'
import React, { useMemo, useState } from 'react'
import Chat from '../components/Chat'
import ConsultantModal from '../components/ConsultantModal'
import { motion } from 'framer-motion'
const getNext7Days = () => {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const today = new Date()
  return Array.from({ length: 7 }, (_, i) => {
    const nextDate = new Date(today)
    nextDate.setDate(today.getDate() + i)
    return {
      date: String(nextDate.getDate()).padStart(2, '0'),
      day: weekdays[nextDate.getDay()],
      fullDate: nextDate.toISOString().split('T')[0] // optional for future use
    }
  })
}

const ContactSection = () => {
  const days = useMemo(() => getNext7Days(), [])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(days[0].fullDate)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [formData, setFormData] = useState({
    Name: '',
    lastName: '',
    Phone: '',
    Email: '',
    Message: '',
    Requirement: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Submitting...')

    try {
      const response = await fetch(
        '/api/contact-form',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({
          Name: '',
          lastName: '',
          Phone: '',
          Email: '',
          Message: '',
          Requirement: ''
        })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Error sending message.')
      console.error('Error:', error)
    }
  }

  return (
    <div className='pt-10 main-pt px-4 md:px-8 lg:px-[150px] py-10'>
      <motion.h1
        className='md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let's Get in Touch
      </motion.h1>
      <motion.p
        className='text-[16px] text-center text-white font-[400]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Drop us a line! We're here to help with your business setup inquiries.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='border bg-[#99999932] border-[#ffffff4f] p-5 md:p-8 rounded-xl space-y-5 mt-10 text-white'
      >
        <div className='grid md:grid-cols-2 gap-5'>
          <input
            type='text'
            name='Name'
            value={formData.Name}
            onChange={handleChange}
            placeholder='First Name'
            required
            className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full'
          />
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            required
            className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full'
          />
          <input
            type='text'
            name='Phone'
            value={formData.Phone}
            onChange={handleChange}
            placeholder='+971'
            required
            className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full'
          />
          <input
            type='email'
            name='Email'
            value={formData.Email}
            onChange={handleChange}
            placeholder='Your Email'
            required
            className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full'
          />
          <input
            type='text'
            name='Requirement'
            value={formData.Requirement}
            onChange={handleChange}
            placeholder='Business Requirement'
            required
            className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full md:col-span-2'
          />
        </div>
        <textarea
          rows={4}
          name='Message'
          value={formData.Message}
          onChange={handleChange}
          placeholder='Type your query here'
          className='bg-transparent border border-[#ffffff4f] rounded-xl px-4 py-4 w-full resize-none'
        ></textarea>
        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className='w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 rounded-xl font-semibold'
        >
          Submit Message
        </motion.button>
        {status && <p className='text-center text-sm mt-2'>{status}</p>}
      </motion.form>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        <div className='border bg-[#99999932]  border-[#ffffff4f] rounded-xl text-white p-6 flex flex-col justify-between'>
          <div>
            <p className='text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3'>
              Contact Us
            </p>
            <h3 className='text-lg font-medium'>
              Streamline your business setup process
            </h3>
          </div>

          <button
            onClick={() => setIsChatOpen(true)}
            className='mt-6 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 rounded-xl text-sm font-medium'
          >
            💬 Chat With Us
          </button>
        </div>
        <Chat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        <div className='border bg-[#99999932]  border-[#ffffff4f] rounded-xl p-6 flex flex-col justify-between text-white'>
          <div>
            <p className='text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3'>
              Find us on map
            </p>
            <p className='text-sm leading-6'>
              Office# 610, Al Moosa Tower 1, Sheikh Zayed Rd, Opp- Emirates
              Tower, Near- Future Museum
            </p>
          </div>
          <button
            onClick={() =>
              window.open(
                'https://www.google.com/maps/place/Business+Setup+in+Dubai+-+Startex+Hub+Businessman+Services/@25.2166066,55.2779681,17z/data=!4m6!3m5!1s0x3e5f437ab5a2917f:0x4ca5fa8895bb9e7a!8m2!3d25.2166066!4d55.2779681!16s%2Fg%2F11y2bz2qky?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D',
                '_blank'
              )
            }
            className='mt-6 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 rounded-xl text-sm font-medium'
          >
            📍 Map
          </button>
        </div>

        <div className='md:col-span-2 lg:col-span-1 border border-[#ffffff4f] bg-[#99999932]  rounded-xl text-white p-6 flex flex-col justify-between'>
          <div>
            <p className='text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3'>
              Assistance
            </p>
            <h3 className='text-lg font-medium'>
              Get Personal Assistant for you.
            </h3>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            <button
              className='w-full md:w-auto bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 px-6 rounded-xl text-sm font-medium'
              onClick={() => setIsOpen(true)}
            >
              Schedule Meet
            </button>
            <a href='tel:+971509119224'>
              <button className='w-full md:w-auto border border-yellow-400 text-yellow-400 py-2 px-6 rounded-xl text-sm font-medium'>
                Get Call Back
              </button>
            </a>
          </div>
        </div>
      </div>

      <ConsultantModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  )
}

export default ContactSection