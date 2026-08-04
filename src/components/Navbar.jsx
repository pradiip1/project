import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <div className="navbar-logo">P</div>
          <div>
            <p className="navbar-brand-name">
              Price<span className="navbar-brand-name-accent">Nepal</span>
            </p>
            <p className="navbar-brand-tagline">Compare smarter</p>
          </div>
        </a>

        <ul className="navbar-links">
          <li>Home</li>
          <li>Categories</li>
          <li>Deals</li>
          <li>Compare</li>
          <li>Help</li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
