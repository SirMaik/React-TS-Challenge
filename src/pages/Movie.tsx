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
        <div
          style={{
            display: "flex",
            height: "400px",
            padding: "30px"
          }}
        >
          <div
            style={{
              flex: "1",
              width: "30%",
              height: "100%",
              backgroundImage: `url(${movie.posterPath ?? posterNotFound})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div
            style={{
              width: "70%",
              display: "flex",
              paddingLeft: "30px",
              verticalAlign: "top"
            }}
          >
            <div>
              <h1>{movie.title}</h1>
              {movie.description ?? <p>{movie.description}</p>}
              <p>
                Original language:{" "}
                <span>{movie.originalLanguage ?? "not available"}</span>
              </p>
              <p>
                Vote average: <span>{movie.voteAverage ?? "not found"}</span>
              </p>
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
