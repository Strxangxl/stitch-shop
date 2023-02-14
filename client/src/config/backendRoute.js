import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "https://stitch-shop-server.onrender.com/",
});

export default axiosUrl;
