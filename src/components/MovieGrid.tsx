import React from "react";
import Card from "./Card";
import type { Movie } from "../api/Movie/interface";

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps): JSX.Element => {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        rowGap: "20px",
        columnGap: "20px"
      }}
    >
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};
