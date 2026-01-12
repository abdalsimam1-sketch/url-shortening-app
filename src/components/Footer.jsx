import React from "react";
import footerlogo from "../assets/images/logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer mt-5 p-5 bg-dark d-flex flex-column flex-md-row text-center justify-content-md-around gap-3">
        <img src={footerlogo} alt="" className="mx-auto mx-md-0 img-fluid" />
        <div className="text-white d-flex flex-column">
          <h6>Features</h6>
          <div className="d-flex gap-3 flex-column">
            {" "}
            <a href="">Link Shortening</a>
            <a href="">Branded Links</a>
            <a href="">Analytics</a>
          </div>
        </div>
        <div className="text-white  d-flex  flex-column">
          <h6>Resources</h6>
          <div className="d-flex gap-3 flex-column">
            {" "}
            <a href="">Blog</a>
            <a href="">Developers</a>
            <a href="">Support</a>
          </div>
        </div>
        <div className="text-white  d-flex  flex-column ">
          <h6>Company</h6>
          <div className="d-flex gap-3 flex-column">
            {" "}
            <a href="">About</a>
            <a href="">Our team</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="text-white d-flex gap-4 mx-auto mx-md-0">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-pinterest"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </footer>
    </>
  );
};
