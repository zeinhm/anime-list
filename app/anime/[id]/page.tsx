"use client";

import { fetchAnimeDetail } from "@/api/fetchAnimes";
import { StarIcon } from "@/components/icons";
import {
  AnimeDataTypes,
  AnimeDetailResponseTypes,
} from "@/types/fetchAnimeParams";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AnimeDetail = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, isError }: UseQueryResult<AnimeDetailResponseTypes> =
    useQuery({
      queryKey: ["anime", id],
      queryFn: () => fetchAnimeDetail(Number(id)),
      enabled: !!id,
    });

  const anime: AnimeDataTypes = data?.data;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  if (!anime) {
    <div>Data not found</div>;
  }
  return (
    <div className="w-full bg-cover">
      <div className="relative before:block before:pt-[39%] lg:ml-16">
        <Link
          className="absolute z-50 top-[24px] lg:top-[48px] left-[64px] lg:left-0 text-xl font-semibold bg-secondary rounded py-2 px-4"
          href="/"
        >
          WebAnimeFlix
        </Link>
        <div
          className="w-[100%] lg:w-[65%] h-full absolute top-0 right-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${
              anime.trailer.images.maximum_image_url ||
              anime.images.jpg.large_image_url
            })`,
          }}
        >
          <div className="hidden lg:block left-background absolute"></div>
          <div className="bottom-background absolute"></div>
        </div>
      </div>
      <div className="relative ml-4 sm:ml-16 p-4 pl-0 sm:p-8 sm:pl-0">
        <div className="lg:-mt-[20%]">
          <div className="flex flex-col max-w-[350px] gap-4">
            <div className="text-nowrap text-2xl font-bold flex items-center">
              {anime.title}
            </div>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-secondary max-w-max text-sm rounded">
                #{anime.rank}
              </div>
              <div className="px-2 py-1 bg-secondary max-w-max text-sm rounded flex items-center">
                {anime.score} <StarIcon className="ml-2 " size={12} />
              </div>
            </div>
            <div className="flex text-sm">
              {anime.genres.map((genre, i) => (
                <div className="flex" key={i}>
                  <div>{genre.name}</div>
                  {i < anime.genres.length - 1 && <div className="mx-2">|</div>}
                </div>
              ))}
            </div>
            <div className="text-sm line-clamp-[6]">
              <span className=" text-[#757575]">Description:</span>{" "}
              {anime.background}
            </div>
          </div>
        </div>
        <Tabs className="mt-8">
          <TabList className="flex border-b border-primary max-w-max mb-4">
            <Tab
              selectedClassName="border-secondary focus:outline-none"
              className="border-b border-primary py-2 px-4 cursor-pointer"
            >
              Synopsis
            </Tab>
            <Tab
              selectedClassName="border-secondary focus:outline-none"
              className="border-b border-primary py-2 px-4 cursor-pointer"
            >
              Producers
            </Tab>
          </TabList>

          <TabPanel>
            <div>{anime.synopsis}</div>
          </TabPanel>
          <TabPanel>
            <div className="flex text-sm">
              {anime.producers.map((producer, i) => (
                <div className="flex" key={i}>
                  <a href={producer.url} className=" text-blue-400">
                    {producer.name}
                  </a>
                  {i < anime.producers.length - 1 && (
                    <div className="mx-2">|</div>
                  )}
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AnimeDetail;
