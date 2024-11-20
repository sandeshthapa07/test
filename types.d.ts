// Success response interface for handling successful responses
interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Error response interface for handling errors
interface ErrorResponse {
  success: false;
  message: string;
  statusCode: number;
}
