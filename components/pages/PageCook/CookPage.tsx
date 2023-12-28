"use client";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import RecipePage from "./RecipePage";
import { AllIngredientDatas, Ingredient, Ingredients } from "@/constant/const";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import TestLayout from "./TestLayout";

export default function CookPage() {
  const [allIngredients, setAllIngredients] = useState(Ingredients);
  const [switchSearch, setSwitchSearch] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchIngredients = (value: any) => {
    setSearchValue(value);
  };

  function handleSelectedIngredients(name: string, index: number) {
    const isSelected = allIngredients[index].selected.includes(name);
    setAllIngredients((prev) =>
      prev.map((item: Ingredient, i) =>
        i === index
          ? {
              ...item,
              selected: isSelected
                ? item.selected.filter((select) => select !== name)
                : [...item.selected, name],
            }
          : item
      )
    );
  }

  return (
    <main className="flex justify-center h-screen bg-black p-1 gap-1">
      <div
        className={` flex lg:flex flex-col gap-1 w-full lg:w-1/2 rounded-lg bg-gradient-pink
        ${switchSearch ? "block" : "hidden"}
        `}
      >
        <div className="m-2 p-2 flex flex-col gap-3">
          <div className="flex items-center justify-between lg:justify-between  rounded-lg">
            <Link href={"/"} className="">
              <Button bgColor="white">Home</Button>
            </Link>
            <div className="flex justify-center cursor-pointer  items-center w-[170px]">
              <Image
                src={"/icons/ingredients-icon.png"}
                width={10000}
                height={10000}
                className="w-[90px] h-[90px]"
                alt="main logo"
              />
              <p className="text-xl uppercase text-white ">Ingredients</p>
            </div>
            <div className="lg:hidden">
              <Menu />
            </div>
            <div className="hidden lg:block"></div>
          </div>
          <div className="bg-white relative w-full flex pl-4 py-2 items-center gap-2  rounded-lg ">
            <IoSearch className="w-7 h-7 text-gray-500" />
            <input
              type="text"
              value={searchValue}
              className="outline-none text-lg w-[90%]"
              placeholder="search your ingredients "
              onChange={(e) => handleSearchIngredients(e.target.value)}
            />
            <div
              className={cn(
                `bg-white hidden w-full flex-col gap-3 left-0 absolute top-9 overflow-auto h-fit max-h-[300px] rounded-b-lg px-4`,
                { flex: searchValue }
              )}
            >
              {AllIngredientDatas.slice(0, 20).map((data) => (
                <div className="text-black" key={data}>
                  {data.includes(searchValue) && data}
                </div>
              ))}
            </div>
          </div>
          <Button
            className="bg-white text-black lg:hidden w-fit "
            onClick={() => setSwitchSearch(false)}
          >
            Switch to Recipes
          </Button>
        </div>
        <div
          className={`h-full  w-full bg-white p-2 rounded-t-3xl overflow-auto  lg:block`}
        >
          <div className="mt-3 w-[95%] mx-auto flex flex-col gap-10 ">
            {allIngredients.map((item, i) => (
              <div className="shadow-xl rounded-xl " key={i}>
                <div className="border-b border-gray-500">
                  <div className=" flex items-center justify-center gap-3">
                    <Image
                      src={`/images/ingredients/${item.image}.png`}
                      width={10000}
                      height={10000}
                      alt="ingredient image"
                      className="w-[60px] h-[60px]"
                    />
                    <p className="text-center py-3 text-xl">{item.title}</p>
                  </div>
                  <p className="text-center text-gray-600 text-xl py-1">
                    {" "}
                    {item.selected.length} / {item.data.length} Ingredients
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap w-[95%] h-[250px] overflow-auto py-3 mx-auto">
                  {item.data.map((ingred, idx) => (
                    <button
                      className={cn(
                        ` px-3 py-1 rounded-md text-gray-500 bg-gray-200 `,
                        item.selected.map(
                          (item) => item === ingred && "text-white bg-green-500"
                        )
                      )}
                      key={idx}
                      onClick={() => handleSelectedIngredients(ingred, i)}
                    >
                      {ingred}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`lg:flex flex flex-col gap-1  bg-gray-200 w-full h-full  rounded-lg ${
          switchSearch ? "hidden" : "block"
        }`}
      >
        {/* <RecipePage setSwitchSearch={setSwitchSearch} /> */}
        <TestLayout setSwitchSearch={setSwitchSearch} />
      </div>
    </main>
  );
}
