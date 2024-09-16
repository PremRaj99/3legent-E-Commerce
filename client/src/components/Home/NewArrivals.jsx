import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router-dom";

export default function NewArrivals({ title, category="Living Room" }) {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchitems = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products?limit=6&category=` +
          category
      );
      const data = await fetchitems.json();
      setItem(data);
    };
    fetchProduct();
  }, [category]);

  const handleItemClick = (id) => {
    navigate("/product/" + id);
  };
  return (
    <div className="my-16 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="border-b border-black w-fit hover:border-b-2" onClick={() => navigate("/shop")}>
          <p className="text-sm text-textSecondary flex items-center gap-1 cursor-pointer">
            Shop Now <GoArrowRight />
          </p>
        </div>
      </div>
      <div className="flex w-full my-4 overflow-auto gap-4">
        {item.map((product) => (
          <ItemCard
            name={product.name}
            image={product.images[0]}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            onClickItem={handleItemClick}
            id={product._id}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
}
