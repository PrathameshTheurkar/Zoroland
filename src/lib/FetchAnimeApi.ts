import axios from "axios";

export const getPopularAnime = async () => {
    try {
        const {data} = await axios.get("http://localhost:4000/anime/gogoanime/popular", {params: {page: 1}});
        return data.results
    }catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}