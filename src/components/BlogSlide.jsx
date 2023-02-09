import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogSlide = ({ item, revClass }) => {
  return (
    <div
      className={"flex justify-between my-20  gap-x-20 " + revClass}
      key={item.id}
    >
      <div className={" flex flex-col justify-between px-12  "}>
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p>{item.desc}</p>
        <Link
          className="px-4 py-2 border w-28 text-teal-500 hover:bg-teal-600 hover:text-white"
          to={"/post/2"}
        >
          Read More
        </Link>
      </div>
      <div className=" relative basis-3/6">
        <img className="w-full h-[280px] object-cover" src={item.img} alt="" />
        <div className="w-full h-[280px] absolute shadow-md top-4 -left-4 -z-50 bg-lime-300"></div>
      </div>
    </div>
  );
};

export default BlogSlide;
