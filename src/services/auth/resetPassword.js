import { authRequest } from "../http-client";

export const resetPassword = (data) =>
  authRequest.put(`/auth/user/reset-password`, data);
