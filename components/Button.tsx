import { cn } from "@/utils/CN";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ButtonPropsTypes = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  bgColor: "gradient-pink" | "gradient-blue";
  radius: "sm" | "md" | "lg" | "full";
  showArrow?: boolean;
  textColor?: "white";
  arrowColor?: "white";
  hover?: boolean
};

export default function Button(props: ButtonPropsTypes) {
  return (
    <button
      className={cn(` cursor-pointer uppercase group
      bg-${props.bgColor} rounded-full
      ${props.showArrow && "flex items-center justify-center"}
      ${props.size === "sm" &&
        "p-1 sm:p-2 lg:px-3 lg:py-2 text-base sm:text-lg lg:text-xl gap-1"
        }
      ${props.size === "md" &&
        "px-2 py-1 sm:px-4 sm:py-2 lg:px-4 lg:py-3 text-xl lg:text-2xl gap-1 lg:gap-2"
        }
      ${props.size === "lg" &&
        "p-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 text-xl sm:text-2xl lg:text-3xl gap-1 sm:gap-3"
        }
      ${props.size === "xl" &&
        "px-3 py-2 sm:px-4 sm:py-3 lg:px-7 lg:py-7 text-xl sm:text-3xl lg:text-5xl gap-2 md:gap-4"
        }
      `,{'rounded-md':props.radius === 'md',
      'rounded-full':props.radius === 'full',})}
    >
      <span className={`text-${props.textColor} duration-500 
      ${props.hover && props.textColor === "white" ? "group-hover:text-black" : "group-hover:text-white"}
      `}>
        {props.children}
      </span>
      {props.showArrow && (
        <FaArrowRight className={`text-${props.arrowColor} duration-500 group-hover:translate-x-1
        ${props.hover && props.arrowColor === "white" ? "group-hover:text-black " : "group-hover:text-white"}
        `} />
      )}
    </button>
  );
}
