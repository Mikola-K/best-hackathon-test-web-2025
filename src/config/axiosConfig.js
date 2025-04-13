import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  //   baseURL: import.meta.env.NEXT_BASE_URL,
  baseURL: "https://localhost:44370/api/v1",
  timeout: 30000,
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const rawAuthCookie = Cookies.get("auth");
    let accessToken;

    if (rawAuthCookie) {
      try {
        const parsedAuth = JSON.parse(rawAuthCookie);
        accessToken = parsedAuth.accessToken;
      } catch (e) {
        console.error("Failed to parse auth cookie", e);
      }
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
