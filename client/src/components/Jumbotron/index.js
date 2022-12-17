import React from "react";

function Jumbotron({ children }) {
  return (
    <div className=" h-min clear-both pt-120 ml-[280px] mr-[20px] mt-[20px] text-left p-3"
    >
      {children}
    </div>
  );
}

export default Jumbotron;