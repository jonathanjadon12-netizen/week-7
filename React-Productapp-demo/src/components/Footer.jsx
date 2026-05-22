import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-[#EFEBE4] bg-[#FAF6F0] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8E8076] text-xs sm:text-sm">
        
        {/* Left Side: Brand copyright */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#D96B43] to-[#8C6239] flex items-center justify-center shadow shadow-[rgba(217,107,67,0.2)]">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-semibold text-[#6B5E56]">SwiftStore © 2026. All rights reserved.</span>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#2A2421] transition-colors duration-200">Home</Link>
          <Link to="/products" className="hover:text-[#2A2421] transition-colors duration-200">Catalog</Link>
          <Link to="/contactus" className="hover:text-[#2A2421] transition-colors duration-200">Support</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;