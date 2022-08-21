import { Container, Input } from './styled'

interface ISearch {
  id: string,
  placeholder: string,
  value: string,
  handleChange?: (e: { target: HTMLInputElement }) => void,
}

const index = (props: ISearch) => {
  const {id, placeholder, value, handleChange} = props

  return (
    <Container>
      <Input 
        id={id}
        type='search' 
        placeholder={placeholder} 
        autoComplete='off' 
        value={value}
        onChange={handleChange}
      />
    </Container>
  )
}

export default index