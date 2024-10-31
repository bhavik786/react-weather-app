import React from "react";
import headerLogo from "../asset/HeaderLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import toast from "react-hot-toast";

/**
 * Header component for the Sky Cast weather app.
 * Displays the app logo, a search input for city names,
 * and temperature unit options (Celsius and Fahrenheit).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.city - The current city input value.
 * @param {Function} props.onInputChange - Function to handle input changes.
 * @param {Function} props.onSearch - Function to handle search action.
 */
const Header = ({ city, onInputChange, onSearch }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <img src={headerLogo} alt="Logo" className="w-8 h-8" />
      <h1 className="text-lg font-semibold">Sky Cast</h1>
    </div>

    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search"
        onChange={onInputChange}
        value={city}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none w-full pr-10"
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
        onClick={onSearch}
      >
        <SearchIcon />
      </button>
    </div>
    <div className="flex items-center space-x-2">
      <button
        className="text-gray-400"
        onClick={() => {
          toast.error("Sorry, this option is under maintenance.");
        }}
      >
        °F
      </button>
      <button className="text-gray-800 font-semibold">°C</button>
    </div>
  </div>
);

export default Header;
