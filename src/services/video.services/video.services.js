import {axiosServices} from "../axios.services/axios.services";

export const videoServices = {
    getVideo: (id) => axiosServices.get(`movie/${id}/videos`)
        .then(value => value.data),
}