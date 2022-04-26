/* eslint-disable */
import axios from "axios";
export default axios.create({
    baseURL: "http://10.0.0.173:8081/stat-mon-db",
    headers: {
        "Content-type": "application/json"
    }
});