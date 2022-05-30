import React, { useEffect } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
	useMediaQuery,
	useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoHeader from '../../assets/imgs/logoHeader.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

const colors = createTheme({
	status: {
		danger: '#e53e3e'
	},
	palette: {
		primary: {
			main: '#282c34',
			darker: '#053e85'
		},
		neutral: {
			main: '#64748B',
			contrastText: '#fff'
		}
	}
});

const Header = () => {
	const [ anchorElNav, setAnchorElNav ] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const [ isReadyForInstall, setIsReadyForInstall ] = React.useState(false);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (event) => {
			// Prevent the mini-infobar from appearing on mobile.
			event.preventDefault();
			console.log('👍', 'beforeinstallprompt', event);
			// Stash the event so it can be triggered later.
			window.deferredPrompt = event;
			// Remove the 'hidden' class from the install button container.
			setIsReadyForInstall(true);
		});
	}, []);

	async function downloadApp() {
		console.log('👍', 'butInstall-clicked');
		const promptEvent = window.deferredPrompt;
		if (!promptEvent) {
			// The deferred prompt isn't available.
			console.log('oops, no prompt event guardado en window');
			return;
		}
		// Show the install prompt.
		promptEvent.prompt();
		// Log the result
		const result = await promptEvent.userChoice;
		console.log('👍', 'userChoice', result);
		// Reset the deferred prompt variable, since
		// prompt() can only be called once.
		window.deferredPrompt = null;
		// Hide the install button.
		setIsReadyForInstall(false);
	}
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<ThemeProvider theme={colors}>
			<AppBar variant="" position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						{isMatch ? null : (
							<img src={logoHeader} alt="logo header" style={{ width: '2em', marginRight: '1rem' }} />
						)}
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							Daniel Marin
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left'
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
							>
								<Link style={{ textDecoration: 'none' }} to="/">
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">HOME</Typography>
									</MenuItem>
								</Link>
								<Link style={{ textDecoration: 'none' }} to="/InConstruction">
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">BLOGS</Typography>
									</MenuItem>
								</Link>
								<Link style={{ textDecoration: 'none' }} to="/InConstruction">
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">PROJECTS</Typography>
									</MenuItem>
								</Link>
								<Link style={{ textDecoration: 'none' }} to="/InConstruction">
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">CONTACT</Typography>
									</MenuItem>
								</Link>
							</Menu>
						</Box>
						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							Daniel Marin
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/" style={{ textDecoration: 'none', color:'#282c34' }}>
								<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
									HOME
								</Button>
							</Link>
							<Link to="/InConstruction" style={{ textDecoration: 'none' }}>
								<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
									BLOGS
								</Button>
							</Link>
							<Link to="/InConstruction" style={{ textDecoration: 'none' }}>
								<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
									PROJECTS
								</Button>
							</Link>
							<Link to="/InConstruction" style={{ textDecoration: 'none' }}>
								<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
									CONTACT
								</Button>
							</Link>
						</Box>
						{isReadyForInstall && (
							<Button onClick={downloadApp} variant="contained">
								{isMatch ? <FileDownloadIcon /> : <div>Download</div>}
							</Button>
						)}
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};
export default Header;
