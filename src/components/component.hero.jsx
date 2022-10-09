import React from 'react'
import shape from './yellowshape.svg'
import { Button, Stack, Typography } from '@mui/material'
import { VisibilityOutlined, DownloadOutlined } from '@mui/icons-material'
import vinimg from './cartoonified.jpg'
const Hero = () => {
	return (
		<>
			<img
				src={shape}
				alt='shape'
				style={{ position: 'absolute', top: 0, right: 0, zIndex: -100 }}
			/>
			<img
				src={vinimg}
				alt='cfimage'
				style={{
					position: 'absolute',
					top: 50,
					right: 0,
					zIndex: -100,
					width: '350px',
					borderRadius: '33% 25% 25% 50%',
				}}
			/>
			<Stack sx={{ padding: '4rem' }} gap={2}>
				<Typography
					sx={{
						fontFamily: 'Nunito',
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FDC435',
					}}>
					FULLSTACK DEVELOPER
				</Typography>
				<Typography variant='h2' sx={{ color: '#25282B' }}>
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
					}}>
					A Fullstack developer with experience in
					<br />
					designing and developing modern, responsive,
					<br />
					scalabale and maintainalble web applications.{' '}
				</Typography>
				<Stack direction='row' gap={3} my={4}>
					<Button
						startIcon={<VisibilityOutlined />}
						variant='contained'
						sx={{ backgroundColor: '#FDC435', color: '#25282B' }}>
						Portfolio
					</Button>
					<Button
						startIcon={<DownloadOutlined />}
						variant='outlined'
						sx={{ color: '#25282B' }}>
						Resume
					</Button>
				</Stack>
			</Stack>
		</>
	)
}

export default Hero
