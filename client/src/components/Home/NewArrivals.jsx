import React from "react";
import { GoArrowRight } from "react-icons/go";
import ItemCard from "../ItemCard";
import LoveseatSofa from "../../assets/home/LoveseatSofa.png";
import TableLamp from "../../assets/home/TableLamp.png";
import BambooBasket from "../../assets/home/BambooBasket.png";
import Toasted from "../../assets/home/Toasted.png";
import BeigeTableLamp from "../../assets/home/BeigeTableLamp.png";

export default function NewArrivals({title}) {
  return (
    <div className="my-16 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="border-b border-black w-fit">
          <p className="text-sm text-textSecondary flex items-center gap-1">
            Shop Now <GoArrowRight />
          </p>
        </div>
      </div>
      <div className="flex w-full my-4 overflow-auto gap-4">
        <ItemCard name="Loveseat Sofa" image={LoveseatSofa} price="199" oldPrice="400"/>
        <ItemCard name="Table Lamp" image={TableLamp} price="24.99"/>
        <ItemCard name="Being Table Lamp" image={BeigeTableLamp} price="24.99"/>
        <ItemCard name="Bamboo Basket" image={BambooBasket} price="24.99"/>
        <ItemCard name="Toasted" image={Toasted} price="224.99"/>
      </div>
    </div>
  );
}
