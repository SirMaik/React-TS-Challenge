import React from "react";
import { Checkbox } from "../components/Checkbox";
import SearchBar from "../components/SearchBar";
import { MovieDisplayer } from "../components/MovieDisplayer";
import { Flex, Button, Center } from "@mantine/core";

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [includeAdult, setIncludeAdult] = React.useState(false);
  const [queryState, setQueryState] = React.useState({
    searchTerm: searchTerm,
    includeAdult: includeAdult
  });
  const [page, setPage] = React.useState(0);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setQueryState({
      searchTerm: searchTerm,
      includeAdult: includeAdult
    });
    setPage(1);
  };

  return (
    <>
      <h1>Movies</h1>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <Flex gap={10}>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeHolder="Search movies"
            width={350}
          />
          <Button type="submit">Search</Button>
          <Center>
            <Checkbox
              label="Adult films"
              isChecked={includeAdult}
              setCheck={setIncludeAdult}
            />
          </Center>
        </Flex>
      </form>
      <MovieDisplayer
        searchTerm={queryState.searchTerm}
        includeAdult={queryState.includeAdult}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Home;
