import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: 0,
  padding: '0.6rem',
  '&:hover': {
    backgroundColor: '#ececec'
  },
}));

const WhiteBtn = (props) => {
  return (
    <ColorButton><span className='partial-border-black'>{ props.title !== "" ? props.title : "View more" }</span></ColorButton>
  )
}

export default WhiteBtn