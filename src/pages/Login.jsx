import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-teal-200 h-[100vh] flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-center mb-4 text-teal-700">Login</h1>
        <form
          className="flex flex-col gap-y-4 bg-white p-16 items-center"
          action=""
        >
          <input
            className="border-b-2 w-full "
            type="text"
            placeholder="Username"
          />
          <input
            className="border-b-2 w-full"
            type="text"
            placeholder="Password"
          />
          <button className="bg-teal-700 text-white w-full p-2">Login</button>
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
