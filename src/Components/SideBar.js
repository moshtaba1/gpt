import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsChatLeftText } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { CiBrightnessDown } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

export default function SideBar({ content }) {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <div>
      {sidebarShow ? (
        <div className="relative md:w-80 sm:w-60 w-44 flex flex-col justify-between bg-[#202123] h-screen p-2 pt-10">
          <div
            onClick={() => setSidebarShow(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <MdOutlineCancel className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col gap-2">
            <div
              onClick={() => content("defult")}
              className="cursor-pointer flex items-center border-[1px] rounded-md border-[#343541] p-2.5 gap-2"
            >
              <FiPlus className="text-white" />
              <span className="text-white text-sm">New Chat</span>
            </div>
            <div
              onClick={() => content("ai")}
              className="cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2"
            >
              <BsChatLeftText className="text-white" />
              <span className="text-white text-sm">Im scared of ai ...</span>
            </div>
            <div
              onClick={() => content("slm")}
              className=" cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2"
            >
              <BsChatLeftText className="text-white" />
              <span className="text-white text-sm">Slm Chtri? ...</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-t-1 border-[#343541] pt-2 ">
            <div className=" cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2">
              <MdDeleteOutline className="text-white" />
              <span className="text-white text-sm">Clear conversations</span>
            </div>
            <div className="cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2">
              <CiBrightnessDown className="text-white" />
              <span className="text-white text-sm">Lite mode</span>
            </div>
            <div className="cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2">
              <FaRegUser className="text-white" />
              <span className="text-white text-sm">My account</span>
            </div>
            <div className="cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2">
              <RxExternalLink className="text-white" />
              <span className="text-white text-sm">Updates and FAQ</span>
            </div>
            <div className="cursor-pointer flex items-center rounded-md hover:bg-[#343541] p-2.5 gap-2">
              <MdLogout className="text-white" />
              <span className="text-white text-sm">Log out</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setSidebarShow(true)}
          className="absolute top-2 left-2 cursor-pointer "
        >
          <IoIosMenu className="text-white w-10 h-10" />
        </div>
      )}
    </div>
  );
}
