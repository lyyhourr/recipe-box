import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react";
import { SlClose } from "react-icons/sl";
import Menu from "./Menu";
// const social = [
//   {
//     href: "/",
//     img: "/icons/facebook.png",
//   },
//   {
//     href: "/",
//     img: "/icons/insta.png",
//   },
//   {
//     href: "/",
//     img: "/icons/tiktok.png",
//   },
// ]
export default function Navbar() {
  return (
    <nav
      className=" flex gap-2 bg-white rounded-md"
    >
      <Link href={"/"} className="py-2 min-w-fit gap-3 px-3 border-black border-r-[3px] flex items-center ">
        <Image
          src={"/logos/main-logo.png"}
          width={10000}
          height={10000}
          className="w-[70px] sm:w-[90px] sm:h-[70px]"
          alt="main logo"
        />
        <p className="sm:text-lg uppercase whitespace-nowrap lg:text-xl">recipe-box</p>
      </Link>
      <div className=" w-full flex justify-end items-center mr-3 sm:mr-10">
        {/* <Drawer>
          <DrawerTrigger className="border-2 border-black border-r-4 border-b-4 active:border-2 rounded-xl p-1 ">
            <MenuIcon className="w-8 h-8 " />
          </DrawerTrigger>
          <DrawerContent>
            <div className="w-screen h-screen rounded-3xl">
              <div className="justify-end flex m-5">
                <DrawerClose className="rounded-lg text-white px-3 py-2 bg-gradient-pink duration-500 hover:text-black border-2 border-black border-r-4 border-b-4 active:border-2 ">
                  Close
                </DrawerClose>
              </div>
              <p className="text-center text-3xl">
                Drawer Contents
              </p>
            </div>
          </DrawerContent>
        </Drawer> */}
        <Menu />
      </div>
    </nav>
  );
}
