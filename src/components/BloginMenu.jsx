import React from "react";

const BloginMenu = ({ item }) => {
  return (
    <div className="mb-4 flex flex-col space-y-2">
      <div>
        <img className="w-full  h-[250px] object-cover" src={item.img} alt="" />
      </div>
      <h1 className="font-bold text-slate-500">{item.title}</h1>
      <button className="px-4 py-2 border-2 w-28 text-teal-500 hover:bg-teal-600 hover:text-white">
        Read More
      </button>
    </div>
  );
};

export default BloginMenu;
