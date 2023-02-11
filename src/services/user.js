import { useQuery } from "react-query";
import { request } from "./http-client";

const getUserById = (id) => request.get(`/order/${id}`);

export const useUser = ({ userId, userOptions } = {}) => {
  const user = useQuery([`GET_USER_${userId}`, userId], () => getUserById(userId), {
    ...userOptions,
    enabled: !!userId,
  });
  return {
    user,
  };
};
