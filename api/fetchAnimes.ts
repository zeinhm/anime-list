import { serializeParams } from "@/helper/Global";
import {
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
