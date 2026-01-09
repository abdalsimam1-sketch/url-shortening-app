import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="d-flex py-5 justify-content-around align-items-center">
        <section className="d-flex gap-4">
          <img src={logo} alt="logo" />
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </section>
        <section className="d-flex align-items-center gap-4">
          <a href="">Login</a>
          <button className="  btn-sm rounded-pill">Signup</button>
        </section>
      </nav>
    </>
  );
};
