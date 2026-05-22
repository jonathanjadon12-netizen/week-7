 import { useEffect, useState } from "react";
import './App.css'
import SearchBar from './Components/SearchBar';
import CountryList from './Components/CountryList';

function App(){

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try{
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
      );

      if(!res.ok){
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);

    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const result = countries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(result);
  };

  return (
    <div className="min-h-screen bg-radial from-[#FAF6F0] via-[#FAF7F2] to-[#EFEBE4] text-[#2A2421] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#EBDCCB] selection:text-[#5C3E21]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D96B43] via-[#C25830] to-[#8C6239] mb-3 drop-shadow-sm">
            🌍 Global Country Explorer
          </h1>
          <p className="text-[#6B5E56] text-sm sm:text-base max-w-md mx-auto">
            Discover facts, populations, regions, and capitals of countries from across the globe in real-time.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="flex flex-col items-center justify-center mt-20 space-y-4">
            <div className="w-12 h-12 border-4 border-[#D96B43] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#D96B43] font-medium animate-pulse">Fetching global data...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto mt-20 p-6 bg-red-50 border border-red-200 rounded-2xl text-center backdrop-blur-md">
            <p className="text-red-600 font-semibold mb-2">Error Encountered</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <CountryList countries={filteredCountries} />
        )}

      </div>
    </div>
  );
}

export default App;