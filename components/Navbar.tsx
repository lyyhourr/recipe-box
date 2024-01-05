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
import { bigShoulderText, montserrat, roboto } from "@/font/font";

const links = [
  {
    path: '/',
    name: 'Home'
  }, {
    path: '/cook',
    name: 'Cook'
  }, {
    path: '/category',
    name: 'Category'
  }
]

export default function Navbar() {
  return (
    <nav
      className=" flex gap-2 justify-between items-center bg-white rounded-md "
    >
      <Link href={"/"} className="py-2 min-w-fit gap-3 px-3 border-black border-r-[3px] flex items-center ">
        <Image
          src={"/logos/main-logo.png"}
          width={10000}
          height={10000}
          className="w-[70px] sm:w-[90px] sm:h-[70px]"
          alt="main logo"
        />
        <p className={`${roboto.className} sm:text-lg uppercase whitespace-nowrap lg:text-xl`}>recipe-box</p>
      </Link>
      <div className="hidden lg:flex pr-10 gap-10">
        {links.map((link, index) => (
          <Link href={link.path} key={index} className="hover:opacity-75 font-normal transition-all duration-100 ease-in-out">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="pr-5 lg:hidden">
        <Menu />
      </div>
    </nav>
  );
}
