import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import AppDownload from "../../components/appDowmload/AppDownload";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <AppDownload />
    </>
  );
};

export default Home;
