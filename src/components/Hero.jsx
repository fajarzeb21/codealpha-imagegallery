import serum1 from "../assets/serum1.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="section-pill">
          <span className="pill-dot"></span>
          EVERYDAY SKINCARE
        </div>

        <h1>
          Your skin,
          <br />
          <span>your glow.</span>
        </h1>

        <p className="hero-text">
          Discover carefully selected skincare essentials designed
          to make your everyday routine simple, fresh, and glowing.
        </p>

        <a href="#gallery" className="hero-button">
          Explore Collection
        </a>

      </div>

      <div className="hero-decoration">
        <div className="glow-circle"></div>

        <img
          src={serum1}
          alt="Skincare serum"
          className="hero-serum"
        />
      </div>
    </section>
  );
}

export default Hero;