import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import Pagination from "@/components/ui/Pagination";

type Props = {
  totalPages?: number;
};

const MoviePagination = ({ totalPages }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const handlePagination = useCallback(
    (paginationVal: string) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set("page", paginationVal);
        return newParams;
      });
    },
    [setSearchParams]
  );

  return (
    <div className="mt-8">
      <Pagination
        onClickPagination={handlePagination}
        queryParam="page"
        totalPages={totalPages}
      />
    </div>
  );
};

export default MoviePagination;
