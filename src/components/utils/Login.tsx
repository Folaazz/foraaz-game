import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { loginUser } from "./api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      login(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
};