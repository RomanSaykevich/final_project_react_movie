import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const serialsServices = {
    getSerial: () => axiosServices.get(`${urls.discoverTv}?${urls.languageUA}`)
        .then(value => value.data),

    getSerialPage: (page) => axiosServices.get(`${urls.discoverTv}?${urls.languageUA}&${urls.page}${page}`)
        .then(value => value.data)
}