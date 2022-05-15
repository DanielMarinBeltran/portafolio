import './articles.scss'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

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
          <Box className='article-box__all'>
            <Typography variant='body2' className='article-box__title'>First steps with Redux</Typography>
            <Box className='article-box__tags'>
              <Typography>React</Typography>
            </Box>
          </Box>
          <Box className='article-box__all'>
            <Typography variant='body2' className='article-box__title'>How to use Local Storage in React</Typography>
            <Box className='article-box__tags'>
              <Typography>React</Typography>
            </Box>
          </Box>
          <Box className='article-box__all'>
            <Typography variant='body' className='article-box__title'>How to add PWA in React</Typography>
            <Box className='article-box__tags'>
              <Typography>React</Typography>
            </Box>
          </Box>
        </Grid>
			</Grid>
		</div>
	);
}

export default Articles;
