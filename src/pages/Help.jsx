function Help() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Help & How to use PriceNepal</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          PriceNepal helps you compare price offers from top Nepali stores. Use the homepage search bar to look up any product, then filter by store and sort prices to find the best deal.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">1. Navigate with ease</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Use the left sidebar to view your signed-in profile, open store links, and find quick contact details. The top navigation also moves you between Home and the Help page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">2. Search products</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Enter a product name in the search bar on the homepage. The search saves up to the last eight searches, which you can review and clear from Settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">3. Manage account and password</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Sign up with your name, email, and password. After signing in, the top bar changes to Logout. You can update your password in the right-hand settings panel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">4. Adjust theme and personalize</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Open Settings to switch between bright and dark mode at any time. The settings panel also shows your saved search history and password controls.
            </p>
          </div>

          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Need additional support?</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Email our support team at support@pricenepal.com or visit the Help page again for walkthrough details.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
