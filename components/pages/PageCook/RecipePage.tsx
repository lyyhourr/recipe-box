import Button from "@/components/Button";
import Menu from "@/components/Menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
interface RecipePageProps {
  setSwitchSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FoodDataTypes {
  id: number;
  Title: string;
  Ingredients: string[];
  Instructions: string;
  Image: string;
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
  ,
  "minVitaminC",
  "maxVitaminC",
  "minVitaminD",
  "maxVitaminD",
  "minIron",
  "maxIron",
];
export default function RecipePage(props: RecipePageProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const [foodData, setFoodData] = useState<FoodDataTypes[]>([]);

  function handleSelectedOption(name: string) {
    setSelectedOption((prev) => (prev === name ? "" : name));
  }

  const [userQuery, setUserQuery] = useState("");

  function QueryFood() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c374c59b2e74325892f07406d6c7793&q=${userQuery}`
    )
      .then((res) => res.json())
      .then((data) => setFoodData(data.results));

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
            type="text"
            className="outline-none text-lg w-[95%]"
            placeholder="find foods recipes"
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <Button className="bg-white text-black mr-2" size="xs"
            onClick={QueryFood}
          >Search</Button>
        </div>
      </div>

      <div className="m-2 h-[80%] px-2 bg-white rounded-2xl">
        <div className="flex items-center transition-all duration-75 ease-in-out gap-1 lg:gap-5 pt-3 px-5 flex-wrap mb-2  pb-5">
          {options.slice(0, 6).map((opt, i) => (
            <div key={i}>
              <Button
                className={cn(
                  selectedOption === opt
                    ? "text-white bg-green-500 border"
                    : "text-black bg-white"
                )}
                size="xs"
                onClick={() => handleSelectedOption(`${opt}`)}
              >
                {opt}
              </Button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-3 h-[680px] overflow-auto rounded-xl gap-2">
          {foodData.length > 1 &&
            foodData.map((food, i) => (
              <div
                className="flex h-[150px] overflow-hidden bg-green-500  rounded-lg border-black"
                key={i}
              >
                <div className="w-full">
                  <Image
                    src={` https:${food.Image}`}
                    width={10000}
                    height={10000}
                    alt=""
                    className="h-full"
                  />
                </div>
                <div className=" text-white p-2 w-full flex flex-col gap-8">
                  <div className="flex h-[80px] flex-col">
                    <p className="text-lg font-semibold overflow-scroll">{food.Title}</p>
                    <p className="text-gray-100 text-sm">ingred</p>
                  </div>
                  <div className="flex justify-end">
                    <button className=" transition-all duration-100 ease-in-out font-semibold px-1 hover:translate-x-1">
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
