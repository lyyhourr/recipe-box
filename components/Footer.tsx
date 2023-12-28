import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section className='bg-white py-14 md:items-center md:justify-evenly rounded-lg md:flex-row flex-col flex gap-10 px-5'>
        <div className='flex flex-col md:items-center justify-center'>
            <Image 
            src={'/logos/main-logo.png'}
            alt=''
            width={100}
            height={100}
            className=''
            />
            <h1 className='text-2xl font-bold'>recipe-box</h1>
        </div>
        <div className='grid grid-cols-2 gap-10 md:gap-20 md:grid-cols-3'>
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
            <div className='flex md:justify-center items-center'>
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
