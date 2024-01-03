import Image from 'next/image'
import React from 'react'
import { bigShoulderText, montserrat, roboto } from '@/font/font'

export default function Footer() {
  return (
    <div className='w-full h-full bg-white py-10 rounded-lg mb-1'>

      <section className=' lg:items-center lg:justify-evenly lg:mb-10 lg:flex-row flex-col flex gap-10 px-5  pb-3 ' >
        <div className='flex flex-col lg:items-center justify-center'>
          <Image
            src={'/logos/main-logo.png'}
            alt=''
            width={100}
            height={100}
            className=''
          />
          <h1 className={`${roboto.className} text-xl lg:text-2xl uppercase`}>recipe-box</h1>
        </div>

        <div className={`${montserrat.className} grid grid-cols-2 sm:gap-5 lg:gap-20 lg:grid-cols-3`}>
          <div className='flex flex-col md:gap-4'>
            <h1 className={`${roboto.className} font-semibold text-xl`}>About Us</h1>
            <div className='md:text-lg text-sm text-gray-500'>
              <h4>Cambodian</h4>
              <h4>Students</h4>
            </div>
          </div>
          <div className='flex flex-col md:gap-4'>
            <h1 className={`${roboto.className} font-semibold text-xl`}>Contact Us</h1>
            <div className='md:text-lg text-sm text-gray-500'>
              <h4>moniboreyc@gmail.com</h4>
              <h4>mamlyhua@gmail.com</h4>
            </div>
          </div>
          <div className='flex lg:justify-center mt-3 sm:mt-0 items-center'>
            <div className='flex justify-center  gap-4'>
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
      </section >
      <section className='flex flex-col sm:flex-row gap-5 sm:gap-[100px] p-5 lg:items-center lg:justify-center w-full'>
        <p className={`${roboto.className} text-3xl`}>Donate us</p>
        <div className='flex  '>
          <div className='flex flex-col sm:flex-row gap-6  '>
            <div className='flex gap-2 items-center'>

              <Image
                width={10000}
                height={10000}
                alt='aba image'
                src={"/icons/aba.jpeg"}
                className='w-[50px] h-[50px] rounded-md'
              />
              <div className='flex gap-5'>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-5 items-center'>
                    <p>002 560 314 </p>
                    {/* <Button size='small landscape' bgColor='white' onClick={() => handleCopy("002560314")}>Copy</Button> */}

                  </div>
                  <div className='flex gap-2 items-center'>
                    <p>002 560 314 </p>
                    {/* <Button size='small landscape' bgColor='white' onClick={() => handleCopy("002560314")}>Copy</Button> */}
                  </div>
                </div>
              </div>

            </div>

            <Image
              src={"/images/crying-cartoon.png"}
              width={10000}
              height={10000}
              alt='crying-cat'
              className='w-[165px] h-[120px] bg-cover'
            />
          </div>
        </div>

      </section>
    </div>
  )
}
