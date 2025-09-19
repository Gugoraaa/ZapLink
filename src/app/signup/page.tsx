

export default function RegisterForm(){
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Create your account</h2>
        <p className="text-sm text-gray-400 text-center mb-6">Already have an account? <a href="#login" className="text-blue-500 hover:text-blue-400">Log in</a></p>

        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm text-gray-400">Full name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Full name"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-400">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm text-gray-400">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the <a href="#terms" className="text-blue-500 hover:text-blue-400">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>

          <div className="text-sm text-center text-gray-400 mt-4">
            Already have an account? <a href="#login" className="text-blue-500 hover:text-blue-400">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};
