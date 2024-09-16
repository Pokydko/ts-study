const apiKey = import.meta.env.VITE_API_UNSPLASH_KEY;
import axios from "axios";
import { IApiResponse } from "./App.types";

const unsplashApi = async ({
  searchRequest,
  searchPage,
  perPage,
}: {
  searchRequest: string;
  searchPage: number;
  perPage: number;
}): Promise<IApiResponse> => {
  const { data } = await axios.get<IApiResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
      params: {
        query: searchRequest,
        page: searchPage,
        per_page: perPage,
      },
    }
  );
  return data;
};
export default unsplashApi;
