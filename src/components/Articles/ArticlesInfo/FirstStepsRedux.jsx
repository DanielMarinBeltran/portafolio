import { Box, Typography } from '@mui/material'
import React from 'react'
import reduxDependecies from '../../../assets/imgs/reduxDependecies.png'
import folderReduxStorejs from '../../../assets/imgs/folderReduxStorejs.png'
import './firstStepsRedux.scss'

function FirstStepsRedux() {
  return (
    <div className='container'>
      <Box>
        <Typography variant='h1'>First Steps with Redux</Typography>
        <Typography>Tags:</Typography>
        <Typography>React</Typography>
        <Typography>Redux</Typography>
      </Box>
      <Box>
        <Typography variant='h4'>
          Using Redux in React
        </Typography>
        <Typography>
          The first that we have to do is setting up Redux, we will open the terminal and install the following dependecies:
        </Typography>
        <img src={reduxDependecies} alt='Redux Dependecies'/>
        <Typography><strong>Redux</strong> is a library as it says from Redux.</Typography>
        <Typography><strong>React-redux</strong> is the library that has functions to connect our App of create-react-app with redux.</Typography>
        <Typography><strong>Redux-thunk</strong> is a way to use async functions in redux.</Typography>
        <Typography>After we have installed all the dependecies we can proceed to create a folder named redux in the src folder and create the file named <strong>store.js</strong> as the picture bellow</Typography>
        <img src={folderReduxStorejs} alt="folder redux storejs" />
      </Box>
    </div>
  )
}

export default FirstStepsRedux