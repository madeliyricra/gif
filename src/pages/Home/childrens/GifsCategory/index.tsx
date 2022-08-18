import { useEffect, useState } from "react"
import { getGifsXName } from "../../../../services/api"
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
  const [gifs, setGifs] = useState([])

  const getGifs = async () =>{
    const newGifs : any = await getGifsXName(name)
    setGifs(newGifs)
  }

  useEffect(() => {
    getGifs()
  }, [])

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