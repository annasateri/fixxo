import React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: '#000',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: '#fefefe',
  },
}));

const Navbar = () => {
  return (
    <>
    <div className='d-lg-none d-flex justify-content-between' style={{ width: '100%' }}>
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container ">
        
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand ms-3" href="#"><strong>Fixxo.</strong></a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className={(navData) => (navData.isActive ? 'active nav-link' : 'inactive nav-link')} end to="/" >Home</NavLink>
                {/* <a className="nav-link" href="#">Categories</a> */}
                <NavLink className={(navData) => (navData.isActive ? 'active nav-link' : 'inactive nav-link')} end to="/products"  >Products</NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'active nav-link' : 'inactive nav-link')} end to="/contact" >Contact</NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-nav ms-auto d-flex align-items-start flex-row">
              <ColorButton color="primary" className='me-2' aria-label="add to shopping cart">
                <SearchIcon />
              </ColorButton>
              <ColorButton color="primary" className='me-2' aria-label="add to shopping cart">
                <i className="fa-solid fa-code-compare fa-flip-vertical"></i>
              </ColorButton>
              <Badge badgeContent={4} color="primary" className='me-2' sx={{"& .MuiBadge-badge": { color: '#fff' }}}>
                <ColorButton color="primary" aria-label="add to shopping cart">
                  <i className="fa-regular fa-heart"></i>
                </ColorButton>
              </Badge>
              <Badge badgeContent={4} color="primary" sx={{"& .MuiBadge-badge": { color: '#fff' }}}>
                <ColorButton color="primary" aria-label="add to shopping cart">
                  <ShoppingBagOutlinedIcon />
                </ColorButton>
              </Badge>
            </div>
      </div>
    </nav>
    </div>

    <div className='d-none d-lg-inline-block navbar-sticky' style={{ width: '100%' }}>
    <nav className="navbar py-4">
      <div className="container justify-content-between">
        <div className="navbar-nav">
          <a className="navbar-brand" href="#"><strong>Fixxo.</strong></a>
        </div>
        <div className="navbar-nav flex-row">
          <NavLink className={(navData) => (navData.isActive ? 'active nav-link me-4' : 'inactive nav-link me-4')} end to="/" >Home</NavLink>
          {/* <a className="nav-link me-4" href="#">Categories</a> */}
          <NavLink className={(navData) => (navData.isActive ? 'active nav-link me-4' : 'inactive nav-link me-4')} end to="/products"  >Products</NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active nav-link' : 'inactive nav-link')} end to="/contact" >Contact</NavLink>

        </div>

        <div className="navbar-nav flex-row">
          <ColorButton color="primary" className='me-4' aria-label="add to shopping cart">
            <SearchIcon />
          </ColorButton>
          <ColorButton color="primary" className='me-4' aria-label="add to shopping cart">
            <i className="fa-solid fa-code-compare fa-flip-vertical"></i>
          </ColorButton>
          <Badge badgeContent={4} color="primary" className='me-4' sx={{"& .MuiBadge-badge": { color: '#fff' }}}>
            <ColorButton color="primary" aria-label="add to shopping cart">
              <i className="fa-regular fa-heart"></i>
            </ColorButton>
          </Badge>
          <Badge badgeContent={4} color="primary" sx={{"& .MuiBadge-badge": { color: '#fff' }}}>
            <ColorButton color="primary" aria-label="add to shopping cart">
              <ShoppingBagOutlinedIcon />
            </ColorButton>
          </Badge>
        </div>

      </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar