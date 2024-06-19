import axios from "axios";

const axiosInstance = axios.create({
  baseURL : "http://localhost:8000/"
}); 

axiosInstance.interceptors.request.use(

);

axiosInstance.interceptors.response.use(

);


export { axiosInstance };