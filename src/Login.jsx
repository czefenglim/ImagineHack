import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // simulate login
    navigate("/report");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-blue-500">
          <div className="flex flex-col justify-center items-start text-white px-[30px] py-[150px] gap-8 w-[500px]">
            <div className="flex justify-start items-center gap-4">
              <img src="/Images/Logo.jpg" alt="Logo" className="w-[50px]" />
              <h1 className="text-2xl font-bold">FactBridge</h1>
            </div>
            <h2 className="text-3xl font-bold">
              Connect To Verified Information
            </h2>
            <p className="text-lg text-start">
              Bridge the gap between facts and fiction, Join our community of
              truth seekers and fact-checkers.
            </p>

            <div className="flex flex-col gap-3 ">
              <div className="flex justify-start gap-2 ">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 bg-white" />
                <p className="text-lg">Real time fact verification</p>
              </div>
              <div className="flex justify-start gap-2 ">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 bg-white" />
                <p className="text-lg">Real time fact verification</p>
              </div>
              <div className="flex justify-start gap-2 ">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 bg-white" />
                <p className="text-lg">Real time fact verification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white p-10">
          <div className="flex flex-col justify-center items-center gap-10 px-[20px] py-[100px] ">
            <div className="flex justify-between items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button className="px-[50px] py-2 rounded-lg bg-white">
                Sign Up
              </button>
              <button className="px-[50px] py-2 rounded-lg bg-white">
                Sign In
              </button>
            </div>

            <form className="flex flex-col gap-5 items-start justify-center">
              <h2 className="text-2xl font-bold text-black">Welcome Back!</h2>
              <p className="text-lg text-black">
                Sign in to continue to your fact-checking journey.
              </p>
              <input
                type="number"
                placeholder="IC Number"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-between items-center w-full">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="text-sm">Remember Me?</span>
                </label>

                {/* Right side: Forgot password link */}
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
