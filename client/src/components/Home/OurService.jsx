import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FiLock } from "react-icons/fi";

export default function OurService() {
  return (
    <div className="my-4 flex gap-4">
      <div className="w-72 min-w-72 bg-background p-8 py-12 flex flex-col gap-4">
        <CiDeliveryTruck className="text-6xl" />
        <h2 className="text-2xl">Free Shipping</h2>
        <p className="text-textSecondary">Order above $200</p>
      </div>
      <div className="w-72 min-w-72 bg-background p-8 py-12 flex flex-col gap-4">
        <LiaMoneyBillSolid className="text-6xl" />
        <h2 className="text-2xl">Money-back</h2>
        <p className="text-textSecondary">30 days guarantee</p>
      </div>
      <div className="w-72 min-w-72 bg-background p-8 py-12 flex flex-col gap-4">
        <FiLock className="text-6xl" />
        <h2 className="text-2xl">Secure Payments</h2>
        <p className="text-textSecondary">Secured by Stripe</p>
      </div>
      <div className="w-72 min-w-72 bg-background p-8 py-12 flex flex-col gap-4">
        <IoCallOutline className="text-6xl" />
        <h2 className="text-2xl">24/7 Support</h2>
        <p className="text-textSecondary">Phone and Email support</p>
      </div>
    </div>
  );
}
