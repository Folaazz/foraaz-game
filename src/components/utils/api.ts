import mysql from "mysql2/promise";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database",
});

const API_URL = "http://localhost:5000/api";

export const loginUser = async (email: string, password: string) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]) as [User[], any];
    const userData = rows[0];
    if (!userData) {
      throw new Error("User not found");
    }
    if (userData.password !== password) {
      throw new Error("Invalid password");
    }
    return userData;
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]) as [User[], any];
    const userData = rows[0];
    if (userData) {
      throw new Error("User already exists");
    }
    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
    return { name, email, password };
  } catch (err) {
    console.error(err);
  }
};

export const logoutUser = async () => {
  await axios.post(`${API_URL}/auth/logout`);
};

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/auth/me`);
  return response.data;
};