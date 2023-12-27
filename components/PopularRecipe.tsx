'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React from 'react'
import Button from "./Button";

const PopularFoods = [{
    name: 'Spicy beef and bean nachos',
    img: '',
    cook: '25mn',
    prep: '10mn'
}]

export default function PopularRecipe() {

    return (
        <Carousel className=''>
            <div className="overflow-hidden w-[250px] ">
                <CarouselContent className=' border-2 border-black'>
                    <CarouselItem className='flex basis-1/2 items-center justify-center py-3'>
                        <div className=' border-2 border-black rounded-lg border-r-4 border-b-4 bg-white p-2'>
                            <Image
                                alt=""
                                width={10000}
                                height={100000}
                                className="w-[200px] h-[150px] sm:w-[300px] sm:h-[200px]  border-2 border-black rounded-lg"
                                src={'/images/popular/spicy-beef-and-bean-nachos-106528-1.jpeg'}
                            />
                            <div className="flex flex-col text-2xl gap-1">
                                <h1 className="font-bold">Spicy Beef</h1>
                                <div className="flex items-center justify-between text-xs">
                                    <div>
                                        <h1>Cook Time: {25}mn</h1>
                                        <h1>Prep Time: {10}mn</h1>
                                    </div>
                                    <Button size="sm">
                                        More Info
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>


                </CarouselContent>
            </div>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext />
        </Carousel>
    )
}
