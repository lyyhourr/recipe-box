"use client";

import Button from "@/components/Button";
import Menu from "@/components/Menu";
import RecipePage from "./RecipePage";
import { Ingredient, Ingredients } from "@/constant/const";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Box } from "lucide-react";

export default function CookPage() {

    const searchRef = useRef<HTMLDivElement | null>(null)
    const [isViewSelectedPage,setViewSelectedPage] = useState(false)
    const [isOpen,setOpen] = useState(false)
    const [allIngredients, setAllIngredients] = useState(Ingredients);
    const [switchSearch, setSwitchSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [isRemoveAllOpen,setRemoveAllOpen] = useState(false);
    
    const selectedIngredient = allIngredients.map(category=>category.selected).flat()

    useEffect(()=>{
        const handleClickOutside = (e:any) => {
            if(searchRef.current && !searchRef.current.contains(e.target)){
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    })

    const handleSearchIngredients = (value: any) => {
        setSearchValue(value);
        setOpen(true)
    };

    const handleRemoveAll = () => {
        setAllIngredients(prev=>prev.map(category=>({...category,selected:[]})))
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

    return (
        <main className="flex justify-center h-screen bg-black p-1 gap-1">
            <div
                className={` flex lg:flex flex-col gap-1 w-full lg:w-1/2 rounded-lg  bg-gradient-pink
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
                            placeholder="Search Ingredients"
                            onChange={(e) => handleSearchIngredients(e.target.value)}
                        />
                        <div
                            ref={searchRef}
                            className={cn(
                                `bg-white hidden w-full flex-col left-0 absolute top-9 overflow-auto max-h-[300px] rounded-b-lg pt-1 px-4`,
                                { flex: isOpen }
                            )}
                        >
                            {allIngredients.map((category,index) => (
                                <div key={index}>
                                    {category.data.map((ingredient,i)=>(
                                        ingredient.toLowerCase().includes(searchValue.toLowerCase()) && 
                                        <div className="text-black rounded-lg hover:bg-gray-100 py-2 w-full" key={i}>
                                            <button 
                                            onClick={()=>handleSelectedIngredients(ingredient,index)} 
                                            className={cn(`text-start w-full px-2 bg-transparent`,
                                            {'text-green-500':category.selected.includes(ingredient)})}
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
                    <div className="flex flex-row-reverse justify-between">
                        <Button
                            className="bg-white text-black w-fit"
                            onClick={() => setSwitchSearch(false)}
                        >
                            View Recipes
                        </Button>
                        <div className="flex items-center gap-1">
                        <button 
                        onClick={()=>setViewSelectedPage(prev=>!prev)} 
                        className={cn('text-black relative rounded-lg transition-all border-black text-center duration-150 ease-in-out py-2 px-3 bg-white',{'scale-95':isViewSelectedPage})}>
                            {
                            <>
                                <Box/>
                                <div className="text-sm text-white absolute -top-2 bg-green-400 rounded-full px-2 -left-2">
                                    {allIngredients.reduce((total,curValue)=>total + curValue.selected.length ,0)}
                                </div> 
                            </>
                            }
                            
                        </button>
                        {selectedIngredient.length > 0 && <button 
                        onClick={()=>setRemoveAllOpen(true)} 
                        className={cn('text-black relative rounded-lg transition-all text-center duration-150 ease-in-out py-2 px-3 bg-white',
                        {'hidden':isRemoveAllOpen})}>
                            Remove All
                        </button>}
                        <div className={cn('hidden gap-1 items-center',isRemoveAllOpen && 'flex')}>
                            <button onClick={()=>setRemoveAllOpen(false)} className="bg-white rounded-lg text-black py-2 px-3">Cancel</button>
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
                        <div>hi</div>
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
                <RecipePage setSwitchSearch={setSwitchSearch} />
            </div>
        </main>
    );
}
