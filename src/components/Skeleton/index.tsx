import { Container } from './styled'

export interface ISkeleton {
  width?: string;
  height: string;
}

const index = (props: ISkeleton) => {
  const { width, height } = props

  return (
    <Container width={width} height={height} />
  )
}

export default index