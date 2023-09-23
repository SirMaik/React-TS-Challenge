import { get } from "../TMDBApi";
import type { Movie, SearchMovies } from "./interface";

export async function search(
  query: string,
  includeAdult: boolean,
  page: number
): Promise<SearchMovies> {
  const path = "/search/movie";
  const params = {
    query,
    page: String(resolveTMDBPage(page)),
    include_adult: String(includeAdult)
  };
  const response = await get(path, params);

  const initialIndex = resolveInitialIndex(page);

  const ids = response.results
    .slice(initialIndex, initialIndex + 10)
    .map((result: any) => result.id);

  const movies = await getMovies(ids);
  const pages = calculatePages(response.total_results);

  return { movies, pages };
}

// TMDB returns pages with 20 movies and we're displaying only up to 10
function resolveTMDBPage(page: number): number {
  return Math.ceil(page / 2);
}

// The initial index will be either 0 or 10
function resolveInitialIndex(page: number): number {
  return ((page + 1) % 2) * 10;
}

function calculatePages(totalResults: number): number {
  return Math.ceil(totalResults / 10);
}

export async function getMovie(id: number): Promise<Movie> {
  const path = `/movie/${id}`;
  const params = { language: "en-US" };
  const response = await get(path, params);

  const movie = {
    id: response.id,
    title: response.title,
    posterPath: response.poster_path
      ? `https://image.tmdb.org/t/p/original/${response.poster_path}`
      : undefined,
    originalLanguage: response.original_language,
    voteAverage: response.vote_average,
    description: response.overview
  };

  return movie;
}

async function getMovies(ids: number[]): Promise<Movie[]> {
  return await Promise.all(ids.map(getMovie));
}
