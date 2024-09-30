import Link from "next/link"

interface Anime {
    id: string,
    title: string,
    image: string
    url: string
}

const AnimeCard = ({id, title, image, url}: Anime) => {
    return <div className="w-48 border-2 border-white/10 rounded-md">
        <div>
            <Link href={url}>            
            <img src={image} alt={title} width={200} height={200} className="rounded-md"/>
            </Link>
        </div>
        <div>
            <span>{id}</span>
            <div>{title}</div>
        </div>
    </div>
}

export default AnimeCard