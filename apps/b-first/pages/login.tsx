import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
function login() {
  return (
    <section>
      <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2 mt-12 mb-5">
        <div className="flex justify-center items-center text-center">
          <div className="md:w-1/3 border-black/30 rounded-md shadow-black/40 shadow-sm border py-8">
            <div className="flex justify-center">
              <img src="/img/logo.svg" alt="logo" />
            </div>
            <h1 className="font-bold text-3xl text-[#2D324F] mt-4">Login</h1>
            <h2 className="font-semibold  text-xl text-black/80 mt-2 mb-5">to continue Bangladesh First</h2>
            <div className="flex justify-center">
              <div className="bg-[#2374F2] w-80 px-4 py-2 text-lg text-center font-medium text-white flex items-center justify-between cursor-pointer">
                <FaFacebookSquare size={24} className="text-blue-700 rounded-sm bg-white" />
                <p className="w-56">Sign in with Facebook</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="bg-[#2374F2] w-80 px-4 py-2 text-lg text-center font-medium text-white flex items-center justify-between cursor-pointer">
                <IoLogoGoogle size={24} className="bg-white  rounded-sm text-orange-600 p-0.5" />{" "}
                <p className="w-60">Sign in with Goggle</p>
              </div>
            </div>
            <p className="mb-4 mt-2">or</p>

            <form action="">
              <input className="border border-black/50 w-80 py-1 px-4 mb-4" placeholder="Email" type="email" />
              <input className="border border-black/50 w-80 py-1 px-4" placeholder="Password" type="password" />
              <button
                type="submit"
                className="w-80 bg-[#CF0023] text-white font-medium mt-6 py-2 text-lg uppercase"
              >
                Login
              </button>
            </form>
            <p className="font-medium text-red-600 text-sm mt-2 cursor-pointer">Forgot Password</p>
            <div className="flex justify-center mt-3 gap-x-1">
              <p className="font-medium text-black/50 text-sm ">New to Bangladesh First <span className="text-blue-700 cursor-pointer">Create Account</span></p>
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
