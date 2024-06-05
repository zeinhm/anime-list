import { serializeParams } from "@/helper/Global";
import {
  AnimeDetailResponseTypes,
  AnimesParamsTypes,
  AnimesResponseTypes,
} from "@/types/fetchAnimeParams";
import axios from "axios";

export const fetchAnimes = async (params: AnimesParamsTypes) => {
  const response = await axios.get<AnimesResponseTypes>(
    `${process.env.NEXT_PUBLIC_API_URL}/anime?${serializeParams(params)}`
  );
  return response.data;
};

export const fetchAnimeDetail = async (id: number) => {
  const response = await axios.get<AnimeDetailResponseTypes>(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`
  );
  return response.data;
};
