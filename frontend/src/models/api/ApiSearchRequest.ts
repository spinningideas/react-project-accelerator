export interface ApiSearchRequest {
  searchTerm: string;
  pageNumber: number;
  pageSize: number;
  sortBy?: string;
  sortByDirection?: string;
}

export default ApiSearchRequest;
