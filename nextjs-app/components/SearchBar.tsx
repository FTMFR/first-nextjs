"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const searchHandler = () => {
    console.log("this is it");
  };

  return (
    <form className="searchbar" onSubmit={searchHandler}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
