import React from "react";
import { MovieGrid } from "./MovieGrid";
import { useQuery } from "@tanstack/react-query";
import { search } from "../api/Movie/MovieApi";
import { Pagination, Center, Container, Loader, Text } from "@mantine/core";

interface MovieDisplayerProps {
  searchTerm: string;
  includeAdult: boolean;
  page: number;
  setPage: (page: number) => void;
}

export const MovieDisplayer = ({
  searchTerm,
  includeAdult,
  page,
  setPage
}: MovieDisplayerProps): JSX.Element => {
  const { data, status, fetchStatus, error } = useQuery({
    queryKey: ["movieSearch", searchTerm, includeAdult, page],
    queryFn: () => search(searchTerm, includeAdult, page),
    enabled: searchTerm !== "",
    notifyOnChangeProps: ["data"]
  });

  if (status === "success") {
    const movies = data?.movies ?? [];
    const pages = data?.pages ?? 0;

    return (
      <>
        <MovieGrid movies={movies} />
        <Pagination value={page} onChange={setPage} total={pages} pb="20" />
      </>
    );
  }

  if (status === "error") {
    return (
      <Container>
        <Text c="red" fw={700}>
          {error}
        </Text>
      </Container>
    );
  }

  if (fetchStatus === "idle") {
    return <div />;
  }

  if (status === "loading") {
    return (
      <Center pt="50">
        <Loader color="blue" />
      </Center>
    );
  }

  return <div>No results found...</div>;
};
