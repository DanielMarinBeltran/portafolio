import './articles.scss'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Articles() {
	return (
		<div className='articles'>
			<Grid container>
        <Grid item md={12}>
          <Box>
            <Typography variant='h4' align='start'>
              Last Blogs
            </Typography>
          </Box>
        </Grid>
        <Grid className='articles-boxs' item xs={12} md={12}>
          <Link style={{textDecoration:'none'}} to='/FirstStepsWithRedux'>
            <Box className='article-box__all'>
              <Typography variant='body2' className='article-box__title'>First steps with Redux</Typography>
              <Box className='article-box'>
                <Typography className='article-box__tags'>React</Typography>
                <Typography className='article-box__tags'>Redux</Typography>
              </Box>
            </Box>
          </Link>
          <Link style={{textDecoration:'none'}} to='/LocalStorage'>
            <Box className='article-box__all'>
              <Typography variant='body2' className='article-box__title'>How to use Local Storage in React</Typography>
              <Box className='article-box'>
                <Typography className='article-box__tags'>React</Typography>
              </Box>
            </Box>
          </Link>
          <Link style={{textDecoration:'none'}} to='/InConstruction'>
            <Box className='article-box__all'>
              <Typography variant='body' className='article-box__title'>How to add PWA in React</Typography>
              <Box className='article-box'>
                <Typography className='article-box__tags'>React</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
			</Grid>
		</div>
	);
}

export default Articles;
