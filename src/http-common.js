import axios from "axios";

export default axios.create({
    baseURL: `${API_BASE_URL}:${API_PORT}/`,
    headers: {
        "Content-type": "application/json"
    }
});
