import { useState } from "react"
import { AddCategory, GifsCategory } from "./childrens"
import logo from '/public/logo.png'
interface ICategory {
  name: string
}

const Home = () => {
  const [categories, setCategories] = useState<string[]>(['doraemon'])

  const changeNewCategory = (newCategory: string) => {
    const categoriesLowerCase = categories?.map((category) => category?.toLowerCase())
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
      <img className="logo" src={logo} />
      <AddCategory changeNewCategory={changeNewCategory} />
      <section>
        {returnListCategories()}
      </section>
    </>
  )
}

export default Home