import React from "react";
import { Input } from "@mantine/core";

interface SearchBarProps {
  placeHolder: string;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  width: number;
}

const SearchBar = ({
  placeHolder,
  searchTerm,
  setSearchTerm, 
  width
}: SearchBarProps): JSX.Element => {
  return (
    <Input
      placeholder={placeHolder}
      value={searchTerm}
      w={width}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default SearchBar;
