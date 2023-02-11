import { request } from "./http-client";

export const privateCabine = (id, data) => request.patch(`/order/${id}`, data);

export const uploadImage = (data) => request.post(`/upload`, data);
