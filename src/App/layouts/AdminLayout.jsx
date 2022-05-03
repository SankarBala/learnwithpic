import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { adminNav } from "./../nav";
import Notification from "./../Components/Notifications";
import "./AdminLayout.scss";

import {
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsEnvelope,
  BiSquareRounded,
  FaUserCircle,
} from "react-icons/all";
import Breadcrumb from "../Components/BreadCrumb";

const AdminLayout = ({ state, dispatch, children, pageName = "", ...rest }) => {
  const [notification] = useState([]);

  useEffect(() => {
    const sidebarController = document.getElementById("sidebarController");
    const sidebar = document.getElementById("sidebar");
    const workspace = document.getElementById("workspace");

    sidebarController.addEventListener("click", () => {
      sidebar.classList.toggle("absolute");
      sidebar.classList.toggle("-left-60");
      sidebar.classList.toggle("md:hidden");
      workspace.classList.toggle("absolute");
      workspace.classList.toggle("left-60");
    });

    document
      .getElementById("adminlayout")
      .addEventListener("click", function (e) {
        let notificationWrapper = document.getElementById("notification");
        let notificationBtn = document.getElementById("notificationBtn");
        let messageWrapper = document.getElementById("message");
        let messageBtn = document.getElementById("messageBtn");
        let userWrapper = document.getElementById("user");
        let userBtn = document.getElementById("userBtn");

        if (
          notificationBtn.contains(e.target) ||
          notificationWrapper.contains(e.target)
        ) {
          notificationWrapper.classList.remove("hidden");
        } else {
          notificationWrapper.classList.add("hidden");
        }

        if (
          messageBtn.contains(e.target) ||
          messageWrapper.contains(e.target)
        ) {
          messageWrapper.classList.remove("hidden");
        } else {
          messageWrapper.classList.add("hidden");
        }

        if (userBtn.contains(e.target) || userWrapper.contains(e.target)) {
          userWrapper.classList.remove("hidden");
        } else {
          userWrapper.classList.add("hidden");
        }
      });
  }, []);

  return (
    <div id="adminlayout">
      <div className="w-screen h-screen mx-auto">
        <div className="flex justify-between">
          <div
            id="sidebar"
            className="bg-primary h-screen w-60 md:static absolute -left-60"
          >
            <div className="p-1 h-14 flex justify-evenly items-center">
              <p className="text-white text-lg font-bold mb-1">SANKAR BALA</p>
            </div>
            <div className="w-5/6 bg-white p-1 rounded  h-16 flex justify-evenly items-center my-10 m-auto">
              <span>
                <p className=" text-xl font-serif">sankar_bala</p>
                <p className="text-md font-serif text-yellow-500">Admin</p>
              </span>
            </div>
            <div>
              {adminNav.map((nav) => {
                return (
                  <NavLink
                    key={nav.name}
                    to={nav.to}
                    exact={nav.exact}
                    className="hover:bg-red-500 active hover:text-black text-white flex  p-3 pb-4 cursor-pointer"
                    activeClassName="bg-red-500"
                  >
                    <i className="text-lg ml-1">
                      {nav.icon ? <nav.icon /> : <BiSquareRounded />}
                    </i>
                    <span className="ml-3 text-sm">{nav.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div
            id="workspace"
            className="h-screen w-full workspace overflow-y-scroll md:static"
          >
            <div className="bg-primary w-full h-14 flex text-primary justify-between items-center p-4 sticky top-0">
              <label id="sidebarController" className="mb-1 cursor-pointer">
                <BsFillGrid3X3GapFill className="text-2xl" />
              </label>

              <div className="pb-1">
                <BsFillBellFill
                  id="notificationBtn"
                  className="text-md m-2 mx-5 inline cursor-pointer"
                />
                <Notification
                  id="notification"
                  title="Notifications"
                  className="absolute bg-green-900 w-48 right-20 top-14 shadow-md px-3 rounded hidden"
                  data={notification}
                />
                <BsEnvelope
                  id="messageBtn"
                  className="text-md m-2 mx-5 inline cursor-pointer"
                />
                <Notification
                  id="message"
                  title="Messages"
                  className="absolute bg-purple-800 w-48 right-10 top-14 shadow-md px-3 rounded hidden"
                  data={notification}
                />
                <FaUserCircle
                  id="userBtn"
                  className="text-md m-2 mx-5 inline cursor-pointer"
                />
                <div
                  className="absolute bg-primary w-40 py-2 right-0 top-14 shadow-md px-3 rounded hidden text-center"
                  id="user"
                >
                  <h3 className="text-md py-1">User Name</h3>
                  <hr className="mb-2 mt-1" />
                  <ul>
                    <li>
                      <Link className="text-md my-1" to="/">Profile</Link>
                    </li>
                    <li>
                      <input className="bg-transparent p-2 cursor-pointer outline-none" type="button" value="Logout" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Breadcrumb link="" pageName={pageName} />
            <div className="px-3 min-h-screen">
              {/* Your contents here */}
              {children}
              {/* Your contents till here */}
            </div>
            <div className="bg-primary w-full mr-2 pr-4 h-11 flex justify-between py-2 px-10 text-lg text-white">
              <span className="">Admin panel</span>
              <span className="">Version 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
