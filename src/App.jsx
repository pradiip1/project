import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import AuthPage from "./pages/Auth";

import Sidebar from "./components/Sidebar";
import SettingsPanel from "./components/SettingsPanel";

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

      <div className="min-h-screen bg-slate-100">

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

        <div className="min-h-screen">

          <header className="sticky top-0 z-30 h-20 border-b bg-white shadow-sm">

            <div className="flex h-full items-center justify-between px-8">

              <div className="flex items-center gap-5">

                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="rounded-xl border p-3 hover:bg-slate-100"
                >
                  ☰
                </button>

                <div>

                  <h1 className="text-3xl font-bold">
                    Price
                    <span className="text-blue-600">
                      Nepal
                    </span>
                  </h1>

                  <p className="text-xs text-slate-500">
                    Compare prices instantly
                  </p>

                </div>

              </div>              {/* Center Search */}

              <div className="hidden lg:flex flex-1 justify-center">

                <div className="flex w-full max-w-xl items-center rounded-full border bg-slate-100 px-5 py-3">

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 bg-transparent outline-none"
                  />

                  <button className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                    Search
                  </button>

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center gap-3">

                <button
                  onClick={() => setSettingsOpen(true)}
                  className="rounded-xl border px-5 py-2 hover:bg-slate-100"
                >
                  ⚙ Settings
                </button>

                {user ? (

                  <button
                    onClick={handleLogout}
                    className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                  >
                    Logout
                  </button>

                ) : (

                  <NavLink
                    to="/auth"
                    className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
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