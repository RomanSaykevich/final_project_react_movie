import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const commentsServices = {
    commentsById: (id) => axiosServices.get(`${urls.movie}${id}/reviews`)
        .then(value => value.data),
}