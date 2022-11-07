import React from 'react'
import ConsciousImg from '../../../Assets/Images/Home/Showcase2/img_be_con.jpg'
import WhiteBtn from '../Buttons/WhiteBtn'

const Conscious = () => {
  return (
    <div className='showcase-section-2'>
      <img src={ConsciousImg} alt="" />
      <div className='showcase-text'>
        <h1 className='mb-5'>Let's Be <br />Conscious</h1>
        <WhiteBtn title="FLASH SALE"/>
      </div>
    </div>
  )
}

export default Conscious