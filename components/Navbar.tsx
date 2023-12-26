import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <Link
      href={"/"}
      className=" flex items-center gap-2 bg-white rounded-md text-center py-2 sm:py-3"
    >
      <div className=" w-2/3 sm:w-1/3 lg:w-1/5 flex items-center ">
        <Image
          src={"/logos/main-logo.png"}
          width={10000}
          height={10000}
          className="w-[60px] sm:w-[90px] sm:h-[70px] p-2"
          alt="main logo"
        />
        <p className="text-xs sm:text-lg lg:text-xl">logo title</p>
      </div>
      <div className=" w-full ">right-nav-content</div>
    </Link>
  );
}
