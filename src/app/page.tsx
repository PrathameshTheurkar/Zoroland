'use client'
import { getPopularAnime } from "@/lib/FetchAnimeApi";
import { useEffect, useState } from "react";

interface Anime {
  id: string,
  title: string,
  image: string,
  url: string, 
  genres: string[],
  episodeNumber: number,
  episodeId: string
}

export default function Home() {
  const [animes, setAnimes] = useState<Anime[] | null>();


useEffect(() => {
  const fetchData = async () => {
    const data = await getPopularAnime()
    console.log(data)
    setAnimes(data)
  }
  fetchData()
}, [])
  
  return (
    <div className="flex flex-col">
    Welcome to Zoroland 
      {animes?.map((anime, index) => {
        return <div key={index}>
          <div>{anime.title}</div>
          <img src={anime.image} alt={anime.title} width={200} height={200} />
        </div>
})}
    </div>
  );
}
