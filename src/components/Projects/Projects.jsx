import React from 'react'
import '../Articles/articles.scss'
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <div className='articles'>
			<Grid container>
        <Grid item md={12}>
          <Box>
            <Typography variant='h4' align='start'>
              Last Projects
            </Typography>
          </Box>
        </Grid>
        <Grid className='articles-boxs' item xs={12} md={12}>
          <Link style={{textDecoration:'none'}} to='/WatchList'>
            <Box className='article-box__all'>
              <Typography variant='body2' className='article-box__title'>Applying localStorage - WatchList Movies</Typography>
              <Box className='article-box'>
                <Typography className='article-box__tags'>React</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
			</Grid>
		</div>
  )
}
