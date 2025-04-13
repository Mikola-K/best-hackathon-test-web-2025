import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: import.meta.env.NEXT_BASE_URL,
  baseURL: "https://testtmpss.azurewebsites.net/api/v1",
  timeout: 30000,
  //withCredentials: true,
});

export default axiosInstance;
