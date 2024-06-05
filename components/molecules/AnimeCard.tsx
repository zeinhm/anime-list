import { AnimeDataTypes } from "@/types/fetchAnimeParams";
import Link from "next/link";
import { useState } from "react";

interface AnimeCardProps {
  anime: AnimeDataTypes;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="w-full flex justify-center rounded-xl relative"
    >
      <div className="w-full max-w-[220px] overflow-hidden rounded-xl relative border-2 border-primary">
        <div
          className={`h-[260px] w-full rounded-xl bg-cover bg-center transition duration-500 ${
            onHover && "scale-105"
          }`}
          style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}
        />
        <div
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="w-full h-full p-2 text-center bg-darken-vertical absolute bottom-0 flex flex-col justify-between"
        >
          <div className="bg-primary bg-opacity-75 rounded-full py-1 px-2 max-w-max text-xs">
            {anime.score} &#9733;
          </div>
          <div className="text-sm">{anime.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
