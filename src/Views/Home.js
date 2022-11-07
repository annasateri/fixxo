import React, { useContext } from 'react'
import Hero from '../Components/Home/Hero'
import FeaturedProducts from '../Components/Home/FeaturedProduct/Index'
import Showcase2 from '../Components/Home/Showcase2/Index'
import CardSection1 from '../Components/Home/CardSection1/Index'
import CardSection2 from '../Components/Home/CardSection2/Index'
import Support from '../Components/Home/Support/Index'
import { ProductsContext } from '../contexts/contexts'

const Home = () => {

  const products = useContext(ProductsContext);

  return (
    <div className=''>
      <Hero />
      <FeaturedProducts items={products.featuredProducts} />
      <Showcase2 />
      <CardSection1 items={products.cardSectionProducts} /> 
      <CardSection2 items={products.cardSectionProducts} /> 
      <Support />
    </div>
  )
}

export default Home

