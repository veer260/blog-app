import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-[300px] overflow-y-auto border-2 w-[60%]">
      <ReactQuill
        className="h-[100%] w-full"
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default WriteBlog;
