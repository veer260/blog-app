import React, { useState } from "react";
import { useEffect } from "react";
import BlogDetail from "../components/BlogDetail";
import Menu from "../components/Menu";
import Loading from "../components/Loading";
import { useParams } from "react-router";
import axios from "axios";

const Single = () => {
  const blogId = useParams().id;
  const [post, setPost] = useState({});
  useEffect(() => {
    console.log("useEffect called");
    axios.get("http://localhost:3006/api/posts/" + blogId).then((response) => {
      setPost(response.data.data);
    });
  }, [blogId]);

  if (Object.keys(post).length == 0) {
    return <Loading />;
  }
  return (
    <div className="flex max-w-5xl mx-auto justify-between">
      <BlogDetail post={post} />
      <Menu category={post.category} id={post.id} />
    </div>
  );
};

export default Single;
