'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React from 'react'
import Button from "./Button";

const PopularFoods = [{
    name:'Spicy beef and bean nachos',
    img:'',
    cook:'25mn',
    prep:'10mn'
}]

export default function PopularRecipe() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="lg:basis-1/2">
                    <div className="w-[20rem] lg:w-[25rem] border-2 border-black flex flex-col gap-2 rounded-lg border-r-4 border-b-4 bg-white p-2">
                        <div className="border-2 border-black">
                            <Image
                            alt=""
                            width={10000}
                            height={10000}
                            className="w-full bg-cover"
                            src={'/images/popular/spicy-beef-and-bean-nachos-106528-1.jpeg'}
                            />
                        </div>
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
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
