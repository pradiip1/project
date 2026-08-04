import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left */}
        <div>
          <span className="hero-badge">#2 Price Comparison Platform</span>

          <h1 className="hero-title">
            Compare Prices
            <br />
            <span className="hero-title-accent">Across Nepal</span>
          </h1>

          <p className="hero-description">
            Instantly compare prices from Daraz, Hukut, BrotherMart,
            Sastodeal and many more trusted Nepali online stores.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Start Comparing</button>
            <button className="btn-secondary">Learn More</button>
          </div>

          <div className="hero-stats">
            <div>
              <h2 className="hero-stat-number">15+</h2>
              <p className="hero-stat-label">Stores</p>
            </div>

            <div>
              <h2 className="hero-stat-number">20K+</h2>
              <p className="hero-stat-label">Products</p>
            </div>

            <div>
              <h2 className="hero-stat-number">Rs50K+</h2>
              <p className="hero-stat-label">Saved</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
              alt="Phone"
              className="hero-visual-image"
            />
          </div>

          {/* Floating Cards */}
          <div className="floating-card floating-card--price">
            <p className="floating-card-label">Lowest Price</p>
            <h3 className="floating-card-value">Rs 85,999</h3>
          </div>

          <div className="floating-card floating-card--store">
            <h3 className="floating-card-store-label">Best Store</h3>
            <h6 className="floating-card-store-value">Daraz</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
