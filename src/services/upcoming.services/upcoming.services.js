import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const upcomingServices = {
    getUpcoming: () => axiosServices.get(`${urls.movie}upcoming?${urls.languageUA}`)
        .then(value => value.data),
}