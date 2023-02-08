import React from "react";
import Category from "./Category";
import Publish from "./Publish";

const WriteMenu = () => {
  return (
    <div className="flex flex-col w-[35%] gap-y-6">
      <Publish />
      <Category />
    </div>
  );
};

export default WriteMenu;
