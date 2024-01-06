"use client";
import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    path:'/',
    name: 'Home'
  },{
    path:'/cook',
    name: 'Cook'
  },{
    path:'/category',
    name: 'Category'
  }
]

export default function Menu() {
  return (
    <Drawer>
      <DrawerTrigger className="border-2 border-black border-r-4 border-b-4 active:border-2 rounded-xl p-1 bg-white">
        <MenuIcon className="w-8 h-8 " />
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-screen h-screen rounded-3xl">
          <div className="justify-end flex m-5">
            <DrawerClose className="rounded-lg text-white px-3 py-1 bg-gradient-pink duration-500 hover:text-black border-2 border-black border-r-4 border-b-4 active:border-2 ">
              Close
            </DrawerClose>
          </div>
          <div className="flex text-3xl p-5 w-full flex-col gap-4">
            {links.map((link,index)=>(
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
