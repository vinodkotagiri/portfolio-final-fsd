import React from 'react'
import shape from './blob.svg'
import { Button, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, DownloadOutlined } from '@mui/icons-material'
// import vinimg from './vinu_full_webp.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import cover from './cover_hero.webp'
const Hero = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<img
				src={shape}
				alt='shape'
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					zIndex: -100,
					width: '50%',
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
						color: { xs: '#fff', md: 'var(--third-color)' },
					}}>
					FULLSTACK DEVELOPER
				</Typography>
				<Typography variant='h2' sx={{ color: 'var(--primary-color)' }}>
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
					scalabale and maintainable web applications.{' '}
				</Typography>
				<Stack direction='row' gap={3} my={4}>
					<Link to='/Portfolio' style={{ textDecoration: 'none' }}>
						<Button
							startIcon={<VisibilityOutlined />}
							variant='contained'
							sx={{
								backgroundColor: { md: 'var(--third-color)', xs: '#fff' },
								color: '#fff',
							}}>
							Portfolio
						</Button>
					</Link>
					<Button
						startIcon={<DownloadOutlined />}
						variant='outlined'
						sx={{ color: '#fff', padding: '0 1rem' }}
						onClick={() => window.open('https://1drv.ms/b/s!AqUO-r5Zn68aie4HrKnQG0TjnSEOGg?e=9UfSRb', '_blank')}>
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
				}}></div>
		</motion.div>
	)
}

export default Hero
