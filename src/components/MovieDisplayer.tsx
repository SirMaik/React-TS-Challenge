import React from "react";
import { MovieGrid } from "./MovieGrid";
import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";
import { search } from "../api/Movie/MovieApi";

interface MovieDisplayerProps {
  searchTerm: string;
  includeAdult: boolean;
}

export const MovieDisplayer = ({
  searchTerm,
  includeAdult
}: MovieDisplayerProps): JSX.Element => {
  const [page, setPage] = React.useState(0);

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["movieSearch", searchTerm, includeAdult, page],
    queryFn: () => search(searchTerm, includeAdult, page + 1),
    enabled: searchTerm !== "",
    notifyOnChangeProps: ["data"]
  });

  if (status === "success") {
    const movies = data?.movies ?? [];
    const pages = data?.pages ?? 0;

    return (
      <>
        <MovieGrid movies={movies} />
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

  return <div>No results found...</div>;
};
