import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto">
      <div className=" flex-grow">
        <Link to="/">
          <img
            className="w-36"
            src="https://margaretbourne.com/wp-content/uploads/2020/08/Submark-logo-for-Suburban-Tourist.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex gap-x-4 mx-4">
        <div>
          <Link to="/?cat=art">
            <h6 className="uppercase ">art</h6>
          </Link>
        </div>
        <div>
          <Link to="/?cat=science">
            <h6 className="uppercase ">science</h6>
          </Link>
        </div>
        <div>
          <Link to="/?cat=technology">
            <h6 className="uppercase ">technology</h6>
          </Link>
        </div>
        <div>
          <Link to="/?cat=cinema">
            <h6 className="uppercase ">cinema</h6>
          </Link>
        </div>
        <div>
          <Link to="/?cat=design">
            <h6 className="uppercase ">design</h6>
          </Link>
        </div>
        <div>
          <Link to="/?cat=food">
            <h6 className="uppercase ">food</h6>
          </Link>
        </div>
        <span>John</span>
        <span>Logout</span>
      </div>
      <span className="bg-teal-200 hover:bg-white hover:border-2 border-teal-500 rounded-full flex w-10 h-10 justify-center items-center">
        <Link className="" to="/write">
          write
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
