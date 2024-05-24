import React from "react";

export default function Modal({ showModal }) {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center backdrop-blur-sm bg-[#343541] px-5">
      <div className=" px-12 bg-[#444654] rounded relative flex flex-col items-center justify-center">
        <h2 className="sm:p-10 sm:pb-20 pt-6 pb-14 text-white text-center sm:text-xl text-base">
          You can't search but you can hire me
        </h2>
        <div
          onClick={() => showModal(false)}
          className="absolute top-1 right-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="20px"
            height="20px"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute rounded-b bottom-0 w-full flex items-center justify-center  bg-black">
          <a
            href="mailto:moshtabathi@gmail.com"
            className="sm:py-2 py-1 text-white w-full h-full text-center sm:text-xl text-base"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
