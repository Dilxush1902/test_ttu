import { request } from "../http-client";

export const loginAuth = (data) => request.post(`/auth/login`, data);
