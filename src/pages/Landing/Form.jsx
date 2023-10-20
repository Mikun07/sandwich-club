import React from "react";

function Form() {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-black">
          <ion-icon name="person"></ion-icon>
          <input type="text" placeholder="Username / Email" className=" capitalize ring-2 ring-gray-300 text-black focus:ring-[#570303] p-2 rounded-md"/>
        </div>

        <div className="flex items-center gap-2 text-black">
          <ion-icon name="lock-closed"></ion-icon>
          <input type="password" placeholder="Password here" className=" capitalize ring-2 ring-gray-300 text-black focus:ring-[#570303] p-2 rounded-md"/>
        </div>

        <button type="submit" className="capitalize flex items-center px-2 py-2 rounded-lg ring-2 ring-gray-300 text-black hover:ring-[#570303] hover:text-[#570303] w-36 ml-5 hover:scale-105 duration-300">
          Login in here
          <ion-icon name="chevron-forward"></ion-icon>
        </button>
      </form>
    </div>
  );
}

export default Form;
