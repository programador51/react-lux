import React, { useEffect, useState } from "react";
import { PaginationState, PropsPagination } from "./types";
import { v4 as uuid } from "uuid";
import scss from "./styles.module.scss";
import { Button } from "../../atoms/button";

export const Pagination = ({
  onPaginate = () => {},
  currentPage = 1,
  limitPages = 5,
  pages = 1,
}: PropsPagination) => {
  const [pagination, setPagination] = useState<PaginationState[]>([]);

  useEffect(() => {
    let currentPagination = [];

    for (let i = 0; i < limitPages; i++) {
      currentPagination.push({
        page: currentPage + i,
        uuid: uuid(),
      });
    }

    setPagination(currentPagination);
  }, [currentPage, limitPages, pages]);

  return (
    <div className={scss.luxPagination}>
      <Button
        onClick={(e) => onPaginate(currentPage - 1)}
        theme="light"
        disabled={currentPage === 1}
      >
        «
      </Button>
      {pagination.map((pageInfo, i) => (
        <Button
          onClick={(e) => onPaginate(pageInfo.page)}
          disabled={pageInfo.page > pages}
          theme={i === 0 ? "primary" : "light"}
          key={pageInfo.uuid}
        >
          {pageInfo.page}
        </Button>
      ))}
      <Button
        onClick={(e) => onPaginate(currentPage + 1)}
        theme="light"
        disabled={currentPage + 1 > pages}
      >
        »
      </Button>
    </div>
  );
};
