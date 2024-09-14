import React from "react";
import DashRecord from "./DashRecord";
import { FaBoxOpen, FaUserFriends } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import TrayTableBlack from "../../assets/cart/TrayTableBlack.png";
import TrayTableRed from "../../assets/cart/TrayTableRed.png";

export default function DashPage() {
  return (
    <div className="w-full p-4 ">
      <h1 className="text-3xl my-4 font-medium">Dashboard</h1>
      <div className="flex gap-4">
        <DashRecord
          name="Total User"
          amount="40,689"
          percent="8.5%"
          disc="Up from yesterday"
          Icon={
            <FaUserFriends className="p-4 rounded-3xl bg-violet-200 text-violet-400 text-7xl" />
          }
        />
        <DashRecord
          name="Total Order"
          amount="10293"
          percent="8.5%"
          disc="Up from past week"
          Icon={
            <FaBoxOpen className="p-4 rounded-3xl bg-yellow-200 text-yellow-400 text-7xl" />
          }
        />
        <DashRecord
          name="Total Sales"
          amount="$89,000"
          percent="4.3%"
          disc="Down from yesterday"
          Icon={
            <GoGraph className="p-4 rounded-3xl bg-green-200 text-green-400 text-7xl" />
          }
        />
        <DashRecord
          name="Total Pending"
          amount="2040"
          percent="1.8%"
          disc="Up from yesterday"
          Icon={
            <GiBackwardTime className="p-4 rounded-3xl bg-orange-200 text-orange-400 text-7xl" />
          }
        />
      </div>
      <div className="my-4 p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Deals Details</h2>
          <select
            name="month"
            className="text-sm border bg-background p-2 rounded-full text-textSecondary"
            id=""
          >
            <option value="January">January</option>
            <option value="Febrary">Febrary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Augest">Augest</option>
            <option value="September">September</option>
            <option value="Octubar">Octuber</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <table className="min-w-full rounded-lg">
          <thead className="text-sm border-b border-black font-medium">
            <tr>
              <th className="py-3 px-4 text-left text-textPrimary">
                Product Name
              </th>
              <th className="py-3 px-4 text-left text-textPrimary">Location</th>
              <th className="py-3 px-4 text-left text-textPrimary">
                Date - Time
              </th>
              <th className="py-3 px-4 text-left text-textPrimary">Piece</th>
              <th className="py-3 px-4 text-left text-textPrimary">Amount</th>
              <th className="py-3 px-4 text-left text-textPrimary">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-sm">
              <td className="py-3 text-textPrimary">
                <div className="flex items-center gap-4">
                  <img src={TrayTableBlack} className="w-6" alt="" />
                  <p className="text-base font-medium">Tray Table</p>
                </div>
              </td>
              <td className="py-3 px-4">6096 Marjolaine Landing</td>
              <td className="py-3 px-4 text-textPrimary">
                12.09.2019 - 12.53 PM
              </td>
              <td className="py-3 px-4 text-textPrimary">423</td>
              <td className="py-3 px-4 text-textPrimary">$34,295</td>
              <td className="py-3 px-4 text-textPrimary">
                <div className="px-4 text-sm bg-green-600 w-fit text-white rounded-full">Delivered</div>
              </td>
            </tr>
            <tr className="border-b text-sm">
              <td className="py-3 text-textPrimary">
                <div className="flex items-center gap-4">
                  <img src={TrayTableBlack} className="w-6" alt="" />
                  <p className="text-base font-medium">Tray Table</p>
                </div>
              </td>
              <td className="py-3 px-4">6096 Marjolaine Landing</td>
              <td className="py-3 px-4 text-textPrimary">
                12.09.2019 - 12.53 PM
              </td>
              <td className="py-3 px-4 text-textPrimary">423</td>
              <td className="py-3 px-4 text-textPrimary">$34,295</td>
              <td className="py-3 px-4 text-textPrimary">
                <div className="px-4 text-sm bg-green-600 w-fit text-white rounded-full">Delivered</div>
              </td>
            </tr>
            <tr className="border-b text-sm">
              <td className="py-3 text-textPrimary">
                <div className="flex items-center gap-4">
                  <img src={TrayTableBlack} className="w-6" alt="" />
                  <p className="text-base font-medium">Tray Table</p>
                </div>
              </td>
              <td className="py-3 px-4">6096 Marjolaine Landing</td>
              <td className="py-3 px-4 text-textPrimary">
                12.09.2019 - 12.53 PM
              </td>
              <td className="py-3 px-4 text-textPrimary">423</td>
              <td className="py-3 px-4 text-textPrimary">$34,295</td>
              <td className="py-3 px-4 text-textPrimary">
                <div className="px-4 text-sm bg-green-600 w-fit text-white rounded-full">Delivered</div>
              </td>
            </tr>
            <tr className="border-b text-sm">
              <td className="py-3 text-textPrimary">
                <div className="flex items-center gap-4">
                  <img src={TrayTableBlack} className="w-6" alt="" />
                  <p className="text-base font-medium">Tray Table</p>
                </div>
              </td>
              <td className="py-3 px-4">6096 Marjolaine Landing</td>
              <td className="py-3 px-4 text-textPrimary">
                12.09.2019 - 12.53 PM
              </td>
              <td className="py-3 px-4 text-textPrimary">423</td>
              <td className="py-3 px-4 text-textPrimary">$34,295</td>
              <td className="py-3 px-4 text-textPrimary">
                <div className="px-4 text-sm bg-green-600 w-fit text-white rounded-full">Delivered</div>
              </td>
            </tr>
            <tr className="border-b text-sm">
              <td className="py-3 text-textPrimary">
                <div className="flex items-center gap-4">
                  <img src={TrayTableBlack} className="w-6" alt="" />
                  <p className="text-base font-medium">Tray Table</p>
                </div>
              </td>
              <td className="py-3 px-4">6096 Marjolaine Landing</td>
              <td className="py-3 px-4 text-textPrimary">
                12.09.2019 - 12.53 PM
              </td>
              <td className="py-3 px-4 text-textPrimary">423</td>
              <td className="py-3 px-4 text-textPrimary">$34,295</td>
              <td className="py-3 px-4 text-textPrimary">
                <div className="px-4 text-sm bg-green-600 w-fit text-white rounded-full">Delivered</div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
