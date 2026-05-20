import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="w-full max-w-xl relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
        <input
          ref={inputRef}
          type="text"
          placeholder="🔍 Search countries by name..."
          onChange={handleChange}
          className="relative w-full px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/80 focus:border-teal-500/80 focus:shadow-teal-500/10 backdrop-blur-md transition-all duration-300 shadow-xl"
        />
      </div>
    </div>
  );
}

export default SearchBar;