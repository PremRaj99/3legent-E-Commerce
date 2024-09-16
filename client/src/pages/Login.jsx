import React, { useState } from "react";
import loginImage from "../assets/login/LoginImage.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/User/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      if (
        !formData.email ||
        !formData.password ||
        formData.email === "" ||
        formData.password === ""
      ) {
        dispatch(signInFailure("Plesase fill out all the fields."));
        return toast.error("fill all the required fields!");
      }
      const user = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await user.json();
      if (data) {
        toast.success(data.message);
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col min-w-96"
          >
            <input
              type="text"
              className="text-sm px-2 py-2 border-b"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              placeholder="Your username or email Address"
            />
            <input
              type="password"
              className="text-sm px-2 py-2 border-b"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
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
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
