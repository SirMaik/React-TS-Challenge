import React from "react";
import type { Movie as MovieProp } from "../api/Movie/interface";
import posterNotFound from "../assets/posterNotFound.png";
import { Link } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */
const MovieCard = (props: MovieProp): JSX.Element => {
  const { title, posterPath, originalLanguage, voteAverage } = props;

  return (
    <Link to={`/movie/${props.id}`} state={props}>
      <Card shadow="sm" padding="lg" radius="md" withBorder w="100%" h="">
        <Card.Section>
          <Image
            src={posterPath ?? posterNotFound}
            radius="md"
            w="90%"
            mah="100"
            alt="No way!"
          />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          {title}
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          Original language: <span>{originalLanguage ?? "not found"}</span>
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          Vote average: <span>{voteAverage ?? "not found"}</span>
        </Text>
      </Card>
    </Link>
  );
};

export default MovieCard;
