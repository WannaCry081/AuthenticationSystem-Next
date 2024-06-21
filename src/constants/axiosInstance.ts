import axios from "axios";

const axiosInstance = axios.create({
  baseURL : process.env.NEXT_PUBLIC_API_URL,
  headers : {
    "Content-Type" : "application/json"
  },
}); 

axiosInstance.interceptors.request.use(
  (request) => {

    // add access token to the header 
    return request;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.config && error.response){
      if (error.response.status === 401) {
        // refresh token 

      } else {
        // restart the request
      }

      if (error.response.status === 403) {
        // Handle error
      }
    }
  }
);


export { axiosInstance };