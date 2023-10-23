import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SidesCard({ Img, Price, Food, Description }) {
  const notify = () => toast.success("Added to Favorite!");
  const order = () => toast.success("Added to Cart!");
  return (
    <>
      <div className="bg-[#F8F0E1] py-1 px-2 rounded-lg flex gap-2 items-center w-[330px] h-[160px] shadow-sm shadow-gray-300">
        <div className="w-[150px] h-[150px]">
          <img
            src={Img}
            alt=""
            className="object-cover object-center rounded-lg w-full h-full"
          />
        </div>

        <div className="flex text-xs flex-col gap-4 justify-center w-[150px] ">
          <div className="flex justify-between">
            <p className="capitalize text-xs font-semibold text-[#FAAC14]">
              {Food}
            </p>
          </div>

          <p className=" text-black text-xs font-medium leading-4 truncate">
            {Description}
          </p>

          <p className=" font-semibold text-[#570303]">
            <span>&#8358;</span> {Price}
          </p>

          <div className="flex gap-2 justify-end w-full">
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
    </>
  );
}

export default SidesCard;
