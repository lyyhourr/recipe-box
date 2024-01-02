'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import React, { useRef, useState } from 'react'

import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules';
import { inter, lato, montserrat, openSan, poppins } from '@/font/font';
import Button from './Button';

const PopularFoods = [{
    name: 'Spicy beef and bean nachos',
    img: '/images/popular/spicy-beef-and-bean-nachos-106528-1.jpeg',
    cook: '25mn',
    prep: '10mn'
},
{
    name: 'Shanghai dumplings',
    img: '/images/popular/shanghai-dumplings-86004-1.jpeg',
    cook: '15mn',
    prep: '5mn'
},
{
    name: 'Coq au Vin',
    img: '/images/popular/coq-au-vin-107504-1.jpeg',
    cook: '1h 25mn',
    prep: '25mn'
},
{
    name: 'Chicken pad Thai',
    img: '/images/popular/chicken-pad-thai-94082-1.jpeg',
    cook: '10mn',
    prep: '10mn'
},
{
    name: 'Beef and spinach gozleme',
    img: '/images/popular/beef-and-spinach-gozleme-105596-1.jpeg',
    cook: '20mn',
    prep: '15mn'
},
]

export default function PopularRecipe() {

    const [slides, setSlides] = useState(1)

    const setSlidesPerview = () => {
        setSlides(
            window.innerWidth <= 1280 ? 1 : 2
        );
    }

    React.useEffect(() => {
        setSlidesPerview();
        window.addEventListener("resize", setSlidesPerview);

        return () => {
            window.removeEventListener("resize", setSlidesPerview);
        };
    }, []);

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay
            loop
            slidesPerView={slides}
            spaceBetween={'10px'}
            className="w-[80%]">
            {
                PopularFoods.map(food => (
                    <SwiperSlide key={food.img} className='flex items-center justify-center py-3'>
                        <div className='border-2 mx-auto w-fit border-black rounded-lg border-r-4 border-b-4 bg-white p-2'>
                            <div className='h-[200px] xl:h-[250px]'>
                                <Image
                                    alt=""
                                    width={10000}
                                    height={100000}
                                    className="border-2 border-black rounded-lg w-full h-full bg-cover"
                                    src={food.img}
                                />
                            </div>
                            <div className={`${inter.className} flex flex-col gap-1`}>
                                <h1 className={`${montserrat.className} text-lg md:text-2xl md:min-h-[60px] font-semibold`}>{food.name}</h1>
                                <div className="flex lg:items-center justify-between lg:flex-row flex-col text-xs">
                                    <div className="mb-5 lg:mb-0">
                                        <h1>Cook Time: {food.cook}</h1>
                                        <h1>Prep Time: {food.prep}</h1>
                                    </div>
                                    <Button size='sm' className='whitespace-nowrap' showArrow>More Info</Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
