import React from "react";
import heroImage from "../assets/home/HomeHero.png";
import LivingRoom from "../assets/home/LivingRoom.png";
import BedRoom from "../assets/home/BedRoom.png";
import Kitchen from "../assets/home/Kitchen.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import NewArrivals from "../components/Home/NewArrivals";
import OurService from "../components/Home/OurService";
import CTA from "../components/CTA";
import SubFooter from "../components/SubFooter";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-40 w-full">
        <div className="relative">
          <img src={heroImage} className="w-full" alt="" />
          <div className="absolute top-1/2 -translate-y-1/2 left-4 rounded-full bg-white p-2">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full bg-white p-2">
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between w-full my-8">
          <div className="text-5xl font-semibold w-[16ch]">
            Simply Unique/ Simply Better.
          </div>
          <div className="text-textSecondary w-[50ch] text-sm">
            <span className="font-semibold text-textPrimary">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col bg-background p-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-semibold">Living Room</h3>
              <div className="border-b border-black w-fit">
                <p className="text-sm text-textSecondary flex items-center gap-1">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
            <img src={LivingRoom} className="w-[90%] object-cover" alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 relative w-full flex bg-background p-12">
              <div className="absolute bottom-12 flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">Bedroom</h3>
                <div className="border-b border-black w-fit">
                  <p className="text-sm text-textSecondary flex items-center gap-1">
                    Shop Now <GoArrowRight />
                  </p>
                </div>
              </div>
              <img src={BedRoom} className="w-full object-cover" alt="" />
            </div>
            <div className="flex-1 relative w-full flex bg-background p-12">
              <div className="absolute bottom-12 flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">Kitchen</h3>
                <div className="border-b border-black w-fit">
                  <p className="text-sm text-textSecondary flex items-center gap-1">
                    Shop Now <GoArrowRight />
                  </p>
                </div>
              </div>
              <img src={Kitchen} className="w-full object-cover" alt="" />
            </div>
          </div>
        </div>
        {/* New Arrival section */}
        <NewArrivals title="New Arrivals"/>
        {/* Our Service section */}
        <OurService />
      </div>
      {/* CTA section */}
      <CTA/>
      {/* Sub Footer section */}
      <SubFooter/>
    </div>
  );
}
