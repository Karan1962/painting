import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-full bg-black shadow-lg justify-around p-6 ">
      <div className="w-1/2 ">
        <h1 className="font-bold text-xl text-white">Art-Is-It</h1>
      </div>
      <div  className="text-white">
        <Link to="/Home">Home</Link>
      </div>
      <div className="text-white">
        <Link to="/About">About</Link>
      </div>
      <div  className="text-white">
        <Link to="/Form">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
