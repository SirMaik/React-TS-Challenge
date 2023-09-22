import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovie } from "../api/Movie/MovieApi";
import posterNotFound from "../assets/posterNotFound.png";

export const Movie = (props: any): JSX.Element => {
  const params = useParams();
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    return <div>Invalid id {params.id}</div>;
  }

  // State is a movie that was passed when rerouting
  const { state } = useLocation();

  const {
    data: movie,
    status,
    fetchStatus,
    error
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => {
      return state ?? getMovie(id);
    },
    notifyOnChangeProps: ["data"]
  });

  if (status === "success") {
    return (
      <>
        <div className="container">
          <div
            style={{
              alignContent: "left",
              width: "30%",
              height: "100px",
              backgroundImage: `url(${movie.posterPath ?? posterNotFound})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="side side-content-center">
            <div>
              <p>{movie.description}</p>
            </div>
          </div>
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

export default Movie;
