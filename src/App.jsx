import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import AuthPage from "./pages/Auth";

import Sidebar from "./components/Sidebar";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("pricenepal_theme") || "light"
  );

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("pricenepal_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [searchHistory, setSearchHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("pricenepal_history") || "[]");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("pricenepal_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "pricenepal_history",
      JSON.stringify(searchHistory)
    );
  }, [searchHistory]);

  const handleSignUp = ({ name, email, password }) => {
    const account = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "pricenepal_user",
      JSON.stringify(account)
    );

    setUser(account);

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const handleLogin = ({ email, password }) => {

    const saved = localStorage.getItem("pricenepal_user");

    if (!saved) {
      return {
        success: false,
        message: "No account found.",
      };
    }

    const account = JSON.parse(saved);

    if (
      account.email !== email ||
      account.password !== password
    ) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    setUser(account);

    return {
      success: true,
      message: "Welcome Back!",
    };
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePasswordChange = ({
    currentPassword,
    newPassword,
  }) => {

    if (!user) {
      return {
        success: false,
        message: "Please login first.",
      };
    }

    if (user.password !== currentPassword) {
      return {
        success: false,
        message: "Current password is incorrect.",
      };
    }

    const updated = {
      ...user,
      password: newPassword,
    };

    setUser(updated);

    localStorage.setItem(
      "pricenepal_user",
      JSON.stringify(updated)
    );

    return {
      success: true,
      message: "Password updated.",
    };
  };

  const addSearchHistory = (term) => {

    if (!term.trim()) return;

    setSearchHistory((old) => {

      const next = [
        term,
        ...old.filter((item) => item !== term),
      ];

      return next.slice(0, 8);

    });

  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("pricenepal_history");
  };

  return (

    <BrowserRouter>

      <div className="app-shell">

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          user={user}
        />

        <SettingsPanel
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          theme={theme}
          setTheme={setTheme}
          user={user}
          onPasswordChange={handlePasswordChange}
          searchHistory={searchHistory}
          onClearHistory={clearSearchHistory}
        />

        <div className="app-content">

          <header className="app-header">

            <div className="app-header-inner">

              <div className="app-header-left">

                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="app-menu-btn"
                >
                  ☰
                </button>

                <div>

                  <h1 className="app-brand-title">
                    Price
                    <span className="app-brand-accent">
                      Nepal
                    </span>
                  </h1>

                  <p className="app-brand-subtitle">
                    Compare prices instantly
                  </p>

                </div>

              </div>              {/* Center Search */}

              <div className="app-header-center">

                <div className="app-search-box">

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="app-search-input"
                  />

                  <button className="app-search-btn">
                    Search
                  </button>

                </div>

              </div>

              {/* Right */}

              <div className="app-header-right">

                <button
                  onClick={() => setSettingsOpen(true)}
                  className="app-settings-btn"
                >
                  ⚙ Settings
                </button>

                {user ? (

                  <button
                    onClick={handleLogout}
                    className="app-logout-btn"
                  >
                    Logout
                  </button>

                ) : (

                  <NavLink
                    to="/auth"
                    className="app-signin-link"
                  >
                    Sign In
                  </NavLink>

                )}

              </div>

            </div>

          </header>

          <main>

            <Routes>

              <Route
                path="/"
                element={
                  <Home
                    onSearchUsed={addSearchHistory}
                  />
                }
              />

              <Route
                path="/help"
                element={<Help />}
              />

              <Route
                path="/auth"
                element={
                  <AuthPage
                    user={user}
                    onLogin={handleLogin}
                    onSignUp={handleSignUp}
                  />
                }
              />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>

  );

}

export default App;
