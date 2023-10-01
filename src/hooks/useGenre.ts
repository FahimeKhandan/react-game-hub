import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";

interface GenreType{
    id:number,
    name:string,
    slug: string
}

const useGenre = () => useData<GenreType>('/genres')

export default useGenre
