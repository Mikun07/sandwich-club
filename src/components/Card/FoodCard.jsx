import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function FoodCard({ Img, Price, Food, Description }) {
  const notify = () => toast.success("Added to Favorite!");
  const order = () => toast.success("Added to Cart!");
  return (
    <>
      <div className="bg-[#F8F0E1] py-2 px-1 rounded-lg flex flex-col gap-3 h-[225px] w-[230px] shadow-sm shadow-gray-300">
        <div className="w-full h-[100px]">
          <img
            src={Img}
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-2 px-2 justify-center ">
          <p className="capitalize text-sm w-[200px] truncate font-semibold text-[#FAAC14]">
            {Food}
          </p>
          <div className="flex items-center w-[200px]">
            <p className="line-clamp-4 text-xs truncate text-black font-medium leading-4 tracking-wide">
              {Description}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-[#570303]"><span>&#8358;</span> {Price}</p>
            <div className="flex gap-2">
              <button
                onClick={notify}
                className="bg-transparent w-[25px] h-[25px] border-2 border-[#FAAC14] text-[#FAAC14] rounded-lg flex items-center justify-center hover:border-none hover:bg-[#FAAC14] hover:text-white"
              >
                <Toaster />
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button
                onClick={order}
                className="bg-transparent w-[25px] h-[25px] border-2 border-[#FAAC14] text-[#FAAC14] rounded-lg flex items-center justify-center hover:border-none hover:bg-[#FAAC14] hover:text-white"
              >
                <Toaster />
                <ion-icon name="cart-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
