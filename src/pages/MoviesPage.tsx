import MovieList from "@/features/movies/components/MovieList";
import MovieSearch from "@/features/movies/components/MovieSearch";

const MoviesPage = () => {
  return (
    <>
      <MovieSearch />
      <MovieList />
    </>
  );
};

export default MoviesPage;
