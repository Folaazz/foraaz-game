import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser , registerUser , logoutUser , getCurrentUser  } from "@/components/utils/api";
import { decodeToken } from "@/components/utils/utils";

export const useAuth = () => {
  const [user, setUser ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser   = decodeToken(token);
      setUser (decodedUser  );
    }
  }, []);

  const login = async (user: any) => {
    try {
      localStorage.setItem("token", user.token);
      setUser (user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (user: any) => {
    try {
      localStorage.setItem("token", user.token);
      setUser (user);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser (null);
    navigate("/login");
  };

  return { user, login, register, logout };
};