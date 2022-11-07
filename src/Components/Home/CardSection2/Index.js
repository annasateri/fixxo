import React from 'react'
import { Grid, Box, styled } from '@mui/material';
import CardLarge from '../Cards/CardLarge';
import CardSmall from '../Cards/CardSmall';

const CardSection2 = ({items = []}) => {
  return (
    <div className='container-fluid py-5'>
      <Grid container spacing={4}>
        <Grid item lg={2}></Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={4}>
          {
            items.map( product => <CardSmall key={product.articleNumber} item={product}/>)
          }
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardLarge title="2 FOR USD $49" img="https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default CardSection2