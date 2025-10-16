import Search from "@/components/ui/Search";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  isMoviesLoading: boolean;
};

const MovieSearch = ({ isMoviesLoading }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = useCallback(
    (searchVal: string) => {
      if (searchVal) {
        setSearchParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams);
          newParams.set("search", searchVal);
          newParams.set("page", "1");
          return newParams;
        });
      } else {
        setSearchParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams);
          newParams.delete("search");
          newParams.delete("page");
          return newParams;
        });
      }
    },
    [setSearchParams]
  );

  return (
    <section className="mt-6">
      <Search
        onSearch={handleSearch}
        searchParam="search"
        isLoading={isMoviesLoading}
      />
    </section>
  );
};

export default MovieSearch;
