import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { bigShoulderText } from '@/font/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const FetchFood = async (params: string) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a99837b3caa74821bcff69aea9938e44&type=${params}&number=30`)
        return res.json();
    } catch (e) {
        console.log(e)
    }
}

export default async function page({ params }: { params: { mealTypeQuery: any } }) {
    const foods = await FetchFood(params.mealTypeQuery)
    return (
        <div className='bg-black p-1 lg:p-2 flex flex-col gap-1'>
            <Navbar />
            <main className='w-full  bg-white rounded-md flex flex-col '>
                <div className='mx-2 sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1250px] sm:mx-auto mb-9'>

                    <section className='my-6 flex flex-col gap-3 '>
                        <p className={`${bigShoulderText.className} text-4xl lg:text-6xl `}>Top 30 easy {params.mealTypeQuery} recipes</p>
                        <p className='text-gray-400 text-sm lg:text-base w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore atque non impedit quia quam corporis et earum laborum sed, eius temporibus vero perspiciatis dolorum eveniet quasi molestias repellendus quod perferendis.</p>
                    </section>
                    <section className='grid lg:grid-cols-2 gap-x-20 gap-y-10'>
                        {

                            foods.results.map((food: any, i: number) => (
                                <div className=' flex flex-col gap-2' key={i}>
                                    <Image
                                        width={10000}
                                        height={10000}
                                        alt=''
                                        src={food.image}
                                        className='w-full h-full lg:h-[330px] xl:h-[370px]'
                                    />
                                    <div className='flex  items-center justify-between'>
                                        <p className=' text-lg '><span className='bg-green-400 rounded-full px-[9px] text-lg text-white'>{i + 1}</span> {food.title}</p>
                                        <Link href={`/detail/${food.id}`} className='text-green-400 mr-2 hover:mr-0 transition-all text-end w-[170px]'>View Detail <span>{'>'}</span></Link>
                                    </div>
                                    <p className='text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis aliquam inventore minus molestias quod non. Quas, dolor hic labore, dolores possimus cumque ipsam ipsa consequatur debitis consectetur at corporis.  </p>
                                </div>
                            ))
                        }
                    </section>
                </div>
            </main>
            <Footer />
        </div >
    )
}
