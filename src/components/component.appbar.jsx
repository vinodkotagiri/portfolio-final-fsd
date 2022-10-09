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
import { Outlet, useNavigate } from 'react-router-dom'

const pages = ['about', 'skills', 'portfolio', 'contact', 'blog']

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
	const navigate = useNavigate()
	return (
		<>
			<AppBar
				position='static'
				sx={{ background: 'transparent', color: '#000000' }}>
				<Container>
					<Toolbar>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'Comfortaa',
								fontWeight: 700,
								color: 'inherit',
								textDecoration: 'none',
							}}
							onClick={() => navigate('/')}>
							VINOD KOTAGIRI
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
											navigate(`/${page}`)
										}}>
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
								fontFamily: 'Comfortaa',
								color: '#000000',
								textDecoration: 'none',
							}}
							onClick={() => navigate('/')}>
							VINOD KOTAGIRI
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
									}}>
									{page}
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