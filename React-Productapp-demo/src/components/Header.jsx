import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FCFAF7]/80 border-b border-[#EFEBE4] px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo and Name */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D96B43] to-[#8C6239] flex items-center justify-center shadow-[0_4px_15px_-3px_rgba(217,107,67,0.3)] group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D96B43] via-[#C25830] to-[#8C6239] group-hover:to-[#D96B43] transition-all duration-300">
            Shoppe
          </span>
        </NavLink>

        {/* Navigation Pills */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                isActive 
                  ? "text-[#D96B43] bg-[#D96B43]/10 border-[#D96B43]/20 shadow-inner" 
                  : "text-[#6B5E56] border-transparent hover:text-[#2A2421] hover:bg-[#F2EDE4]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/products"
            className={({ isActive }) => 
              `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                isActive 
                  ? "text-[#D96B43] bg-[#D96B43]/10 border-[#D96B43]/20 shadow-inner" 
                  : "text-[#6B5E56] border-transparent hover:text-[#2A2421] hover:bg-[#F2EDE4]"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink 
            to="/contactus"
            className={({ isActive }) => 
              `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                isActive 
                  ? "text-[#D96B43] bg-[#D96B43]/10 border-[#D96B43]/20 shadow-inner" 
                  : "text-[#6B5E56] border-transparent hover:text-[#2A2421] hover:bg-[#F2EDE4]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;