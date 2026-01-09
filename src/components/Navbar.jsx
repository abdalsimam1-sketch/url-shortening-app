import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <>
      <nav>
        <section>
          <img src={logo} alt="logo" />
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </section>
        <section></section>
      </nav>
    </>
  );
};
