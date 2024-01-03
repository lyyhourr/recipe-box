import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section className='bg-white py-14 lg:items-center lg:justify-evenly rounded-lg lg:flex-row flex-col flex gap-10 px-5'>
        <div className='flex flex-col lg:items-center justify-center'>
            <Image 
            src={'/logos/main-logo.png'}
            alt=''
            width={100}
            height={100}
            className=''
            />
            <h1 className='text-2xl font-bold'>recipe-box</h1>
        </div>
        <div className='grid grid-cols-2 gap-10 lg:gap-20 lg:grid-cols-3'>
            <div className='flex flex-col md:gap-4'>
              <h1 className='font-semibold text-xl'>About Us</h1>
              <div className='md:text-lg text-sm text-gray-500'>
                <h4>Cambodian</h4>
                <h4>Students</h4>
              </div>
            </div>
            <div className='flex flex-col md:gap-4'>
              <h1 className='font-semibold text-xl'>Contact Us</h1>
              <div className='md:text-lg text-sm text-gray-500'>
                <h4>moniboreyc@gmail.com</h4>
                <h4>lel</h4>
              </div>
            </div>
            <div className='flex lg:justify-center items-center'>
              <div className='flex gap-4'>
                <Image
                src={'/icons/facebook.png'}
                alt=''
                width={40}
                height={40}
                />
                <Image
                src={'/icons/tiktok.png'}
                alt=''
                width={40}
                height={40}
                />
                <Image
                src={'/icons/insta.png'}
                alt=''
                width={40}
                height={40}
                />
              </div>
            </div>
        </div>
    </section>
  )
}
