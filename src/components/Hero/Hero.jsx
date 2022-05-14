import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import foto from '../../assets/imgs/foto-principal.jpeg'
import react from '../../assets/imgs/atoms.png'
import javascript from '../../assets/imgs/javascript.png'
import html from '../../assets/imgs/html-5.png'
import css from '../../assets/imgs/css.png'
import sass from '../../assets/imgs/sass.png'
import python from '../../assets/imgs/python.png'
import material from '../../assets/imgs/material-ui.png'
import './main.scss'

function Hero() {
  return (
    <div className='main'>
      <Grid container >
        <Grid item md={6}>
          <Typography  variant='h2'>
            ¡Hola! Soy Daniel Marin
          </Typography>
          <Typography variant='h4'>
            Front-End Web Developer
          </Typography>
          <Typography variant='body2'>
            Benvenidos a mi jardin virtual
          </Typography>
          <Box className='main-container--img'>
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={sass} alt=" sass logo" />
            <img src={javascript} alt="javascript logo" />
            <img src={react} alt="react logo" />
            <img src={material} alt="material logo" />
            <img src={python} alt="python logo" />
          </Box>
        </Grid>
        <Grid className='container--picture' item md={6}>
          <img className='profile--picture' src={foto} alt="foto principal" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero