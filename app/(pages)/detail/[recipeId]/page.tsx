import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import YouMayLike from '@/components/pages/PageDetail/YouMayLike';
import { bigShoulderText, inter, montserrat } from '@/font/font';
import Image from 'next/image';
import React from 'react'
type FoodTypes = {
    [keys: string]: string | number | boolean | number[] | string[]
}

const FetchFood = async (id: any) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=3c374c59b2e74325892f07406d6c7793`)
        return res.json();
    } catch (e) {
        console.log(e)
    }
}
const FetchSimilarRecipe = async (id: any) => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=3c374c59b2e74325892f07406d6c7793`)
        return res.json();
    } catch (e) {
        console.log(e)
    }
}
export default async function page({ params }: { params: { recipeId: any } }) {
    const foods = await FetchFood(params.recipeId);
    const similarRecipes = await FetchSimilarRecipe(params.recipeId)

    return (

        <div className=' p-2 bg-black flex flex-col gap-1'>
            <Navbar />
            <section className='bg-white rounded-lg'>
                <div className='w-full gap-6 px-2 md:px-5 flex flex-col lg:flex-row lg:justify-center  bg-white rounded-lg border-b-2 pb-7 mb-5 py-5'>
                    <Image
                        src={foods.image}
                        width={10000}
                        height={10000}
                        alt=''
                        className='w-[450px] h-[350px] bg-cover'
                    />
                    <div className={`${montserrat.className} text-lg text-start flex flex-col gap-5 mx-auto `}>
                        <p className={`${bigShoulderText.className} text-5xl lg:text-7xl`}>{foods.title}</p>
                        <p>Cooking Time : <span className='text-green-500'> {foods.readyInMinutes} minutes </span></p>
                        <p>Very Healthy : {foods.veryHealthy ? "✅" : "❌"} &nbsp; | &nbsp; Vegetarian : {foods.vegetarian  ? "✅" : "❌"} &nbsp; | &nbsp; Vegan : {foods.vegan ? "✅" : "❌"}</p>
                        <div className=''>

                            <p className='text-2xl mb-1'>Summary :</p>
                            <div className='text-base text-gray-600 lg:w-[90%] mr-auto overflow-y-scroll h-[170px] lg:h-[125px]' dangerouslySetInnerHTML={{ __html: foods.summary }}>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-1 py-8 w-[90%] mx-auto sm:w-[95%] lg:w-full'>
                    <div className='w-full'>
                        <p className={`${inter.className} uppercase text-center text-3xl mb-5`}>Ingredients</p>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 py-5  gap-y-6">
                            {
                                foods.extendedIngredients.map((item: any, i: number) => (
                                    <div className='flex  justify-between lg:flex-col  items-center my-1 py-2 lg:py-0 lg:border-none border-b-2 lg:my-0 lg:justify-center ' key={i}>
                                        <Image
                                            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                                            width={10000}
                                            height={10000}
                                            className='w-[80px] h-[100px]'
                                            alt={item.name}
                                        />
                                        <p>{item.name}</p>
                                        <p className='text-gray-500 text-sm'>Amount: {item.amount}{item.measures.metric.unitShort}</p>
                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <div className="w-full text-start md:pr-5">
                        <p className={`${inter.className} text-3xl text-center mb-5 uppercase underline`}>Instruction</p>
                        <div className='flex flex-col gap-6 '>
                            {foods.analyzedInstructions.map((instruc: { steps: any[]; }) => instruc.steps.map((item: any, i: number) => (
                                <p key={i}><span className='mr-2'> STEP{item.number} : </span> {item.step}</p>
                            )))
                            }
                        </div>
                    </div>
                </div>

            </section>
            <section className=' bg-white gap-5 p-5 rounded-lg'>
                <YouMayLike similarRecipes={similarRecipes}/>
            </section>
            <Footer/>
        </div>
    )
}
