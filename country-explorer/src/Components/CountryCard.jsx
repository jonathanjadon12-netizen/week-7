import { useState, useEffect } from "react";

function CountryCard({ country }) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-teal-500/30 text-slate-100 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
      
      {/* Decorative gradient overlay */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-300"></div>

      {/* Flag Image Container */}
      <div className="w-full h-40 overflow-hidden rounded-xl bg-slate-950 mb-4 border border-slate-800/60 shadow-inner">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">
          {country.name.common}
        </h3>

        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex items-center justify-between border-b border-slate-800/40 pb-1.5">
            <span className="font-semibold text-slate-400 flex items-center gap-1.5">
              <span>🏛️</span> Capital
            </span>
            <span className="text-white font-medium truncate max-w-[150px]">
              {country.capital?.[0] || "N/A"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-800/40 pb-1.5">
            <span className="font-semibold text-slate-400 flex items-center gap-1.5">
              <span>👥</span> Population
            </span>
            <span className="text-teal-400 font-mono font-medium">
              {country.population.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-400 flex items-center gap-1.5">
              <span>🗺️</span> Region
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-teal-300 border border-slate-700/50">
              {country.region}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CountryCard;