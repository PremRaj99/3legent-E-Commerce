import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { IoStar } from "react-icons/io5";

export default function ItemCard({
  name,
  image,
  price,
  oldPrice,
  discount,
  onClickItem,
  id,
}) {
  return (
    <div className="w-72 min-w-72" onClick={() => onClickItem(id)}>
      <div className="bg-background relative space-y-1 w-72 min-w-72 p-4">
        <div className="absolute w-[calc(100%-32px)] flex justify-between">
          <div className="flex font-semibold gap-2 flex-col">
            <div className="px-4 py-1 text-sm bg-white rounded-md">NEW</div>
            {discount && (
              <div className="px-4 py-1 text-sm bg-green-500 text-white rounded-md">
                {discount}%
              </div>
            )}
          </div>
          <MdFavoriteBorder className="text-4xl bg-white hover:scale-105 duration-200 cursor-pointer hover:text-red-500 shadow-md p-2 rounded-full" />
        </div>
        <img src={image} className="aspect-square rounded-md" alt="" />
        <div className="aboslute bottom-4">
          <button className="px-4 py-2 hover:scale-105 duration-150 w-full bg-black text-white rounded-md">
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex gap-1">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p className="font-semibold">{name}</p>
        <div className="flex gap-4">
          <p className="font-semibold">${price}</p>
          {oldPrice && (
            <p className="text-textSecondary line-through">${oldPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}
