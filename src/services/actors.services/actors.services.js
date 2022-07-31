import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const actorsServices = {
    getActor: (id) => axiosServices.get(`${urls.movie}${id}/credits?${urls.languageUA}`)
        .then(value => value.data),
}