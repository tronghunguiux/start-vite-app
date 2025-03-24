// src/types/auth.ts

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user?: User;
    error?: string;
}
