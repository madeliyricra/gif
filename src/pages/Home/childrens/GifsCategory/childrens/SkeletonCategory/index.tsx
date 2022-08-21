import { Skeleton } from "../../../../../../components"
import { Container } from "./styled"

const index = () => {
  return (
    <Container>
      {Array.from(Array(10).keys()).map((key) => <Skeleton key={key} height="200px" />) }
    </Container>
  )
}

export default index