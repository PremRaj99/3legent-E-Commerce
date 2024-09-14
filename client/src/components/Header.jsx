import React from 'react'
import {NavLink} from 'react-router-dom'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className='px-40 py-4 flex justify-between border-b-2 bg-white text-textPrimary'>
        <div className="font-medium text-xl">3legant.</div>
        <div className="flex gap-10 text-textSecondary">
            <NavLink to="/" className={({isActive}) => isActive ? "font-semibold text-textPrimary" : ""}>
            Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "font-semibold text-textPrimary" : ""}>
            Shop
            </NavLink>
            <NavLink to="/product" className={({isActive}) => isActive ? "font-semibold text-textPrimary" : ""}>
            Product
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "font-semibold text-textPrimary" : ""}>
            Contact Us
            </NavLink>
        </div>
        <div className="flex gap-4 text-xl font-semibold">
        <CiSearch />
        <CiShoppingCart />
        <CiUser />
        </div>
    </div>
  )
}
