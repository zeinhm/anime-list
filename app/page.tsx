"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import AnimeList from "@/components/molecules/AnimeList";
import { fetchAnimes } from "@/api/fetchAnimes";
import { AnimesResponseTypes } from "@/types/fetchAnimeParams";

export default function Home() {
  const { data, isLoading, isError }: UseQueryResult<AnimesResponseTypes> =
    useQuery({
      queryKey: ["animes"],
      queryFn: () => fetchAnimes({ limit: 10 }),
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="p-16 pt-0 grid grid-cols-5">
      <div className="col-start-2 col-span-3">
        <div className="py-8 text-2xl font-bold">WebAnimeFlix</div>
        {data ? (
          <AnimeList animes={data.data} />
        ) : (
          <div className="pl-4 text-gray-200">No relevant results found</div>
        )}
      </div>
    </div>
  );
}
