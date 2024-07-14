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
        <img src={playStore} alt="playstore" loading="lazy" className="img" />
        <img src={appleStore} alt="applestore" loading="lazy" />
      </div>
    </div>
  );
};

export default React.memo(AppDownload);
