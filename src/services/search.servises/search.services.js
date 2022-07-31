import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const searchServices = {
    search: (keyword) => axiosServices.get(`/search/movie?${urls.languageUA}&query=${keyword}`)
        .then(value => value.data)
}