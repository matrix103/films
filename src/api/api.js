import * as axios from "axios";

const apiKey = '24732ab2';

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
});

const getFilms = (name = 'batman', currentPage = 1) => {
    return instance.get(`?s=${name}&page=${currentPage}&apikey=${apiKey}`)
        .then(response => {
            return response.data;
        });
}

export default getFilms;