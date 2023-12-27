import Image from "next/image";
import Link from "next/link";
import React from "react";

const social = [
  {
    href: "/",
    img: "/icons/facebook.png",
  },
  {
    href: "/",
    img: "/icons/insta.png",
  },
  {
    href: "/",
    img: "/icons/tiktok.png",
  },
]
export default function Navbar() {
  return (
    <nav
      className=" flex items-center gap-2 bg-white rounded-md  sm:py-1"
    >
      <Link href={"/"} className=" w-full flex items-center ">
        <Image
          src={"/logos/main-logo.png"}
          width={10000}
          height={10000}
          className="w-[70px] sm:w-[90px] sm:h-[70px] p-2"
          alt="main logo"
        />
        <p className=" sm:text-lg lg:text-xl">recipe-box</p>
      </Link>
      <div className=" w-full flex justify-end items-center mr-3 sm:mr-10">
        {
          social.map((item, i) => <Link href={item.href} key={i}>
            <Image
              src={item.img}
              width={40}
              height={40}
              alt={item.img}
            />
          </Link>)
        }
      </div>
    </nav>
  );
}
