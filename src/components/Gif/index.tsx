import { Container, Description, Image } from "./styled"

interface IGif {
  id: string,
  title: string,
  url: string,
}

const index = (props: IGif) => {
  const { title, url } = props

  return (
    <Container>
      <Image src={url} alt={title} />
      <Description>{title}</Description>
    </Container>
  )
}

export default index