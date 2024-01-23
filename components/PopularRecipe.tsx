"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import FoodCard from "./FoodCard";

const PopularFoods = [
  {
    id: 633352,
    name: "Bacon Wrapped Tofu Tacos",
    img: "/images/popular/bacon-wrapped-tacos.jpg",
    cook: "25",
  },
  {
    id: 641687,
    name: "Dry Mee Siam",
    img: "/images/popular/dry-mee-siam.jpg",
    cook: "15",
  },
  {
    id: 661126,
    name: "Spicy Lump Crab and Avocado Salad",
    img: "/images/popular/spicy-lamb.jpg",
    cook: "1h 25",
  },
  {
    id: 665537,
    name: "Yoghurt Honey Madeleine",
    img: "/images/popular/yoghurt.jpg",
    cook: "10",
  },
  {
    id: 638235,
    name: "Chicken Parmesan With Pasta",
    img: "/images/popular/chicken-pasta.jpg",
    cook: "20",
  },
];

export default function PopularRecipe() {
  const [slides, setSlides] = useState(1);

  const setSlidesPerview = () => {
    setSlides(window.innerWidth <= 1280 ? 1 : 2);
  };

  React.useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay
      loop
      slidesPerView={slides}
      spaceBetween={"10px"}
      className="w-[80%]"
    >
      {PopularFoods.map((food: any) => (
        <SwiperSlide
          key={food.name}
          className="flex items-center justify-center py-3"
        >
          <FoodCard
            img={food.img}
            name={food.name}
            cook={food.cook}
            id={food.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
