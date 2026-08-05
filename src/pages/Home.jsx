import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";
import "./Home.css";

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

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;

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

      <section id="search" className="home-search-section">
        <div className="home-search-card">
          <div className="home-search-inner">
            <div className="home-search-copy">
              <p className="home-search-eyebrow">Search everything</p>
              <h2 className="home-search-title">Find the best Nepalese store price in seconds.</h2>
              <p className="home-search-desc">Type any product or category name, then sort and filter to compare the right deal.</p>
            </div>
            <div className="home-search-form-wrap">
              <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      <section className="home-categories-section">
        <div className="home-categories-header">
          <div>
            <h2 className="home-categories-title">Browse Categories</h2>
            <p className="home-categories-subtitle">Choose a category to compare prices instantly.</p>
          </div>

          <button className="home-categories-viewall-btn">View All</button>
        </div>

        <div className="home-categories-grid">
          <div className="home-category-card">
            <div className="home-category-icon">📱</div>
            <h3 className="home-category-title">Smartphones</h3>
            <p className="home-category-count">120 Products</p>
          </div>

          <div className="home-category-card">
            <div className="home-category-icon">💻</div>
            <h3 className="home-category-title">Laptops</h3>
            <p className="home-category-count">86 Products</p>
          </div>

          <div className="home-category-card">
            <div className="home-category-icon">⌚</div>
            <h3 className="home-category-title">Smart Watches</h3>
            <p className="home-category-count">54 Products</p>
          </div>

          <div className="home-category-card">
            <div className="home-category-icon">🎧</div>
            <h3 className="home-category-title">Accessories</h3>
            <p className="home-category-count">170 Products</p>
          </div>
        </div>
      </section>

      <section id="products" className="home-products-section">
        <div className="home-products-grid">
          <aside className="home-filters-aside">
            <div className="home-filters-stack">
              <div className="home-filters-intro">
                <h2 className="home-filters-title">Refine your results</h2>
                <p className="home-filters-desc">Use the filters below to narrow down product listings by store and price direction.</p>
              </div>

              <div className="home-filters-fields">
                <label className="home-filter-label">Store</label>
                <select
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="home-filter-select"
                >
                  {storeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <label className="home-filter-label">Sort by price</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="home-filter-select"
                >
                  <option value="">Best match</option>
                  <option value="low">Lowest first</option>
                  <option value="high">Highest first</option>
                </select>
              </div>

              <div className="home-summary-box">
                <p className="home-summary-label">Live summary</p>
                <div className="home-summary-list">
                  <div className="home-summary-item">
                    <p className="home-summary-item-label">Products available</p>
                    <p className="home-summary-item-value">{filteredProducts.length}</p>
                  </div>
                  <div className="home-summary-item">
                    <p className="home-summary-item-label">Best saving</p>
                    <p className="home-summary-item-value">Rs {bestSaving.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="home-results-stack">
            <div className="home-results-header">
              <div>
                <p className="home-results-count">Showing {filteredProducts.length} products</p>
                <h2 className="home-results-title">Latest price comparisons</h2>
              </div>
              <div className="home-results-badge"></div>
            </div>
            <div className="home-products-grid-list">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="home-empty-state">
                  <p className="home-empty-title">No products found</p>
                  <p className="home-empty-text">Try a different search term or select another store.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-cta-card">
          <h2 className="home-cta-title">Ready to Save Money?</h2>
          <p className="home-cta-text">
            Compare prices from Daraz, Hukut, BrotherMart, Sastodeal and more before making your purchase.
          </p>
          <button className="home-cta-btn">Start Comparing</button>
        </div>
      </section>
    </>
  );
}

export default Home;
