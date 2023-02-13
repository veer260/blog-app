import axios from "axios";
import React, { useEffect, useState } from "react";

import User from "./User";

const BlogDetail = ({ post }) => {
  const handleDelete = (id) => {
    const url = "http://localhost:3006/api/posts/" + id;
    console.log("inside delete", id);
    axios.delete(url);
  };

  return (
    <div className="basis-2/3">
      <div>
        <img
          className="w-full h-[300px] object-cover"
          src={post.img}
          alt="post image"
        />
      </div>
      {post && <User id={post.uid} OnDelete={handleDelete} postId={post.id} />}

      <h1 className="font-bold text-3xl my-8">{post.title}</h1>
      <p className=" text-justify leading-6  ">{post.desc}</p>
    </div>
  );
};

export default BlogDetail;
