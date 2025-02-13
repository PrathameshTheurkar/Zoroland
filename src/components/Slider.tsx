import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import './SliderStyles.css'
import { getTopAiring } from "@/lib/FetchAnimeApi";

interface Anime {
  title: string;
  image: string;
  url: string;
}

interface SwiperInstance {
  slideNext: () => void;
  slidePrev: () => void;
}

const Slider = () => {
  const [animes, setAnimes] = useState<Anime[] | null>();
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>();

  const goNext = () => {
    swiperInstance?.slideNext();
  };

  const goPrev = () => {
    swiperInstance?.slidePrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopAiring();
      setAnimes(data);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "keyframes",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="w-auto absolute z-10 flex gap-4 p-3 justify-center">
        <button
          className="bg-black/80 rounded-full p-1 lg:p-3 backdrop-blur-2xl"
          onClick={goPrev}
        >
          <ArrowLeft size={30} />
        </button>
        <button
          className="bg-black/80 rounded-full p-1 lg:p-3 backdrop-blur-2xl"
          onClick={goNext}
        >
          <ArrowRight size={30} />
        </button>
      </div>
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="mySwiper"
      >
        {animes &&
          animes.map((anime, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${anime.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
              </div>
              <div className="absolute bottom-2 w-3/4 z-10 h-80 flex flex-col justify-end p-8 text-white max-w-2xl">
              <p className="text-5xl font-bold mb-6 text-left truncate">{anime.title}</p>
                <div className="flex space-x-4">
                  <button className="bg-white font-bold text-xl text-black px-6 py-3 rounded-lg hover:scale-105 transition ease-in-out duration-150">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </motion.section>
  );
};

export default Slider;
