import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="navbar align-items-start p-0 sidebar sidebar-dark accordion bg-gradient-primary navbar-dark">
      <div className="container-fluid d-flex flex-column p-0">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center m-0 sidebar-brand"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="mx-3 sidebar-brand-text">
            <span>Palace</span>
          </div>
        </a>
        <hr className="my-0 sidebar-divider" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              <i className="fas fa-home"></i>
              <span>Homepage</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/admin/films" ? "active" : ""}`} to="/admin/films">
              <i className="fas fa-film"></i>
              <span>Films</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-chart-line"></i>
              <span>Box Office</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-file-alt"></i>
              <span>Pages</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-archive"></i>
              <span>Archive</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-cog"></i>
              <span>Config</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-trash"></i>
              <span>Trash</span>
            </a>
          </li>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
