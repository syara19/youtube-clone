import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { logo } from "../Utility/utilty";

const Navbar = () => {
  return (
    <div className="bg-white py-1 w-screen flex justify-between px-4 items-center sticky top-0">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
