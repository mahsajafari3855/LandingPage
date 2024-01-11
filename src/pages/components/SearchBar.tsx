"use client";

import React, { useState } from "react";

interface SearchBarProps {
  onSelect?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [showOptions, setShowOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedCountry(value);
    setShowOptions(false);
    onSelect?.(value);
  };

  const countries = [
    { value: "US", icon: "🇺🇸" },
    { value: "CA", icon: "🇨🇦" },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className=" relative rounded-full text-black bg-white mx-6 mt-6 w-10/12">
      <div className="flex justify-between items-center p-2 cursor-pointer">
        <input
          type="text"
          placeholder="Search..."
          className="w-3/4 px-2 py-1 rounded-l-full border-0 outline-none"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div
          className="text-right  text-2xl cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedCountry
            ? countries.find((country) => country.value === selectedCountry)
                ?.icon
            : "Select a country"}
        </div>
      </div>
      {showOptions && (
        <div className="absolute text-right top-full right-0 bg-white mt-1 border rounded-b-lg">
          {countries.map((country) => (
            <div
              key={country.value}
              className="flex   text-2xl items-center p-4 cursor-pointer"
              onClick={() => handleSelectChange(country.value)}
            >
              {country.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
