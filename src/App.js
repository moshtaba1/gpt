import React, { useState } from "react";
import "./App.css";
import LoadingPage from "./Components/LoadingPage";
import Main from "./Components/Main";
import Modal from "./Components/Modal";
import SideBar from "./Components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [mainContent , setMainContent] = useState("defult")

  return (
    <div>
      <LoadingPage />
      <div className=" sm:relative">
        <SideBar content={setMainContent} />
        {showModal ? (
          <Modal showModal={setShowModal} />
        ) : (
          <Main showModal={setShowModal} content={mainContent}/>
        )}
      </div>
    </div>
  );
}

export default App;
