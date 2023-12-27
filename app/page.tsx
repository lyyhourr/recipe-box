import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import AnimationText from "@/components/AnimationText";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex p-1 sm:p-2 lg:p-3 bg-[#000]  flex-col gap-1">
      <Navbar />
      <section className="flex flex-col sm:flex-row gap-1">
        <div className=" bg-white w-full rounded-md flex justify-between flex-col">
          <div className="w-full  h-full flex items-center justify-center sm:justify-start ">
            <p className="ml-2 md:ml-5 text-2xl  sm:text-5xl md:text-4xl lg:text-7xl xl:text-9xl text-center sm:text-start">
              Test{" "}
              <span>
                {" "}
                <AnimationText
                  texts={["hero text", "recipe-box", "hii"]}
                  duration={1000}
                />
              </span>
            </p>
          </div>
          <div className="flex justify-center  items-center sm:justify-start  ml-2 md:ml-5 my-3">
            <Button showArrow size="xl" bgColor="gradient-pink" radius="full" hover>
              Button
            </Button>
          </div>
        </div>
        <div className="bg-gradient-blue rounded-md py-2 px-3 ">
          <div className="bg-white rounded-full  flex items-center justify-center overflow-hidden">
            <Image
              src={"/images/cat-chef.png"}
              width={500}
              height={500}
              className="w-[350px] sm:w-[500px] md:w-[850px] "
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
  );
}
