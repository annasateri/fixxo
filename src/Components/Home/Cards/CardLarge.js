import React from 'react'
import { Box, styled } from '@mui/material';
import WhiteBtn from '../Buttons/WhiteBtn';


const LargeBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#BBBBBB',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '0',
  height: '100%',
  'img': {
    height: '100%',
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
  
}));

const CardLarge = (props) => {
  return (
    <LargeBox>
      <ImageWrapper>
        <img src={props.img} alt="" />
      </ImageWrapper>
      <ContentWrapper className='h-100 d-flex align-items-center justify-content-center flex-column'>
        <h2 className='text-white fw-bold mb-3'>{props.title}</h2>
        <WhiteBtn title="SHOP NOW" />
      </ContentWrapper>
    </LargeBox>
  )
}

export default CardLarge