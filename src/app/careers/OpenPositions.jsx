'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function OpenPositions () {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://startex-admin.vercel.app/api/hiring')
        if (!res.ok) {
          throw new Error('Failed to fetch jobs')
        }
        const data = await res.json()
        setJobs(data) // your response is already an array
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  if (loading) return <p className='text-center text-white'>Loading jobs...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>
  if (jobs.length === 0)
    return <p className='text-center text-white'>No jobs available.</p>

  return (
    <div className='text-white py-16 px-6'>
      <div className='pt-10 px-4 md:px-8 lg:px-[90px]'>
        <h2 className='md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient'>
          Open Positions
        </h2>

        <div className='space-y-8'>
          {jobs.map((job, index) => (
            <div
              key={job._id}
              className='border-b border-gray-700 pb-6 flex justify-between items-start gap-4'
            >
              <div className='pt-10 w-full'>
                <h3 className='md:text-[35px] text-[22px] font-[400] text-gradient'>
                  {job.Heading}
                </h3>
                <p className='text-sm md:text-[18px] text-gray-300 mt-2 max-w-2xl'>
                  {job.Description}
                </p>

                <div className='mt-4 flex gap-3 flex-wrap w-full'>
                  <span className='flex items-center px-3 py-1 border border-gray-500 rounded-full text-sm text-gray-300'>
                    📍 {job.Location}
                  </span>
                  <span className='flex items-center px-3 py-1 border border-gray-500 rounded-full text-sm text-gray-300'>
                    🕒 {job.Type}
                  </span>
                  <p className='text-sm md:text-[14px] font-semibold ms-auto'>
                    <span className='text-white'>
                      Send your application to:
                    </span>{' '}
                    <Link
                      href={`mailto:careers@startexhub.com?subject=Application for ${encodeURIComponent(
                        job.Heading
                      )}`}
                      className='text-gradient ps-3 underline'
                    >
                      careers@startexhub.com
                    </Link>
                  </p>
                </div>
              </div>

              <Link
                href={`mailto:careers@startexhub.com?subject=Application for ${encodeURIComponent(
                  job.Heading
                )}`}
                className='mt-2 shrink-0 bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-2 rounded-full hover:scale-105 transition'
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
