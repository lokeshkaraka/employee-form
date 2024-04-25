export interface ApiResponse<T> {
    status: boolean;
    errorCode?: number;
    data: T;
  }
  