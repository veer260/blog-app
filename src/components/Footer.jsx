import React from "react";

const Footer = () => {
  return (
    <div className="bg-teal-200 flex justify-between max-w-5xl mx-auto items-center px-12 py-4 ">
      <div>
        <img
          className="w-[100px]"
          src="https://margaretbourne.com/wp-content/uploads/2020/08/Submark-logo-for-Suburban-Tourist.jpg"
          alt=""
        />
      </div>
      <div>
        <p className="font-semibold">Made with ❤️ and ReactJS</p>
      </div>
    </div>
  );
};

export default Footer;
