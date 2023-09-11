import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
