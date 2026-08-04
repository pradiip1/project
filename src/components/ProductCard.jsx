import { useState } from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";

function ProductCard({ product }) {
  const [showPrices, setShowPrices] = useState(false);

  const prices = product.options.map((p) => p.price);
  const lowest = Math.min(...prices);
  const highest = Math.max(...prices);

  const saving = highest - lowest;

  return (
    <div className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
          Save Rs {saving.toLocaleString()}
        </span>

        

      </div>

      {/* Body */}

      <div className="p-6">

        <div className="mb-3 flex items-center gap-1">

          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />

          <span className="ml-2 text-sm text-slate-500">
            (4.9)
          </span>

        </div>

        <h2 className="text-2xl font-bold">
          {product.name}
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Compare prices from {product.options.length} stores
        </p>

        <div className="mt-6 flex items-end justify-between">

          <div>

            <p className="text-3xl font-bold text-blue-600">
              Rs {lowest.toLocaleString()}
            </p>

            <p className="text-sm text-slate-400 line-through">
              Rs {highest.toLocaleString()}
            </p>

          </div>

          <span className="rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
            Best Deal
          </span>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() => setShowPrices(!showPrices)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 font-semibold transition hover:bg-gray-100"
          >
            <Eye size={18} />
            Compare
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            <ShoppingCart size={18} />
            Buy
          </button>

        </div>

        {showPrices && (

          <div className="mt-6 space-y-3">

            {[...product.options]
              .sort((a, b) => a.price - b.price)
              .map((option) => (

                <div
                  key={option.store}
                  className="flex items-center justify-between rounded-2xl bg-slate-100 p-4"
                >

                  <div>

                    <h3 className="font-semibold">
                      {option.store}
                    </h3>

                    <p className="text-blue-600">
                      Rs {option.price.toLocaleString()}
                    </p>

                  </div>

                  <a
                    href={option.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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