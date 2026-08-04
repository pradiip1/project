function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12">

      <div className="grid items-center gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            #1 Price Comparison Platform
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">
            Compare Prices
            <br />
            <span className="text-blue-600">
              Across Nepal
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-500">
            Instantly compare prices from Daraz, Hukut,
            BrotherMart, Sastodeal and many more trusted
            Nepali online stores.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Start Comparing
            </button>

            <button className="rounded-2xl border px-8 py-4 font-semibold hover:bg-gray-100">
              Learn More
            </button>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                15+
              </h2>

              <p className="text-slate-500">
                Stores
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                20K+
              </h2>

              <p className="text-slate-500">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                Rs50K+
              </h2>

              <p className="text-slate-500">
                Saved
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="rounded-[40px] bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-300 p-10 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
              alt="Phone"
              className="mx-auto h-[500px] rounded-3xl object-cover shadow-2xl"
            />

          </div>

          {/* Floating Cards */}

          <div className="absolute -left-10 top-10 rounded-3xl bg-white p-5 shadow-2xl">

            <p className="text-sm text-slate-500">
              Lowest Price
            </p>

            <h3 className="text-2xl font-bold">
              Rs 85,999
            </h3>

          </div>

          <div className="absolute -right-8 bottom-12 rounded-4xl bg-white p-5 shadow-2xl">

            <h3 className="text-sm text-slate-250">
              Best Store
            </h3>

            <h6 className="text-xl font-bold text-blue-500">
              Daraz
            </h6>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;