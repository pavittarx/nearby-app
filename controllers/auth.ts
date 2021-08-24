import { axios } from "@/setups/axios";

import { Login, Register } from "@/types/controllers/auth";

export const login = async (data: Login) => {
  const response = await axios()({ url: "/login", method: "POST", data }).catch(
    (error) => console.log(error.response)
  );

  return response?.data;
};

export const register = async (data: Register) => {
  const response = await axios()({
    url: "/register",
    method: "POST",
    data,
  }).catch((error) => console.log(error.response));

  console.log(response);

  return response?.data;
};

export const forgetPassword = async () => {};
