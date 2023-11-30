import React from "react";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";


const Footer = () => {
  return (
    <div>
      <div className="flex gap-3 justify-center p-20 bg-black">
        <TiSocialFacebook className="text-blue-400 text-3xl hover:scale-110 transition 0.5s ease-linear"/>
        <TiSocialInstagram className="text-pink-400 text-3xl hover:scale-110 transition 0.5s ease-linear"/>
        <TiSocialTwitter className="text-blue-400 text-3xl hover:scale-110 transition 0.5s ease-linear"/>
        <TiSocialYoutube className="text-red-500 text-3xl hover:scale-110 transition 0.5s ease-linear" />
      </div>
    </div>
  );
};

export default Footer;
