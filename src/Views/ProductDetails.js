import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Breadcrumb from '../Components/Home/Breadcrumb';

const ProductDetails = () => {

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
        setProduct(await result.json())
    }
    fetchData()
  }, [])

  return (
    <div className='container product-details py-5'>
      <div className='py-4'>
        <Breadcrumb currentPage="Products" />
      </div>

      <div>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <div className="product-item-wrapper">
                <img src={product.imageName} alt="" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="product-item-wrapper-small">
                <img src={product.imageName} alt="" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="product-item-wrapper-small">
                <img src={product.imageName} alt="" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="product-item-wrapper-small">
                <img src={product.imageName} alt="" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div>
            <h2>{ product.name }</h2>
            <div className="d-flex align-items-start">
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p className='fw-bold mt-3'>{ product.price }$</p>
            <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.</p>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default ProductDetails