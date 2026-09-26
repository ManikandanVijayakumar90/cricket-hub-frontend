import axios from "axios";
const api = axios.create({
  baseURL: "https://cricket-hub-backend.onrender.com/",
});

export default api;
