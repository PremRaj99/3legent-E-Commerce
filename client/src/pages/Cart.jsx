import React from "react";
import TrayTableBlack from "../assets/cart/TrayTableBlack.png";
import TrayTableRed from "../assets/cart/TrayTableRed.png";
import { IoCloseSharp } from "react-icons/io5";
import { RiCoupon5Line } from "react-icons/ri";

export default function Cart() {
  return (
    <div className="w-full">
      <div className="px-40 w-full">
        <div className="my-8 flex items-center justify-center">
          <h1 className="text-5xl">Cart</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <div className="w-72 py-4 flex items-center gap-4 border-b-2 border-black">
            <span className="w-8 flex items-center justify-center h-8 bg-black text-white rounded-full">
              1
            </span>
            <p className="font-medium">Shopping cart</p>
          </div>
          <div className="w-72 py-4 flex items-center gap-4 ">
            <span className="w-8 flex items-center justify-center h-8 bg-textSecondary text-white rounded-full">
              2
            </span>
            <p className="font-medium">Checkout details</p>
          </div>
          <div className="w-72 py-4 flex items-center gap-4 ">
            <span className="w-8 flex items-center justify-center h-8 bg-textSecondary text-white rounded-full">
              3
            </span>
            <p className="font-medium">Order complete</p>
          </div>
        </div>
        <div className="my-16 flex gap-10">
          <div className="flex-1">
            <table className="min-w-full rounded-lg">
              <thead className="text-sm border-b border-black font-medium">
                <tr>
                  <th className="py-3 px-4 text-left text-textPrimary">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left text-textPrimary">
                    Quantity
                  </th>
                  <th className="py-3 px-4 text-left text-textPrimary">
                    Price
                  </th>
                  <th className="py-3 px-4 text-left text-textPrimary">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-textPrimary">
                    <div className="flex gap-4">
                        <img src={TrayTableBlack} className="w-16" alt="" />
                        <div className="flex flex-col justify-between text-sm">
                            <p className="font-medium">Tray Table</p>
                            <p className="text-textSecondary">Color: Black</p>
                            <p className="text-textSecondary flex items-center gap-2"><IoCloseSharp className="text-lg"/> Remove</p>
                        </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex px-2 text-sm gap-4 w-fit border border-black rounded-md">
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-textPrimary">$19.00</td>
                  <td className="py-3 px-4 text-textPrimary font-semibold">$38.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-textPrimary">
                    <div className="flex gap-4">
                        <img src={TrayTableRed} className="w-16" alt="" />
                        <div className="flex flex-col justify-between text-sm">
                            <p className="font-medium">Tray Table</p>
                            <p className="text-textSecondary">Color: Red</p>
                            <p className="text-textSecondary flex items-center gap-2"><IoCloseSharp className="text-lg"/> Remove</p>
                        </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex px-2 text-sm gap-4 w-fit border border-black rounded-md">
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-textPrimary">$19.00</td>
                  <td className="py-3 px-4 text-textPrimary font-semibold">$38.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-textPrimary">
                    <div className="flex gap-4">
                        <img src={TrayTableBlack} className="w-16" alt="" />
                        <div className="flex flex-col justify-between text-sm">
                            <p className="font-medium">Tray Table</p>
                            <p className="text-textSecondary">Color: Black</p>
                            <p className="text-textSecondary flex items-center gap-2"><IoCloseSharp className="text-lg"/> Remove</p>
                        </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex px-2 text-sm gap-4 w-fit border border-black rounded-md">
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-textPrimary">$19.00</td>
                  <td className="py-3 px-4 text-textPrimary font-semibold">$38.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-96 p-4 space-y-2 border rounded-md border-black">
            <p className="font-medium">Cart summary</p>
            <div className="p-2 flex justify-between text-sm border hover:bg-background border-black rounded-md">
              <div className="flex gap-2">
                <input type="radio" name="delivery-method" id="" />
                <p>Free shipping</p>
              </div>
              <span>$0.00</span>
            </div>
            <div className="p-2 flex justify-between text-sm border hover:bg-background border-black rounded-md">
              <div className="flex gap-2">
                <input type="radio" name="delivery-method" id="" />
                <p>Express shipping</p>
              </div>
              <span>+$15.00</span>
            </div>
            <div className="p-2 flex justify-between text-sm border hover:bg-background border-black rounded-md">
              <div className="flex gap-2">
                <input type="radio" name="delivery-method" id="" />
                <p>Pick Up</p>
              </div>
              <span>%21.00</span>
            </div>
            <div className="pt-4 flex justify-between text-sm">
              <span className="text-textSecondary">Subtotal</span>
              <span className="font-medium">$1234.00</span>
            </div>
            <hr />
            <div className="py-4 flex justify-between">
              <span className="font-medium">Total</span>
              <span className="font-medium">$1234.00</span>
            </div>
            <div className="flex items-center w-full">
              <button className="px-4 py-2 w-full bg-textPrimary text-white rounded-md">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="my-16 space-y-2">
            <h3 className="font-medium">Have a coupon?</h3>
            <p className="text-textSecondary text-sm">Add your code for an instant cart discount</p>
            <div className="w-96 border border-black p-2 flex justify-between items-center">
                <div className="flex gap-2 text-sm text-textSecondary items-center">
                <RiCoupon5Line className="text-lg"/>
                <span>Coupon Code</span>
                </div>
                <span className="text-sm font-medium">Apply</span>
            </div>
        </div>
      </div>
    </div>
  );
}
