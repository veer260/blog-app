import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const User = () => {
  return (
    <div className="flex mt-8 gap-x-2">
      <div>
        <img
          className="w-[30px] h-[30px] object-cover rounded-full"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold text-xs">John</h2>
        <p className="text-xs font-medium">Posted 2 days ago</p>
      </div>
      <div className="flex text-lg text-white py-1 gap-x-1">
        <div className="bg-red-400 w-6 h-6 justify-center flex items-center rounded-full">
          <AiOutlineEdit className="cursor-pointer" />
        </div>
        <div className="bg-teal-500 w-6 h-6 justify-center flex items-center rounded-full">
          <MdDeleteOutline className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default User;
