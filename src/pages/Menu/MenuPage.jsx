import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import BestOfferCard from "../../components/Card/BestOfferCard";
import CS from "../../assets/img/Chicken-sandwich.jpeg";
import BBQS from "../../assets/img/BBQ-sandwich.jpeg";
import ES from "../../assets/img/egg-sandwich.jpeg";
import SS from "../../assets/img/Seafood-sandwich.jpeg";
import Platter from "../../assets/img/platter1.jpeg";
import SliderPlatter from "../../assets/img/slider-platter.jpeg";
import FoodCard from "../../components/Card/FoodCard";

function MenuPage() {
  const quoteBoxRef = useRef(null);

  const scrollLeft = () => {
    quoteBoxRef.current.scrollLeft -= 100;
  };
  const scrollRight = () => {
    quoteBoxRef.current.scrollLeft += 100;
  };
  return (
    <>
      <div className="w-full h-screen">
        <Header />

        <div className="pt-[50px] px-4">
          <div className=" flex flex-col gap-3 mt-10">
            <div className=" flex justify-between">
              <h2 className="font-semibold capitalize text-[#570303]">
                Best Offers
              </h2>

              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="flex cursor-pointer shadow-sm shadow-[#570303] items-center justify-center h-[25px] w-[25px] bg-transparent rounded-md border-[1px] border-[#570303] hover:border-none hover:bg-[#570303] hover:text-white"
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button
                  onClick={scrollRight}
                  className="flex cursor-pointer shadow-sm shadow-[#570303] items-center justify-center h-[25px] w-[25px] bg-transparent rounded-md border-[1px] border-[#570303] hover:border-none hover:bg-[#570303] hover:text-white"
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex gap-6 py-4 h-40 overflow-x-auto"
            >
              <BestOfferCard
                Img={CS}
                Food="Chicken Sandwich"
                Rating={4}
                Description="Visiting the best tourist areas chosen by the audience."
                Price="3,500"
              />
              <BestOfferCard
                Img={SS}
                Food="Seafood sandwich"
                Rating={5}
                Description="Visiting the best tourist areas chosen by the audience."
                Price="3,500"
              />
              <BestOfferCard
                Img={Platter}
                Food="Deluxe Platter"
                Rating={5}
                Description="Visiting the best tourist areas chosen by the audience."
                Price="15,000"
              />
              <BestOfferCard
                Img={BBQS}
                Food="BBQ Grilled Sandwich"
                Rating={4}
                Price="5,000"
              />
              <BestOfferCard
                Img={SliderPlatter}
                Food="Slider Platter"
                Rating={5}
                Price="25,000"
              />
              <BestOfferCard
                Img={ES}
                Food="Deluxe Platter"
                Rating={5}
                Description="Visiting the best tourist areas chosen by the audience."
                Price="4,500"
              />
            </div>
          </div>
        </div>

        <div className="pt-[50px] px-4">
          <div className=" flex flex-col gap-3">
            <div className=" flex justify-between">
              <h2 className="font-semibold capitalize text-[#570303]">
                Sandwich
              </h2>

              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="flex cursor-pointer shadow-sm shadow-[#570303] items-center justify-center h-[25px] w-[25px] bg-transparent rounded-md border-[1px] border-[#570303] hover:border-none hover:bg-[#570303] hover:text-white"
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button
                  onClick={scrollRight}
                  className="flex cursor-pointer shadow-sm shadow-[#570303] items-center justify-center h-[25px] w-[25px] bg-transparent rounded-md border-[1px] border-[#570303] hover:border-none hover:bg-[#570303] hover:text-white"
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex h-[265px] gap-6 py-2 overflow-x-auto"
            >
              <FoodCard
                Img={CS}
                Food="Chicken Sandwich"
                Description="2 chicken sandwiches"
                Price="3,500"
              />
              <FoodCard
                Img={Platter}
                Food="Deluxe Platter"
                Description="5 sandwiches of your choice with a side of fries and and chicken and a 1 liter fruit drink5 sandwiches of your choice with a side of fries 5 pieces of chicken and a 1-liter fruit drink"
                Price="15,500"
              />
              <FoodCard
                Img={BBQS}
                Food="BBQ Grilled Cheese sandwich"
                Description="3 BBQ Grilled Cheese sandwich"
                Price="5,000"
              />
              <FoodCard
                Img={SliderPlatter}
                Food="Slider Platter"
                Description="32 slider pieces"
                Price="25,000"
              />
              <FoodCard
                Img={ES}
                Food="Egg Sandwich"
                Description="2 egg sandwiches"
                Price="4,500"
              />
              <FoodCard
                Img={SS}
                Food="Seafood Sandwich"
                Description="3 seafood sandwiches"
                Price="7,500"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default MenuPage;
