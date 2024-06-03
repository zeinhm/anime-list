import { AnimeDataTypes } from "@/types/fetchAnimeParams";
import AnimeCard from "./AnimeCard";

interface AnimeListProps {
  animes: AnimeDataTypes[];
}

const AnimeList: React.FC<AnimeListProps> = ({ animes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-8">
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
