import React from "react";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../../hook/useScreenSize";

function LandingPage() {
  const { width } = useScreenSize();
  const navigate = useNavigate()
  
  return (
    <>
      {width > 768 ? (
        <div className="bg-[#FAAC14] w-screen h-screen flex items-center overflow-hidden justify-center">
          <div className="flex flex-col relative h-[600px] w-[660px] LeftSide-img items-center justify-center">
            <div className="bg-transparent w-full flex justify-center backdrop-blur-md capitalize px-4 py-2 z-10">
              <div className="border-2 w-full flex justify-center border-white m-1 p-2">
                <p className="text-4xl font-semibold font-signature text-[#D90000]">
                  Sandwich <span className="text-[#570303]">Club</span>
                </p>
              </div>
            </div>

            <div className="h-20 bg-[#FAE9C7] text-[#570303] absolute flex w-full bottom-0 justify-center gap-20 px-6 py-3">
              <button
                onClick={() => navigate("/menu")}
                className="flex flex-col justify-center items-center capitalize font-bold text-lg"
              >
                <ion-icon name="menu" size="large"></ion-icon>
                <span>Menu</span>
              </button>

              <button
                onClick={() => navigate("")}
                className="flex flex-col justify-center items-center capitalize font-bold text-lg"
              >
                <ion-icon name="fast-food" size="large"></ion-icon>
                <span>order</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen w-screen overflow-hidden LeftSide-img items-center justify-center">
          <div className="bg-transparent w-full flex justify-center backdrop-blur-md capitalize px-4 py-2 z-10">
            <div className="border-2 w-full flex justify-center border-white m-1 p-2">
              <p className="text-4xl font-semibold font-signature text-[#D90000]">
                Sandwich <span className="text-[#570303]">Club</span>
              </p>
            </div>
          </div>
          <div className="h-20 bg-[#FAE9C7] text-[#570303] absolute flex w-full bottom-0 justify-center gap-20 px-6 py-3">
            <button
              onClick={() => navigate("/menu")}
              className="flex flex-col justify-center items-center capitalize font-bold text-lg"
            >
              <ion-icon name="menu" size="large"></ion-icon>
              <span>Menu</span>
            </button>

            <button
              onClick={() => navigate("")}
              className="flex flex-col justify-center items-center capitalize font-bold text-lg"
            >
              <ion-icon name="fast-food" size="large"></ion-icon>
              <span>order</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
