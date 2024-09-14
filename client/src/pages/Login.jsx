import React from "react";
import loginImage from "../assets/login/LoginImage.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 relative">
        <img src={loginImage} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-4 min-w-96 justify-center">
          <h2 className="text-textPrimary text-2xl font-semibold">Sign In</h2>
          <p className="text-textSecondary text-sm">
            Don't have an accout yet?{" "}
            <span
              className="text-green-500 font-semibold hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
          <form className="flex gap-4 flex-col min-w-96">
            <input
              type="text"
              className="text-sm px-2 py-2 border-b"
              placeholder="Your username or email Address"
            />
            <input
              type="password"
              className="text-sm px-2 py-2 border-b"
              placeholder="Password"
            />
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="cursor-pointer" />
                <p className="text-sm text-textSecondary">Remember me</p>
              </div>
              <div className="font-semibold text-sm cursor-pointer hover:underline">
                Forgot password?
              </div>
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
