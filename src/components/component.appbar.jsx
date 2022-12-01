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

const pages = ['Home', 'About', 'Skills', 'Portfolio', 'Contact']

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
			<AppBar position='sticky' sx={{ background: 'inherit', width: '100vw' }}>
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
									color: 'var(--third-color)',
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
										sx={{ backgroundColor: 'inherit' }}>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
								<MenuItem
									onClick={() => {
										handleCloseNavMenu()
										window.open('https://medium.com/@vinodkotagiri')
										navigate('/')
									}}
									sx={{ backgroundColor: 'inherit' }}>
									<Typography textAlign='center'>Blog</Typography>
								</MenuItem>
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
								color: 'var(--secondary-color)',
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
										color: 'var(--third-color)',
										display: 'block',
									}}
									style={
										location.pathname === `/${page}`
											? {
													borderBottom: '2px solid var(--secondary-color)',
													color: 'var(--secondary-color)',
													fontWeight: 'bold',
											  }
											: { backgroundColor: '' }
									}>
									{page}
									{console.log(location.pathname, '/' + page)}
								</Button>
							))}
							<Button
								onClick={() => {
									window.open('https://www.medium.com/@vinodkotagiri')
									navigate('/')
								}}
								sx={{
									my: 2,
									color: 'var(--third-color)',
									display: 'block',
								}}>
								Blog
							</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Outlet />
		</>
	)
}
export default ResponsiveAppBar
