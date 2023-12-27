import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import AnimationText from "@/components/AnimationText";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex p-1 h-full sm:p-2 lg:p-3 bg-[#000]  flex-col gap-1">
      <Navbar />
      <section className="flex flex-col sm:flex-row gap-1">
        <div className=" bg-gray-100 w-full rounded-md flex justify-between flex-col">
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
      <section className="flex lg:flex-row flex-col gap-1">
        <div className=" rounded-md w-full lg:w-[1000px] bg-gradient-blue flex items-center justify-center ">
          <div className="mx-auto text-sm lg:w-4/5 p-2 flex-col gap-5">
            <p className="sm:text-xl md:text-3xl  lg:text-4xl "><span className="text-gray-700 whitespace-nowrap">Discover </span><span className="font-bold">100K+</span> Recipes</p>
            <p className="">
            Discover a world of culinary delights at [Your Website Name]. Select your favorite ingredients. Elevate your cooking experience with ease and flavor.
            </p>
          </div>
        </div>
        <div className="w-full rounded-md  bg-gradient-pink">
          <p className="py-10">Popular Recipes</p>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
