'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'

import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules';
import FoodCard from './FoodCard';

const PopularFoods = [{
    name: 'Spicy beef and bean nachos',
    img: '/images/popular/spicy-beef-and-bean-nachos-106528-1.jpeg',
    cook: '25',
},
{
    name: 'Shanghai dumplings',
    img: '/images/popular/shanghai-dumplings-86004-1.jpeg',
    cook: '15',
},
{
    name: 'Coq au Vin',
    img: '/images/popular/coq-au-vin-107504-1.jpeg',
    cook: '1h 25',
},
{
    name: 'Chicken pad Thai',
    img: '/images/popular/chicken-pad-thai-94082-1.jpeg',
    cook: '10',
},
{
    name: 'Beef and spinach gozleme',
    img: '/images/popular/beef-and-spinach-gozleme-105596-1.jpeg',
    cook: '20',
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
                        <FoodCard img={food.img} name={food.name} cook={food.cook}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
