import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Search } from '../../../../components'

interface IAddCategory {
  changeNewCategory: (value: string) => void,
}

const AddCategory = (props: IAddCategory) => {
  const { changeNewCategory } = props
  const [search, setSearch] = useState('')
  const [searchText] = useDebounce(search, 1000)

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e?.target?.value
    setSearch(value)
  }

  useEffect(() => {
    changeNewCategory(search.trim())
    setSearch('')
  }, [searchText])

  return (
    <div>
      <Search 
        id="categroy_search"
        placeholder='Buscar gif...' 
        value={search}
        handleChange={handleSearch}
      />
    </div>
  )
}

export default AddCategory