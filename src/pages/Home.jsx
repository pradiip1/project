import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";

const storeOptions = ["All", "Daraz", "Hukut", "BrotherMart"];
const categories = [
  { title: "Smartphones", subtitle: "Popular mobile deals" },
  { title: "Laptops", subtitle: "Best laptop savings" },
  { title: "Accessories", subtitle: "Headsets, watches and more" },
  { title: "Gaming", subtitle: "Consoles and high-end rigs" },
];

function Home({ onSearchUsed }) {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesStore =
        store === "All" ||
        product.options.some((option) => option.store === store);
      return matchesSearch && matchesStore;
    });

    if (sort === "low") {
      return [...result].sort((a, b) => {
        const aLowest = Math.min(...a.options.map((o) => o.price));
        const bLowest = Math.min(...b.options.map((o) => o.price));
        return aLowest - bLowest;
      });
    }

    if (sort === "high") {
      return [...result].sort((a, b) => {
        const aHighest = Math.max(...a.options.map((o) => o.price));
        const bHighest = Math.max(...b.options.map((o) => o.price));
        return bHighest - aHighest;
      });
    }

    return result;
  }, [search, store, sort]);

  const bestSaving = filteredProducts.reduce((maxSaving, product) => {
    const prices = product.options.map((item) => item.price);
    const savings = Math.max(...prices) - Math.min(...prices);
    return Math.max(maxSaving, savings);
  }, 0);

  const handleSearch = (value) => {
    setSearch(value);
    onSearchUsed?.(value);
  };

  return (
    <>
      <Hero />

      <section id="search" className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:py-14">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-yellow-50 p-6 shadow-2xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/5">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-600">Search everything</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:black sm:text-4xl">Find the best Nepalese store price in seconds.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-600">Type any product or category name, then sort and filter to compare the right deal.</p>
            </div>
            <div className="flex-1">
              <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>
<section className="mx-auto max-w-7xl px-8 py-12">

    <div className="mb-8 flex items-center justify-between">

        <div>

            <h2 className="text-4xl font-bold">
                Browse Categories
            </h2>

            <p className="mt-2 text-slate-500">
                Choose a category to compare prices instantly.
            </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            View All
        </button>

    </div>

    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl">📱</div>

            <h3 className="mt-5 text-xl font-bold">
                Smartphones
            </h3>

            <p className="mt-2 text-slate-500">
                120 Products
            </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl">💻</div>

            <h3 className="mt-5 text-xl font-bold">
                Laptops
            </h3>

            <p className="mt-2 text-slate-500">
                86 Products
            </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl">⌚</div>

            <h3 className="mt-5 text-xl font-bold">
                Smart Watches
            </h3>

            <p className="mt-2 text-slate-500">
                54 Products
            </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl">🎧</div>

            <h3 className="mt-5 text-xl font-bold">
                Accessories
            </h3>

            <p className="mt-2 text-slate-500">
                170 Products
            </p>

        </div>

    </div>

</section>

      <section id="products" className="mx-auto max-w-7xl px-6 pb-14 md:px-8 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/90">
            <div className="space-y-8">
              <div className="space-y-3">

               
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Refine your results</h2>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">Use the filters below to narrow down product listings by store and price direction.</p>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Store</label>
                <select
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                >
                  {storeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Sort by price</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-orange-400/20"
                >
                  <option value="">Best match</option>
                  <option value="low">Lowest first</option>
                  <option value="high">Highest first</option>
                </select>
              </div>

              <div className="rounded-[1.75rem] bg-slate-50 p-5 text-slate-700 shadow-sm shadow-slate-900/5 dark:bg-slate-900 dark:text-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Live summary</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-900/5 dark:bg-slate-950">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Products available</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{filteredProducts.length}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-900/5 dark:bg-slate-950">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Best saving</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Rs {bestSaving.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950/90">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Showing {filteredProducts.length} products</p>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Latest price comparisons</h2>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm dark:bg-orange-500/10 dark:text-orange-200">
                
              </div>
            </div>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full rounded-[2rem] border border-dashed border-slate-300 bg-white/90 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-400">
                  <p className="text-lg font-semibold">No products found</p>
                  <p className="mt-3 text-sm">Try a different search term or select another store.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-7xl px-8 pb-20">

    <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-white">

        <h2 className="text-5xl font-bold">
            Ready to Save Money?
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-blue-100">

            Compare prices from Daraz, Hukut,
            BrotherMart, Sastodeal and more
            before making your purchase.

        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:scale-105">

            Start Comparing

        </button>

    </div>

</section>
    </>
  );
}

export default Home;
