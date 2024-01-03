import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { inter, montserrat } from '@/font/font'

interface FoodCardProps{
    img:string
    name:string
    cook:string
}

export default function FoodCard(props:FoodCardProps) {
    return (
        <div className='border-2 border-black rounded-lg border-r-4 border-b-4 bg-white p-2'>
            <div className='h-[200px] xl:h-[250px]'>
                <Image
                    alt=""
                    width={10000}
                    height={100000}
                    className="border-2 border-black rounded-lg w-full h-full bg-cover"
                    src={props.img}
                />
            </div>
            <div className={`${inter.className} flex flex-col gap-5`}>
                <h1 className={`${montserrat.className} text-start text-lg md:text-2xl h-[65px] overflow-auto font-semibold `}>{props.name}</h1>
                <div className="flex lg:items-center justify-between lg:flex-row flex-col text-xs">
                    <div className="my-5 text-start lg:mb-0">
                        <h1 className='lg:text-lg text-gray-500'>Cook Time: <span className='text-green-500'>{props.cook}mn</span></h1>
                    </div>
                    <Button size='xs' className='whitespace-nowrap' showArrow>More Info</Button>
                </div>
            </div>
        </div>
    )
}
