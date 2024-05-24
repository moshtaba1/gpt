import React from "react";
import MainAiContent from "../MainAiContent";
import MainDefultContent from "./MainDefultContent";
import MainSlmContent from "./MainSlmContent";

export default function Main({ showModal, content }) {
  return (
    <div className=" w-full flex flex-col items-center justify-between h-screen">
      {content === "defult" ? (
        <MainDefultContent />
      ) : content === "slm" ? (
        <MainSlmContent />
      ) : content === "ai" ? (
        <MainAiContent />
      ) : (
        ""
      )}
      <input
        type="text"
        onFocus={() => showModal(true)}
        className="w-4/5 rounded bg-[#444654] mb-3 p-1.5 focus:outline-none"
      />
    </div>
  );
}
