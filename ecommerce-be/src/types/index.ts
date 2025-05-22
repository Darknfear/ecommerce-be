// filepath: /home/hieunv1/Desktop/study/ecommerce-be/src/types/index.ts
export interface AuthRequest {
  userId: string;
  token: string;
}

export interface AuthResponse {
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ErrorResponse {
  error: string;
  statusCode: number;
}