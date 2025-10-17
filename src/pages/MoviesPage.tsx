import MovieList from "@/features/movies/components/MovieList";
import MovieSearch from "@/features/movies/components/MovieSearch";
import { useMovies } from "@/features/movies/hooks/useMovies";

const MoviesPage = () => {
  const {
    isLoading: isMoviesLoading,
    isError: isMoviesError,
    data: moviesData,
  } = useMovies();

  return (
    <>
      <MovieSearch isMoviesLoading={isMoviesLoading} />
      <MovieList
        movies={moviesData?.results}
        totalPages={moviesData?.total_pages}
        isMoviesError={isMoviesError}
        isMoviesLoading={isMoviesLoading}
      />
    </>
  );
};

export default MoviesPage;
