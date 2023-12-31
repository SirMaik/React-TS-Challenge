import React from "react";
import type { Movie as MovieProp } from "../api/Movie/interface";
import posterNotFound from "../assets/posterNotFound.png";
import { Link } from "react-router-dom";
import { Card, Image, Text, useMantineTheme } from "@mantine/core";

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
  const theme = useMantineTheme();

  return (
    <Link to={`/movie/${props.id}`} state={props}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        bg={theme.colors.myColor[0]}
      >
        <Card.Section>
          <Image
            src={posterPath}
            radius="md"
            fallbackSrc={posterNotFound}
            mah="250px"
            mih="250px"
          />
        </Card.Section>

        <Text fw={500} size="sm" mt="md" lineClamp={1}>
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
