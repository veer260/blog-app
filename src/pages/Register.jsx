import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Field from "../components/Field";

const Register = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    const response = await axios.post(
      "http://localhost:3006/api/auth/register",
      {
        username: loginInfo.username,
        email: loginInfo.email,
        password: loginInfo.password,
      }
    );
    console.log("response", response.data);
    navigate("/login");
    // console.log("handleSubmit caleed");
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setLoginInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="bg-teal-200 h-screen flex items-center  ">
      <div className="w-[350px] mx-auto bg-white py-12 px-8 flex flex-col items-center gap-y-2">
        <h1 className="text-teal-700 font-semibold text-xl">Register</h1>
        <form onSubmit={handleSubmit} action="">
          <Field
            placeholder="Username"
            id="username"
            type="text"
            label="username"
            onChange={handleChange}
            name="username"
            value={loginInfo.username}
          />
          <Field
            placeholder="Email"
            id="email"
            type="text"
            label="Enter Email"
            onChange={handleChange}
            name="email"
            value={loginInfo.email}
          />
          <Field
            placeholder="Password"
            id="password"
            type="password"
            label="password"
            onChange={handleChange}
            name="password"
            value={loginInfo.password}
          />
          <button
            type="submit"
            className="p-2 bg-teal-700 hover:bg-teal-800 tracking-widest w-full mt-4 font-medium text-white"
          >
            Register
          </button>
        </form>

        <div className="flex flex-col items-center mt-2">
          <p>Do you have an account? </p>
          <Link className="underline italic text-purple-700 -mt-1" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
