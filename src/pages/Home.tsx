import React, { useRef } from "react";
import { Checkbox } from "../components/Checkbox";
import SearchBar from "../components/SearchBar";
import { MovieDisplayer } from "../components/MovieDisplayer";

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [includeAdult, setIncludeAdult] = React.useState(false);
  const [queryState, setQueryState] = React.useState({
    searchTerm: searchTerm,
    includeAdult: includeAdult
  });

  const handleSubmit = (e: React.FormEvent): void => {
    setQueryState({
      searchTerm: searchTerm,
      includeAdult: includeAdult
    });
    e.preventDefault();
  };

  return (
    <>
      <h1>Movies</h1>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeHolder="Search movies"
        />
        <Checkbox
          label="Adult films"
          isChecked={includeAdult}
          setCheck={setIncludeAdult}
        />
      </form>
      <MovieDisplayer
        searchTerm={queryState.searchTerm}
        includeAdult={queryState.includeAdult}
      />
    </>
  );
};

export default Home;
