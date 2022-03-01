import axios, { AxiosInstance } from "axios";

import API_BASE_URL from "../constants";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

const axiosClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers,
});

export default axiosClient;
