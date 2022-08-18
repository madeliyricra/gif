import React, { useEffect, useState } from "react"
import { Search } from "../../components"
import { getGifsXName } from "../../services/api"
import { AddCategory, GifsCategory } from "./childrens"

interface ICategory {
  name: string
}

const Home = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])

  const changeNewCategory = (newCategory: string) => {
    const categoriesLowerCase = categories.map((category) => category?.toLowerCase())
    const newCategoryLowerCase = newCategory.toLowerCase()
    if(categoriesLowerCase.includes(newCategoryLowerCase)) return 

    setCategories([newCategory, ...categories])
  } 

  const returnListCategories = () =>{
    return categories?.map((category) => (
      <GifsCategory 
        key={category}
        name={category}
      />
    ))
  }

  return (
    <>
      <h1>Gif</h1>
      <AddCategory changeNewCategory={changeNewCategory} />
      <section>
        {returnListCategories()}
      </section>
    </>
  )
}

export default Home