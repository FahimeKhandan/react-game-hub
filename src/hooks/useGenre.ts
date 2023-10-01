
import useData from "./useData";

interface GenreType{
    id:number,
    name:string,
    slug: string,
    image_background:string
}

const useGenre = () => useData<GenreType>('/genres')

export default useGenre
