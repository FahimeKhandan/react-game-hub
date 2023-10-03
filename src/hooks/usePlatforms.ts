import useData from "./useData"

export interface PlatformsType{
    id:number,
    name:string,
    slug:string
}

const usePlatforms = () => useData<PlatformsType>('/platforms/lists/parents')

export default usePlatforms
