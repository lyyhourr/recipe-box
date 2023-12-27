import React from 'react'

export default function Footer() {
  return (
    <section className='bg-white py-14 md:items-center md:justify-evenly rounded-lg md:flex-row flex-col flex gap-10 px-5'>
        <div className=''>
            <h1 className='text-xl font-bold'>recipe-box</h1>
        </div>
        <div className='grid grid-cols-2 md:gap-20 md:grid-cols-3'>
            <div className='flex flex-col gap-4'>
              <h1 className='font-semibold text-xl'>About Us</h1>
              <div className='text-lg text-gray-500'>
                <h4>lol</h4>
                <h4>lel</h4>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='font-semibold text-xl'>Contact Us</h1>
              <div className='text-lg text-gray-500'>
                <h4>lol</h4>
                <h4>lel</h4>
              </div>
            </div>
        </div>
    </section>
  )
}
