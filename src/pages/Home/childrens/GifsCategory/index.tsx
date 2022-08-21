import { useFetchGifs } from "../../../../hooks/useFetchGifs"
import { Icategory, IGif } from "../../props"
import { SkeletonCategory } from "./childrens"
import { Gif } from "../../../../components"
import { ContainerGifs, Title } from "./styled"

const GifsCategory = (props: Icategory) => {
  const {name} = props
  const {gifs, isLoading} = useFetchGifs(name)

  return (
    <article>
      <Title>{name}</Title>
      {isLoading ? (
        <SkeletonCategory />
      ): (
        <ContainerGifs>
          { gifs?.map((gif: IGif) => <Gif key={gif.id} {...gif}/>) }
        </ContainerGifs>
      )}
    </article>
  )
}

export default GifsCategory