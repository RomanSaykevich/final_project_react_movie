import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../constans";


export const genreServices = {
    genreList: () => axiosServices.get(`/genre${urls.movie}list?${urls.languageUA}`)
        .then(value => value.data),

    getGenre: (id) => axiosServices.get(`${urls.discoverMovie}?${urls.languageUA}&${urls.withGenres}${id}`)
        .then(value => value.data),

    paginationGenre: (genreId, page) => axiosServices.get(`${urls.discoverMovie}?${urls.languageUA}&${urls.withGenres}${genreId}&${urls.page}${page}`)
        .then(value => value.data),
}