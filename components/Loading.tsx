import Image from 'next/image'
import React from 'react'

export default function LoadingScreen() {
    return (
        <div className="relative flex justify-center items-center h-screen">
            <div className='absolute w-screen h-screen bg-gray-300  top-0 left-0 animate-pulse' />
            <div className="absolute animate-spin rounded-full h-[280px] w-[280px]  bg-white  border-t-[5px] border-b-[5px] border-black">
            </div>
            <div className='flex flex-col gap-1'>

                <Image
                    src={"/images/smile-chef.png"}
                    width={100000}
                    height={10000}
                    alt=''
                    className='z-50 w-[190px] h-[190px] '
                />
                <p className='text-xl z-50 text-center animate-pulse pb-3'>Loading...</p>
            </div>
        </div>
    )
}
