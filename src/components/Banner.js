import React from "react";
import background from "../assets/background.jpg";
import Navbar from "./Navbar";
import lionOnRock from "../assets/lion-on-rock-removebg-preview.png";

const Banner = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover pt-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container mx-auto">
        <Navbar />
        <div className="flex flex-col justify-center">
          <h1 className="text-red-900 text-7xl font-bold mt-16">Goldie Inu</h1>
          <img src={lionOnRock} alt="" className="w-1/2 mt-16 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
