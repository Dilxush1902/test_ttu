import { useMutation, useQuery } from "react-query";
import { request } from "./http-client";

const createOrder = (id, data) => request.patch(`/order/${id}`, data);

export const useOrder = ({ userId, orderMutationOptions } = {}) => {
  const orderMutation = useMutation((data) => createOrder(userId, data),orderMutationOptions);
  return {
    orderMutation,
  };
};
