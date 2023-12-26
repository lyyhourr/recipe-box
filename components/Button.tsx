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
};

export default function Button(props: ButtonPropsTypes) {
  return (
    <button
      className={` cursor-pointer uppercase
      bg-${props.bgColor} rounded-${props.radius}
      ${props.showArrow && "flex items-center justify-center"}
      ${
        props.size === "sm" &&
        "p-1 sm:p-2 lg:px-3 lg:py-2 text-base sm:text-lg lg:text-xl gap-1"
      }
      ${
        props.size === "md" &&
        "px-2 py-1 sm:px-4 sm:py-2 lg:px-4 lg:py-3 text-xl lg:text-2xl gap-1 lg:gap-2"
      }
      ${
        props.size === "lg" &&
        "p-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 text-xl sm:text-2xl lg:text-3xl gap-1 sm:gap-3"
      }
      ${
        props.size === "xl" &&
        "px-3 py-2 sm:px-4 sm:py-3 lg:px-7 lg:py-7 text-xl sm:text-3xl lg:text-5xl gap-2 md:gap-4"
      }
      `}
    >
      <span className={`text-${props.textColor}`}>{props.children}</span>
      {props.showArrow && (
        <FaArrowRight className={`text-${props.arrowColor}`} />
      )}
    </button>
  );
}