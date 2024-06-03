import { AnimeDataTypes } from "@/types/fetchAnimeParams";
import Link from "next/link";

interface AnimeCardProps {
  anime: AnimeDataTypes;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="w-full flex justify-center overflow-hidden rounded-xl relative"
    >
      <div className="w-full max-w-[220px] rounded-xl relative border-2 border-[#161616]">
        <div
          className="h-[260px] w-full rounded-xl bg-cover bg-center hover:scale-110 transition duration-500"
          style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}
        >
          <div className="w-full h-full max-w-full max-h-full bg-darken-vertical flex justify-center items-end hover:scale-100 transition duration-0"></div>
        </div>
        <div className="text-white text-lg w-full p-4 pt-0 text-center absolute bottom-0">
          {anime.title}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
