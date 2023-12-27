'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React from 'react'
import Button from "./Button";

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

    return (
        <Carousel className="py-5 w-[80%]">
            <div className="overflow-hidden">
                <CarouselContent>
                    {
                        PopularFoods.map(food => (
                            <CarouselItem key={food.img} className='flex items-center md:basis-1/2 justify-center py-3'>
                                <div className='border-2 border-black rounded-lg border-r-4 border-b-4 bg-white p-2'>
                                    <Image
                                        alt=""
                                        width={10000}
                                        height={100000}
                                        className="border-2 border-black rounded-lg"
                                        src={food.img}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h1 className="text-lg md:text-2xl md:min-h-[70px] font-semibold">{food.name}</h1>
                                        <div className="flex lg:items-center justify-between lg:flex-row flex-col text-xs">
                                            <div className="mb-5 lg:mb-0">
                                                <h1>Cook Time: {food.cook}</h1>
                                                <h1>Prep Time: {food.prep}</h1>
                                            </div>
                                            <button className="hover:rounded-none transition-all duration-100 ease-in-out active:border p-1 sm:p-2 lg:px-3 lg:py-2 sm:text-lg lg:text-xl gap-1 bg-gradient-pink border border-b-4 border-r-4 border-black rounded-lg text-white">
                                                More Info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </div>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}