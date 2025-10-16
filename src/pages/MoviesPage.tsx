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
      <MovieSearch />
      <MovieList movies={moviesData?.results} />
    </>
  );
};

export default MoviesPage;
