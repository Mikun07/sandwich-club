import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function LandingPage() {
  return (
    <div>
      <div className="w-full h-screen flex gap-0 overflow-hidden">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default LandingPage;
