"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
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
    if (!formData.username.trim()) {
      setSubmitError("Username is required");
      return false;
    }

    if (!formData.email.trim()) {
      setSubmitError("Email is required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 6) {
      setSubmitError("Password must be at least 6 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setSubmitError("Passwords do not match");
      return false;
    }

    if (!termsAccepted) {
      setSubmitError("You must accept the terms and conditions");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await api.post("/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      router.push("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      setSubmitError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during registration"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Create your account
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Already have an account?{" "}
          <a href="#login" className="text-blue-500 hover:text-blue-400">
            Log in
          </a>
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm text-gray-400">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-400"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700"
              disabled={isLoading}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the{" "}
              <button onClick={() => router.push("/terms")} className="text-blue-500 hover:text-blue-400">
                Terms and Conditions
              </button>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-500"
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
                Creating account...
              </>
            ) : (
              "Register"
            )}
          </button>

          <div className="text-sm text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-500 hover:text-blue-400"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
