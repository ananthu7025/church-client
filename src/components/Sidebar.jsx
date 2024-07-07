import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import images from "../assets";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("storage_Key");
    localStorage.removeItem("UserId");
    localStorage.removeItem("code");
    localStorage.removeItem("gtoken");
    navigate("/login");
  };
  const closeSidebar = () => {
    const iconSidenav = document.getElementById("iconNavbarSidenav");
    if (iconSidenav) {
      iconSidenav.click();
    }
  };
  return (
    <aside
      className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        />
        <a className="navbar-brand m-0" href=" #/" target="_blank">
          <img
            src={images.logo}
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">Luminous Logics</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={closeSidebar}
              to="/dashboard"
              className={`nav-link ${
                currentPath === "/dashboard" ? "active .bg-gray-200" : ""
              }`}
            >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
            <Link
              onClick={closeSidebar}
              to="/family-list"
              className={`nav-link ${
                currentPath === "/family-list" ? "active .bg-gray-200" : ""
              }`}
            >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fas fa-landmark opacity-10 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Families</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
