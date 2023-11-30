import React, { useState } from "react";
import PaintingCart from "../components/PaintingCart";
import Footer from "../components/Footer";
import { images } from "../constants/images.js";
import {
  IoIosArrowDropleftCircle ,
  IoIosArrowDroprightCircle ,
} from "react-icons/io";
const Home = () => {
  const [imgPosition, setImgPosition] = useState(0);

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (imgPosition - 1 < 0) {
      return setImgPosition(images.length - 1);
    }
    setImgPosition(imgPosition - 1);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (imgPosition + 1 >= 20) {
      return setImgPosition(images.length - imgPosition);
    }
    setImgPosition(imgPosition + 1);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${images[imgPosition].url})` }}
        className="w-full h-[100vh] bg-cover bg-center flex justify-center items-center text-center"
      >
        <div className="flex w-full h-full justify-between items-center px-2">
          <button onClick={handlePrevClick}>
            <IoIosArrowDropleftCircle  className="text-4xl text-gray-200"/>
          </button>
          <div className="w-1/2 h-full">
            <img
              className="w-full h-full"
              src={images[imgPosition].url}
              alt="img"
            />
          </div>
          <button onClick={handleNextClick}>
            <IoIosArrowDroprightCircle  className="text-4xl  text-gray-200 "/>
          </button>
        </div>
      </div>
      <PaintingCart />
      <Footer />
    </>
  );
};

export default Home;
