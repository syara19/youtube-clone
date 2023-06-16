import React from "react";
import { categories } from "./Utility/utilty";

const SideBar = ({ setSelectCategory, selectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={index}
            className="flex p-2 flex-row items-center sm:justify-start sm:py-3 sm:px-4"
            style={{
              backgroundColor:
                selectCategory === category.name ? "red" : "white",
              color: selectCategory === category.name ? "white" : "black",
            }}
          >
            <span>{category.name}</span>
            <span className="mr-2">{category.icon}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
