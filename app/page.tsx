import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import AnimationText from "@/components/AnimationText";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex p-1 sm:p-2 lg:p-3 bg-[#000]  flex-col gap-1">
      <Navbar />
      <section className="flex flex-col sm:flex-row gap-1">
        <div className=" bg-white w-full rounded-md flex justify-between flex-col">
          <div className="w-full  h-full flex items-center  sm:justify-start ">
            <p className="ml-2 md:ml-5 text-4xl h-[100px] sm:h-auto  sm:text-5xl   xl:text-8xl  sm:text-start">
              Are you {" "}
              <span className="leading-tight">
                <AnimationText
                  texts={["looking for new food ?", "dont know what to cook ?"]}
                  duration={1000}
                />
              </span>
            </p>
          </div>
          <div className="flex justify-center  items-center sm:justify-start  ml-2 md:ml-5 my-3">
            <Link href={"/"}>
              <Button hover showArrow uppercase size="lg" textColor="black" radius="full">
                Cook Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-blue rounded-md py-2 px-3 ">
          <Image
            src={"/images/hero-chef.png"}
            width={500}
            height={500}
            className="w-[350px] sm:w-[500px] md:w-[850px] heroImg "
            alt="hero image"
          />
        </div>
      </section>
      <section className="grid grid-cols-3 gap-1">
        <div className=" rounded-md bg-gradient-blue w-full flex items-center justify-center ">
          <p className="text-center   sm:text-xl md:text-3xl  lg:text-4xl "><span className="text-gray-700">Discover </span><span className="font-bold">100K+</span> Recipes</p>
        </div>
        <div className="w-full rounded-md bg-gradient-pink col-span-2">
          <p className="py-10">Popular Recipes</p>
        </div>
      </section>
    </main>
  );
}
