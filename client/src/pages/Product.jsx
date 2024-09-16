import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import TrayTableBlack from "../assets/cart/TrayTableBlack.png";
import TrayTableRed from "../assets/cart/TrayTableRed.png";
import { CiHeart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import NewArrivals from "../components/Home/NewArrivals";
import CTA from "../components/CTA";
import { useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState(null);
  console.log(data);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const productData = await response.json();
      setData(productData);
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="w-full">
      {data ? (
        <div className="px-40 w-full">
          <div className="w-full flex my-2 gap-2 text-textSecondary text-sm">
            <p>Home</p>
            <span>{">"}</span>
            <p>Shop</p>
            <span>{">"}</span>
            <p>{data.category[0]}</p>
            <span>{">"}</span>
            <p className="text-textPrimary">Product</p>
          </div>
          <div className="flex gap-8 p-2">
            <div className="flex-1 flex gap-4 flex-wrap relative">
              <div className="absolute top-4 left-2 flex justify-between">
                <div className="flex font-semibold gap-2 flex-col">
                  <div className="px-4 py-1 text-sm bg-white rounded-md">
                    NEW
                  </div>
                  {data.discount && (
                    <div className="px-4 py-1 text-sm bg-green-500 text-white rounded-md">
                      -{data.discount}%
                    </div>
                  )}
                </div>
              </div>
              {data.images.map((img, index) => (
                <img
                  src={img}
                  className=" max-h-96 object-cover"
                  key={index}
                  alt=""
                />
              ))}
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
                <p className="text-textSecondary">
                  {data.reviews.length || "0"} Reviews
                </p>
              </div>
              <h1 className="text-3xl font-medium">{data.name}</h1>
              <p className="my-4 text-sm text-textSecondary w-[54ch]">
                {data.description}
              </p>

              <div className="flex my-2 text-xl gap-4">
                <p className="font-medium">${data.price}</p>
                {data.oldPrice && (
                  <p className="text-textSecondary line-through">
                    ${data.oldPrice}
                  </p>
                )}
              </div>
              <hr />
              <div className="my-2">
                <p className="text-sm text-textSecondary">Measurements</p>
                <p>{data.measurements}</p>
              </div>
              <div className="my-2">
                <p className="text-sm flex items-center gap-2 text-textSecondary">
                  Choose Color <span>{">"}</span>
                </p>
                <div className="flex gap-4">
                  {data.colors.map((color) => (
                    <div className="flex items-center hover:underline p-1 border cursor-pointer gap-2">
                      <p>{color}</p>
                      <div
                        className={`w-4 h-4 rounded-full bg-[${color.toLowerCase()}]`}
                      ></div>
                    </div>
                  ))}
                </div>
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
                  {data.sku && <p>SKU</p>}
                  {data.category && <p>CATEGORY</p>}
                </div>
                <div className="text-sm space-y-2">
                  <p>{data.sku}</p>
                  <p>{data.category}</p>
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
                    directly on the table frame without having to fit it into
                    any holes.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-textSecondary font-medium">Packaging</p>
                  {data.additionalInfo.packaging && (
                    <p>
                      Width: {data.additionalInfo.packaging.width} " Height:{" "}
                      {data.additionalInfo.packaging.height} " Length:{" "}
                      {data.additionalInfo.packaging.length} " <hr /> Weight:{" "}
                      {data.additionalInfo.packaging.weight} <hr />
                      Package(s): {data.additionalInfo.packaging.packageCount}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex border-b-2 my-2 border-black py-2 items-center justify-between">
                <p>Questions</p>
                <FaChevronDown />
              </div>
              <div className="flex border-b-2 my-2 border-black py-2 items-center justify-between">
                <p>Reviews ({data.reviews.length})</p>
                <FaChevronDown />
              </div>
            </div>
          </div>
          {/* You Might also like this */}
          <NewArrivals category={data.category} title="You might also like this" />
        </div>
      ) : (
        <div className="px-40 w-full min-h-72 flex items-center justify-center">
          <p className="font-semibold">No Product Found.</p>
        </div>
      )}

      {/* CTA section */}
      <CTA />
    </div>
  );
}
