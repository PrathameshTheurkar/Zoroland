import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

interface Anime {
    id: string,
    title: string,
    image: string,
    url: string, 
    genres: string[],
    episodeNumber: number,
    episodeId: string
}
  
const Cards = ({getAnimes}: {
    getAnimes: () => Promise<Anime[]>
}) => {
    const [animes, setAnimes] = useState<Anime[] | null>()

    useEffect(() => {
        const fetchAnimes = async () => {
            const result = await getAnimes() 
            setAnimes(result)
        }

        fetchAnimes()
    }, [animes])

    return <div className="flex overflow-x-scroll hiddenscroll gap-4">
        {animes && animes.map((anime, index) => {
            return <AnimeCard key={index} title={anime.title} image={anime.image} url={anime.url}/>
        })}
    </div>
}

export default Cards;