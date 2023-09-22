import React from "react";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import { search } from "../api/Movie/MovieApi";
import { Checkbox } from "../components/Checkbox";
import ReactPaginate from "react-paginate";

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const includeAdultRef = React.useRef(false);
  const setIncludeAdult = (value: boolean): void => {
    includeAdultRef.current = value;
  };
  const includeAdult = includeAdultRef.current;

  const [page, setPage] = React.useState(0);

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["movieSearch", searchTerm, includeAdult, page],
    queryFn: () => search(searchTerm, includeAdult, page + 1),
    enabled: searchTerm !== "",
    notifyOnChangeProps: ["data"]
  });

  const pages = data?.pages ?? 0;

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
      <Checkbox
        label="Adult films"
        value={includeAdult}
        setValue={setIncludeAdult}
      />
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
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(e) => {
              setPage(e.selected);
            }}
            pageRangeDisplayed={5}
            pageCount={pages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
