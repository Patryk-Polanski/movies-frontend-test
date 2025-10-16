import { useCallback, useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  onSearch: (value: string) => void;
  buttonText?: string;
};

const Search = ({ buttonText = "Search", onSearch }: Props) => {
  const [search, setSearch] = useState("");

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
      className="flex gap-4 justify-center items-center"
    >
      <Input onChange={handleChange} inputName="movie" inputId="movie" />
      <Button buttonText={buttonText} />
    </form>
  );
};

export default Search;
