import { useState } from "react";
import "./SettingsPanel.css";

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
      <div
        className={`settings-overlay ${open ? "settings-overlay--open" : ""}`}
        onClick={onClose}
      />
      <aside className={`settings-panel ${open ? "settings-panel--open" : ""}`}>
        <div className="settings-header">
          <div>
            <p className="settings-header-eyebrow">Settings</p>
            <h2 className="settings-header-title">Preferences & security</h2>
          </div>
          <button type="button" className="settings-close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="settings-body">
          <section className="settings-section">
            <p className="settings-section-label">Display mode</p>
            <div className="theme-toggle-row">
              <button
                type="button"
                className={`theme-toggle-btn ${theme === "bright" ? "theme-toggle-btn--active-bright" : ""}`}
                onClick={() => setTheme("bright")}
              >
                Bright
              </button>
              <button
                type="button"
                className={`theme-toggle-btn ${theme === "dark" ? "theme-toggle-btn--active-dark" : ""}`}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
            </div>
          </section>

          <section className="settings-section">
            <div className="history-header">
              <div>
                <p className="settings-section-label">Search history</p>
                <p className="history-desc">
                  Recent saved search keywords that help you return to favorites.
                </p>
              </div>
              <button type="button" className="history-clear-btn" onClick={onClearHistory}>
                Clear
              </button>
            </div>
            <div className="history-list">
              {searchHistory.length > 0 ? (
                searchHistory.map((term) => (
                  <div key={term} className="history-item">
                    {term}
                  </div>
                ))
              ) : (
                <p className="history-empty">No history yet. Search for products to fill this list.</p>
              )}
            </div>
          </section>

          <section className="settings-section">
            <p className="settings-section-label">Security</p>
            {user ? (
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <div>
                  <label className="password-field-label">Current password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(event) => setCurrentPassword(event.target.value)}
                    className="password-input"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="password-field-label">New password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    className="password-input"
                    placeholder="Choose a new password"
                  />
                </div>
                <div>
                  <label className="password-field-label">Confirm password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="password-input"
                    placeholder="Repeat new password"
                  />
                </div>
                <button type="submit" className="password-submit">
                  Save password
                </button>
                {message && <p className="password-message">{message}</p>}
              </form>
            ) : (
              <p className="signin-prompt">Sign in first to access password and account settings here.</p>
            )}
          </section>
        </div>
      </aside>
    </>
  );
}

export default SettingsPanel;
