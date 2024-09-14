import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function DashRecord({ name, amount, percent, disc, Icon }) {
  return (
    <div className="w-72 rounded-xl bg-white p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-textSecondary">{name}</p>
          <span className="text-xl font-semibold">{amount}</span>
        </div>
        {Icon}
      </div>
      <div className="mt-8 flex text-sm items-center gap-1">
        <span className="flex items-center gap-2 text-green-500">
          <FaArrowTrendUp /> <span>{percent}</span>
        </span>
        <span>{disc}</span>
      </div>
    </div>
  );
}
