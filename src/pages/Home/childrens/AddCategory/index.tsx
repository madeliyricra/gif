import { useState } from 'react'
import { Search } from '../../../../components'

interface IAddCategory {
  changeNewCategory: (value: string) => void,
}

const AddCategory = (props: IAddCategory) => {
  const { changeNewCategory } = props
  const [search, setSearch] = useState('')

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e?.target?.value
    setSearch(value)
  }

  const handleDownSearch = (e : { keyCode: number }) =>{
    if (e.keyCode == 13) {
      if(search.trim()?.length <= 2) return
      changeNewCategory(search.trim())
      setSearch('')
    }
  }

  return (
    <div>
      <Search 
        id="categroy_search"
        placeholder='Buscar gif...' 
        value={search}
        handleChange={handleSearch}
        handleDown={handleDownSearch}
      />
    </div>
  )
}

export default AddCategory