import React, { useContext } from "react";
import './styles/App.scss';

import { FirstSlide } from "./components/FirstSlide";
import { SecondSlide } from "./components/SecondSlide";
import { ThirdSlide } from "./components/ThirdSlide";
import { ForthSlide } from "./components/ForthSlide";
import { GlobalDataContext } from "./context/AppContextProvider";

function App() {
  const sitedata = useContext(GlobalDataContext);
  return (
    <div className="bg">
      <h1>CALCULATING YOUR TOTAL COSTS { sitedata.slideIndex === 3 ? '- YOUR RESULTS': ''}</h1>
      <div className="main">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <ForthSlide />
      </div>
    </div>
  );
}

export default App;
