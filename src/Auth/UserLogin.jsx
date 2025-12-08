import React, { useState } from "react";

export default function UserLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Left Side Image */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-center items-center p-10">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
            <h1 className="text-2xl font-semibold">ZedProperty</h1>
          </div>

          <h2 className="text-2xl font-semibold mb-1">Welcome to ZedProperty</h2>
          <p className="text-gray-500 mb-6">
            Sign Up to Begin Your Property Journey
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-green-600"
              >
                Forget Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white font-medium hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="text-green-600 cursor-pointer hover:underline">
                Register now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
