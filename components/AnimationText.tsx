"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AnimationText({
  texts,
  duration,
  className,
}: {
  texts: string[];
  duration: number;
  className?: string
}) {
  const arr = texts.map((txt) => txt);
  const rs = arr.map((item) => [item, duration]).flat();
  return (
    <TypeAnimation sequence={rs} wrapper="span" speed={50} repeat={Infinity} className={className} />
  );
}
