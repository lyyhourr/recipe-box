import Image from "next/image";
import Link from "next/link";
import React from "react";

import Menu from "./Menu";
import { bigShoulderText, montserrat, roboto } from "@/font/font";
import { Links } from "@/constant/const";

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
        {Links.map((link, index) => (
          link.subCategory ?
          <div className="relative py-2 group" key={index}>
            <div className="flex gap-[5px] items-center">
              <h1>{link.name}</h1>
              <svg viewBox="0 0 8 6" height={6} width={8}>
                <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="absolute hidden group-hover:grid grid-cols-2 px-6 py-4 top-10 gap-4 w-[250px] border-[3px] z-10 bg-white gap-x-5 right-0 border-black">
              {link.subCategory.map(sub=>(
                <Link className="text-normal hover:underline underline-offset-8 decoration-[3px] whitespace-nowrap" key={sub} href={`/${link.name === 'Cuisines' ? 'cuisine' : 'mealtype'}/${sub}`}>
                  {sub}
                </Link>
              ))}
            </div>
          </div> 
          :
          <Link href={link.path} key={index} className="hover:opacity-75 py-2 font-normal transition-all duration-100 ease-in-out">
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
