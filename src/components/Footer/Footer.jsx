import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import './footer.scss';
import logoGithub from '../../assets/imgs/github-logo.png';
import logoLinkedIn from '../../assets/imgs/linkedIn.svg';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<Grid container>
				<Grid xs={12} md={12} className="footer-top-section__size">
					<Grid container spacing={3}>
						<Grid item md={6}>
              <Link className='link' to='/'>
							<Typography>Home</Typography>
              </Link>
						</Grid>
						<Grid item md={6}>
              <Link className='link' to='/InConstruction'>
							  <Typography>Contact</Typography>
              </Link>
						</Grid>
					</Grid>
				</Grid>
				<Grid xs={12} md={12} className="footer-bottom-section__size">
					<Grid container className='footer-bottom-section__space'>
						<Grid item md={6}>
              <a href='https://github.com/DanielMarinBeltran'>
							  <img src={logoGithub} alt="github logo" />
              </a>
						</Grid>
						<Grid item md={6}>
              <a href='https://www.linkedin.com/in/daniel-marin-665734201/'>
  							<img src={logoLinkedIn} alt="logo linked in" />
              </a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Footer;
