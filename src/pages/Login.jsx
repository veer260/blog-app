import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../components/Contexts";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(userContext);
  // console.log("data:", user);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
    } catch (error) {
      console.log("err:", error);

      setError("Check email or password");
      throw error;
    }
  };
  return (
    <div className="bg-teal-200 h-[100vh] flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-center mb-4 text-teal-700">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 bg-white p-16 items-center"
          action=""
        >
          <input
            name="email"
            className="border-b-2 w-full "
            type="text"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            className="border-b-2 w-full"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <button type="submit" className="bg-teal-700 text-white w-full p-2">
            Login
          </button>
          {error && <p className="font-medium text-red-600">{error}!</p>}
          <span className="text-center block text-xl">
            Don't have an account yet?
            <Link className=" block  underline text-rose-500" to="/register">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
