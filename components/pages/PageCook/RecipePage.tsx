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

export default function RecipePage(props: RecipePageProps) {
  const [selectedOption, setSelectedOption] = useState("")
  function handleSelectedOption(name: string) {
    setSelectedOption(name)
  }

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
        <IoSearch className="w-7 h-7 text-gray-500" />
        <input
          type="text"
          className="outline-none text-lg w-[95%]"
          placeholder="find foods recipes"
        />
      </div>

      <div className='bg-white rounded-xl w-[99%] mx-auto h-[500px]'>


        <div className='flex items-center gap-5 pt-3 px-5  flex-wrap mb-2  pb-5'>
          {
            options.slice(0, 7).map((opt, i) => (
              <div key={i}>
                <Button className={cn(selectedOption === opt ? "text-white bg-green-500" : "text-black bg-white")} size='xs'
                  onClick={() => handleSelectedOption(`${opt}`)}>{opt}</Button>
              </div>
            ))
          }
        </div>
        <p className='text-xl pl-3'>Total Recipes: 0000</p>

        {/* <div className='flex justify-between items-center'>
          <div></div>
          <div></div>
          <div></div>
        </div> */}

      </div>


    </div >
  )
}
