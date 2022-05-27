import React from 'react'
import { Box, Typography } from '@mui/material';
import './firstStepsRedux.scss';
import localStorageFirst from '../../../assets/imgs/localStorageFirst.png';
import exampleJSON from '../../../assets/imgs/exampleJSON.png';
import localStorageInformation from '../../../assets/imgs/localStorageInformation.png';

function LocalStorageBlog() {

  return (
    <div className='container'>
      <Box className='title-container'>
      <Typography variant="h1">First Steps with LocalStorage in React</Typography>
        <Box>
          <Typography>Tags:</Typography>
          <Typography>React</Typography>
        </Box>
      </Box>
      <Box>
        <Typography className="paragraph">The localStorage is a space where we can save data in the browser without a due date without using data bases, this means that the data that is stored in the LocalStorage will persist even if we close the browser(we can store from 5MB to 10MB depending of the browser), the information that is in the localStorage stays saved in the browser and not in a server, the only way to access the information that is in the localStorage is doing it manually.</Typography>
        <Typography className='paragraph'>An example where we can find localStorage is when we are in a online store and we add products to the cart, these products will stay in the cart even if we close the browser.</Typography>
        <Typography variant='h5' className='subtitle'>With localStorage we can:</Typography>
        <Typography variant='h6'>Save Data</Typography>
        <Typography className='paragraph'>To save data in the localStorage we need to have the information as a String, we will use the method localStorage.setItem().</Typography>
        <Typography className='paragraph'>This method will set a value to the element of the localStorage, this means that it will be needed a key and a value, in the following code i will show it to you.</Typography>
        <Box className='img__size'>
          <img src={localStorageFirst} alt="local Storage First" />
        </Box>
        <Typography className='paragraph'>And what happens if we want to save an object in the localStorage?, as I said, to save information in the localStorage it has to be a String, so for this we will use the method JSON.stringify(object) I will show it to you with code.</Typography>
        <Box className='img__size'>
          <img src={exampleJSON} alt="example JSON" />
        </Box>
        <Typography className='paragraph'>To see the saved information, we will right click in the browser, and click inspect element, click on the Aplication tab.</Typography>
        <img src={localStorageInformation} alt="local Storage Information" />

      </Box>
    </div>
  )
}

export default LocalStorageBlog