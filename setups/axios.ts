import Axios from "axios";

/**
 * @description For making unauthenticated /public requests.
 * @returns configures axios instance
 * */
export const axios = () =>
  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });

/**
 * @description For making authenticated Server requests
 * @returns configured axios instance
 * */
export const authAxios = () => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers,
  });
};