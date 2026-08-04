import { useState } from "react";

function SettingsPanel({ open, onClose, theme, setTheme, user, onPasswordChange, searchHistory, onClearHistory }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      setMessage("Please sign in first to update your password.");
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("Please complete all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }

    const result = onPasswordChange({ currentPassword, newPassword });
    setMessage(result.message);
    if (result.success) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-slate-950/40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} />
      <aside className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform overflow-y-auto border-l border-slate-200/80 bg-white shadow-2xl transition-transform duration-300 dark:border-slate-700 dark:bg-slate-950 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-5 dark:border-slate-700">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Settings</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Preferences & security</h2>
          </div>
          <button
            type="button"
            className="rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="space-y-8 px-6 py-6">
          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Display mode</p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className={`flex-1 rounded-3xl px-4 py-3 text-sm font-semibold transition ${theme === "bright" ? "bg-orange-500 text-white" : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200"}`}
                onClick={() => setTheme("bright")}
              >
                Bright
              </button>
              <button
                type="button"
                className={`flex-1 rounded-3xl px-4 py-3 text-sm font-semibold transition ${theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200"}`}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Search history</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Recent saved search keywords that help you return to favorites.</p>
              </div>
              <button
                type="button"
                className="rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                onClick={onClearHistory}
              >
                Clear
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {searchHistory.length > 0 ? (
                searchHistory.map((term) => (
                  <div key={term} className="rounded-3xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200">
                    {term}
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">No history yet. Search for products to fill this list.</p>
              )}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Security</p>
            {user ? (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Current password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(event) => setCurrentPassword(event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-orange-400/20"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">New password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-orange-400/20"
                    placeholder="Choose a new password"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Confirm password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-orange-400/20"
                    placeholder="Repeat new password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-3xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Save password
                </button>
                {message && <p className="text-sm text-orange-700 dark:text-orange-300">{message}</p>}
              </form>
            ) : (
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Sign in first to access password and account settings here.</p>
            )}
          </section>
        </div>
      </aside>
    </>
  );
}

export default SettingsPanel;
