import React from 'react'
import './historialtokens.css'
import Sidebar from '../../components/Dashboard/Components/Sidebar Section/Sidebar'
import Body from './Body Tokens/Body'

function historialtokens() {
  return (
    <div className='dashboard flex'>
      <div className='dashboardContainer flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default historialtokens