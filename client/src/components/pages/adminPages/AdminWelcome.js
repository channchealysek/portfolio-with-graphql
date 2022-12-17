import React from "react";
import Jumbotron from "../../Jumbotron";
import imgme from "../../../assets/cover/myh.png";

export default function NotFound() {
  return (
    <div>
      <Jumbotron>
        <div className="flex items-center space-x-4 ml-[5px]">
          <img className="w-[60px] h-[60px] rounded-full" src={imgme} alt="" />
          <div className="font-medium dark:text-white">
            <div>SEK,</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Channchealy
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
