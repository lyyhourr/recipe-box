import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { IoArrowBack, IoSearch } from 'react-icons/io5'
import Image from 'next/image'
import Menu from './Menu'

interface RecipePageProps {
  setSwitchSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RecipePage(props: RecipePageProps) {
  return (
    <div className="w-[95%] mx-auto mt-7 ">
      <div className="flex items-center justify-between   rounded-lg">
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
      <div className="bg-white w-full flex pl-4 py-2 items-center gap-2 my-2     rounded-lg ">
        <IoSearch className="w-7 h-7 text-gray-500" />
        <input
          type="text"
          className="outline-none text-lg w-[95%]"
          placeholder="find foods recipes"
        />
      </div>

    </div>
  )
}
