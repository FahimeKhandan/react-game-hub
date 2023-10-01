import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface GenreType{
    id:number,
    name:string,
    slug: string
}

interface FetchedGenresResponse {
    count: number;
    results: GenreType[];
  } 

const useGenre = () => {
    const [genre, setGenre] = useState<GenreType[]>([]);
    const [error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setisLoading(true);
  
      apiClient
        .get<FetchedGenresResponse>("/genres", { signal: controller.signal })
        .then(({ data }) => {
          setGenre(data.results);
          setisLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setisLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { genre, error, isLoading };
}

export default useGenre
