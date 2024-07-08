import React from "react";

const SearchInput = ({ search, handleSearch }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="enter informations related to the patient"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
