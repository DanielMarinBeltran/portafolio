import { Typography } from '@mui/material'
import React from 'react'
import './InConstruction.scss'
import logo from '../../assets/imgs/logoHeader.png'

function InConstruction() {
  return (
    <div className='container-in-construction'>
      <Typography variant='h1' align='center'>
        IN CONSTRUCTION
      </Typography>
      <img src={logo} alt="logo In Construction" />
    </div>
  )
}

export default InConstruction