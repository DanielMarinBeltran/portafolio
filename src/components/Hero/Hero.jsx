import { Grid, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import foto from '../../assets/imgs/picture.jpeg';
import react from '../../assets/imgs/atoms.png';
import javascript from '../../assets/imgs/javascript.png';
import html from '../../assets/imgs/html-5.png';
import css from '../../assets/imgs/css.png';
import sass from '../../assets/imgs/sass.png';
import python from '../../assets/imgs/python.png';
import material from '../../assets/imgs/material-ui.png';
import './main.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
	}
}));

function Hero() {
	const [ value, setValue ] = useState(0);
	const [ spinner, setSpinner ] = useState(false);

  useEffect(()=>{
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
    }, 1500);
  },[value])

	return (
		<div className="main">
			<Grid container>
				<Grid item md={6}>
					<Typography variant="h2">¡Hello! I'm Daniel Marin</Typography>
					<Typography variant="h4">Front-End Web Developer</Typography>
					<Typography variant="body2">
						Welcome to my virtual space this is my way to give back all the help that I got from the
						development community, here you will find my blog, with information about technologies that I
						have learned during the years, also some projects related to those technologies, I hope you will
						find it helpful.
					</Typography>
					<Box className="main-container--img">
						<img onClick={() => setValue(80)} src={html} alt="html logo" />
						<img onClick={() => setValue(70)} src={css} alt="css logo" />
						<img onClick={() => setValue(60)} src={sass} alt=" sass logo" />
						<img onClick={() => setValue(70)} src={javascript} alt="javascript logo" />
						<img onClick={() => setValue(70)} src={react} alt="react logo" />
						<img onClick={() => setValue(60)} src={material} alt="material logo" />
						<img onClick={() => setValue(50)} src={python} alt="python logo" />
						{value != 0 && (
							<Box>
                { spinner ?
                  <Box className='main-container__spinner'>
                    <CircularProgress />
                  </Box>
                   :
                   <Box>
                   <Typography variant="h4">PROFICIENCY:</Typography>
                   <BorderLinearProgress variant="determinate" value={value} />
                 </Box>
                }
							</Box>
						)}
					</Box>
				</Grid>
				<Grid className="container--picture" item md={6}>
					<img className="profile--picture" src={foto} alt="foto principal" />
				</Grid>
			</Grid>
		</div>
	);
}

export default Hero;
