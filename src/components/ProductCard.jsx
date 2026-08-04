import { useState } from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [showPrices, setShowPrices] = useState(false);

  const prices = product.options.map((p) => p.price);
  const lowest = Math.min(...prices);
  const highest = Math.max(...prices);

  const saving = highest - lowest;

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />

        <span className="product-card-badge">
          Save Rs {saving.toLocaleString()}
        </span>
      </div>

      {/* Body */}
      <div className="product-card-body">
        <div className="product-card-rating">
          <Star className="product-card-rating-star" size={18} />
          <Star className="product-card-rating-star" size={18} />
          <Star className="product-card-rating-star" size={18} />
          <Star className="product-card-rating-star" size={18} />
          <Star className="product-card-rating-star" size={18} />

          <span className="product-card-rating-count">(4.9)</span>
        </div>

        <h2 className="product-card-title">{product.name}</h2>

        <p className="product-card-subtitle">
          Compare prices from {product.options.length} stores
        </p>

        <div className="product-card-price-row">
          <div>
            <p className="product-card-price">Rs {lowest.toLocaleString()}</p>
            <p className="product-card-price-original">
              Rs {highest.toLocaleString()}
            </p>
          </div>

          <span className="product-card-deal-badge">Best Deal</span>
        </div>

        <div className="product-card-actions">
          <button
            onClick={() => setShowPrices(!showPrices)}
            className="btn-outline"
          >
            <Eye size={18} />
            Compare
          </button>

          <button className="btn-filled">
            <ShoppingCart size={18} />
            Buy
          </button>
        </div>

        {showPrices && (
          <div className="product-card-price-list">
            {[...product.options]
              .sort((a, b) => a.price - b.price)
              .map((option) => (
                <div key={option.store} className="product-card-price-item">
                  <div>
                    <h3 className="product-card-price-item-store">
                      {option.store}
                    </h3>

                    <p className="product-card-price-item-price">
                      Rs {option.price.toLocaleString()}
                    </p>
                  </div>

                  <a
                    href={option.link}
                    target="_blank"
                    rel="noreferrer"
                    className="product-card-visit-link"
                  >
                    Visit
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
