import React, { useState } from "react";
import { Link } from "react-router-dom";
import Field from "../components/Field";

const Register = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <div className="bg-teal-200 h-screen flex items-center  ">
      <div className="w-[350px] mx-auto bg-white py-12 px-8 flex flex-col items-center gap-y-2">
        <h1 className="text-teal-700 font-semibold text-xl">Register</h1>
        <Field
          placeholder="Username"
          id="username"
          type="text"
          label="username"
        />
        <Field placeholder="Email" id="email" type="text" label="Enter Email" />
        <Field
          placeholder="Password"
          id="password"
          type="password"
          label="password"
        />
        <button className="p-2 bg-teal-700 hover:bg-teal-800 tracking-widest w-full mt-4 font-medium text-white">
          Register
        </button>
        <div className="flex flex-col items-center mt-2">
          <p>Do you have an account? </p>
          <Link className="underline text-purple-700 -mt-1" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
