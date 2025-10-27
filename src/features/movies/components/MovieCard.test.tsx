import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import MovieCard from "./MovieCard";

const testMovieObject = {
  adult: false,
  backdrop_path: null,
  genre_ids: [],
  id: 1231267,
  original_language: "no",
  original_title: "Ball",
  overview:
    '"EASY PEASY" is a miniseries by Fridtjof Stensæth Josefsen about the struggles of the little man. Through 6 episodes we meet 6 different men who wrestle with themselves and their surroundings when confronted with small everyday dilemmas. Sadly, easy peasy is not always lemon squeezy.',
  popularity: 0.3329,
  poster_path: "/4xjzzq6r05Dgp1OKEkbbeIPgZer.jpg",
  release_date: "2023-01-01",
  title: "Ball",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

describe("Favourite checkbox", () => {
  it("when selected, the checkbox should stay selected", () => {
    render(
      <MovieCard
        movieId={testMovieObject.id}
        plot={testMovieObject.overview}
        rating={testMovieObject.popularity}
        thumbnail={testMovieObject.poster_path}
        title={testMovieObject.title}
        year={testMovieObject.release_date}
      />
    );

    const checkbox = screen.getByRole("checkbox", {
      name: /favourite/i,
    });
    checkbox.click();
    expect(localStorage.getItem("favourites")).toBe("[1231267]");
  });
});
