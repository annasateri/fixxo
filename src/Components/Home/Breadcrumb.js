import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
    <div className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='texts-primary'>{currentPage}</li>
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumb