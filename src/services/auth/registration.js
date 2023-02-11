import { request } from "../http-client";

export const registrationAuth = (data) => request.post(`/auth/register`, data);
