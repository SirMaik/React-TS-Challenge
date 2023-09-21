import React from "react";

interface SearchProps {
  placeHolder: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = (props: SearchProps): JSX.Element => {
  const setParentSearchTerm = props.setSearchTerm;
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: any): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setParentSearchTerm(searchTerm);
  };

  return (
    <form action="/" method="get" onSubmit={handleSubmit}>
      <input
        type="text"
        id="header-search"
        placeholder={props.placeHolder}
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
