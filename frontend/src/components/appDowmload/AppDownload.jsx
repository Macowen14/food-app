import React from "react";
import "./appDownload.scss";
import appleStore from "../../assets/appleStore.png";
import playStore from "../../assets/playStore.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="mobile-app">
      <p>
        For better experience download <br /> <strong>Easy Meal</strong>
      </p>
      <div className="download-platforms">
        <img src={playStore} alt="" className="img" />
        <img src={appleStore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
