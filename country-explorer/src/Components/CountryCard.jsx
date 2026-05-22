import { useState, useEffect } from "react";

function CountryCard({ country }) {
  return (
    <div className="bg-[#FCFAF7] backdrop-blur-md border border-[#EFEBE4] hover:border-[#D96B43]/30 text-[#2A2421] rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(139,94,60,0.08)] hover:shadow-[0_10px_30px_-6px_rgba(139,94,60,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
      
      {/* Decorative gradient overlay */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D96B43]/5 rounded-full blur-2xl group-hover:bg-[#D96B43]/10 transition-all duration-300"></div>

      {/* Flag Image Container */}
      <div className="w-full h-40 overflow-hidden rounded-xl bg-[#F5EFE6] mb-4 border border-[#EFEBE4] shadow-inner">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold tracking-tight text-[#2A2421] mb-3 group-hover:text-[#D96B43] transition-colors duration-300 line-clamp-1">
          {country.name.common}
        </h3>

        <div className="space-y-2 text-sm text-[#6B5E56]">
          <div className="flex items-center justify-between border-b border-[#F2EDE4] pb-1.5">
            <span className="font-semibold text-[#8E8076] flex items-center gap-1.5">
              <span>🏛️</span> Capital
            </span>
            <span className="text-[#2A2421] font-medium truncate max-w-[150px]">
              {country.capital?.[0] || "N/A"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#F2EDE4] pb-1.5">
            <span className="font-semibold text-[#8E8076] flex items-center gap-1.5">
              <span>👥</span> Population
            </span>
            <span className="text-[#C25830] font-mono font-medium">
              {country.population.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#8E8076] flex items-center gap-1.5">
              <span>🗺️</span> Region
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#F3ECE0] text-[#7A5A43] border border-[#E5DAC9]">
              {country.region}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CountryCard;