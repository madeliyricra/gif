import { useState } from "react"
import { lowerCase } from "../../utils"
import { SearchCategory, GifsCategory } from "./childrens"
import { Container, Logo } from "./styled"

const Home = () => {
  const [categories, setCategories] = useState<string[]>([])

  const changeNewCategory = (newCategory: string) => {
    const categoriesLowerCase = categories?.map((category) => lowerCase(category))
    if(categoriesLowerCase.includes(lowerCase(newCategory))) return 

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
    <Container>
      <Logo src='/logo.png' alt="gif" />
      <SearchCategory changeNewCategory={changeNewCategory} />
      <section>
        {returnListCategories()}
      </section>
    </Container>
  )
}

export default Home