import axios from "axios";
const Base_URL = process.env.REACT_APP_API_ENDPOINT;
export const login = (data) => {
  return axios.post("http://10.10.28.208:8000/login", data);
};