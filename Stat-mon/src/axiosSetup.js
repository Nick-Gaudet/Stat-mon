/* eslint-disable */
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8081/stat-mon-db",
    headers: {
        "Content-type": "application/json"
    }
});