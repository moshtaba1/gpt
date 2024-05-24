import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export default function MainSlmContent() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" w-4/5 flex items-start justify-between py-10">
        <div className="flex gap-7">
          <img className="w-10 h-10 rounded-md" src="./images/Icons (3).png" />
          <p className="text-white">Slm Chtri? bidri?</p>
        </div>
        <div className="flex gap-2">
          <FaRegEdit className="text-white h-6 w-6 cursor-pointer" />
        </div>
      </div>
      <div className="bg-[#444654] w-full flex justify-center">
        <div className=" w-4/5 flex items-start justify-between py-10">
          <div className="flex gap-7">
            <img className="w-10 h-10 rounded-md" src="./images/Icons.jpg" />
            <p className="text-white">Slm khbm? u chtri?</p>
          </div>
          <div className="flex gap-2">
            <AiOutlineLike className="text-white h-6 w-6 cursor-pointer" />
            <AiOutlineDislike className="text-white h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
