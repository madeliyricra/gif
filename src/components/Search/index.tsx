import React, { useState } from 'react'

interface ISearch {
  id: string,
  placeholder: string,
  value: string,
  handleChange?: (e: { target: HTMLInputElement }) => void,
  handleDown?: (e: { keyCode: number }) => void
}

const Search = (props: ISearch) => {
  const {id, placeholder, value, handleChange, handleDown} = props

  return (
    <div>
      <input 
        id={id}
        type='search' 
        placeholder={placeholder} 
        autoComplete='off' 
        value={value}
        onChange={handleChange}
        onKeyDown={handleDown}
      />
    </div>
  )
}

export default Search