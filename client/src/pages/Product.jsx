import React from "react";
import { IoStar } from "react-icons/io5";
import TrayTableBlack from "../assets/cart/TrayTableBlack.png";
import TrayTableRed from "../assets/cart/TrayTableRed.png";
import { CiHeart } from "react-icons/ci";
import Product1 from "../assets/product/Product1.png";
import Product2 from "../assets/product/Product2.png";
import Product3 from "../assets/product/Product3.png";
import Product4 from "../assets/product/Product4.png";
import Product5 from "../assets/product/Product5.png";
import Product6 from "../assets/product/Product6.png";
import { FaChevronDown } from "react-icons/fa";
import NewArrivals from "../components/Home/NewArrivals";
import CTA from "../components/CTA";

export default function Product() {
  return (
    <div className="w-full">
      <div className="px-40 w-full">
        <div className="w-full flex my-2 gap-2 text-textSecondary text-sm">
          <p>Home</p>
          <span>{">"}</span>
          <p>Shop</p>
          <span>{">"}</span>
          <p>Living Room</p>
          <span>{">"}</span>
          <p className="text-textPrimary">Product</p>
        </div>
        <div className="flex gap-8 p-2">
          <div className="flex-1 flex gap-4 flex-wrap relative">
            <div className="absolute top-4 left-2 flex justify-between">
              <div className="flex font-semibold gap-2 flex-col">
                <div className="px-4 py-1 text-sm bg-white rounded-md">NEW</div>
                <div className="px-4 py-1 text-sm bg-green-500 text-white rounded-md">
                  -50%
                </div>
              </div>
            </div>
            <img src={Product1} alt="" />
            <img src={Product2} alt="" />
            <img src={Product3} alt="" />
            <img src={Product4} alt="" />
            <img src={Product5} alt="" />
            <img src={Product6} alt="" />
          </div>
          <div className="flex-1">
            <div className="flex my-2 items-center text-sm gap-4">
              <div className="flex gap-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <p className="text-textSecondary">11 Reviews</p>
            </div>
            <h1 className="text-3xl font-medium">Tray Table</h1>
            <p className="my-4 text-sm text-textSecondary w-[54ch]">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>

            <div className="flex my-2 text-xl gap-4">
              <p className="font-medium">$199.00</p>
              {/* {oldPrice && ( */}
              <p className="text-textSecondary line-through">${400}</p>
              {/* )} */}
            </div>
            <hr />
            <div className="my-2">
              <p className="text-sm text-textSecondary">Measurements</p>
              <p>17 1/2x20 5/8 "</p>
            </div>
            <div className="my-2">
              <p className="text-sm flex items-center gap-2 text-textSecondary">
                Choose Color <span>{">"}</span>
              </p>
              <p>Black</p>
            </div>
            <div className="my-2 flex gap-4 ">
              <div className="p-2 border border-black">
                <img src={TrayTableBlack} className="w-12" alt="" />
              </div>
              <div className="p-2">
                <img src={TrayTableRed} className="w-12" alt="" />
              </div>
              <div className="p-2">
                <img src={TrayTableRed} className="w-12" alt="" />
              </div>
            </div>
            <div className="my-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-6 p-2 px-4 rounded-md bg-background">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <button className="flex-1 flex items-center justify-center gap-2 px-8 py-2 border border-black rounded-md">
                  <CiHeart className="text-xl" /> <span>Wishlist</span>
                </button>
              </div>
              <button className="text-white bg-textPrimary rounded-md py-2 px-8">
                Add to cart
              </button>
            </div>
            <div className="my-8 flex gap-16">
              <div className="text-sm text-textSecondary space-y-2">
                <p>SKU</p>
                <p>CATEGORY</p>
              </div>
              <div className="text-sm space-y-2">
                <p>1117</p>
                <p>Living Room, Bedroom</p>
              </div>
            </div>
            <div className="flex border-b-2 my-2 border-black py-2 items-center justify-between">
              <p>Additional Info</p>
              <FaChevronDown />
            </div>
            <div className="text-sm my-4 space-y-4">
              <div className="flex flex-col gap-4">
                <p className="text-textSecondary font-medium">Details</p>
                <p>
                  You can use the removable tray for serving. The design makes
                  it easy to put the tray back after use since you place it
                  directly on the table frame without having to fit it into any
                  holes.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-textSecondary font-medium">Packaging</p>
                <p>
                  Width: 20 " Height: 1 ½ " Length: 21 ½ " <hr /> Weight: 7 lb 8
                  oz <hr />
                  Package(s): 1
                </p>
              </div>
            </div>
            <div className="flex border-b-2 my-2 border-black py-2 items-center justify-between">
              <p>Questions</p>
              <FaChevronDown />
            </div>
            <div className="flex border-b-2 my-2 border-black py-2 items-center justify-between">
              <p>Reviews (11)</p>
              <FaChevronDown />
            </div>
          </div>
        </div>
        {/* You Might also like this */}
        <NewArrivals title="You might also like this" />
      </div>
      {/* CTA section */}
      <CTA />
    </div>
  );
}
