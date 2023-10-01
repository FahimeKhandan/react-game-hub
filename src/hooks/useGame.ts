import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";

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
  parent_platforms: [{ platform: Platform }];
}

const useGame = () => useData<GamesType>('/games')

export default useGame;
