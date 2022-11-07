import React from 'react'
import Grid from '@mui/material/Grid';
import Card from './Card';


const CardHolder = ({items = []}) => {

  return (
    <div className='container py-5'>
      <h2 className='text-center mb-5'>Featured products</h2>
      <Grid container spacing={5}>
        {
          items.map( product => <Card key={product.articleNumber} item={product} />)
        }
      </Grid>

    </div>

  )
}

export default CardHolder