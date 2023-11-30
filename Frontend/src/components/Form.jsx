import axios from "axios";
import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = async (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({
      userName: "",
      email: "",
      phone: "",
      message: "",
    });
    try {
      const response = await axios.post("/api/user/create", {
        userName: formData.userName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });


      if (response.status === 201) {
        console.log(response.data);
      }
    
      
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <>
      <div className="text-3xl font-semibold text-cyan-950 text-center pt-6">
        Contact Us
      </div>
      <div className="flex justify-center items-center w-full p-10">
        <form className="flex flex-col gap-3 p-8 w-1/2 mx-auto rounded-md ">
          <input
            type="text"
            name="userName"
            placeholder="username"
            required
            value={formData.userName}
            onChange={handleChange}
            className="focus:outline-none rounded-full p-2 pl-8 capitalize"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            value={formData.email}
            className="focus:outline-none rounded-full p-2 pl-8 capitalize"
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="phone"
            required
            value={formData.phone}
            className="focus:outline-none  rounded-full p-2 pl-8 capitalize"
            onChange={handleChange}
          />
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            className="focus:outline-none rounded-full pl-8 p-2 capitalize"
            placeholder="message"
            value={formData.message}
          ></textarea>
          <button
            onClick={handleClick}
            className="rounded-full bg-black text-white font-semibold p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
