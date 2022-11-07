import React from 'react'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom'

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: '#000',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.4s linear',
  '&:hover': {
    backgroundColor: '#23262A',
    color: '#fff'
  },
}));

const QuickButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#FF7373',
  borderRadius: 0,
  padding: '0.6rem',
  '&:hover': {
    backgroundColor: '#BF5656'
  },
}));


const CardSmall = ({item}) => {

  return (
    <Grid item xs={12} lg={6} >
    <div className='card'>
      <div className='card-img-top'>
        <img src={item.imageName} alt="" />
        <div className='overlay-add'>
          <div className='h-100 d-flex flex-column justify-content-between'>
            <div className='d-flex flex-column align-items-end p-3'>
              <ColorButton color="primary"  aria-label="add to shopping cart">
                <i className="fa-regular fa-heart"></i>
              </ColorButton>
              <ColorButton color="primary" className='my-2' aria-label="add to shopping cart">
                <i className="fa-solid fa-code-compare fa-flip-vertical"></i>
              </ColorButton>
              <Badge badgeContent={4} color="primary" sx={{"& .MuiBadge-badge": { color: '#fff', top: '3px', right: '3px' }}}>
                <ColorButton color="primary" aria-label="add to shopping cart">
                  <ShoppingBagOutlinedIcon />
                </ColorButton>
              </Badge>
            </div>
            <div>
              <NavLink to={`/products/${item.articleNumber}`} style={{ textDecoration: 'none' }}>
                <QuickButton fullWidth><span className='partial-border'>QUICK VIEW</span></QuickButton>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body d-flex flex-column align-items-start">
        <h6 className="card-title">{item.category}</h6>
        <h4 className="card-text mb-2">{item.name}</h4>
        <div className="d-flex align-items-center">
          <i className={`${item.rating >= 1 ? "fa-solid" : "fa-regular"} fa-star me-2`}></i>
          <i className={`${item.rating >= 2 ? "fa-solid" : "fa-regular"} fa-star me-2`}></i>
          <i className={`${item.rating >= 3 ? "fa-solid" : "fa-regular"} fa-star me-2`}></i>
          <i className={`${item.rating >= 4 ? "fa-solid" : "fa-regular"} fa-star me-2`}></i>
          <i className={`${item.rating >= 5 ? "fa-solid" : "fa-regular"} fa-star me-2`}></i>
        </div>
        <h4 className="card-text mt-3">{item.price}$</h4>
      </div>
    </div>
    </Grid>
  )
}

export default CardSmall