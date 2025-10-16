import Spinner from "@/assets/icons/Spinner";
import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

type Props = {
  movies?: Movie[];
  isMoviesError: boolean;
  isMoviesLoading: boolean;
};

const MovieList = ({ movies, isMoviesLoading, isMoviesError }: Props) => {
  if (isMoviesLoading) {
    return (
      <div className="relative mt-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner className="" />
        </div>
      </div>
    );
  }

  if (isMoviesError) {
    return (
      <div className="mt-10 opacity-20 max-w-[500px] mx-auto">
        <h2 className="text-center text-4xl font-semibold">
          Something went wrong, please try again
        </h2>
      </div>
    );
  }

  if (!Array.isArray(movies)) {
    return (
      <div className="mt-10 opacity-20 max-w-[500px] mx-auto">
        <h2 className="text-center text-4xl font-semibold">
          Start searching to find your favourite movies
        </h2>
      </div>
    );
  }

  return (
    <>
      {movies.length > 0 ? (
        <section className="mt-6 grid grid-cols-1 justify-items-center items-start md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.release_date}
              rating={movie.vote_average}
              plot={movie.overview}
              thumbnail={movie.poster_path}
            />
          ))}
        </section>
      ) : (
        <div className="mt-10 opacity-20 max-w-[500px] mx-auto">
          <h2 className="text-center text-4xl font-semibold">
            No movies were found, please try a different movie
          </h2>
        </div>
      )}
    </>
  );
};

export default MovieList;
