import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovie } from "../api/Movie/MovieApi";
import posterNotFound from "../assets/posterNotFound.png";
import {
  Container,
  Image,
  Stack,
  Text,
  Loader,
  Grid,
  Center
} from "@mantine/core";

export const Movie = (): JSX.Element => {
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
      <Grid pt="20px">
        <Grid.Col span={3}>
          <Image
            src={movie.posterPath}
            radius="lg"
            fallbackSrc={posterNotFound}
            w="100%"
          />
        </Grid.Col>

        <Grid.Col span="auto">
          <Stack gap="15px">
            <Text size="xl" fw={700} td="underline">
              {movie.title}
            </Text>
            <Text>{movie.description ?? <p>{movie.description}</p>}</Text>
            <Text>
              Original language:{" "}
              <span>{movie.originalLanguage ?? "not available"}</span>
            </Text>
            <Text>
              Vote average: <span>{movie.voteAverage ?? "not found"}</span>
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
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

export default Movie;
