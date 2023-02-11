import { request } from "./http-client";

export const getFAQ = (params) => request.get(`/question`, params);
