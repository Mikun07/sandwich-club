import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";


function SidebarButton() {
  const [nav, setNav] = useState(false);

  const menu = [
    {
      name: "Home",
      link: "/menu",
      icon: "home",
    },
    {
      name: "Order",
      link: "/order",
      icon: "create",
    },
    {
      name: "View Order",
      link: "/vieworder",
      icon: "cart",
    },
    {
      name: "Saved",
      link: "/saved",
      icon: "heart-outline",
    },
    {
      name: "Profile",
      link: "/profile",
      icon: "person-circle-outline",
    },
    {
      name: "Help",
      link: "/help",
      icon: "help-circle-outline",
    },
  ];

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

            <ul className="flex flex-col gap-6 mt-12">
                  {menu.map(({ id, link, name, icon}) => (
                    <li key={id} className="flex items-center justify-center">
                      <NavLink
                        onClick={() => setNav(!nav)}
                        to={link}
                        className={({ isActive, isPending }) => {
                          return isPending
                            ? ""
                            : isActive
                            ? "flex items-center font-bold gap-6 text-[#F8F0E1] bg-[#FAAC14] p-2 cursor-pointer w-full border-l-[#570303] border-l-4"
                            : "flex items-center font-bold gap-6 hover:bg-[#FAAC14] p-2 cursor-pointer w-full hover:border-l-[#570303] hover:border-l-2";
                        }}
                      >
                        <ion-icon name={icon}></ion-icon>
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarButton;
