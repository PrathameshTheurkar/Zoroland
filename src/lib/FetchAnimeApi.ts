import axios from "axios";


// const  FETCH_ANIME_API = 'http://localhost:4000/anime/gogoanime' 

export const getPopularAnime = async () => {
    try {
        const {data} = await axios.get(`${process.env.FETCH_ANIME_API}/popular`, {params: {page: 1}});
        return data.results
    }catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}

export const getMovies = async () => {
    try{
        const {data} = await axios.get(`${process.env.FETCH_ANIME_API}/movies`, {params: {page: 1}});
        return data.results
    }catch(err){
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        else {
            throw new Error("An unknown error occurred");
        }
    }   
}

export const getGenresList = async () => {
    try{
        const {data} = await axios.get(`${process.env.FETCH_ANIME_API}/genre/list`);
        return data
    }catch(err){
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        else {
            throw new Error("An unknown error occurred");
        }
    }   
}

export const getTopAiring = async () => {
    try{
        const {data} = await axios.get(`${process.env.FETCH_ANIME_API}/top-airing`, {params: {page: 1}});
        return data.results
    }catch(err){
        if (err instanceof Error) {
            throw new Error(err.message);
        }else {
            throw new Error('An unknown error occurred');
        }
    }
}