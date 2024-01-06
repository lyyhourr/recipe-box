import Button from '@/components/Button';
import FoodCard from '@/components/FoodCard';
import Navbar from '@/components/Navbar';
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
        <div className='bg-black p-1 lg:p-2 flex flex-col gap-1'>
            <Navbar />
            <main className='w-full  bg-white rounded-md'>
                <section className='flex gap-20 py-5 justify-center items-center'>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                    <Link href={""}>category</Link>
                </section>
                <section className='flex flex-col items-center justify-center w-full border-2'>
                    <div className='w-[650px] flex flex-col gap-2 my-4'>
                        <Image
                            width={10000}
                            height={10000}
                            alt=''
                            src={"/images/popular/bacon-wrapped-tacos.jpg"}
                            className='full h-[450px] '
                        />
                        <p>title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis aliquam inventore minus molestias quod non. Quas, dolor hic labore, dolores possimus cumque ipsam ipsa consequatur debitis consectetur at corporis.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}
