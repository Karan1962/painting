import React from "react";
import { images } from "../constants/images";
import { IoStarSharp } from "react-icons/io5";

const PaintingCart = () => {
  return (
    <div>
      <div className="flex justify-center text-center p-20 bg-black w-full ">
        <h1 className="font-semibold text-6xl text-white p-3 leading-snug ">
          Here It Comes
          <br />
          An Amazing Art Work
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 p-3 bg-black">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className="pb-3 max-w-[400px] max-h-[500px] object-cover bg-white flex flex-col justify-center items-center border-solid border-gray-100 shadow-sm rounded-md border-[2px]"
            >
              <img
                className="w-[80%] h-[80%]  rounded-md pb-2"
                src={img.url}
                alt="image"
              />
              <div className="flex flex-col justify-center w-[80%]">
                <p className="font-bold text-2xl">{img.price}</p>
                <p className="flex items-center font-semibold">
                  Ratings: 5 <IoStarSharp className="text-yellow-500" />
                </p>
                <p className="font-semibold">Description:{img.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaintingCart;
