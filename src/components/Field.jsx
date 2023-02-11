import React from "react";

const Field = ({ placeholder, label, id, type, name, onChange, value }) => {
  return (
    <div className="w-full">
      <input
        className="w-full border-b-2 border-gray-400 p-2"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
      <label className="sr-only" htmlFor="username">
        {label}
      </label>
    </div>
  );
};

export default Field;
