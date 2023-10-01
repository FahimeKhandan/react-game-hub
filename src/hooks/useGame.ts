import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { GenreType } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  genres: GenreType[],
  parent_platforms: [{ platform: Platform }];
}

const useGame = (selectedGenre: GenreType | null) => useData<GamesType>(`/games`, {params: {genres:selectedGenre?.id}}, selectedGenre?.slug)

export default useGame;
