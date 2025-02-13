"use client";

import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import { getMovies, getPopularAnime } from "@/lib/FetchAnimeApi";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <div className="mt-6">
        <p className="text-3xl font-bold mb-8">Popular</p>
        <Cards getAnimes={getPopularAnime} />
      </div>

      <div className="mt-6">
        <p className="text-3xl font-bold mb-8">Movies</p>
        <Cards getAnimes={getMovies} />
      </div>
    </div>
  );
}
