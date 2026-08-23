function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-main">Fajar</span>
        <span className="logo-glow">Glowé</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;