import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Search } from '../../../../components'
import { Container } from './styled'

interface IAddCategory {
  changeNewCategory: (value: string) => void,
}

const AddCategory = (props: IAddCategory) => {
  const { changeNewCategory } = props
  const [search, setSearch] = useState('')
  const debounced = useDebouncedCallback(
    (search) => {
      changeNewCategory(search.trim())
      setSearch('')
    }, 1500)

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e?.target?.value
    setSearch(value)
    if(value?.length > 2) debounced(value)
  }

  return (
    <Container>
      <Search 
        id="category_search"
        placeholder='Buscar gif...' 
        value={search}
        handleChange={handleSearch}
      />
    </Container>
  )
}

export default AddCategory