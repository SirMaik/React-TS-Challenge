import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movie from "./pages/Movie";
import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple
} from "@mantine/core";
import "@mantine/core/styles.css";

/**
 * The starting page for your App
 */
const queryClient = new QueryClient({});

const myColor: MantineColorsTuple = [
  "#e1f9ff",
  "#ccedff",
  "#9ad7ff",
  "#64c1ff",
  "#3baefe",
  "#20a2fe",
  "#099cff",
  "#0088e4",
  "#0078cd",
  "#0069b6"
];

const theme = createTheme({
  colors: {
    myColor
  }
});

class App extends React.Component {
  render(): JSX.Element {
    return (
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <main>
              <section>
                <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/movie/:id"} element={<Movie />} />
                </Routes>
              </section>
            </main>
          </BrowserRouter>
        </QueryClientProvider>
      </MantineProvider>
    );
  }
}

export default App;
