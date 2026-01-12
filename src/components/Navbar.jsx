import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="d-flex p-3 p-md-5 justify-content-between align-items-center nav">
        <section className="d-flex gap-4">
          <img src={logo} alt="logo" />
          <div className="d-flex gap-4 d-none d-md-flex">
            {" "}
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
          </div>
        </section>

        <section className="d-flex align-items-center gap-4 d-none d-md-flex">
          <a href="">Login</a>
          <button className=" btn btn-sm btn-success rounded-pill">
            Signup
          </button>
        </section>
        <select className="form-select d-md-none w-auto" defaultValue="">
          <option value="" disabled>
            Menu
          </option>
          <option>Features</option>
          <option>Pricing</option>
          <option>Resources</option>
          <option>Login</option>
        </select>
      </nav>
    </>
  );
};
