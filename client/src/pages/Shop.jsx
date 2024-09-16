import React, { useEffect, useState } from "react";
import heroImage from "../assets/shop/ShopHero.png";
import {
  BsFillGrid1X2Fill,
  BsFillGridFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import ItemCard from "../components/ItemCard";
import CTA from "../components/CTA";
import SubFooter from "../components/SubFooter";
import {useNavigate} from "react-router-dom"

export default function Shop() {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchitems = await fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      const data = await fetchitems.json();
      console.log(data)
      setItem(data);
    }
    fetchProduct()
  }, [])

  const handleItemClick = (id) => {
    console.log(id)
    navigate("/product/"+id);
  }
  return (
    <div className="w-full">
      <div className="px-40 w-full">
        <div className="relative">
          <img src={heroImage} className="w-full" alt="" />
          <div className="absolute top-0 flex flex-col gap-4 w-full h-full items-center justify-center">
            <div className="flex gap-4 text-sm">
              <p className="text-textSecondary">Home</p>
              <span className="text-textSecondary">{">"}</span>
              <p>Shop</p>
            </div>
            <h1 className="text-3xl font-medium">Shop page</h1>
            <p>Let's design the place you always imagined.</p>
          </div>
        </div>
        <div className="flex w-full my-12 justify-between items-end">
          <div className="flex gap-4">
            <div className="space-y-2">
              <p className="text-textSecondary text-sm">CATEGORY</p>
              <select
                name=""
                className="p-2 border-2 border-black rounded-md w-72"
                id=""
              >
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Ktichen">Kitchen</option>
              </select>
            </div>
            <div className="space-y-2">
              <p className="text-textSecondary text-sm">PRICE</p>
              <select
                name=""
                className="p-2 border-2 border-black rounded-md w-72"
                id=""
              >
                <option value="All Price">All Price</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Ktichen">Kitchen</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <select name="" className="font-medium" id="">
              <option value="Sort by" disabled>
                Sort by
              </option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
              <option value="Trending">Trending</option>
            </select>
            <div className="flex border rounded-md">
              <div className="p-2 border">
                <BsGrid3X3GapFill />
              </div>
              <div className="p-2 border">
                <BsFillGridFill />
              </div>
              <div className="p-2 border">
                <BsFillGrid1X2Fill />
              </div>
              <div className="p-2 border">
                <CiGrid2H />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          {
            item.map((product) => (
              <ItemCard name={product.name}
              image={product.images[0]}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              onClickItem={handleItemClick}
              id={product._id}
              key={product._id} />
            ))
          }
        </div>
        <div className="my-8 flex items-center justify-center">
          <button className="px-4 py-1 rounded-full border border-black">
            See more
          </button>
        </div>
      </div>
      {/* CTA section */}
      <CTA />
      {/* Sub Footer section */}
      <SubFooter />
    </div>
  );
}
