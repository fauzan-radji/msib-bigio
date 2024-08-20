import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "./PaginationButton";
import { twMerge } from "tailwind-merge";
import { useMemo } from "react";

interface PaginationProps {
  total: number;
  current: number;
  perPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  total,
  current,
  perPage,
  onPageChange,
  className,
}: PaginationProps) {
  const totalPages = useMemo(
    () => Math.ceil(total / perPage),
    [total, perPage],
  );
  const pagesToShow = 2;
  const pagesBeforeCurrentPage = useMemo(
    () => Array.from({ length: Math.min(pagesToShow, current - 1) }),
    [current],
  );
  const pagesAfterCurrentPage = useMemo(
    () =>
      Array.from({
        length: Math.max(0, Math.min(pagesToShow, totalPages - current)),
      }),
    [current, totalPages],
  );

  return (
    <div className={twMerge("flex gap-1", className)}>
      {current > 1 && (
        <Button
          disabled={current === 1}
          onClick={() => onPageChange(current - 1)}
          aria-label="Sebelumnya"
        >
          <FaArrowLeft className="text-xs" />
        </Button>
      )}

      {/* Pages before current page */}
      {pagesBeforeCurrentPage.map((_, index) => (
        <Button key={index} onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </Button>
      ))}

      {current > pagesToShow + 1 && <span className="self-end px-1">...</span>}

      {/* Current page */}
      <Button disabled className="!bg-secondary">
        {current}
      </Button>

      {current < totalPages - pagesToShow && (
        <span className="self-end px-1">...</span>
      )}

      {/* Pages after current page */}
      {pagesAfterCurrentPage
        .map((_, index) => (
          <Button key={index} onClick={() => onPageChange(totalPages - index)}>
            {totalPages - index}
          </Button>
        ))
        .reverse()}

      {current < totalPages && (
        <Button
          disabled={current === totalPages}
          onClick={() => onPageChange(current + 1)}
          aria-label="Selanjutnya"
        >
          <FaArrowRight className="text-xs" />
        </Button>
      )}
    </div>
  );
}
