import React, { useEffect, useState } from "react"
import { Search } from "../../components"
import { AddCategory, Categories } from "./childrens"

interface ICategory {
  name: string
}

const Home = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])

  useEffect(() => {
    
  }, [])

  const onAddCategory = (e: { target: HTMLInputElement }) =>{
    const value = e?.target?.value
    // setCategories([value, ...categories])
  }

  const returnListCategories = () =>{
    return categories?.map((category, key) => <li key={key}>{category}</li>)
  }
  
  return (
    <>
      <h1>Gif</h1>
      <AddCategory />
      <ol>
        {returnListCategories()}
      </ol>
    </>
  )
}

export default Home