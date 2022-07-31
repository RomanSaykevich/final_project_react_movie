import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const movieServices = {
    getAll: () => axiosServices.get(`${urls.discoverMovie}?${urls.languageUA}`)
        .then(value => value.data),

    getMoviePopular: () => axiosServices.get(`${urls.movie}top_rated?${urls.languageUA}`)
        .then(value => value.data),

    paginationMovie: (page) => axiosServices.get(`${urls.discoverMovie}?${urls.languageUA}&${urls.page}${page}`)
        .then(value => value.data),

    movieInfo: (id) => axiosServices.get(`${urls.movie}/${id}?${urls.languageUA}`)
        .then(value => value.data),

}