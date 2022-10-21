import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'

import Button from '@mui/material/Button'

import MenuItem from '@mui/material/MenuItem'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Contact', 'Blog']

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)

	const location = useLocation()

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
	const navigate = useNavigate()
	return (
		<>
			<AppBar position='sticky' sx={{ background: '#5f3dc4' }}>
				<Container>
					<Toolbar>
						<Box px={2}>
							<Typography
								variant='h6'
								noWrap
								component='a'
								href='/'
								sx={{
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'Great Vibes',
									fontSize: '2rem',
									color: '#000',
									fontWeight: 'bold',
									textDecoration: 'none',
								}}
								onClick={() => navigate('/')}>
								Vinod Kotagiri
							</Typography>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}>
								{pages.map((page) => (
									<MenuItem
										key={page}
										onClick={() => {
											handleCloseNavMenu()
											navigate(`${page.toLocaleLowerCase()}`)
										}}
										sx={{ backgroundColor: '#5f3dc4' }}>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'Great Vibes',
								fontSize: '2rem',
								color: '#828282',
								fontWeight: 'bold',
								textDecoration: 'none',
							}}
							onClick={() => navigate('/')}>
							Vinod Kotagiri
						</Typography>
						<Box
							sx={{
								marginLeft: '30rem',
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={() => {
										handleCloseNavMenu()
										navigate(`/${page}`)
									}}
									sx={{
										my: 2,
										color: 'black',
										display: 'block',
									}}
									style={
										location.pathname === `/${page}`
											? { borderBottom: '2px solid white', color: 'white' }
											: { backgroundColor: '' }
									}>
									{page}
									{console.log(location.pathname, '/' + page)}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Outlet />
		</>
	)
}
export default ResponsiveAppBar
