import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import BestOfferCard from "../../components/Card/BestOfferCard";
import CS from "../../assets/img/Chicken-sandwich.jpeg";
import BBQ from "../../assets/img/BBQ-sandwich.jpeg";
import ES from "../../assets/img/egg-sandwich.jpeg";
import SS from "../../assets/img/Seafood-sandwich.jpeg";
import Platter from "../../assets/img/platter1.jpeg";
import SliderPlatter from "../../assets/img/slider-platter.jpeg";
import FoodCard from "../../components/Card/FoodCard";
import SidesCard from "../../components/Card/SidesCard";
import Chicken from "../../assets/img/chicken.jpeg";
import ChickenWings from "../../assets/img/chicken-wings.jpeg";
import PotatoSalad from "../../assets/img/potato-salad.jpeg";
import FrenchFries from "../../assets/img/french-fries.jpeg";
import YamFries from "../../assets/img/yam-fries.jpeg";
import Drink1 from "../../assets/img/apple-juice.jpeg";
import Drink2 from "../../assets/img/lemonade.jpeg";
import Drink3 from "../../assets/img/banana-smoothie.jpeg";
import Drink4 from "../../assets/img/orange-juice.jpeg";
import Drink5 from "../../assets/img/watermelon-smoothie.jpeg";
import Drink6 from "../../assets/img/passion-mojito-drink.jpeg";
import Drink7 from "../../assets/img/mango-pineapple-punch.jpeg";

import VegetableSalad from "../../assets/img/vegetable-salad.jpeg";

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
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex gap-6 py-4 overflow-x-auto"
            >
              <BestOfferCard
                Img={CS}
                Food="Chicken Sandwich"
                Rating={4}
                Price="3,500"
              />
              <BestOfferCard
                Img={FrenchFries}
                Food="French Fries"
                Rating={4}
                Price="1,500"
              />
              <BestOfferCard
                Img={Drink1}
                Food="Apple Juice"
                Rating={4}
                Price="1,500"
              />
              <BestOfferCard
                Img={SS}
                Food="Seafood sandwich"
                Rating={5}
                Price="7,500"
              />
              <BestOfferCard
                Img={Platter}
                Food="Deluxe Platter"
                Rating={5}
                Price="15,500"
              />
               <BestOfferCard
                Img={Drink7}
                Food="mango pineapple punch"
                Rating={5}
                Price="3,500"
              />
              <BestOfferCard
                Img={ChickenWings}
                Food="Chicken Wings"
                Rating={5}
                Price="4,500"
              />
              <BestOfferCard
                Img={BBQ}
                Food="BBQ Grilled Sandwich"
                Rating={4}
                Price="5,000"
              />
               <BestOfferCard
                Img={Drink3}
                Food="banana smoothie"
                Rating={5}
                Price="2,500"
              />
              <BestOfferCard
                Img={SliderPlatter}
                Food="Slider Platter"
                Rating={5}
                Price="25,000"
              />
              <BestOfferCard
                Img={PotatoSalad}
                Food="Potato Salad"
                Rating={4}
                Price="25,000"
              />
               <BestOfferCard
                Img={Drink5}
                Food="Watermelon smoothie"
                Rating={4}
                Price="2,500"
              />
              <BestOfferCard
                Img={ES}
                Food="Egg sandwich"
                Rating={5}
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

              {/* <div className="flex gap-2">
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
              </div> */}
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex gap-6 py-2 overflow-x-auto"
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
                Img={BBQ}
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

        <div className="pt-[50px] px-4">
          <div className=" flex flex-col gap-3 mt-10">
            <div className=" flex justify-between">
              <h2 className="font-semibold capitalize text-[#570303]">Sides</h2>

              {/* <div className="flex gap-2">
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
              </div> */}
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex gap-6 py-4 overflow-x-auto"
            >
              <SidesCard
                Img={Chicken}
                Price="4,500"
                Food="Crispy chicken"
                Description="5 pieces of crispy chicken"
              />
              <SidesCard
                Img={FrenchFries}
                Price="1,500"
                Food="Fries"
                Description="1 portion of fries"
              />
              <SidesCard
                Img={ChickenWings}
                Price="4,500"
                Food="Spicy Chicken Wings"
                Description="5 pieces of spicy chicken wings"
              />
              <SidesCard
                Img={YamFries}
                Price="1,500"
                Food="Yam Fries"
                Description="1 portion of fries"
              />
              <SidesCard
                Img={PotatoSalad}
                Price="3,000"
                Food="Potato Salad"
                Description="1 portion of potato salad"
              />
              <SidesCard
                Img={VegetableSalad}
                Price="2,000"
                Food="vegetable Salad"
                Description="1 portion of vegetable salad"
              />
            </div>
          </div>
        </div>

        <div className="py-[50px] px-4">
          <div className=" flex flex-col gap-3 mt-10">
            <div className=" flex justify-between">
              <h2 className="font-semibold capitalize text-[#570303]">
                Drinks
              </h2>

              {/* <div className="flex gap-2">
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
              </div> */}
            </div>

            <div
              ref={quoteBoxRef}
              className="bg-transparent px-3 flex gap-6 py-4 overflow-x-auto"
            >
              <SidesCard
                Img={Drink1}
                Price="1,500"
                Food="Apple Juice"
                Description="1 liter of Apple juice"
              />
              <SidesCard
                Img={Drink2}
                Price="1,500"
                Food="Watermelon Lemonade"
                Description="1 liter of Watermelon Lemonade"
              />
              <SidesCard
                Img={Drink3}
                Price="2,500"
                Food="Banana Smoothie"
                Description="1 liter of Banana Smoothie"
              />
              <SidesCard
                Img={Drink4}
                Price="1,500"
                Food="Orange Juice"
                Description="1 liter of Orange Juice"
              />
              <SidesCard
                Img={Drink5}
                Price="2,500"
                Food="Watermelon Smoothie"
                Description="1 liter of Watermelon Smoothie"
              />
              <SidesCard
                Img={Drink6}
                Price="3,500"
                Food="Passion Mojito drink"
                Description="1 liter of passion mojito drink"
              />
              <SidesCard
                Img={Drink7}
                Price="3,500"
                Food="mango pineapple punch"
                Description="1 liter of mango pineapple punch"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default MenuPage;
