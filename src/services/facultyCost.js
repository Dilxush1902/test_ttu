import { request } from "./http-client";

export const getFacultySpeciality = () => request.get(`/faculty-speciality`);
