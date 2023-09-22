import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movie from "./pages/Movie";

/**
 * The starting page for your App
 */

const queryClient = new QueryClient({});

class App extends Component {
  render(): JSX.Element {
    return (
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
    );
  }
}

export default App;
