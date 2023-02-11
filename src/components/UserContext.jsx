import React, { createContext, useEffect, useState } from "react";
import { userContext } from "./Contexts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const response = await axios.post(
        "http://localhost:3006/api/auth/login",
        inputs
      );
      setUser(response.data.data);
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      //   console.log("logout called");
      await axios.post("http://localhost:3006/api/auth/logout");
      setUser(null);
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
