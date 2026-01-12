import pic from "../assets/images/illustration-working.svg";
import brand from "../assets/images/icon-brand-recognition.svg";
import drecords from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

export const Home = () => {
  return (
    <>
      <div className="home-page ">
        <section className="section 1  d-flex flex-column flex-md-row gap-3  mb-5 justify-content-center align-items-md-center ms-md-5">
          <div className="order-2 order-md-1 text-center p-3 d-flex flex-column col-md-3">
            <h1>More than just shorter links</h1>
            <p className="text-muted ">
              Build your brand's recognition and get detailed insights on how
              your links are performing{" "}
            </p>
            <button className="rounded-pill btn btn-success  align-self-center ">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <img src={pic} alt="" className="img-fluid" />
          </div>
        </section>

        <div
          className="shorten p-5 m-5 bg-dark "
          style={{
            borderRadius: "0.6rem",
            backgroundImage: `url("../assets/bg-shorten-desktop.svg")`,
          }}
        >
          <div className="d-flex  flex-column gap-3 shorten-inner flex-md-row mx-auto">
            <input
              type="text"
              className="form-control "
              placeholder="Paste link here ...."
            />
            <button className="btn btn-success ">Shorten</button>
          </div>
        </div>

        <div className="recent-links mb-5"></div>

        <article className="article text-center mb-5 mx-5">
          <h1>Advanced Statistics</h1>
          <p className="text-muted mb-5">
            Track how your links are performing accross the web with our
            advanced statistics dashboard
          </p>
          <div className="cards d-flex flex-column flex-md-row gap-5 ">
            <div className="card px-5">
              <img src={brand} alt="" className="card-img-top" />
              <p className="text-muted">
                Boost your brand recognition with each click. Generic links dont
                mean a thing. Branded links help instill confidence in your
                content
              </p>
            </div>
            <div className="card px-5">
              <img src={drecords} alt="" />
              <p className="text-muted">
                Boost your brand recognition with each click. Generic links dont
                mean a thing. Branded links help instill confidence in your
                content
              </p>
            </div>
            <div className="card px-5">
              <img src={fully} alt="" />
              <p className="text-muted">
                Boost your brand recognition with each click. Generic links dont
                mean a thing. Branded links help instill confidence in your
                content
              </p>
            </div>
          </div>
        </article>

        <div
          className="boost bg-dark text-center p-5"
          style={{ backgroundImage: `url("../assets/bg-boost-desktop.svg")` }}
        >
          <h1 className="text-white mb-3">Boost your links today</h1>
          <button className="btn btn-success rounded-pill">Get Started</button>
        </div>
      </div>
    </>
  );
};
