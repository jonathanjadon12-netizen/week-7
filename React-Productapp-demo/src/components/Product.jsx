import { useLocation, useNavigate } from 'react-router';

function Product() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const handleBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="flex-grow flex flex-col justify-center items-center py-24 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#FCFAF7] border border-[#EFEBE4] flex items-center justify-center text-[#D96B43] mb-6 shadow-sm">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#2A2421] mb-2">No Product Selected</h2>
        <p className="text-[#6B5E56] max-w-sm mb-8">It seems you landed here directly. Head over to our catalog to select a product.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D96B43] to-[#8C6239] hover:from-[#C25830] hover:to-[#8C6239] text-white font-semibold transition shadow-md shadow-[#D96B43]/20"
        >
          View All Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex items-center justify-center">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#D96B43]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C25830]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-6xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-[0_10px_40px_-10px_rgba(139,94,60,0.15)] z-10">
        
        {/* Back Button Link */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8E8076] hover:text-[#D96B43] mb-8 group transition-colors"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to list
        </button>

        {/* Details Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Card wrapper */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 aspect-square flex items-center justify-center shadow-inner border border-[#EFEBE4] relative overflow-hidden group">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
            />
            {/* Category tag bubble overlay */}
            <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FCFAF7] text-[#D96B43] border border-[#EFEBE4] shadow-sm uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          {/* Right Column: Descriptions & Metadata Details */}
          <div className="flex flex-col h-full justify-between">
            <div>
              
              {/* Product Rating block */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'fill-current' : 'text-[#DDCABD] fill-current'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#6B5E56]">{product.rating.rate} / 5</span>
                  <span className="text-xs text-[#8E8076]">({product.rating.count} Customer reviews)</span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2A2421] tracking-tight leading-tight mb-5">
                {product.title}
              </h1>

              {/* Price display block */}
              <div className="inline-flex items-baseline gap-1 bg-[#FAF6F0] border border-[#EFEBE4] shadow-sm px-6 py-3 rounded-2xl mb-8">
                <span className="text-[10px] text-[#8E8076] uppercase font-bold tracking-wider mr-2">Price</span>
                <span className="text-3xl font-black text-[#D96B43]">${product.price.toFixed(2)}</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-2">Description</h3>
                <p className="text-[#6B5E56] text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-[#EFEBE4]">
              <button className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D96B43] to-[#8C6239] hover:from-[#C25830] hover:to-[#8C6239] text-white font-bold text-base transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(217,107,67,0.3)] hover:shadow-[0_8px_20px_-4px_rgba(217,107,67,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
              
              <button className="px-8 py-4 rounded-2xl bg-[#FCFAF7] hover:bg-[#F2EDE4] border border-[#EFEBE4] text-[#6B5E56] hover:text-[#2A2421] font-semibold text-base transition-all duration-300 shadow-sm">
                Add to Wishlist
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Product;