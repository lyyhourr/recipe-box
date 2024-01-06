"use client";

import React, { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Links } from "@/constant/const";
import { cn } from "@/lib/utils";

export default function Menu() {

  const [isOpen,setIsOpen] = useState(-1)

  const handleSelect = (n:number) => {
    if(n === isOpen)
      setIsOpen(-1)
    else
      setIsOpen(n)
  }

  return (
    <Drawer>
      <DrawerTrigger className="border-2 border-black border-r-4 border-b-4 active:border-2 rounded-xl p-1 bg-white">
        <MenuIcon className="w-8 h-8 " />
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-screen overflow-auto h-screen rounded-3xl">
          <div className="justify-end flex m-5">
            <DrawerClose className="rounded-lg text-white px-3 py-1 bg-gradient-pink duration-500 hover:text-black border-2 border-black border-r-4 border-b-4 active:border ">
              Close
            </DrawerClose>
          </div>
          <div className="flex text-3xl h-screen px-5 w-full flex-col gap-4">
            {Links.map((link,index)=>(
              link.subCategory 
              ? 
              <button onClick={()=>handleSelect(index)} key={index} className="transition-all text-start duration-100 ease-in-out">
                <div className="flex items-center gap-2">
                  {link.name}
                  <svg className={cn("transition-all text-start duration-100 ease-in-out",{"rotate-180":index === isOpen})} viewBox="0 0 8 6" height={12} width={14}>
                  <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={cn("max-h-0 overflow-hidden flex flex-col gap-5",{'max-h-fit my-1 py-3 mx-5' : isOpen === index})}>
                    {link.subCategory.map(sub=>(
                      <Link className="hover:underline underline-offset-8 text-2xl decoration-4" key={sub} href={`${link.name === 'Cuisines' ? 'cuisine' : 'mealtype'}/${sub}`}>{sub}</Link>
                    ))}
                </div>
              </button>
              :
              <Link href={link.path} key={index} className="hover:opacity-75 font-normal transition-all duration-100 ease-in-out">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
