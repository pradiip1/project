function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 max-w-7xl">
        <a href="#" className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 text-2xl font-black text-white shadow-lg shadow-sky-500/20">
            P
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              Price<span className="text-cyan-500">Nepal</span>
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Compare smarter
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <li className="cursor-pointer transition hover:text-sky-600">Home</li>
          <li className="cursor-pointer transition hover:text-sky-600">Categories</li>
          <li className="cursor-pointer transition hover:text-sky-600">Deals</li>
          <li className="cursor-pointer transition hover:text-sky-600">Compare</li>
          <li className="cursor-pointer transition hover:text-sky-600">Help</li>
        </ul>

        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
            Login
          </button>
          <button className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;