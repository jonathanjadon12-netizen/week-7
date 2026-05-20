import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs sm:text-sm">
        
        {/* Left Side: Brand copyright */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow shadow-indigo-500/10">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-semibold text-slate-400">SwiftStore © 2026. All rights reserved.</span>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <Link to="/products" className="hover:text-white transition-colors duration-200">Catalog</Link>
          <Link to="/contactus" className="hover:text-white transition-colors duration-200">Support</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;