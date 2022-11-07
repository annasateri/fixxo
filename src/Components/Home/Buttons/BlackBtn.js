import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#000',
  borderRadius: 0,
  padding: '0.6rem',
  '&:hover': {
    backgroundColor: '#1a1a1a'
  },
}));

const BlackBtn = (props) => {
  return (
    <ColorButton><span className='partial-border'>{ props.title !== "" ? props.title : "View more" }</span></ColorButton>
  )
}

export default BlackBtn