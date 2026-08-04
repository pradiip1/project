import "./Help.css";

function Help() {
  return (
    <section className="help-section">
      <div className="help-card">
        <h1 className="help-title">Help & How to use PriceNepal</h1>
        <p className="help-intro">
          PriceNepal helps you compare price offers from top Nepali stores.
          Use the homepage search bar to look up any product, then filter by
          store and sort prices to find the best deal.
        </p>

        <div className="help-list">
          <div>
            <h2 className="help-item-title">1. Navigate with ease</h2>
            <p className="help-item-text">
              Use the left sidebar to view your signed-in profile, open store
              links, and find quick contact details. The top navigation also
              moves you between Home and the Help page.
            </p>
          </div>

          <div>
            <h2 className="help-item-title">2. Search products</h2>
            <p className="help-item-text">
              Enter a product name in the search bar on the homepage. The
              search saves up to the last eight searches, which you can
              review and clear from Settings.
            </p>
          </div>

          <div>
            <h2 className="help-item-title">3. Manage account and password</h2>
            <p className="help-item-text">
              Sign up with your name, email, and password. After signing in,
              the top bar changes to Logout. You can update your password in
              the right-hand settings panel.
            </p>
          </div>

          <div>
            <h2 className="help-item-title">4. Adjust theme and personalize</h2>
            <p className="help-item-text">
              Open Settings to switch between bright and dark mode at any
              time. The settings panel also shows your saved search history
              and password controls.
            </p>
          </div>

          <div className="help-support-box">
            <h3 className="help-support-title">Need additional support?</h3>
            <p className="help-support-text">
              Email our support team at support@pricenepal.com or visit the
              Help page again for walkthrough details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
