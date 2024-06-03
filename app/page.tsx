"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import AnimeList from "@/components/molecules/AnimeList";
import { fetchAnimes } from "@/api/fetchAnimes";
import { AnimesResponseTypes } from "@/types/fetchAnimeParams";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Input from "@/components/atoms/Input";
import { SearchIcon } from "@/components/icons";
import StaticJumbotron from "@/components/molecules/StaticJumbotron";
import Pagination from "@/components/molecules/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError }: UseQueryResult<AnimesResponseTypes> =
    useQuery({
      queryKey: ["animes", page, debouncedSearch],
      queryFn: () => fetchAnimes({ q: debouncedSearch, page, limit: 10 }),
    });

  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected + 1);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="p-16 pt-0 grid grid-cols-5">
      <div className="col-start-2 col-span-3">
        <div className="py-8 text-2xl font-bold">WebAnimeFlix</div>
        <StaticJumbotron />
        <form className="my-8" onSubmit={handleSearch}>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for an anime..."
            icon={<SearchIcon className="text-gray-400" />}
          />
        </form>
        {data ? (
          <>
            <AnimeList animes={data.data} />
            <Pagination
              pageCount={Math.ceil(
                data.pagination.items.total / data.pagination.items.per_page
              )}
              onPageChange={(e) => handlePageClick(e)}
              page={page - 1}
            />
          </>
        ) : (
          <div className="pl-4 text-gray-200">No relevant results found</div>
        )}
      </div>
    </div>
  );
}
