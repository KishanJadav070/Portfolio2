import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Make sure VITE_API_URL is defined in .env
      

      const res = await fetch("https://portfolio2-covv.vercel.app/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      
      // Read response as text first for debugging
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text); // try parsing JSON
      } catch {
        throw new Error("Expected JSON but got: " + text);
      }

      if (!res.ok) throw new Error(data.error || "Login failed");

      // Save JWT token
      localStorage.setItem("admin_token", data.token);

      // Navigate to dashboard
      navigate("/admin/AdminDashboard");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Admin Login
        </h2>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full mb-4 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full mb-6 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
