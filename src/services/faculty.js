import { request } from "./http-client";

export const getFaculty = (params) => request.get(`/faculty`, params);

export const getFacultyById = (id) =>
  request.get(`/faculty-speciality/${id}`).then((res) => res.data);
