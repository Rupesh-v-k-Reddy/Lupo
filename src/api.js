import axios from "axios";

const API = axios.create({
    baseURL : process.env.REACT_APP_PRODUCT_URL
})

export default API