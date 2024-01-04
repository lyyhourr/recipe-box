'use client'

import FoodCard from '@/components/FoodCard'
import React, { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import Image from 'next/image'

interface YouMayLikeProps {
    similarRecipes: any
}

export default function YouMayLike({ similarRecipes }: YouMayLikeProps) {

    const [slides, setSlides] = useState(1)

    const setSlidesPerview = () => {
        setSlides(
            window.innerWidth <= 640 ? 1 :
                window.innerWidth <= 1024 ? 2 :
                    window.innerWidth <= 1280 ? 3 : 4
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
        <>
            <div className='relative w-fit'>
                <h1 className='underline underline-offset-4 text-4xl text-start text-black'>You May Also Like</h1>
                <Image
                    alt=''
                    src={'/images/textstyle/Group 2824.png'}
                    width={30}
                    height={30}
                    className='absolute -top-1 -right-5'
                />
            </div>
            <div className='flex justify-center py-10'>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={slides}
                    spaceBetween={'30px'}
                    className='w-[95%]'
                >
                    {similarRecipes.map((recipe: any, index: number) => (
                        <SwiperSlide key={index}>
                            <FoodCard
                                img={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
                                name={recipe.title}
                                cook={recipe.readyInMinutes}
                                id={recipe.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
