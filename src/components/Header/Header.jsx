import React, { useState } from "react";
import SidebarButton from "../Button/SidebarButton";

function Header() {
  const [nav, setNav] = useState(false);
  
  return (
    <>
      <div className="flex justify-between fixed z-50 items-center w-full h-34 px-4 py-2 bg-[#FAAC14]">
        <SidebarButton />

        <p className="text-4xl font-semibold font-signature text-[#D90000]">
          Sandwich <span className="text-[#570303]">Club</span>
        </p>
      </div>
    </>
  );
}

export default Header;
