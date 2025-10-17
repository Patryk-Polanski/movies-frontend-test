import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";

type Props = {
  onClickPagination: (paginationValue: string) => void;
  queryParam?: string;
  totalPages?: number;
};

const Pagination = ({ totalPages, onClickPagination, queryParam }: Props) => {
  const [pagination, setPagination] = useState("1");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!queryParam) return;
    const paginationValue = searchParams.get(queryParam);
    if (paginationValue) {
      setPagination(paginationValue);
    }
  }, [searchParams, queryParam]);

  // TODO: this needs to better handle scenarios when there are hundreds of totalPages - with more time, this would have been implemented (for now, the maximum amount of pages has been limited to 10)
  // TODO: example with 99 pages would be << < 1 ... 5, 6, 7 ... 99 > >>
  const paginationEl = useMemo(() => {
    if (!totalPages) return null;
    return Array.from(
      { length: totalPages > 10 ? 10 : totalPages },
      (_, i) => i
    ).map((page) => (
      <Button
        active={Number(pagination) === page + 1}
        variant="outline"
        key={page}
        buttonText={`${page + 1}`}
        onClick={() => onClickPagination(String(page + 1))}
      />
    ));
  }, [totalPages, pagination, onClickPagination]);

  if (!totalPages) return null;

  return (
    <div className="flex gap-2 justify-center items-center flex-wrap">
      {paginationEl}
    </div>
  );
};

export default Pagination;
