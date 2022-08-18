import { useEffect, useState } from "react"
import { getGifsXName } from "../services/api"

export const useFetchGifs = (nameCategory: string) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGifs = async () =>{
    const newGifs : any = await getGifsXName(nameCategory)
    setGifs(newGifs)
    setIsLoading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}