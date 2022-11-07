import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Card from '../Components/Home/FeaturedProduct/Card';

import { ProductsContext } from '../contexts/contexts'


const Products = () => {

  const products = useContext(ProductsContext);
  
  return (
    <div className='container py-5'>
      <h2 className='text-center my-5'>Products</h2>
      <Grid container spacing={5}>
        {
          products.allProducts.map( product => <Card key={product.articleNumber} item={product} />)
        }
      </Grid>

    </div>
  )
}

export default Products