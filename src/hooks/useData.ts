import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchedResponse<T>{
    count: number,
    results: T[]
}
const useData = <T>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?:string|null) => {
    const [data, useData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setisLoading(true);
  
      apiClient
        .get<FetchedResponse<T>>(endpoint, { signal: controller.signal , ...requestConfig})
        .then(({ data }) => {
          useData(data.results);
          setisLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setisLoading(false);
        });
  
      return () => controller.abort();
    }, [deps] ?? []);
  
    return { data, error, isLoading };
}

export default useData
