import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo and Name */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300 group-hover:to-indigo-400 transition-all duration-300">
            SwiftStore
          </span>
        </NavLink>

        {/* Navigation Pills */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                isActive 
                  ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-inner" 
                  : "text-slate-400 border-transparent hover:text-white hover:bg-slate-900"
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
                  ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-inner" 
                  : "text-slate-400 border-transparent hover:text-white hover:bg-slate-900"
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
                  ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-inner" 
                  : "text-slate-400 border-transparent hover:text-white hover:bg-slate-900"
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