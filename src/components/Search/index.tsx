import React, { useState } from 'react'

interface ISearch {
  id: string,
  placeholder: string,
  value: string,
  handleChange?: (e: { target: HTMLInputElement }) => void,
}

const Search = (props: ISearch) => {
  const {id, placeholder, value, handleChange} = props

  return (
    <div>
      <input 
        id={id}
        type='search' 
        placeholder={placeholder} 
        autoComplete='off' 
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search