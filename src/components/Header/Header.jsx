import React, { useEffect } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	MenuItem,
	Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const pages = [ 'Home', 'Blog', 'Contact' ];
const theme = createTheme({
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
		console.log("👍", "butInstall-clicked");
		const promptEvent = window.deferredPrompt;
		if (!promptEvent) {
			// The deferred prompt isn't available.
			console.log("oops, no prompt event guardado en window");
			return;
		}
		// Show the install prompt.
		promptEvent.prompt();
		// Log the result
		const result = await promptEvent.userChoice;
		console.log("👍", "userChoice", result);
		// Reset the deferred prompt variable, since
		// prompt() can only be called once.
		window.deferredPrompt = null;
		// Hide the install button.
		setIsReadyForInstall(false);
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar variant="" position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>
						{isReadyForInstall && <Button onClick={downloadApp} variant="contained">Download</Button>}
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};
export default Header;
