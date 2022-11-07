import React from 'react'

const Card = (props) => {
  return (
    <div className='support-card'>
      <div className='icon-wrapper'>
        <img src={ props.Image } alt="" />
      </div>
      <h4 className='my-4 fw-bold'>{ props.Title }</h4>
      <p>{ props.Preamble }</p>
    </div>
  )
}

export default Card