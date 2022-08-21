import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-diegov.herokuapp.com/",
});

export default instance;
