import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <div className="mt-16">
        <img
          className="h-64"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt=""
        />
      </div>
      <div className="text-3xl">Your Cart is empty</div>
      <p className="mt-[-2rem] font-light text-gray-500">
        You can go to home page to view more restaurants
      </p>
      <div>
        <Link to="/" className="bg-orange-400 px-8 py-2 mt-[-2rem] rounded-lg text-white font-semibold">See restaurants near you</Link>
      </div>
    </div>
  );
}
