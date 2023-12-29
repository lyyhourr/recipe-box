import Button from "@/components/Button";
import Menu from "@/components/Menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
interface RecipePageProps {
  setSwitchSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FoodDataTypes {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
const options = [
  "minCarbs",
  "maxCarbs",
  "minProtein",
  "minCalories",
  "maxCalories",
  "minFat",
  "maxFat",
  "minCholesterol",
  "maxCholesterol",
];
export default function RecipePage(props: RecipePageProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(true)
  const [foodData, setFoodData] = useState<FoodDataTypes[]>([]);
  const [userQuery, setUserQuery] = useState("");


  const optionButtons = options.slice(0, 6).map((opt, i) => (
    <div key={i}>
      <Button
        className={cn(
          selectedOption === opt
            ? "text-white bg-green-500 border"
            : "text-black bg-white"
        )}
        size="landscape"
        onClick={() => handleSelectedOption(`${opt}`)}
      >
        {opt}
      </Button>
    </div>
  ))

  function QueryFood() {

    selectedOption.length > 0
      ? fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=3c374c59b2e74325892f07406d6c7793&${selectedOption}=${userQuery}`).then((res) => res.json())
        .then((data) => setFoodData(data))
      : fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c374c59b2e74325892f07406d6c7793&q=${userQuery}`
      ).then((res) => res.json())
        .then((data) => setFoodData(data.results));
  }
  function handleSelectedOption(name: string) {
    setSelectedOption((prev) => (prev === name ? "" : name));
  }

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-1 mt-5  ">
        <div className="flex w-[95%] mx-auto items-center justify-between  rounded-lg">
          <div className="hidden lg:block"></div>
          <Button
            bgColor="white"
            className="lg:hidden"
            onClick={() => props.setSwitchSearch(true)}
          >
            Back
          </Button>
          <Link href={"/"} className="flex justify-center gap-2 items-center ">
            <Image
              src={"/logos/main-logo.png"}
              width={10000}
              height={10000}
              className="w-[70px] h-[60px]"
              alt="main logo"
            />
            <p className="text-2xl text-black uppercase  ">recipes-box</p>
          </Link>
          <Menu />
        </div>
        <p className="text-center">You can make xxxx recipes</p>
        <div className="bg-white  w-[95%] mx-auto flex pl-4 py-2 items-center gap-2 my-2     rounded-lg ">
          <IoSearch className="w-7 h-7 text-gray-500 " />
          <input
            type={selectedOption ? "number" : "text"}
            className="outline-none text-lg w-[95%]"
            placeholder={selectedOption ? `Enter ${selectedOption} (0 - 100)` : 'find foods recipes'}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <Button className="bg-white text-black mr-2" size="landscape"
            onClick={QueryFood}
          >Search</Button>
        </div>
      </div>

      <div className="m-2 h-[77%] px-2 bg-white rounded-2xl p-2 lg:p-0">
        <div className="flex gap-3 items-center ">
          <Button className="bg-white text-black  lg:hidden pt-1" size="landscape" showArrow={!showOptions} onClick={() => setShowOptions(p => !p)}>{showOptions ? "Close" : "Filter"}</Button>
          <div className={`flex lg:hidden gap-1 overflow-auto ${showOptions ? " translate-x-0" : " translate-x-[-200%]"}`}>
            {optionButtons}
          </div>
        </div>
        <div className={`hidden lg:flex items-center transition-all duration-75 ease-in-out gap-1 lg:gap-2 xl:gap-4 pt-3 px-5 flex-wrap mb-2  pb-5`}>
          {optionButtons}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-3 h-[630px] overflow-auto rounded-xl gap-2 lg:gap-5">
          {foodData.length > 1 &&
            foodData.map((food, i) => (
              <div
                className="flex h-[110px]  sm:h-[160px] md:h-[190px] lg:h-[150px] gap-3 overflow-hidden shadow-xl rounded-xl"
                key={i}
              >
                <div className="w-4/5">
                  <Image
                    src={`${food.image}`}
                    width={10000}
                    height={10000}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="py-1 w-full flex flex-col justify-between ">
                  <div className="flex h-[80px] flex-col">
                    <p className="text-lg  overflow-scroll">{food.title}</p>
                    <p className="text-gray-500 text-sm">ingred</p>
                  </div>
                  <div className="flex justify-end">
                    <button className=" transition-all duration-100 ease-in-out text-green-500 px-1 hover:translate-x-1">
                      View Detail {`>`}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}
