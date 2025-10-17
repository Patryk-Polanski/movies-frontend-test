import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import type { MovieResponse } from "../types/movie";

const TWO_MINUTES = 1000 * 60 * 2;

export const useMovies = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const search = searchParams.get("search") || "";

  const query = useQuery<MovieResponse>({
    queryKey: useMovies.queryKey(search, page),
    queryFn: async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Try again later");
      }

      // TODO: add some validation for the incoming request, for example with Zod
      const data = (await res.json()) as MovieResponse;

      return data;
    },
    // each query key will be cached for two minutes to prevent a build up of browser cache if the user searches a lot
    // this is evident in the react query dec tools that was added to this project
    gcTime: TWO_MINUTES,
    // only run when a search term exists
    enabled: !!search,
  });

  return query;
};

useMovies.queryKey = (search: string, page: string) => ["movies", search, page];
