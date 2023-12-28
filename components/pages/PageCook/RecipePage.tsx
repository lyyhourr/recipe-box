"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../../Button'
import { IoSearch } from 'react-icons/io5'
import Image from 'next/image'
import Menu from '../../Menu'
import { cn } from '@/lib/utils'

interface RecipePageProps {
  setSwitchSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const options = ["minCarbs", "maxCarbs", "minProtein", "minCalories", "maxCalories", "minFat", "maxFat", "minCholesterol", "maxCholesterol", , "minVitaminC", "maxVitaminC", "minVitaminD", "maxVitaminD", "minIron", "maxIron"]

interface FoodDataTypes {
  id: number,
  image: string,
  imageType: string,
  title: string
}

export default function RecipePage(props: RecipePageProps) {
  const [selectedOption, setSelectedOption] = useState("")

  const [foodData, setFoodData] = useState<FoodDataTypes[]>([])

  function handleSelectedOption(name: string) {
    setSelectedOption(prev => prev === name ? "" : name)
  }

  const [userQuery, setUserQuery] = useState("")

  // useEffect(() => {
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a99837b3caa74821bcff69aea9938e44&query=${userQuery}&number=20`)
  //     .then(res => res.json())
  //     .then(data => userQuery?.length > 0 && setFoodData(data.results))
  // }, [userQuery])

  console.log(foodData)
  return (
    <div className="w-full  mt-7 ">
      <div className="flex w-[95%] mx-auto items-center justify-between   rounded-lg">
        <div className='hidden lg:block'>
        </div>
        <Button bgColor="white" className='lg:hidden'
          onClick={() => props.setSwitchSearch(true)}>
          Back
        </Button>
        <Link
          href={"/"}
          className="flex justify-center gap-2 items-center "
        >
          <Image
            src={"/logos/main-logo.png"}
            width={10000}
            height={10000}
            className="w-[70px] h-[60px]"
            alt="main logo"
          />
          <p className="text-2xl text-black uppercase  ">recipes-box</p>
        </Link>
        <Menu />
      </div>
      <p className="text-center">You can make xxxx recipes</p>
      <div className="bg-white  w-[95%] mx-auto flex pl-4 py-2 items-center gap-2 my-2     rounded-lg ">
        <IoSearch className="w-7 h-7 text-gray-500 " />
        <input
          type="text"
          className="outline-none text-lg w-[95%]"
          placeholder="find foods recipes"
          onChange={(e) => setUserQuery(e.target.value)}
        />
      </div>
      <div className='bg-white rounded-t-2xl'>
        <div className='flex items-center gap-1 lg:gap-5 pt-3 px-5  flex-wrap mb-2  pb-5'>
          {
            options.slice(0, 6).map((opt, i) => (
              <div key={i}>
                <Button className={cn(selectedOption === opt ? "text-white bg-green-500" : "text-black bg-white")} size='xs'
                  onClick={() => handleSelectedOption(`${opt}`)}>{opt}</Button>
              </div>
            ))
          }
        </div>
        <p className='text-xl pl-3'>Total Recipes: 0000</p>
        <div className="overflow-auto">

          <div className='grid grid-cols-1 sm:grid-cols-2 p-3 xl:grid-cols-3  h-[630px] overflow-auto  gap-2 lg:gap-4 my-3 mx-2'>
            {/* {
              foodData.length > 1 && foodData.map((food, i) => (

                <div className='flex  items-center   shadow-2xl border-2 border-black rounded-md ' key={i}>
                  <div className='w-2/3 border-r-2 border-black h-full'>
                    <Image
                      src={food.image}
                      width={10000}
                      height={10000}
                      alt=''
                      className='w-full h-full bg-cover '
                    />
                  </div>
                  <div className='p-2 w-full flex flex-col gap-8'>
                    <div className='flex flex-col'>
                      <p className='text-xl'>{food.title}</p>
                      <p className='text-gray-600'>ingred</p>
                    </div>
                    <div className='flex justify-end'>

                      <button className='bg-white text-black px-4 py-[1px] rounded-md border-2 border-black border-r-4 border-b-4 active:border'>View Detail</button>
                    </div>
                  </div>
                </div>
              ))
            } */}
          </div>
        </div>
      </div>
    </div>



  )
}
