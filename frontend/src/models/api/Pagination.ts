export default interface Pagination {
  totalResults: number;
  totalPages: number;
  pageSize: number;
  pageNumber: number;
  resultsExist: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
