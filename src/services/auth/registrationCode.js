import { request } from "../http-client";

export const registrationAuthVerify = (data) =>
  request.post(`/auth/verify`, data);
