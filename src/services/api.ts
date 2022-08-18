import { API_KEY, API_URL } from "../utils/envs"

interface IGif {
  id: string,
  title: string,
  url: string,
}

export const getGifsXName = async  (category: string) => {
  const URL = `${API_URL}?api_key=${API_KEY}&q=${category}&limit=20`
  let gifs : IGif[] = []

  await fetch(URL)
  .then((response) => response.json())
  .then(({data}) => {
    gifs = data.map((gif : any) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }))
  })
  
  return gifs
}