import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage({ user, onLogin, onSignUp }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === "login") {
      const result = onLogin({ email, password });
      setMessage(result.message);
      if (result.success) {
        navigate("/");
      }
      return;
    }

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage("Please fill in every field.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const result = onSignUp({ name: name.trim(), email: email.trim(), password });
    setMessage(result.message);
    if (result.success) {
      navigate("/");
    }
  };

  const toggleMode = (nextMode) => {
    setMode(nextMode);
    setMessage("");
  };

  return (
    <section className="auth-section">
      <div className="auth-grid">
        <div className="auth-card">
          <p className="auth-eyebrow">Account access</p>
          <h1 className="auth-title">
            {mode === "login" ? "Sign in to your account" : "Create your PriceNepal account"}
          </h1>
          <p className="auth-description">
            {mode === "login"
              ? "Use the form to sign in with email and password. If you do not have an account, switch to Sign Up."
              : "Enter your details to create a new account. Once signed in, you can update your password and access settings."}
          </p>

          <div className="auth-mode-toggle">
            <button
              type="button"
              onClick={() => toggleMode("login")}
              className={`auth-mode-btn ${mode === "login" ? "auth-mode-btn--active" : ""}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => toggleMode("signup")}
              className={`auth-mode-btn ${mode === "signup" ? "auth-mode-btn--active" : ""}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === "signup" && (
              <label className="auth-field">
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="auth-input"
                  placeholder="Your name"
                />
              </label>
            )}
            <label className="auth-field">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="auth-input"
                placeholder="name@example.com"
              />
            </label>
            <label className="auth-field">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="auth-input"
                placeholder="Enter your password"
              />
            </label>
            {mode === "signup" && (
              <label className="auth-field">
                Confirm password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="auth-input"
                  placeholder="Repeat your password"
                />
              </label>
            )}
            <button type="submit" className="auth-submit">
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
            {message && <p className="auth-message">{message}</p>}
          </form>
        </div>

        <div className="auth-side-card">
          <h2 className="auth-side-title">Fast access</h2>
          <p className="auth-side-text">
            {user
              ? "You are already signed in. Use the top navigation to return home or open the settings panel to update your password."
              : "Enter your details to get started. After signing up, use the same email and password to log in."}
          </p>
          <div className="auth-side-panel">
            <div>
              <p className="auth-side-panel-label">Need help?</p>
              <p className="auth-side-panel-text">
                Visit the Help page for tips on searching and comparing prices.
              </p>
            </div>
            <div>
              <p className="auth-side-panel-label">Contact</p>
              <p className="auth-side-panel-text">support@pricenepal.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
