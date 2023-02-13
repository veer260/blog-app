import React, { useState } from "react";

const Category = () => {
  const [cat, setCat] = useState("");
  return (
    <div className="flex flex-col border-2 h-[] border-gray-200 p-2 gap-y-1 text-sm text-teal-600">
      <h1 className="font-bold text-xl text-black">Category</h1>
      <div className="flex items-center">
        <input
          type="radio"
          value="art"
          id="art"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="art">Art</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          value="science"
          id="science"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="science">Science</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          value="technology"
          id="technology"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="technology">Technology</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          value="cinema"
          id="cinema"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="cinema">Cinema</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          value="design"
          id="design"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="design">Design</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          value="food"
          id="food"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        />
        <label htmlFor="food">Food</label>
      </div>
    </div>
  );
};

export default Category;
