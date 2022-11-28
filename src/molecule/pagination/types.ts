export interface PropsPagination {
  /**
   * Current page of the data
   */
  currentPage?: number;

  /**
   * Number of pages founded for the pagination
   */
  pages?: number;

  /**
   * Limit of buttons to paginate the data
   */
  limitPages?: number;
  /**
   * Function that executes when user clicks on the navagition (arrows or specific number)
   */
  onPaginate?: (page: number) => void;
}

export interface PaginationState {
  uuid: string;
  page: number;
}
