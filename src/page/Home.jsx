import React from "react";
import homePic from "../assets/images/illustration-working.svg";

export const Home = () => {
  return (
    <>
      <div className="home-page d-flex flex-column flex-md-row">
        <section
          style={{ border: "1px solid black" }}
          className="text-center order-2 order-md-1 "
        >
          <h1>More than just shorter links</h1>

          <p className="text-muted">
            Build your brand's recognition and get detailed insights on how your
            links are performing{" "}
          </p>
          <button className="  btn-sm rounded-pill d-md-none">
            Get Started
          </button>
        </section>
        <section
          style={{ border: "1px solid black" }}
          className="order-1 order-md-1"
        >
          <img src={homePic} alt="" className="img-fluid" />
        </section>
      </div>
      <div className="link-section d-flex flex-column flex-md-row p-5 gap-3">
        <input className="form-control" type="text" />
        <button
          className=""
          style={{
            borderRadius: "0.3rem",
            backgroundColor: "rgb(3, 248, 248)",
          }}
        >
          Shorten it!
        </button>
      </div>
      <div className="text-center">
        <h1>Advanced Statistics</h1>
        <p className="text-muted">
          Track how your links are performing accross accross the web our
          advanced statistics dashboard
        </p>
      </div>
      <div className="boost-section d-flex flex-column">
        <h1 className="text-white text-center">Boost your links today</h1>
        <button className="  btn-sm rounded-pill d-md-none">Get Started</button>
      </div>
    </>
  );
};
