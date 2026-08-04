import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-600">Account access</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{mode === "login" ? "Sign in to your account" : "Create your PriceNepal account"}</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {mode === "login"
              ? "Use the form to sign in with email and password. If you do not have an account, switch to Sign Up."
              : "Enter your details to create a new account. Once signed in, you can update your password and access settings."}
          </p>

          <div className="mt-8 flex gap-3 rounded-full bg-slate-100 p-1 dark:bg-slate-800">
            <button
              type="button"
              onClick={() => toggleMode("login")}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition ${mode === "login" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => toggleMode("signup")}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition ${mode === "signup" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {mode === "signup" && (
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                  placeholder="Your name"
                />
              </label>
            )}
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                placeholder="name@example.com"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                placeholder="Enter your password"
              />
            </label>
            {mode === "signup" && (
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Confirm password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                  placeholder="Repeat your password"
                />
              </label>
            )}
            <button
              type="submit"
              className="w-full rounded-3xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:bg-orange-600"
            >
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
            {message && <p className="text-sm text-orange-700 dark:text-orange-300">{message}</p>}
          </form>
        </div>

        <div className="rounded-[2rem] bg-orange-50 p-8 shadow-xl shadow-orange-200/40 dark:bg-slate-900 dark:text-slate-100">
          <h2 className="text-3xl font-semibold">Fast access</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            {user
              ? "You are already signed in. Use the top navigation to return home or open the settings panel to update your password."
              : "Enter your details to get started. After signing up, use the same email and password to log in."}
          </p>
          <div className="mt-8 space-y-4 rounded-[2rem] bg-white p-5 dark:bg-slate-950">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Need help?</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Visit the Help page for tips on searching and comparing prices.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">support@pricenepal.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
