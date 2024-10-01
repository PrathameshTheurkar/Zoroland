'use client'
import AnimeCard from "@/components/AnimeCard";
import { getPopularAnime } from "@/lib/FetchAnimeApi";
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Anime {
  id: string,
  title: string,
  image: string,
  url: string, 
  genres: string[],
  episodeNumber: number,
  episodeId: string
}

const Popular = () => {
  const [animes, setAnimes] = useState<Anime[]>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularAnime();
      setAnimes(data);
      console.log(data)
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try{
        const {data} = await axios.get("http://localhost:4000/anime/gogoanime/popular", {params: {page: index + 1}});
    if(animes)
    setAnimes([...animes, ...data.results]);
  
    setHasMore(data.results.length > 0);
    }catch(err){
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        else {
            throw new Error("An unknown error occurred");
        }
    }

    setIndex((prevIndex) => prevIndex + 1);

  }

  return <div className="flex flex-col">
    <p className="text-2xl font-bold mb-8">Popular</p>
    <InfiniteScroll
    dataLength={animes?.length || 0}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    className="flex flex-wrap gap-4"
    >
    {animes && animes?.map((anime, index) => {
        return <AnimeCard key={index} title={anime.title} image={anime.image} url={anime.url}/>
    })}
    </InfiniteScroll>
    </div>;
};

export default Popular;
