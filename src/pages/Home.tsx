import React from "react";
import Card from "../components/Card";
import * as API from "../api/Movie/MovieApi";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";

export const Home = (): JSX.Element => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movieSearch"],
    queryFn: () => API.search("amores", true, 2)
  });
  console.log(data);
  if (isLoading) {
    console.log("loading");
    return <p>Loading...</p>;
  }

  if (error) {
    console.log("error");
    throw new Error();
  }

  if (data === undefined) {
    console.log("undefined");
    throw new Error();
  }

  const items = data.movies;

  return (
    <>
      <h1>Movies</h1>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          rowGap: "20px",
          columnGap: "20px"
        }}
      >
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Home;
