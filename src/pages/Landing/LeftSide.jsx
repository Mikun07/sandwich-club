import React from "react";

function LeftSide() {
  return (
    <div className="lg:flex w-screen LeftSide-img items-center justify-center">
      <div className="bg-transparent w-full flex justify-center backdrop-blur-md capitalize px-4 py-2 z-10">
        <div className="bg-transparent border-2  w-full flex justify-center border-white m-1 p-2">
          <p className="text-4xl font-semibold font-signature text-[#D90000]">
            Sandwich <span className="text-[#570303]">Club</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
