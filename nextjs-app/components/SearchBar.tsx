"use client";
import { useState } from "react";
import { SearchManifacture } from ".";

const SearchBar = () => {
  const [manifacture, setManifacture] = useState("");

  const searchHandler = () => {
    console.log("this is it");
  };

  return (
    <form className="searchbar" onSubmit={searchHandler}>
      <div className="searchbar__item">
        <SearchManifacture
          manifacture={manifacture}
          setManifacture={setManifacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
