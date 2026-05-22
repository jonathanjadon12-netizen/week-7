import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="relative flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D96B43]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#C25830]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        
        {/* Banner Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EFEBE4] text-xs font-semibold text-[#D96B43] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse" />
          Introducing Spring Collection 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#2A2421] mb-6 leading-tight">
          Discover a New Era of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D96B43] via-[#C25830] to-[#8C6239]">
            Premium Shopping
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#6B5E56] max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore curated collections, exclusive designer items, and lightning-fast worldwide delivery. 
          Handpicked premium quality products designed for your modern lifestyle.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D96B43] to-[#8C6239] hover:from-[#C25830] hover:to-[#8C6239] text-white font-bold text-base transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(217,107,67,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Explore Collection
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            to="/contactus"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FCFAF7] hover:bg-[#F2EDE4] border border-[#EFEBE4] text-[#2A2421] font-semibold text-base transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
          >
            Get in Touch
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md hover:border-[#D96B43]/30 hover:bg-[#F5EFE6] transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(139,94,60,0.05)]">
            <div className="w-12 h-12 rounded-xl bg-[#D96B43]/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-[#D96B43]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#2A2421] font-bold text-sm mb-1">Ultra Fast</h3>
            <p className="text-xs text-[#8E8076]">Same-day global shipping</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md hover:border-[#D96B43]/30 hover:bg-[#F5EFE6] transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(139,94,60,0.05)]">
            <div className="w-12 h-12 rounded-xl bg-[#D96B43]/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-[#D96B43]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[#2A2421] font-bold text-sm mb-1">100% Secure</h3>
            <p className="text-xs text-[#8E8076]">Encrypted merchant portal</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md hover:border-[#D96B43]/30 hover:bg-[#F5EFE6] transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(139,94,60,0.05)]">
            <div className="w-12 h-12 rounded-xl bg-[#D96B43]/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-[#D96B43]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-[#2A2421] font-bold text-sm mb-1">Premium Quality</h3>
            <p className="text-xs text-[#8E8076]">Handpicked items only</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] backdrop-blur-md hover:border-[#D96B43]/30 hover:bg-[#F5EFE6] transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(139,94,60,0.05)]">
            <div className="w-12 h-12 rounded-xl bg-[#D96B43]/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-[#D96B43]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-[#2A2421] font-bold text-sm mb-1">24/7 Service</h3>
            <p className="text-xs text-[#8E8076]">Dedicated support squad</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;