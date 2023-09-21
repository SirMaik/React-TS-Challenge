import React from "react";
import type { Movie } from "../api/Movie/interface";
import posterNotFound from "../assets/posterNotFound.png";

interface MovieProps extends Movie {}

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */
const Card = (props: MovieProps): JSX.Element => {
  const { title, posterPath, originalLanguage, voteAverage } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        color: "#333",
        border: "solid 1px #333",
        borderRadius: "5px"
      }}
    >
      <div
        style={{
          width: "90%",
          height: "200px",
          backgroundImage: `url(${posterPath ?? posterNotFound})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <h2>{title}</h2>
      <ol className="card-list">
        <li>
          Original language: <span>{originalLanguage ?? "not found"}</span>
        </li>
        <li>
          Vote average: <span>{voteAverage ?? "not found"}</span>
        </li>
      </ol>
    </div>
  );
};

export default Card;
