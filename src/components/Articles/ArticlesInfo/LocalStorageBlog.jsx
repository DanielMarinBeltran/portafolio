import React from 'react'
import { Box, Typography } from '@mui/material';
import './firstStepsRedux.scss';
import localStorageFirst from '../../../assets/imgs/localStorageFirst.png';
import exampleJSON from '../../../assets/imgs/exampleJSON.png';
import localStorageInformation from '../../../assets/imgs/localStorageInformation.png';
import exampleGetItem from '../../../assets/imgs/exampleGetItem.png';
import exampleGetItemData from '../../../assets/imgs/exampleGetItemData.png';
import exampleRemoveItem from '../../../assets/imgs/exampleRemoveItem.png';
import exampleClearLocalStorage from '../../../assets/imgs/exampleClearLocalStorage.png';

function LocalStorageBlog() {

  return (
    <div className='container'>
      <Box className='title-container'>
      <Typography variant="h1">First Steps with Local Storage in React</Typography>
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
          <img src={localStorageFirst} style={{width:'300px'}} alt="local Storage First" />
        </Box>
        <Typography className='paragraph'>And what happens if we want to save an object in the localStorage?, as I said, to save information in the localStorage it has to be a String, so for this we will use the method JSON.stringify(object) I will show it to you with code.</Typography>
        <Box className='img__size'>
          <img src={exampleJSON} style={{width:'300px'}} alt="example JSON" />
        </Box>
        <Typography className='paragraph'>To see the saved information, we will right click in the browser, and click inspect element, click on the Aplication tab.</Typography>
        <Box className='img__size'>
          <img src={localStorageInformation} style={{width:'100%'}}  alt="local Storage Information" />
        </Box>
        <Typography variant='h6'>Restore data</Typography>
        <Typography className='paragraph'>To restore information from the localStorage we need to use the method localStorage.getItem('key'), we will pass the key of the saved value.</Typography>
        <Box className='img__size'>
          <img src={exampleGetItem} style={{width:'300px'}}  alt="example Get Item" />
        </Box>
        <Typography className='paragraph'>Following our previous example, to get the information from the localStorage and this is an object, we have to convert it into an object using the method JSON.parse() like the following way.</Typography>
        <Box className='img__size'>
          <img src={exampleGetItemData} style={{width:'300px'}} alt="example Get Item Data" />
        </Box>
        <Typography variant='h6'>Delete an element</Typography>
        <Typography className='paragraph'>To delete an element from the localStorage we must pass a key.</Typography>
        <Box className='img__size'>
          <img src={exampleRemoveItem} style={{width:'300px'}} alt="example Remove Item" />
        </Box>
        <Typography variant='h6'>Empty localStorage</Typography>
        <Typography className='paragraph'>To delete all the data saved in the localStorage we will do the following.</Typography>
        <Box className='img__size'>
          <img src={exampleClearLocalStorage} style={{width:'300px'}} alt="example Clear Local Storage" />
        </Box>
      </Box>
    </div>
  )
}

export default LocalStorageBlog