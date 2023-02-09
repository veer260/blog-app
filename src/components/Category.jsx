import React from "react";

const Category = () => {
  return (
    <div className="flex flex-col border-2 h-[] border-gray-200 p-2 gap-y-1 text-sm text-teal-600">
      <h1 className="font-bold text-xl text-black">Category</h1>
      <div className="flex items-center">
        <input type="radio" value="" id="art" />
        <label htmlFor="art">Art</label>
      </div>
      <div className="flex items-center">
        <input 
         type="radio" value="" id="science" />
        <label htmlFor="science">Science</label>
      </div>
      <div className="flex items-center">
        <input type="radio" value="" id="technology" />
        <label htmlFor="technology">Technology</label>
      </div>
      <div className="flex items-center">
        <input type="radio" value="" id="cinema" />
        <label htmlFor="cinema">Cinema</label>
      </div>
      <div className="flex items-center">
        <input type="radio" value="" id="design" />
        <label htmlFor="design">Design</label>
      </div>
      <div className="flex items-center">
        <input type="radio" value="" id="food" />
        <label htmlFor="food">Food</label>
      </div>
    </div>
  );
};

export default Category;
