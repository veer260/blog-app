import React, { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [file, setFile] = useState(null);

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    return axios
      .post("http://localhost:3006/api/upload", formData)
      .then((response) => {
        console.log("inside then");
        // console.log("response:", response.data.file.filename);
        return response.data;
      });
    // return res;
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("handleClick called");
    upload().then((response) => {
      console.log("res:", response.file.filename);
    });
    console.log("after uplaod");
    // console.log(imgURL);
  };
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
        <input
          className="hidden"
          type="file"
          id="file"
          name="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <label className="underline cursor-pointer text-sm" htmlFor="file">
          Select image
        </label>
      </div>
      <div className="flex justify-between">
        <button className=" px-[5px] py-[2px] font-medium text-sm text-teal-700 border-2 border-teal-400">
          Save as a draft
        </button>
        <button
          onClick={handleClick}
          className="bg-teal-600 text-sm text-white px-[5px] py-[2px] "
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Publish;
