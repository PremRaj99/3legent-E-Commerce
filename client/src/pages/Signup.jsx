import React, { useState } from "react";
import loginImage from "../assets/login/LoginImage.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.email ||
        !formData.name ||
        !formData.password ||
        formData.email === "" ||
        formData.name === "" ||
        formData.password === ""
      ) {
        return toast.error("fill all the required fields!");
      }
      const user = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await user.json();
      if (data) {
        toast.success(data.message);
      }
    } catch (error) {
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
          <h2 className="text-textPrimary text-2xl font-semibold">Sign up</h2>
          <p className="text-textSecondary text-sm">
            Already have an account?{" "}
            <span
              className="text-green-500 font-semibold hover:underline cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col min-w-96"
          >
            <input
              type="text"
              className="text-sm px-2 py-2 border-b"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <input
              type="email"
              className="text-sm px-2 py-2 border-b"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <input
              type="password"
              className="text-sm px-2 py-2 border-b"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <div className="flex gap-2">
              <input type="checkbox" required className="cursor-pointer" />
              <p className="text-sm text-textSecondary">
                I agree with{" "}
                <span className="font-semibold text-textPrimary hover:underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-semibold text-textPrimary hover:underline cursor-pointer">
                  Terms of Use
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
