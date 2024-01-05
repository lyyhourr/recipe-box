'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'

import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules';
import FoodCard from './FoodCard';

const PopularFoods = [{
    id: 633352,
    name: 'Bacon Wrapped Tofu Tacos',
    img: '/images/popular/bacon-wrapped-tacos.jpg',
    cook: '25',
},
{
    id: 641687,
    name: 'Dry Mee Siam',
    img: '/images/popular/dry-mee-siam.jpg',
    cook: '15',
},
{
    id: 661126,
    name: 'Spicy Lump Crab and Avocado Salad',
    img: '/images/popular/spicy-lamb.jpg',
    cook: '1h 25',
},
{
    id: 665537,
    name: 'Yoghurt Honey Madeleine',
    img: '/images/popular/yoghurt.jpg',
    cook: '10',
},
{
    id: 638235,
    name: 'Chicken Parmesan With Pasta',
    img: '/images/popular/chicken-pasta.jpg',
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
<<<<<<< Updated upstream
=======
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=3c374c59b2e74325892f07406d6c7793&number=7`)
            .then(res => res.json()).then(data => setFoods(data.recipes))

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                PopularFoods.map((food: any) => (
                    <SwiperSlide key={food.title} className='flex items-center justify-center py-3'>
                        <FoodCard img={food.img} name={food.name} cook={food.cook} id={food.id} />
=======
                foods.length > 0 && foods.map((food: any) => (
                    <SwiperSlide key={food.title} className='flex items-center justify-center py-3'>
                        <FoodCard img={food.image} name={food.title} cook={food.readyInMinutes} id={food.id} />
>>>>>>> Stashed changes
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}
