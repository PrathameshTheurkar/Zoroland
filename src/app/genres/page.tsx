"use client";
import AnimeCard from "@/components/AnimeCard";
import { getGenresList } from "@/lib/FetchAnimeApi";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Anime {
  id: string;
  title: string;
}

const Genres = () => {
  const [animes, setAnimes] = useState<Anime[]>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenresList();
      setAnimes(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <Link href='/' className="flex flex-col">
      <p className="text-2xl font-bold mb-8 ml-8">Genres</p>
      <div className="flex justify-center flex-wrap gap-4">
        {animes &&
          animes?.map((anime, index) => {
            return (
              <div
                className="w-72 h-48 border-2 border-white/10 rounded-md flex justify-center items-center"
                key={index}
              >
                <div>
                  <p className="truncate text-xl font-bold">{anime.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </Link>
  );
};

export default Genres;
