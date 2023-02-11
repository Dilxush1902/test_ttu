import { request } from "./http-client";

export const getUserById = (id) => request.get(`/order/${id}`);

export const getEnrolledStudent = (id) =>
  request.get(`/enrolled-students/${id}`);
