import React from "react";
import MovieCard from "./MovieCard";
import type { Movie } from "../api/Movie/interface";
import { Grid } from "@mantine/core";

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps): JSX.Element => {
  return (
    <Grid>
      {movies.map((movie) => (
        <Grid.Col key={movie.id} span={5}>
          <MovieCard key={movie.id} {...movie} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
