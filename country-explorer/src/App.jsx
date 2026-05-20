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
    <div className="min-h-screen bg-radial from-slate-900 via-slate-950 to-black text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-teal-500 selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 mb-3 drop-shadow-sm">
            🌍 Global Country Explorer
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Discover facts, populations, regions, and capitals of countries from across the globe in real-time.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="flex flex-col items-center justify-center mt-20 space-y-4">
            <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-teal-400 font-medium animate-pulse">Fetching global data...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto mt-20 p-6 bg-red-950/30 border border-red-500/30 rounded-2xl text-center backdrop-blur-md">
            <p className="text-red-400 font-semibold mb-2">Error Encountered</p>
            <p className="text-red-300/80 text-sm">{error}</p>
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