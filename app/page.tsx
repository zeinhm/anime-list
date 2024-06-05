"use client";

import { useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { fetchAnimes } from "@/api/fetchAnimes";
import { AnimesResponseTypes } from "@/types/fetchAnimeParams";

import useDebounce from "@/hooks/useDebounce";

import Input from "@/components/atoms/Input";
import AnimeList from "@/components/molecules/AnimeList";
import Pagination from "@/components/molecules/Pagination";
import StaticJumbotron from "@/components/molecules/StaticJumbotron";
import AnimeCardSkeleton from "@/components/skeletons/AnimeCardSkeleton";
import { SearchIcon } from "@/components/icons";

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

  return (
    <div className="p-4 pt-0 md:p-16 md:pt-0 grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-start-2 col-span-3">
        <div className="py-8 text-2xl font-bold">WebAnimeFlix</div>
        <StaticJumbotron />
        <Input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search for an anime..."
          icon={<SearchIcon className="text-gray-400" />}
          className="my-8"
        />
        <div className="min-h-[420px]">
          {isLoading ? (
            <AnimeCardSkeleton />
          ) : (
            <>
              {isError ? (
                <div className="text-sm">
                  The server encountered error and could not complete your
                  request. Please try again later
                </div>
              ) : (
                <>
                  {data && data?.data.length > 0 ? (
                    <>
                      <AnimeList animes={data.data} />
                      <Pagination
                        pageCount={Math.ceil(
                          data.pagination.items.total /
                            data.pagination.items.per_page
                        )}
                        onPageChange={(e) => handlePageClick(e)}
                        page={page - 1}
                      />
                    </>
                  ) : (
                    <div className="pl-4 text-sm">
                      No relevant results found
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
