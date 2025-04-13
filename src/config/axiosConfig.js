import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: import.meta.env.NEXT_BASE_URL,
  baseURL: "url",
  timeout: 30000,
  withCredentials: true,
});

export default axiosInstance;
