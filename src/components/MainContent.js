import React from 'react'
import SideBar from './SideBar'
import './MainContent.css'
const MainContent = (props) => {
  
  return (
    <div className='main-content'>
      <h1 className='custom-page-title'>{props.name}</h1>
      <h3 className='custom-breadcrumb'>{props.url}</h3>
      <div className='card'>
        <div className='card-body'>
          {props.content}
        </div>
      </div>
    </div>
  )
}

export default MainContent