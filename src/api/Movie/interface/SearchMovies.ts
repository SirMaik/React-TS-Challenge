import type { Movie } from "./Movie";

export interface SearchMovies {
  movies: Movie[];
  pages: number;
}
