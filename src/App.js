import "./App.css";
import { FaRegHeart } from "react-icons/fa";
import MilkMocha from "./assets/milk-and-mocha-cute.gif";
import MainImg from "./assets/batman-kitty.jpeg";
import Chipi from "./assets/chipi.gif";

import { useState } from "react";
import FloatingHearts from "./FloatingHearts";

//TO DO: Fix No button
function App() {
  const [isYes, setIsYes] = useState(false);
  const [isNo, setiIsNo] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickHandler = (answer) => {
    if (answer === "yes") {
      setIsYes(true);
    } else {
      setIsOpen(true);
    }
  };

  const YesView = () => {
    return (
      <>
        <header className="app-header">
          <FaRegHeart className="heart-icon" size={30} />
          <h1>Amazing</h1>
          <FaRegHeart className="heart-icon" size={30} />
        </header>
        <img className="second-img" src={MilkMocha} />
      </>
    );
  };

  const NoModal = () => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="text-container">
            <h2>
              You have been chipified{" "}
              <button onClick={() => setIsOpen(false)} className="close-btn">
                Close
              </button>
            </h2>
          </div>
          <img className="third-img" src={Chipi} />
        </div>
      </div>
    );
  };

  return (
    <>
      {isOpen && <NoModal />}
      <div className="App">
        {isYes ? (
          <>
            <YesView />
          </>
        ) : (
          <>
            <header className="app-header">
              <FaRegHeart className="heart-icon" size={30} />
              <h1>Hi Pookie</h1>
              <FaRegHeart className="heart-icon" size={30} />
            </header>
            <img className="main-img" src={MainImg} />
            <div className="app-body">
              <p>Will you be my valentine?</p>
              <button
                onClick={() => onClickHandler("yes")}
                className="btn btn-yes"
              >
                Yes
              </button>
              <button
                onClick={() => onClickHandler("no")}
                className="btn btn-no"
              >
                No
              </button>

              {!isOpen && <FloatingHearts />}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
