import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Navigate, useNavigate } from "react-router";
import { userContext } from "./Contexts";

const User = ({ id, OnDelete, postId }) => {
  const navigate = useNavigate();
  console.log("id:", id);
  const { user } = useContext(userContext);

  const [editor, setEditor] = useState({});
  const url = "http://localhost:3006/api/auth/" + id;
  useEffect(() => {
    axios.get(url).then((response) => {
      setEditor(response.data.data);
    });
  }, [id]);

  const handleDelete = () => {
    OnDelete(postId);
    navigate("/");
  };

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
        <h2 className="font-bold text-xs">
          {editor ? editor.username : "test"}
        </h2>
        <p className="text-xs font-medium">Posted 2 days ago</p>
      </div>
      {user.id == editor.id && (
        <div className="flex text-lg text-white py-1 gap-x-1">
          <div className="bg-red-400 w-6 h-6 justify-center flex items-center rounded-full">
            <AiOutlineEdit className="cursor-pointer" />
          </div>
          <div
            onClick={handleDelete}
            className="bg-teal-500 w-6 h-6 justify-center flex items-center rounded-full"
          >
            <MdDeleteOutline
              // onClick={handleClick}
              className=" cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
