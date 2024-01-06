import Button from '@/components/Button';
import FoodCard from '@/components/FoodCard';
import { inter, montserrat } from '@/font/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const FetchFood = async (id: any) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=3c374c59b2e74325892f07406d6c7793`)
        return res.json();
    } catch (e) {
        console.log(e)
    }
}

type CardProps = {
    id: number
    title: string
    img: string
    cook: string
}

export default async function page({ params }: { params: { catId: any } }) {
    // const foods = await FetchFood(params.catId)
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, , 11, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    // const foodsCard = (props:CardProps) => (
    //     <div className='border-2 border-black rounded-lg border-r-4 border-b-4 bg-white p-2'>
    //         <div className='h-[130px] sm:h-[170px] xl:h-[250px]'>
    //             <Image
    //                 alt=""
    //                 width={10000}
    //                 height={100000}
    //                 className="border-2 border-black rounded-lg w-full h-full bg-cover"
    //                 // src={"/images/popular/bacon-wrapped-tacos.jpg"}
    //                 src={props.img}
    //             />
    //         </div>
    //         <div className={`${inter.className} flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-8`}>
    //             <h1 className={`${montserrat.className} text-start text-lg md:text-2xl h-[30px] lg:h-[60px] xl:h-[80px] overflow-auto font-semibold border`}>asdfasdfasdfsadfasdfasdf</h1>
    //             <div className="flex lg:items-center justify-between lg:flex-row flex-col text-xs">
    //                 <div className="my-1 text-start lg:mb-0">
    //                     <h1 className='lg:text-lg text-gray-500'>Cook Time: <span className='text-green-500'>12 mn</span></h1>
    //                 </div>
    //                 <Link href={`/detail/${""}`}>
    //                     <Button size='xs' className='whitespace-nowrap' showArrow>More Info</Button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div className='m-3 '>
            <p className='text-center py-10 text-3xl'>title</p>
            <div className='grid gap-1 sm:gap-2 lg:gap-3    md:grid-cols-2 lg:grid-cols-3   w-full'>
                {arr.map((item, i) => <div
                    className="flex h-[110px]  sm:h-[160px] md:h-[190px] lg:h-[150px] gap-3 overflow-hidden shadow-xl rounded-xl"
                    key={i}
                >
                    <div className="w-4/5">
                        <Image
                            src={`/images/popular/bacon-wrapped-tacos.jpg`}
                            width={10000}
                            height={10000}
                            alt=""
                            className="h-full w-full"
                        />
                    </div>
                    <div className="py-1 w-full flex flex-col justify-between ">
                        <div className="flex h-[80px] flex-col">
                            <p className="text-lg  overflow-scroll">title</p>
                            <p className="text-gray-500 text-sm">ingred</p>
                        </div>
                        <div className="flex justify-end">
                            <Link href={`/detail/${""}`} className=" transition-all duration-100 ease-in-out text-green-500 px-2 hover:translate-x-1">
                                View Detail {`>`}
                            </Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
