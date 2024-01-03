import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import AnimationText from "@/components/AnimationText";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PopularRecipe from "@/components/PopularRecipe";
import { inter, lato, montserrat } from "@/font/font";

export default function Home() {
  return (
    <main className="flex p-1 h-full sm:p-2  lg:p-3 bg-[#000] flex-col gap-1">
      <Navbar />
      <section className="flex flex-col h-full lg:flex-row gap-1">
        <div className="bg-gray-200  py-5 w-full bg-cover relative justify-between rounded-md flex flex-col max-md:bg-[url('/images/hero-bg.jpg')]">
          <div className="w-full h-[120px] md:h-[300px] flex sm:justify-start  ">
            <p className={`${montserrat.className} ml-2 md:ml-5 text-4xl sm:text-5xl  xl:text-7xl  sm:text-start`}>
              We Help You Find{" "}
              <span className="leading-tight">
                <AnimationText
                  texts={[
                    "New Food",
                    "What To Cook",
                    "Maybe Your New Favorite Food?",
                  ]}
                  duration={1000}
                />
              </span>
            </p>
          </div>
          <div className="flex md:pb-10 sm:justify-start ml-2 md:ml-5 my-3">
            <Link href={"/cook"} className={lato.className}>
              <Button
                hover
                showArrow
                uppercase
                size="lg"
                textColor="black"
                radius="full"
              >
                Cook Now
              </Button>
            </Link>
          </div>
          {/* <Image
            alt=""
            // src={'/images/cambodian-chef.png'}
            // src={'/images/family-eating.png'}
            src={'/images/equipment.png'}
            // src={'/images/cartoon-eating.png'}
            width={10000}
            height={10000}
            className="absolute z-0 w-[450px] h-[450px] bottom-10 right-10 heroImg"
          /> */}
        </div>
        <div className="bg-gradient-blue hidden lg:block rounded-md py-2 px-3 ">
          <Image
            src={"/images/hero-chef.png"}
            width={500}
            height={500}
            className="w-[350px] sm:w-[500px] md:w-[850px] heroImg "
            alt="hero image"
          />
        </div>
      </section>
      <section className="flex lg:flex-row flex-col gap-1 relative">
        <div className="rounded-md relative w-full p-5 lg:w-[1000px] text-white bg-gradient-blue flex justify-center bg-[url('/images/cosmic-earth.jpg')] bg-fixed">
          <div className="mx-auto text-sm flex flex-col justify-center">
            <div className="flex gap-1 text-xl md:text-5xl">
              <p>Discover Recipes <br className="hidden lg:flex " /> <span className="font-bold">Around The World</span></p>
            </div>
            <div className="mt-5">
              <p className={`${inter.className} lg:text-2xl text-lg tracking-wide`}>
                Discover a world of culinary delights at <br className="hidden lg:flex" />
                <span className="font-bold underline underline-offset-4 decoration-2">
                  RECIPE-BOX
                </span>
                . Select your favorite ingredients. Elevate your cooking
                experience with ease and flavor.
              </p>
            </div>
            {/* <Image
              src={"/images/Globe.png"}
              width={10000}
              height={10000}
              alt=""
              className="w-[200px] h-[200px] absolute top-0 left-1"
            />
            <Image
              src={"/images/meditate.png"}
              width={10000}
              height={10000}
              alt=""
              className="w-[150px] h-[150px] absolute bottom-0 right-1"
            />
            <Image
              src={"/images/man.png"}
              width={10000}
              height={10000}
              alt=""
              className="w-[120px] h-[70px] absolute bottom-0 left-1"
            /> */}
            {/* <div className="w-2/3 md:-mt-10">
              <Image 
              src={'/images/Globe.png'}
              alt=""
              width={10000}
              height={10000}
              className="w-full"
              />
            </div> */}
          </div>
        </div>
        <div className="lg:w-2/3 p-5 rounded-md relative bg-cover   bg-[url('/images/hero-bg.jpg')]">
          <h1 className={`${montserrat.className} text-white tracking-tighter text-5xl`}>Popular Recipe</h1>
          <div className="flex py-10 justify-center">
            <PopularRecipe />
          </div>
          <Image
            src={'/images/Star Purple.png'}
            alt=""
            width={80}
            height={80}
            className="absolute top-8 right-0 md:right-10"
          />
          <Image
            src={'/images/cat-chef.png'}
            alt=""
            width={200}
            height={10000}
            className=" hidden md:block absolute bottom-0 left-0"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
