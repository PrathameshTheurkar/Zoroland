import Link from "next/link";

interface Anime {
  title: string;
  image: string;
  url: string;
}

const AnimeCard = ({title, image, url }: Anime) => {
  return (
    <div className="w-48 h-80 border-2 border-white/10 rounded-md flex flex-col ">
      <div>
        <Link href={url}>
          <img
            src={image}
            alt={title}
            className="rounded-md w-48 h-64 object-cover" 
          />
        </Link>
      </div>
      <div className="mt-2">
        <p className="truncate text-xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
