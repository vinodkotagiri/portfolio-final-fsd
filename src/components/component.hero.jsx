import React from 'react'
import shape from './yellowshape.svg'
import { Button, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, DownloadOutlined } from '@mui/icons-material'
// import vinimg from './vinu_full_webp.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import cover from './cover_hero.webp'
const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<img
				src={shape}
				alt='shape'
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					zIndex: -100,
				}}
			/>
			{/* <img
				src={vinimg}
				alt='cfimage'
				style={{
					position: 'absolute',
					top: 70,
					right: '-2rem',
					zIndex: -100,
					width: '520px',
					borderRadius: '33% 25% 25% 50%',
					opacity: '0.2',
				}} */}
			{/* /> */}
			<Stack
				sx={{
					padding: '4rem',
					justifyContent: 'space-between',
					// marginTop: { xs: '5rem', md: '0' },
				}}
				gap={2}>
				<Typography
					sx={{
						fontFamily: 'Nunito',
						fontSize: '20px',
						fontWeight: 'bold',
						color: { xs: '#fff', md: '#5f3dc4' },
					}}>
					FULLSTACK DEVELOPER
				</Typography>
				<Typography variant='h2' sx={{ color: '#fff' }}>
					Hello,
					<br />
					I'm Vinod Kotagiri
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito',
						fontSize: '24px',
						lineHeight: '150%',
						color: '#828282',
						display: { xs: 'none', md: 'flex' },
					}}>
					A Fullstack developer with experience in
					<br />
					designing and developing modern, responsive,
					<br />
					scalabale and maintainalble web applications.{' '}
				</Typography>
				<Stack direction='row' gap={3} my={4}>
					<Link to='/Portfolio'>
						<Button
							startIcon={<VisibilityOutlined />}
							variant='contained'
							sx={{
								backgroundColor: { md: '#5F3DC4', xs: '#fff' },
								color: '#25282B',
							}}>
							Portfolio
						</Button>
					</Link>
					<Button
						startIcon={<DownloadOutlined />}
						variant='outlined'
						sx={{ color: '#fff', padding: '0 1rem' }}
						onClick={() =>
							window.open(
								'https://1drv.ms/w/s!AqUO-r5Zn68aiexz71Vc0Zuu0TWI9g?e=8HxjCm',
								'_blank'
							)
						}>
						Resume
					</Button>
				</Stack>
			</Stack>
			<div
				style={{
					backgroundImage: `url(${cover})`,
					backgroundSize: 'cover',
					width: '100vw',
					height: '100vh',
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: -100,
					opacity: '15%',
				}}>
				Hello
			</div>
		</motion.div>
	)
}

export default Hero
