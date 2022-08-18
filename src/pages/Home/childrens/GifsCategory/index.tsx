import { useEffect, useState } from "react"
import { getGifsXName } from "../../../../services/api"

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
      <ol>
        {
          gifs?.map((gif: IGif) => <li><img src={gif.url}/></li>)
        }
      </ol>
    </article>
  )
}

export default GifsCategory