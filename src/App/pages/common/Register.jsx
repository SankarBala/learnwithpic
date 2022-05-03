import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
          <div className="p-5 w-96 h-100 rounded-md shadow-xl bg-white">
              <div className="flex justify-between mb-5">
                <h1 className="text-3xl">Sign up</h1>
                <Link className="text-red-600 mt-2" to="/">
                  Home
                </Link>
              </div>

              <input className="block box-border mb-5 p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none" type="text" name="username" placeholder="Username" />
              <input className="block box-border mb-5 p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none" type="text" name="email" placeholder="E-mail" />
              <input className="block box-border mb-5 p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none" type="password" name="password" placeholder="Password" />
              <input className="block box-border mb-5 p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none" type="password" name="password2" placeholder="Retype password"/>
              <div className="flex justify-between mt-10">
                <input
                  className="bg-green-800 rounded p-1 mt-0 text-center w-28 bg-none text-white cursor-pointer"
                  type="submit"
                  name="signup_submit"
                  value="Register"
                />
                <Link className="bg-red-500 rounded p-1 mt-0 text-center w-28 bg-none text-white cursor-pointer" to="/login">
                  Login
                </Link>
              </div>
              <h4 className="mt-5 mb-3">Use social network</h4>
              <div className="flex justify-between">
                <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-red-600">Google</button>
                <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-blue-600">Facebook</button>
                <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-blue-400">Twitter</button>
              </div>
            
          </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
