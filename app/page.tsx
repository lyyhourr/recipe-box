import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-1 sm:p-2 lg:p-3 bg-[#000]  flex-col gap-1">
      <nav className=" flex items-center gap-2 bg-white rounded-md text-center ">
        <Link href={"/"} className=" w-2/3 sm:w-1/3 lg:w-1/5 flex items-center ">
          <Image
            src={"/logos/main-logo.png"}
            width={10000}
            height={10000}
            className="w-[60px] sm:w-[90px] sm:h-[70px] p-2"
            alt="main logo"
          />
          <p className="text-xs">logo title</p>
        </Link>
        <div className=" w-full ">right-nav</div>
      </nav>
      <section className="flex flex-col sm:flex-row gap-1">
        <div className=" bg-white w-full rounded-md flex justify-evenly  flex-col">
          <p className=" sm:w-4/5 ml-2 md:ml-5 text-lg sm:text-xl md:text-4xl lg:text-5xl ">Animation Text</p>
          <div className="flex justify-center sm:justify-start  ml-2 md:ml-5 my-2 sm:my-0">
            <button className="bg-gradient-pink uppercase rounded-full text-sm sm:text-lg  py-1 px-2 sm:py-2 sm:px-5 ">button</button>
          </div>
        </div>
        <div className="bg-gradient-blue rounded-md py-2 px-3 ">
          <div className="bg-white rounded-full  flex items-center justify-center overflow-hidden">
            <Image
              src={"/images/cat-chef.png"}
              width={500}
              height={500}
              className="w-[200px] sm:w-[550px]"
              alt="hero image"
            />
          </div>
        </div>
      </section>
      <section className=" flex gap-1 text-center">
        <div className=" bg-white w-1/2 rounded-md bg-gradient-blue">
          <p className=" py-10"> total recipes</p>
        </div>
        <div className=" bg-white w-full rounded-md bg-gradient-pink">
          <p className=" w-4/5  py-10">Popular Recipes</p>
        </div>
      </section>
    </main>

  )
}
