import Button from '@/components/Button'
import Menu from '@/components/Menu'
import { bigShoulderText } from '@/font/font'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
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
export default function RecipesPage(props: RecipePageProps) {
    const [selectedOption, setSelectedOption] = useState("");
    const [showOptions, setShowOptions] = useState(false)
    const [foodData, setFoodData] = useState<FoodDataTypes[]>([]);
    const [userQuery, setUserQuery] = useState("");


    const optionButtons = options.slice(0, 6).map((opt, i) => (
        <div key={i}>
            <Button
                className={selectedOption === opt ? "border" : ""}
                bgColor={selectedOption === opt
                    ? "green-500"
                    : "white"}
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
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c374c59b2e74325892f07406d6c7793&query=${userQuery}`
            ).then((res) => res.json())
                .then((data) => setFoodData(data.results));
    }
    function handleSelectedOption(name: string) {
        setSelectedOption((prev) => (prev === name ? "" : name));
    }
    return (
        <main className="flex justify-center h-screen bg-black p-1 gap-1 ">
            <div
                className={` flex lg:flex flex-col gap-1 w-full  rounded-lg  bg-gray-200 bg-food`}
            >

                <div className="flex flex-col gap-1 mt-6">
                    <div className="flex w-[95%] mx-auto items-center justify-between mb-4 rounded-lg">
                        <Button
                            bgColor="white"
                            className="lg:hidden "
                            textColor='black'
                            onClick={() => props.setSwitchSearch(true)}
                        >
                            Back
                        </Button>
                        <p className={`${bigShoulderText.className} stroke-gray-600 text-5xl tracking-widest cursor-default `}>RECIPES</p>
                        <Menu />
                    </div>
                    <div className="bg-white mt-3  w-[95%] mx-auto flex pl-4 py-1 items-center gap-2  rounded-lg ">
                        <IoSearch className="w-7 h-7 text-gray-500 " />
                        <input
                            type={selectedOption ? "number" : "text"}
                            className="outline-none text-lg w-[95%]"
                            placeholder={selectedOption ? `Enter ${selectedOption} (0 - 100)` : 'Find foods recipes'}
                            onChange={(e) => setUserQuery(e.target.value)}
                        />
                        <Button className=" mr-2" size="landscape" bgColor='white'
                            onClick={QueryFood}
                        >Search</Button>
                    </div>
                </div>

                <div className="flex px-3 lg:px-0 gap-3 items-center ">
                    <Button className="  lg:hidden pt-1" bgColor='white' size="landscape" showArrow={!showOptions} onClick={() => setShowOptions(p => !p)}>{showOptions ? "Close" : "Filter"}</Button>
                    <div className={`flex lg:hidden gap-1 overflow-auto ${showOptions ? " translate-x-0" : " translate-x-[-200%]"}`}>
                        {optionButtons}
                    </div>
                </div>
                <div className={`hidden lg:flex items-center transition-all duration-75 ease-in-out gap-1 lg:gap-2 xl:gap-4 pt-3 px-5 flex-wrap  pb-5`}>
                    {optionButtons}
                </div>
                <div className={`h-full w-full bg-white  p-2 rounded-b-lg rounded-t-2xl overflow-auto  lg:block`}>
                    <div className='h-full overflow-auto'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-3   rounded-xl gap-2 lg:gap-5">
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
            </div>
        </main>
    )
}
