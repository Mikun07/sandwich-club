import React from "react";

function BestOfferCard({ Img, Price, Rating, Food,}) {
  return (
    <>
      <div className="bg-[#F8F0E1] py-1 px-2 rounded-lg flex gap-2 lg:w-[330px] w-[500px] shadow-sm shadow-gray-300">
        <div className="w-[150px] h-full">
          <img
            src={Img}
            alt=""
            className="object-cover object-center rounded-lg w-full h-full"
          />
        </div>

        <div className="flex text-xs flex-col w-[150px] gap-4 justify-center">
          <div className="flex justify-between gap-4">
            <p className="capitalize truncate font-semibold text-[#FAAC14]">
              {Food}
            </p>

            <span className="flex text-xs items-center gap-1 text-yellow-500">
              <ion-icon name="star" className=" "></ion-icon>
              <p className=" font-medium text-gray-700">{Rating}</p>
            </span>
          </div>

          <p className=" font-semibold text-[#570303]"><span>&#8358;</span> {Price}</p>
        </div>
      </div>
    </>
  );
}

export default BestOfferCard;
