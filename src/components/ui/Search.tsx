import { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";

type Props = {
  onSearch: (value: string) => void;
  buttonText?: string;
  queryParam?: string;
  isLoading: boolean;
};

const Search = ({
  isLoading,
  buttonText = "Search",
  onSearch,
  queryParam,
}: Props) => {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!queryParam) return;
    const searchValue = searchParams.get(queryParam);
    if (searchValue) {
      setSearch(searchValue);
    }
  }, [searchParams, queryParam]);

  const handleChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch(search);
    },
    [onSearch, search]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <Input
        onChange={handleChange}
        inputName="movie"
        inputId="movie"
        value={search}
      />
      <Button buttonText={buttonText} isLoading={isLoading} />
    </form>
  );
};

export default Search;
