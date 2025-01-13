import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerUser  } from "./api";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser (name, email, password);
      register(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Register
        </Button>
      </form>
    </div>
  );
};