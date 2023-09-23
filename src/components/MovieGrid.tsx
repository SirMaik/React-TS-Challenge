import React from "react";
import MovieCard from "./MovieCard";
import type { Movie } from "../api/Movie/interface";
import { SimpleGrid } from "@mantine/core";

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps): JSX.Element => {
  return (
    <SimpleGrid cols={5}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </SimpleGrid>
  );
};
