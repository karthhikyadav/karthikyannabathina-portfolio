function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">
          KY
        </a>

        <nav className="navbar__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="navbar__cta">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;