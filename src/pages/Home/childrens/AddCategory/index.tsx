import { useState } from 'react'
import { Search } from '../../../../components'

const AddCategory = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const value = e?.target?.value
    setSearch(value)
  }

  const handleDownSearch = (e : { keyCode: number }) =>{
    if (e.keyCode == 13) {
      console.log(search)
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