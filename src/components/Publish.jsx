import React from "react";

const Publish = () => {
  return (
    <div className=" border-2 border-gray-200 p-2">
      <h1 className="font-bold text-xl text-black">Publish</h1>
      <div className="flex flex-col gap-y-1 text-sm ">
        <span>
          <strong>Status:</strong> Draft
        </span>
        <span>
          <strong>Visibility:</strong>Public
        </span>
      </div>
      <div className="my-2">
        <input className="hidden" type="file" id="file" />
        <label className="underline cursor-pointer text-sm" htmlFor="file">
          Select image
        </label>
      </div>
      <div className="flex justify-between">
        <button className=" px-[5px] py-[2px] font-medium text-sm text-teal-700 border-2 border-teal-400">
          Save as a draft
        </button>
        <button className="bg-teal-600 text-sm text-white px-[5px] py-[2px] ">
          Update
        </button>
      </div>
    </div>
  );
};

export default Publish;
