import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

function SidebarButton() {
    const [nav, setNav] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setNav(!nav)}
          className="bg-[#F8F0E1] w-[50px] h-[50px] relative rounded-xl text-[#570303] shadow-sm shadow-[#570303]  border-2 border-[#570303] flex items-center justify-center"
        >
          <ion-icon name="menu" size="large"></ion-icon>
        </button>
        {nav && (
          <div className="bg-[#F8F0E1] text-[#570303] w-64 h-screen flex flex-col px-2 pt-4 absolute top-0 left-0 z-50 transition-all duration-300">
            <div className="flex justify-end">
              <button
                onClick={() => setNav(!nav)}
                className=" bg-[#F8F0E1] w-[50px] h-[50px] rounded-xl text-[#570303] shadow-sm shadow-[#570303] border-2 border-[#570303] flex items-center justify-center"
              >
                <ion-icon name="close" size="large"></ion-icon>
              </button>
            </div>

            <Avatar />
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarButton;
