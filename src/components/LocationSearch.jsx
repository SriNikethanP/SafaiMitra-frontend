import React, { useState } from "react";
import axios from "axios";

const LocationSearch = ({ setAddress, setCoordinates }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input) => {
    if (!input) return setSuggestions([]);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${input}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSelect = (location) => {
    setQuery(location.display_name);
    setSuggestions([]);
    setAddress(location.display_name); // Set selected address
    setCoordinates({
      lat: parseFloat(location.lat),
      long: parseFloat(location.lon),
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for nearby locations..."
        className="p-3 border bg-white border-gray-300 rounded-lg w-[360px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-2 shadow-lg overflow-y-auto max-h-60">
          {suggestions.map((location, index) => (
            <li
              key={index}
              onClick={() => handleSelect(location)}
              className="p-3 cursor-pointer hover:bg-green-100 transition-colors duration-200"
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;
