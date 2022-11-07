import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';
import CreditCard from '../../../Assets/Images/Icons/credit-card.svg';
import CustomerService from '../../../Assets/Images/Icons/customer-service.svg';
import DeliveryTruck from '../../../Assets/Images/Icons/delivery-truck.svg';

const Support = () => {
  return (
    <div className='container my-5'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card Image={CustomerService} Title="Customer Support" Preamble="Village did removed enjoyed explain talking." />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card Image={CreditCard} Title="Secured Payment" Preamble="Village did removed enjoyed explain talking." />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card Image={DeliveryTruck} Title="Free Home Delivery" Preamble="Village did removed enjoyed explain talking." />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card Image={DeliveryTruck} Title="30 Day Returns" Preamble="Village did removed enjoyed explain talking." />
        </Grid>
      </Grid>
    </div>

  )
}

export default Support