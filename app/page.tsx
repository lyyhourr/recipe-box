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
      <section className="flex flex-col h-full sm:flex-row gap-1">
        <div className="bg-gray-200 py-5 w-full justify-between rounded-md flex flex-col bgre">
          <div className="w-full h-[120px] md:h-[300px] flex sm:justify-start border-2 ">
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
        <div className="rounded-md w-full p-5 lg:w-[1000px] bg-gradient-blue flex justify-center ">
          <div className="mx-auto text-sm flex flex-col justify-center gap-5">
            <div className="flex gap-1 flex-col text-xl md:text-5xl">
              <p>Discover Recipes</p>
              <p className="font-bold">Around The World</p>
            </div>
            <div className="">
              <p className={`${inter.className} lg:text-2xl text-lg tracking-wide`}>
                Discover a world of culinary delights at <br />
                <span className="font-bold underline underline-offset-4 decoration-2">
                  RECIPE-BOX
                </span>
                . Select your favorite ingredients. Elevate your cooking
                experience with ease and flavor.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-2/3 p-5 rounded-md bg-gradient-pink">
          <h1 className={`${montserrat.className} text-5xl`}>Popular Recipe</h1>
          <div className="flex py-10 justify-center">
            <PopularRecipe />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
