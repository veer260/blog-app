import React from "react";
import WriteBlog from "../components/WriteBlog";
import WriteMenu from "../components/WriteMenu";

const Write = () => {
  return (
    <div className="max-w-5xl mx-auto mb-12">
      <input
        className="border-2 border-gray-400 rounded-sm "
        type="text"
        placeholder="Title"
        id="title"
      />
      <label className="sr-only" htmlFor="title">
        Title
      </label>
      <div className="flex justify-between">
        <WriteBlog />
        <WriteMenu />
      </div>
    </div>
  );
};

export default Write;
