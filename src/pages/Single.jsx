import React from "react";
import BlogDetail from "../components/BlogDetail";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="flex max-w-5xl mx-auto justify-between">
      <BlogDetail />
      <Menu />
    </div>
  );
};

export default Single;
