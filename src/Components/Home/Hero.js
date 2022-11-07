import React from 'react'
import Img1 from '../../Assets/Images/Home/Hero/hero1.png'
import Img2 from '../../Assets/Images/Home/Hero/hero2.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PrimaryBtn from './Buttons/PrimaryBtn';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  // backgroundColor: '#FF7373',
  borderRadius: 0,
  padding: '0.6rem',
  '&:hover': {
    backgroundColor: '#BF5656'
  },
}));

const Hero = () => {
  return (
    <div className='hero-bg mb-5'>
      <Grid container>
        <Grid item lg={4} className="hero-img-wrapper">
          <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="" />
        </Grid>
        <Grid item lg={4} className="hero-content">
          <h1>Sale Up <br />To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <PrimaryBtn title="SHOP NOW" />
        </Grid>
        <Grid item lg={4} className="d-none d-lg-block">
          <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="" />
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Hero