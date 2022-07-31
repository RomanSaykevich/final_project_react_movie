import axios from "axios";

import {apiToken} from "../../constans";
import baseURL from "../../constans/urls.configs";



const axiosServices = axios.create({
    baseURL,
    headers: {
        Authorization: apiToken
    }
});

export {axiosServices};