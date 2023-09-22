import React from "react";

interface SearchProps {
  placeHolder: string;
  handleSearchTermChange: (searchTerm: string) => void;
}

const SearchBar = (props: SearchProps): JSX.Element => {
  const handleParentSearchTermChange = props.handleSearchTermChange;
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: any): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    handleParentSearchTermChange(searchTerm);
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
