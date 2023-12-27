"use client"
import Button from '@/components/Button'
import Menu from '@/components/Menu'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";

const ingredients = [
    {
        title: "pantryEssentials",
        image: "/images/ingredients/pantry-essentials.png",
        data: ['Flour',
            'Sugar',
            'Salt',
            'Pepper',
            'Olive Oil',
            'Vegetable Oil',
            'Balsamic Vinegar',
            'Soy Sauce',
            'Honey',
            'Maple Syrup',
            'Rice',
            'Pasta',
            'Canned Tomatoes',
            'Tomato Sauce',
            'Canned Beans',
            'Lentils',
            'Quinoa',
            'Oats',
            'Cereal',
            'Peanut Butter',
            'Jam',
            'Canned Tuna',
            'Canned Salmon',
            'Chicken Broth',
            'Beef Broth',
            'Dried Herbs',
            'Spices',
            'All-Purpose Seasoning',
            'Onions',
            'Garlic',
            'Potatoes',
            'Canned Vegetables',
            'Frozen Vegetables',
            'Milk',
            'Eggs',
            'Cheese',
            'Butter',
            'Bread'],
    },
    {
        title: "Vegetables & Greens",
        image: "/images/ingredients/vegetables.png",
        data: ["Broccoli",
            "Spinach",
            "Carrot",
            "Kale",
            "Cucumber",
            "Bell Pepper",
            "Tomato",
            "Lettuce",
            "Cabbage",
            "Cauliflower",
            "Zucchini",
            "Radish",
            "Eggplant",
            "Asparagus",
            "Brussels Sprouts",
            "Green Beans",
            "Peas",
            "Sweet Potato",
            "Onion",
            "Garlic",
            "Ginger",
            "Leek",
            "Artichoke",
            "Celery",
            "Pumpkin",
            "Butternut Squash",
            "Chard",
            "Beet",
            "Turnip",
            "Collard Greens",
            "Romaine Lettuce",
            "Arugula",
            "Watercress",
            "Okra",
            "Cilantro",
            "Parsley",
            "Dill",
            "Mint",
            "Thyme",
            "Rosemary",
            "Basil",
            "Chives",
            "Coriander",
            "Sage",
            "Oregano",
            "Fennel",
            "Mustard Greens",
            "Water Spinach"],
    },
    {
        title: "Fruits",
        image: "/images/ingredients/fruits-img.png",
        data: ['Apple',
            'Banana',
            'Orange',
            'Grapes',
            'Strawberry',
            'Watermelon',
            'Pineapple',
            'Mango',
            'Kiwi',
            'Blueberry',
            'Peach',
            'Cherry',
            'Pear',
            'Plum',
            'Raspberry',
            'Apricot',
            'Avocado',
            'Pomegranate',
            'Cranberry',
            'Coconut']
    }

];


type SelectedIngredientsType = {
    index: number
    name: string
}
export default function CookPage() {
    const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredientsType[]>([])

    return (
        <main className='flex justify-center h-screen bg-black p-1 gap-1'>
            <div className='flex flex-col gap-1 w-full lg:w-1/2 rounded-lg bg-gradient-pink'>
                <div className='m-2 p-2 flex flex-col gap-3'>
                    <div className='flex items-center justify-between   rounded-lg'>
                        <Link href={"/"}>
                            <Button bgColor='white'><IoArrowBack className="w-6 h-6 duration-300 hover:-translate-x-1" /></Button>
                        </Link>
                        <Link href={"/"} className='flex justify-center gap-2 items-center w-[170px]'>
                            <Image
                                src={"/logos/main-logo.png"}
                                width={10000}
                                height={10000}
                                className='w-[60px] h-[50px]'
                                alt='main logo'
                            />
                            <p className='text-sm uppercase text-white '>recipes-box</p>
                        </Link>
                        <Menu />
                    </div>
                    <div className='bg-white w-full flex pl-4 py-2 items-center gap-2  rounded-lg '>
                        <Search className='w-7 h-7 text-gray-500' />
                        <input type="text" className='outline-none text-lg' placeholder='search your ingredients ' />
                    </div>
                </div>
                <div className='h-full  w-full bg-white p-2 rounded-3xl overflow-auto '>
                    <div className='mt-3 w-[95%] mx-auto flex flex-col gap-10 '>
                        {
                            ingredients.map((item, i) => (
                                <div className='shadow-xl rounded-xl ' key={i}>
                                    <div className='border-b border-gray-500'>
                                        <div className=' flex items-center justify-center gap-3'>
                                            <Image
                                                src={item.image}
                                                width={10000}
                                                height={10000}
                                                alt='ingredient image'
                                                className='w-[60px] h-[60px]'
                                            />
                                            <p className='text-center py-3 text-xl'>{item.title}</p>
                                        </div>
                                        <p className='text-center text-gray-600 text-xl py-1'>  {selectedIngredients.length}  / {item.data.length} Ingredients</p>
                                    </div>
                                    <div className='flex gap-2 flex-wrap w-[95%] h-[250px] overflow-auto py-3 mx-auto'>
                                        {item.data.map((ingred, idx) => (<button className={` px-3 py-1 rounded-md text-gray-500 bg-gray-200 `} key={idx}>{ingred}</button>))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1 w-0  lg:w-full h-full  bg-gray-100 rounded-lg'>
                <p className='text-center mt-[300px] text-3xl'>food query results</p>
            </div>

        </main>
    )
}
