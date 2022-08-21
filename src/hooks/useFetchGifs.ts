import { useEffect, useState } from "react"
import { getGifsXName } from "../services/api"

interface IGif {
  id: string,
  title: string,
  url: string,
}

export const useFetchGifs = (nameCategory: string) => {
  const [gifs, setGifs] = useState<IGif[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getGifs = async () =>{
    const newGifs : IGif[] = await getGifsXName(nameCategory)
    try{
      setGifs(newGifs)
    }catch{}
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}