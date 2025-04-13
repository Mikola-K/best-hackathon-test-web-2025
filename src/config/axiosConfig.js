import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: import.meta.env.NEXT_BASE_URL,
  baseURL: "https://localhost:44370/api/v1",
  timeout: 30000,
  withCredentials: true,
});

export default axiosInstance;
