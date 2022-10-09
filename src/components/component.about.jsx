import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material'

const About = () => {
	return (
		<Stack direction='row' sx={{ alignItems: 'center' }} gap={4}>
			<Stack sx={{ width: '50%', padding: '6%', textAlign: 'justify' }} gap={2}>
				<Typography
					variant='h3'
					sx={{ fontFamily: 'Nunito', color: '#25282B' }}>
					About me
				</Typography>
				<Typography
					sx={{
						fontSize: '24px',
						lineHeight: '150%',
						color: '#828282',
						fontFamily: 'Nunito',
					}}>
					I am a Fullstack developer with a hands on experience in designing and
					developing modern web applications. Developing the UI using modern
					frontend libraries Bootstrap, MaterialUI, AntDesign, and React along
					with backend development with NodeJS and python.Good at designing
					RESTful API services using Express and database operations with
					MongoDB and MySQL.
				</Typography>
				<Stack direction='row' gap={6} mx={24} my={6}>
					<LinkedIn
						sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#FDC435' }}
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/kotagiri-vinod-a10ba856/'
							)
						}
					/>
					<GitHub
						sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#FDC435' }}
						onClick={() => window.open('https://www.github.com/vinodkotagiri')}
					/>
					<Twitter
						sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#FDC435' }}
						onClick={() => window.open('https://twitter.com/vinodkotagiri')}
					/>
				</Stack>
			</Stack>
			<Box
				my={2}
				sx={{
					width: '400px',
					height: '400px',
					backgroundColor: '#FDC435',
					borderRadius: '50% 25%',
					display: { xs: 'none', md: 'flex' },
				}}>
				<img
					src='https://res.cloudinary.com/vinodkotagiri/image/upload/b_rgb:fdc435/v1662539401/My%20Websites%20assets/vinu_ixjx9s.png'
					alt='hbd'
					style={{
						width: '340px',
						borderRadius: '65% 33%',
					}}
				/>
			</Box>
		</Stack>
	)
}

export default About
