import React from "react";
import logo from "../assets/images/logo.svg";

export const Home = () => {
  return (
    <main className="container">
      <nav className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex gap-5 align-items-center">
          <img src={logo} alt="logo" />
          <div className="text-muted fw-bold d-none d-lg-flex gap-4 ">
            <span className="links">Features</span>
            <span className="links">Pricing</span>
            <span className="links">Resources</span>
          </div>
        </div>
        <div className="d-none d-lg-flex align-items-center gap-4 ">
          <span className="m-0 text-muted fw-bold links">Login</span>
          <button className="btn rounded-pill signup-button">Sign Up</button>
        </div>
        <i className="bi bi-list btn fs-1 d-lg-none"></i>
      </nav>
    </main>
  );
};
