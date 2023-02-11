import { request } from "../http-client";

export const retryCode = (data) => request.post(`/auth/retry-code`, data);
