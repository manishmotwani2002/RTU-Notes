import axios from "axios";
import { API } from "../backend";

const instance = axios.create({
  baseURL: API,
  headers: {
    "Content-type": "application/json",
    "ACCESS-CONTROL-ALLOW-ORIGIN": "GET, POST, PUT, DELETE, OPTIONS",
    mode: "no-cors",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    console.log(typeof token, token);
    // const lavesh = token.key();
    // console.log(lavesh);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Confiq", config);
    return config;
  },
  (err) => {
    console.log("error", err);
    return Promise.reject(err);
  }
);

export default instance;
