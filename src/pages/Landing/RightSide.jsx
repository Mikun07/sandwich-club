import React from "react";
import Form from "./Form";

function RightSide() {
  return (
    <>
      <div className="bg-[#FAAC14] w-screen overflow-hidden flex items-center justify-center">
        <div className="">
          <div className="relative lg:shadow-sm lg:shadow-black lg:rounded-lg lg:h-[600px] lg:w-[360px] overflow-hidden bg-gradient-to-r from-[#FAAC14] from-30% to-[#FBEACA] to-100%">
            <div className="top-0 right-0 left-0 bottom-0 z-10">
              <span className="rotate-45 absolute z-30 h-[520px] w-[520px] bg-white top-[-45px] right-[130px] rounded-t-[52px]"></span>
              <span className="rotate-45 absolute z-20 h-[420px] w-[420px] bg-[#FAAC14] top-[-390px] left-[50px] rounded-[52px]"></span>
              <span className="rotate-45 absolute z-20 h-[520px] w-[172px] bg-gradient-to-r from-[#952E02] to-[#6F2201] rounded-[52px] top-[-16px] right-[-20px]"></span>
              <span className="rotate-45 absolute z-20 h-[400px] w-[200px] bg-gradient-to-r from-[#FBEACA] to-[#F8F0E1] rounded-[52px] top-[420px] right-[50px]"></span>
              <div className="z-40 absolute flex top-[160px] left-[15px]">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
