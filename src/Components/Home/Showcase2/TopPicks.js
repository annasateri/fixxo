import React from 'react'
import Pamela from '../../../Assets/Images/Home/Showcase2/img_pamela.jpg'
import BlackBtn from '../Buttons/BlackBtn'

const TopPicks = () => {
  return (
    <div className='showcase-section-1'>
      <img src={Pamela} alt="" />
      <div className='showcase-text'>
        <h1 className='mb-5'>Pamela Reif's <br />Top Picks</h1>
        <BlackBtn title="SHOP NOW"/>
      </div>
    </div>
  )
}

export default TopPicks