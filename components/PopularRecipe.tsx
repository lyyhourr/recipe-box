'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'

import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules';
import FoodCard from './FoodCard';

const PopularFoods = [{
    id: 1234,
    name: 'Spicy beef and bean nachos',
    img: '/images/popular/spicy-beef-and-bean-nachos-106528-1.jpeg',
    cook: '25',
},
{
    id: 1234,
    name: 'Shanghai dumplings',
    img: '/images/popular/shanghai-dumplings-86004-1.jpeg',
    cook: '15',
},
{
    id: 1234,
    name: 'Coq au Vin',
    img: '/images/popular/coq-au-vin-107504-1.jpeg',
    cook: '1h 25',
},
{
    id: 1234,
    name: 'Chicken pad Thai',
    img: '/images/popular/chicken-pad-thai-94082-1.jpeg',
    cook: '10',
},
{
    id: 1234,
    name: 'Beef and spinach gozleme',
    img: '/images/popular/beef-and-spinach-gozleme-105596-1.jpeg',
    cook: '20',
},
]

export default function PopularRecipe() {

    const [slides, setSlides] = useState(1)
    const [foods, setFoods] = useState([])

    const setSlidesPerview = () => {
        setSlides(
            window.innerWidth <= 1280 ? 1 : 2
        );
    }

    React.useEffect(() => {
        setSlidesPerview();
        window.addEventListener("resize", setSlidesPerview);
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=3c374c59b2e74325892f07406d6c7793&number=7`)
            .then(res => res.json()).then(data => setFoods(data.recipes))

        return () => {
            window.removeEventListener("resize", setSlidesPerview);
        };
    }, []);
    console.log(foods)

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
                PopularFoods.map((food: any) => (
                    <SwiperSlide key={food.title} className='flex items-center justify-center py-3'>
                        <FoodCard img={food.img} name={food.name} cook={food.cook} id={food.id} />
                    </SwiperSlide>
                ))
            }
            {/* {
                foods.length > 0 && foods.map((food: any) => (
                    <SwiperSlide key={food.title} className='flex items-center justify-center py-3'>
                        <FoodCard img={food.image} name={food.title} cook={food.readyInMinutes} id={food.id} />
                    </SwiperSlide>
                ))
            } */}

        </Swiper>
    )
}
