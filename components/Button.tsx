import { cn } from "@/lib/utils";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ButtonPropsTypes = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  bgColor?: "gradient-blue" | "white";
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  showArrow?: boolean;
  textColor?: "black";
  hover?: boolean;
  uppercase?: boolean;
  className?: string;
  onClick?: () => void;

};

export default function Button(props: ButtonPropsTypes) {
  return (
    <button
      className={cn(
        ` cursor-pointer  group rounded-lg text-white px-3 py-2 transition-all duration-150 ease-in-out bg-gradient-pink border active:border border-black border-r-4 border-b-4 ${props.className}`,
        {
          uppercase: props.uppercase,
          "rounded-sm": props.radius === "sm",
          "rounded-md": props.radius === "md",
          "rounded-lg": props.radius === "lg",
          "rounded-xl": props.radius === "xl",
          "rounded-full": props.radius === "full",
          "p-1 sm:p-2 lg:px-4 lg:py-1 text-sm sm:text-lg gap-1":
            props.size === "xs",
          "p-1 sm:p-2 lg:px-3 lg:py-2 text-base sm:text-lg lg:text-xl gap-1":
            props.size === "sm",
          "px-2 py-1 sm:px-4 sm:py-2 lg:px-4 lg:py-3 text-xl lg:text-2xl gap-1 lg:gap-2":
            props.size === "md",
          "p-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 text-xl sm:text-2xl lg:text-3xl gap-1 sm:gap-3":
            props.size === "lg",
          "px-3 py-2 sm:px-4 sm:py-3 lg:px-7 lg:py-7 text-xl sm:text-3xl lg:text-5xl gap-2 md:gap-4":
            props.size === "xl",
          "flex items-center justify-center": props.showArrow,
          "bg-gradient-blue": props.bgColor === "gradient-blue",
          "bg-white text-black": props.bgColor === "white",
          "text-black": props.textColor === "black",
        }
      )}
      onClick={props.onClick}
    >
      <span
        className={cn(
          `text-${props.textColor} duration-500 
      `,
          {
            "group-hover:text-white":
              props.textColor === "black" && props.hover,
            "group-hover:text-black": !props.textColor && props.hover,
          }
        )}
      >
        {props.children}
      </span>
      {props.showArrow && (
        <FaArrowRight
          className={cn(` duration-500 group-hover:translate-x-1`, {
            "group-hover:text-white ":
              props.hover && props.textColor === "black",
            "group-hover:text-black ": props.hover && !props.textColor,
          })}
        />
      )}
    </button>
  );
}
