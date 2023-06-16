import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`search/${inputSearch}`);
    setInputSearch("");
  };

  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        placeholder="Search"
        type="text"
        className="border-gray-400 outline-none p-2 rounded-full text-sm w-50 sm:w-80"
        style={{ borderWidth: "1px" }}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-gray-400 bg-white absolute h-6  top-2 right-4" />
      </button>
    </form>
  );
};

export default SearchBar;
