import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { host } from "./../../config";
import Cookies from "js-cookie";

const Login = ({ isAuthenticated, dispatch }) => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (isAuthenticated) {
    setTimeout(() => {
      history.replace("/admin");
    }, 0);
  }

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({ email: "", password: "" });

  let handleInputChange = (event) => {
    let value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
    setError({});
  };

  let submit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: `${host}/api/login/`,
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.data.authorized === true) {
          Cookies.set("token", res.data.token, { expires: 1000 });
          setError({});
          dispatch({ type: "login", payload: res.data });
          history.replace(from);
        } else {
          setError({ ...error, email: res.data.message });
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <form action="" method="POST" onSubmit={submit}>
            <input
              className="block box-border  p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-700 mb-5">{error.email}</p>
            <input
              className="block box-border p-1 w-full h-8 text-green-800 text-4 border-b-2 border-green-800 outline-none"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-700 mb-5">{error.password}</p>
            <div className="flex justify-between mt-10">
              <input
                className="bg-green-800 rounded p-1 mt-0 text-center w-28 bg-none text-white cursor-pointer"
                type="submit"
                name="signup_submit"
                value="Login"
              />
              <Link
                className="bg-red-500 rounded p-1 mt-0 text-center w-28 bg-none text-white cursor-pointer"
                to="/register"
              >
                Register
              </Link>
            </div>
          </form>
          <h4 className="mt-5 mb-3">Use social network</h4>
          <div className="flex justify-between">
            <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-red-600">
              Google
            </button>
            <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-blue-600">
              Facebook
            </button>
            <button className="mb-5 w-24 h-9 bg-none rounded text-white cursor-pointer bg-blue-400">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
