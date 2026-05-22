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
        <div className="absolute inset-0 bg-[#D96B43]/10 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        <input
          ref={inputRef}
          type="text"
          placeholder="🔍 Search countries by name..."
          onChange={handleChange}
          className="relative w-full px-6 py-4 rounded-2xl bg-[#FCFAF7] border border-[#EFEBE4] text-[#2A2421] placeholder-[#8E8076] focus:outline-none focus:ring-2 focus:ring-[#D96B43]/40 focus:border-[#D96B43]/40 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(139,94,60,0.08)] focus:shadow-[0_8px_25px_-5px_rgba(217,107,67,0.15)]"
        />
      </div>
    </div>
  );
}

export default SearchBar;