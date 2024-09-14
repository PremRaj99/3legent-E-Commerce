import React from "react";
import CTAImage from "../assets/CTA.png";
import { GoArrowRight } from "react-icons/go";

export default function CTA() {
  return (
    <div className="w-full flex border bg-background">
      <img src={CTAImage} className="flex-1" alt="" />
      <div className="flex-1 flex items-center p-16">
        <div className="flex flex-col gap-4">
          <p className="text-blue-500 font-medium text-lg">
            SALE UP TO 35% OFF
          </p>
          <h1 className="text-5xl font-semibold">
            HUNDREDS of <br /> New lower prices!
          </h1>
          <p className="text-lg w-[38ch]">
            It's more affordable then ever to give every room in your home a
            stylish makeover
          </p>
          <div className="border-b border-black w-fit">
            <p className="flex items-center gap-1">
              Shop Now <GoArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
