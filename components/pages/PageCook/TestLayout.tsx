import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
interface RecipePageProps {
  setSwitchSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function TestLayout(props: RecipePageProps) {
  return (
    <div className="w-full h-screen overflow-">
      <div className="flex flex-col gap-1 mt-5  ">
        <div className="flex w-[95%] mx-auto items-center justify-between  rounded-lg">
          <div className="hidden lg:block"></div>
          <Button
            bgColor="white"
            className="lg:hidden"
            onClick={() => props.setSwitchSearch(true)}
          >
            Back
          </Button>
          <Link href={"/"} className="flex justify-center gap-2 items-center ">
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
          />
        </div>
      </div>

      <div className="m-2 h-[73%] overflow-auto border border-black">
        <div className="bg-red-500 w-10 h-[300px] my-2"></div>
        <div className="bg-red-500 w-10 h-[300px] my-2"></div>
        <div className="bg-red-500 w-10 h-[300px] my-2"></div>
        <div className="bg-red-500 w-10 h-[300px] my-2"></div>
        <div className="bg-red-500 w-10 h-[300px] my-2"></div>
      </div>
    </div>
  );
}
