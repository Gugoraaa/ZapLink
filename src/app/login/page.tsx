"use client";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default function Login() {
  function toggleMenu() {
    redirect("/signup");
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            Sign in to continue to your LinkX dashboard.
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-400">
                Email or username
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email or username"
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm text-gray-400">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#forgot-password"
                className="text-sm text-blue-500 hover:text-blue-400"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>

            <div className="text-sm text-center text-gray-400 mt-4">
              Don't have an account?{" "}
              <button
                onClick={toggleMenu}
                className="text-blue-500 hover:text-blue-400"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
