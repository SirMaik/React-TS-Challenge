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
  "#eeeefb",
  "#d9d8f2",
  "#aeaee7",
  "#8280dc",
  "#5d5ad3",
  "#4642cf",
  "#3b36cd",
  "#2d29b5",
  "#2724a2",
  "#1e1e8f"
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
