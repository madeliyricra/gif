import { useFetchGifs } from "../../../../hooks/useFetchGifs"
import Gif from "../Gif"

interface Icategory {
  name: string,
}

interface IGif {
  id: string,
  title: string,
  url: string,
}

const GifsCategory = (props: Icategory) => {
  const {name} = props
  const {gifs, isLoading} = useFetchGifs(name)
  console.log(isLoading)

  return (
    <article>
      <h3>{name}</h3>
      <div className="card-grid">
        {
          gifs?.map((gif: IGif) => <Gif key={gif.id} {...gif}/>)
        }
      </div>
    </article>
  )
}

export default GifsCategory