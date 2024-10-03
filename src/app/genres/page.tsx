"use client";
import { getGenresList } from "@/lib/FetchAnimeApi";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Anime {
  id: string;
  title: string;
}

const Genres = () => {
  const [animes, setAnimes] = useState<Anime[]>();

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
                className="w-72 h-48 border-2 border-white/10 rounded-md flex justify-center items-center duration-200 hover:scale-95"
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
