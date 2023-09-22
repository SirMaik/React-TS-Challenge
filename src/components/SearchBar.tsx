import React from "react";

interface SearchBarProps {
  placeHolder: string;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({
  placeHolder,
  searchTerm,
  setSearchTerm
}: SearchBarProps): JSX.Element => {
  return (
    <input
      type="text"
      id="header-search"
      placeholder={placeHolder}
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default SearchBar;
