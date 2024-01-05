"use client";

import Button from "@/components/Button";
import Menu from "@/components/Menu";
import { Ingredient, Ingredients } from "@/constant/const";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Box, Trash } from "lucide-react";
import RecipesPage from "./RecipesPage";
import { bigShoulderText } from "@/font/font";

const MemoRecipePage = React.memo(RecipesPage)

// const storedIngredients = localStorage.getItem("Ingredients")

export default function CookPage() {

    const searchRef = useRef<HTMLDivElement | null>(null)
    const [isViewSelectedPage, setViewSelectedPage] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [allIngredients, setAllIngredients] = useState<Ingredient[]>(Ingredients);
    const [switchSearch, setSwitchSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [isRemoveAllOpen, setRemoveAllOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)

    const selectedIngredient = useMemo(()=>allIngredients.map(category => category.selected).flat(),[allIngredients]) 

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    })

    // useEffect(() => {
    //     localStorage.setItem("Ingredients",JSON.stringify(allIngredients))
    // },[allIngredients])

    const handleSearchIngredients = (value: any) => {
        setSearchValue(value);
        setOpen(true)
    };

    const handleRemoveAll = () => {
        setAllIngredients(prev => prev.map(category => ({ ...category, selected: [] })))
        setRemoveAllOpen(false)
    }

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


function handleRemoveIngredient(name: string, index: number) {
    setAllIngredients(prev => (
        prev.map((category: Ingredient, i) =>
            i === index
                ?
                {
                    ...category,
                    selected: category.selected.filter(select => select !== name)
                }
                :
                category
        )
    ))
}

return (
    <main className="flex justify-center h-screen bg-black p-1 gap-1">
        <div
            className={` flex lg:flex flex-col gap-1  w-full lg:w-1/2 rounded-lg  bg-gradient-pink
        ${switchSearch ? "block" : "hidden"}
        `}
        >
            <div className="m-2 p-2 px-2 flex flex-col gap-3">
                <div className="flex items-center lg:justify-center justify-between pt-2 rounded-lg">
                    {/* <Link href={"/"} className="">
                        <Button bgColor="white">Home</Button>
                    </Link> */}
                    <p className={`${bigShoulderText.className} uppercase text-5xl tracking-wide text-white`}>Ingredients</p>
                    <div className="lg:hidden">
                        <Menu />
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
                <div className="bg-white lg:mt-6 relative w-full flex pl-4 py-2 items-center gap-2  rounded-lg ">
                    <IoSearch className="w-7 h-7 text-gray-500" />
                    <input
                        type="text"
                        value={searchValue}
                        className="outline-none text-lg w-[90%]"
                        placeholder="Search Ingredients"
                        onChange={(e) => handleSearchIngredients(e.target.value)}
                    />
                    <div
                        ref={searchRef}
                        className={cn(
                            `bg-white hidden w-full z-10 flex-col left-0 absolute top-9 overflow-auto max-h-[300px] rounded-b-lg pt-1 px-4`,
                            { flex: isOpen }
                        )}
                    >
                        {allIngredients.map((category, index) => (
                            <div key={index}>
                                {category.data.map((ingredient, i) => (
                                    ingredient.toLowerCase().includes(searchValue.toLowerCase()) &&
                                    <div className="text-black rounded-lg hover:bg-gray-100 py-2 w-full" key={i}>
                                        <button
                                            onClick={() => handleSelectedIngredients(ingredient, index)}
                                            className={cn(`text-start w-full px-2  bg-transparent`,
                                                { 'text-green-500': category.selected.includes(ingredient) })}
                                        >
                                            {ingredient}
                                        </button>
                                    </div>
                                ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mt-2 flex-row-reverse justify-between">
                    <Button
                        className={cn("bg-white text-black w-fit",{"scale-75 -z-10 opacity-0":selectedIngredient.length===0})}
                        bgColor="white"
                        onClick={() => {setSwitchSearch(false); selectedIngredient.length > 0 && setIsSubmit(true)}}
                    >
                        View Recipe
                    </Button>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setViewSelectedPage(prev => !prev)}
                            className={cn('text-black relative rounded-lg transition-all border-black text-center duration-150 ease-in-out py-2 px-3 bg-white', { 'scale-95': isViewSelectedPage })}>
                            {
                                <>
                                    <Box />
                                    <div className="text-sm text-white absolute -top-2 bg-green-400 rounded-full px-2 -left-2">
                                        {allIngredients.reduce((total, curValue) => total + curValue.selected.length, 0)}
                                    </div>
                                </>
                            }

                        </button>
                        {<button
                            onClick={() => setRemoveAllOpen(true)}
                            className={cn('text-black relative rounded-lg transition-all text-center duration-150 ease-in-out py-2 px-3 bg-white',
                                { '-z-10 opacity-0 scale-75 translate-x-[-50%]': selectedIngredient.length === 0})}>
                            Remove All
                        </button>}
                        <div className={cn('hidden gap-1 items-center', isRemoveAllOpen && 'flex')}>
                            <button onClick={() => setRemoveAllOpen(false)} className="bg-white rounded-lg text-black py-2 px-3">Cancel</button>
                            <button onClick={handleRemoveAll} className="bg-red-500 py-2 px-3 rounded-lg text-white">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`h-full w-full bg-white p-2 rounded-b-lg rounded-t-2xl overflow-auto  lg:block`}
            >
                {
                    isViewSelectedPage
                        ?
                        <div className="flex p-2 flex-col gap-4">
                            <h1 className="text-xl">Selected Ingredients : </h1>
                            {
                                allIngredients.map((category, index) => (
                                    category.selected.map((ingre, i) => (
                                        <div className="flex border-b justify-between" key={i}>
                                            <h1>{ingre}</h1>
                                            <button className="text-red-400" onClick={() => handleRemoveIngredient(ingre, index)}>
                                                <Trash />
                                            </button>
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                        :
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
                }
            </div>
        </div>
        <div
            className={`lg:flex flex flex-col gap-1  bg-gray-200 w-full h-full  rounded-lg ${switchSearch ? "hidden" : "block"
                }`}
        >
            <MemoRecipePage 
            setIsSubmit={setIsSubmit} 
            isSubmit={isSubmit} 
            selectedIngredient={selectedIngredient} 
            setSwitchSearch={setSwitchSearch}
            />
        </div>
    </main>
);
}
