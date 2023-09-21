import React from "react";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import { search } from "../api/Movie/MovieApi";

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const includeAdult = false;
  const page = 1;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["movieSearch", searchTerm, includeAdult, page],
    queryFn: () => search(searchTerm, includeAdult, page),
    enabled: searchTerm !== ""
  });

  const movies = data?.movies ?? [];
  const renderByStatus = (): JSX.Element => {
    if (status === "success") {
      return (
        <>
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </>
      );
    }

    if (status === "error") {
      return <div>{error}</div>;
    }

    if (fetchStatus === "idle") {
      return <div />;
    }

    if (status === "loading") {
      return <div>Loading ...</div>;
    }

    return <div />;
  };

  return (
    <>
      <h1>Movies</h1>
      <SearchBar setSearchTerm={setSearchTerm} placeHolder="Search movies" />
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          rowGap: "20px",
          columnGap: "20px"
        }}
      >
        {renderByStatus()}
      </div>
    </>
  );
};

export default Home;
