import React from "react";
import DP from "../../assets/img/Avatar.jpg"

function Avatar() {
  return (
    <>
      <div>
        <div className="relative pt-6 flex gap-3 items-center">
            <img src={DP} alt="" className="rounded-full h-[50px] w-[50px]" />

            <div >
                <p className=" capitalize font-bold">Ayomikun Olaleye</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
