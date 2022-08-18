import { useFetchGifs } from "../../../../hooks/useFetchGifs"
import { IGif } from "../../props"
import Gif from "../Gif"

interface Icategory {
  name: string,
}

const GifsCategory = (props: Icategory) => {
  const {name} = props
  const {gifs, isLoading} = useFetchGifs(name)

  const returnGifs = () => {
    if(isLoading) return <h2>Cargando ...</h2>

    return (
      <div className="card-grid">
        {
          gifs?.map((gif: IGif) => <Gif key={gif.id} {...gif}/>)
        }
      </div>
    )
  }

  return (
    <article>
      <h3 className="title">{name}</h3>
      {returnGifs()}
    </article>
  )
}

export default GifsCategory