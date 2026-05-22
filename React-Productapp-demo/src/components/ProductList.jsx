import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductsList() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  const gotoProduct = (productObj) => {
    navigate('/product', { state: { product: productObj } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        let res = await fetch("https://fakestoreapi.com/products");

        if (res.status === 200) {
          let productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Combined Filter (Search + Category)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex-grow flex flex-col justify-center items-center py-32">
        <div className="w-16 h-16 border-4 border-[#D96B43]/20 border-t-[#D96B43] rounded-full animate-spin mb-6"></div>
        <p className="text-xl font-medium text-[#8E8076] animate-pulse">Loading Shoppe Catalog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex flex-col justify-center items-center py-24 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 border border-red-100 shadow-sm">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#2A2421] mb-2">Failed to load catalog</h2>
        <p className="text-[#6B5E56] max-w-md">{error.message || "An unexpected error occurred while fetching products. Please try again later."}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
      
      {/* Title block */}
      <div className="text-center sm:text-left mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2A2421] tracking-tight mb-3">
          ✨ Featured Products
        </h1>
        <p className="text-[#6B5E56] text-sm sm:text-base max-w-2xl">
          Explore our handpicked premium goods from around the world. Designed with meticulous details for standard quality.
        </p>
      </div>

      {/* FILTER SECTION */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 pb-8 border-b border-[#EFEBE4]">
        
        {/* Search */}
        <div className="relative w-full sm:w-96 group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8E8076] pointer-events-none group-focus-within:text-[#D96B43] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#FCFAF7] border border-[#EFEBE4] hover:border-[#D96B43]/30 text-[#2A2421] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30 focus:border-[#D96B43]/40 placeholder-[#8E8076] transition-all duration-300 shadow-sm backdrop-blur-sm"
          />
        </div>

        {/* Category Selector */}
        <div className="relative w-full sm:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none px-5 py-3 bg-[#FCFAF7] border border-[#EFEBE4] hover:border-[#D96B43]/30 text-[#2A2421] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30 focus:border-[#D96B43]/40 transition-all duration-300 shadow-sm backdrop-blur-sm cursor-pointer capitalize"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat} className="bg-[#FAF6F0] text-[#2A2421] capitalize">
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#8E8076] pointer-events-none">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((productObj) => (
            <div
              onClick={() => gotoProduct(productObj)}
              key={productObj.id}
              className="group bg-[#FCFAF7] border border-[#EFEBE4] hover:border-[#D96B43]/30 backdrop-blur-md rounded-3xl p-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_-6px_rgba(139,94,60,0.15)] transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative bg-[#FAF6F0] rounded-2xl p-6 mb-5 aspect-square flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-sm transition-all duration-500">
                  <img
                    src={productObj.image}
                    alt={productObj.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                  {/* Category Pill Tag Overlay */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#F3ECE0] text-[#D96B43] border border-[#EFEBE4] backdrop-blur-sm uppercase tracking-wider">
                    {productObj.category}
                  </span>
                </div>

                {/* Rating Badge */}
                {productObj.rating && (
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex items-center text-amber-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-[#6B5E56]">{productObj.rating.rate}</span>
                    <span className="text-[10px] text-[#8E8076]">({productObj.rating.count})</span>
                  </div>
                )}

                {/* Product Title */}
                <h2 className="text-base font-bold text-[#2A2421] line-clamp-2 group-hover:text-[#D96B43] transition-colors duration-300 mb-2">
                  {productObj.title}
                </h2>
              </div>

              {/* Price Row */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#EFEBE4]">
                <div>
                  <span className="block text-[10px] text-[#8E8076] uppercase font-bold tracking-wider">Price</span>
                  <span className="text-xl font-extrabold text-[#2A2421]">
                    ${productObj.price.toFixed(2)}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D96B43]/10 border border-[#D96B43]/20 flex items-center justify-center text-[#D96B43] group-hover:bg-[#D96B43] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <p className="text-lg text-[#6B5E56] font-semibold mb-2">No products match your criteria</p>
            <p className="text-sm text-[#8E8076]">Try adjusting your search terms or selecting a different category.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default ProductsList;