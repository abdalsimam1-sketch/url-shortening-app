import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import heroPic from "../assets/images/illustration-working.svg";
import { mockData } from "../data/mockData";

export const Home = () => {
  const [link, setLink] = useState("");
  return (
    <main>
      <div className="container mb-5">
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
        <section className="hero-section d-flex flex-column  flex-lg-row align-items-lg-center text-center text-lg-start">
          <div className="d-flex flex-column justify-content-center hero-text order-2 order-lg-1">
            <h1 className="text-1">More than just shorter links</h1>
            <p className="text-4 mx-auto m-lg-0 " style={{ maxWidth: "25rem" }}>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <button className="btn signup-button rounded-pill align-self-center align-self-lg-start my-3">
              Get Started
            </button>
          </div>
          <div className="hero-img order-1 order-lg-2">
            <img src={heroPic} alt="hero section image" className="img-fluid" />
          </div>
        </section>
        <section className="search-section p-5 bg-dark rounded mt-3 m-md-0">
          <form className="d-flex flex-column gap-3 flex-md-row text-nowrap ">
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="text"
              className="form-control ps-4"
              placeholder="Shorten link here"
            />
            <button className="btn signup-button">Shorten it!</button>
          </form>
        </section>
        <section className="description-section mt-4">
          <div className="text-center">
            <h2 className="text-2">Advanced Statistics</h2>
            <p style={{ maxWidth: "25rem" }} className="mx-auto">
              Track how your links are performing accross the web with our
              advanced statistics dahsboard
            </p>
          </div>
          <div className="row g-3">
            {mockData.map((item, index) => (
              <div key={index} className="col-12 col-md-8 mx-auto col-lg-4">
                <div className="card position-relative p-4 h-100 mt-3">
                  <img
                    src={item.img}
                    alt={item.name + "logo"}
                    width={70}
                    style={{ borderRadius: "50%" }}
                    className="bg-dark "
                  />
                  <h3 className="text-3">{item.name}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="boost-section text-center p-5 bg-dark">
        <h2 className="text-light text-2">Boost your links today</h2>
        <button className="btn signup-button text-light rounded-pill">
          Get Started
        </button>
      </section>
      <section className="mt-5">
        <footer className="bg-dark p-5 h-100 text-light text-center text-lg-start d-flex flex-column flex-lg-row justify-content-lg-around">
          <div className="mb-3">
            <img src={logo} alt="footer logo" style={{ filter: "invert(1)" }} />
          </div>
          <div className="d-flex flex-column gap-3 mb-3">
            <span className="fw-bold">Features</span>
            <div className="d-flex flex-column">
              <span className="links">Link Shortening</span>
              <span className="links">Branded Links</span>
              <span className="links">Analytics</span>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 mb-3">
            {" "}
            <span className="fw-bold">Resources</span>
            <div className="d-flex flex-column">
              <span className="links">Blog</span>
              <span className="links">Developers</span>
              <span className="links">Support</span>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 mb-3">
            {" "}
            <span className="fw-bold">Company</span>
            <div className="d-flex flex-column">
              <span className="links">About</span>
              <span className="links">Our Team</span>
              <span className="links">Careers</span>
              <span className="links">Contact</span>
            </div>
          </div>
          <div className="text-light fs-3 d-flex gap-3 justify-content-center justify-content-lg-end">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-pinterest"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </footer>
      </section>
    </main>
  );
};
