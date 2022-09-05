import axios, { AxiosInstance } from "axios";

console.log(process.env.NODE_ENV);
// Some documentation for furter review: https://axios-http.com/docs/intro
const API: AxiosInstance = axios.create({
    baseURL: "http://localhost:/3000",
    headers: {
        "Content-type": "application/json",
    },
})

export default API;