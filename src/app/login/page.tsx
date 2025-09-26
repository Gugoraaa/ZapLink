"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!formData.username.trim()) {
      newErrors.username = "username or username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await api.post("/api/auth/login", formData);
      const { data } = response.data;
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred during login";
      setSubmitError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm text-gray-400">
                username or username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="username or username"
                className={`w-full p-3 mt-2 bg-gray-800 border   rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                disabled={isLoading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm text-gray-400">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full p-3 mt-2 bg-gray-800 border  rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                disabled={isLoading}
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
              disabled={isLoading}
              className={`w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Log in"
              )}
            </button>

            <div className="text-sm text-center text-gray-400 mt-4">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="text-blue-500 hover:text-blue-400 focus:outline-none"
                disabled={isLoading}
              >
                Sign up
              </button>
            </div>
            {submitError && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm">
                {submitError}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
