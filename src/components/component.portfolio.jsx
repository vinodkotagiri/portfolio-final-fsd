import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import shape from './yellowshape.svg'
import { Box, Stack } from '@mui/system'
import { VisibilityRounded, CodeRounded } from '@mui/icons-material'

const Portfolio = () => {
	const projects = [
		{
			id: '1',
			name: 'story.io',
			subtitle: 'content management system',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665332004/My%20Websites%20assets/portfolio-projects/storyio_bbq3ft.jpg',
			description:
				'story.io pays respects to the power of the human experience and brings it to the forefront. We believe in taking what you love about writing, developing and designing and building a system that helps you create content quickly and effortlessly.',
		},
		{
			id: '2',
			name: 's-Cart',
			subtitle: 'An E-Commerce application',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/c_thumb,h_528,w_2707/v1665333839/My%20Websites%20assets/portfolio-projects/scart_r8en6w.jpg',
			description:
				'S-cart is an e-commerce website, where you can find products that you need. You can also use our many useful features to enhance your experience when shopping on our site.',
		},
		{
			id: '3',
			name: 'memBook',
			subtitle: 'A social media application',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665334654/My%20Websites%20assets/portfolio-projects/membook_sztp5t.jpg',
			description:
				'Membook is a social media platform that makes it easy to stay connected with friends and family. With Membook you can easily post photos, share audio and video recordings, create posts and more.',
		},
		{
			id: '4',
			name: 'nu.chat',
			subtitle: 'A Messaging Service',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665335112/My%20Websites%20assets/portfolio-projects/nuchat_uirfod.jpg',
			description:
				'Connect and collaborate with people, businesses, and partners. nu.chat is a messenger app that puts you in control over how much information your friends know about you.',
		},
	]

	return (
		<>
			<img
				src={shape}
				alt='shape'
				style={{
					width: '33%',
					position: 'absolute',
					top: 0,
					right: 0,
					zIndex: -100,
				}}
			/>
			<Typography
				variant='h3'
				sx={{
					textAlign: 'center',
					borderBottom: '4px double #FDC435',
					fontFamily: 'Nunito',
				}}>
				Portfolio
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					padding: '1rem',
					gap: '2rem',
					justifyContent: 'center',
				}}>
				{projects.map((project) => (
					<Paper
						elevation={3}
						sx={{
							padding: '0.5rem 1.25rem',
							width: '35vw',
							borderRadius: '1.2rem',
							backgroundImage: `url(${project.logo})`,
							backround: 'cover',
						}}>
						<Stack direction='row' sx={{ justifyContent: 'space-around' }}>
							<Stack
								gap={3}
								sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
								<Typography variant='h3' sx={{ color: '#FDC435' }}>
									{project.name}
									<span
										style={{
											fontSize: '0.5em',
											color: '#fdc43590',
											textTransform: 'capitalize',
										}}>
										&nbsp;({project.subtitle})
									</span>
								</Typography>

								<Typography
									sx={{
										fontFamily: 'Nunito',
										fontSize: '20px',
										color: '#828282',
										textAlign: 'justify',
									}}>
									{project.description}
								</Typography>
								<Stack
									direction='row'
									gap={4}
									sx={{ justifyContent: 'flex-start', marginBottom: '2rem' }}>
									<Button
										startIcon={<VisibilityRounded />}
										variant='contained'
										sx={{ width: 'fit-content', backgroundColor: '#FDC435' }}>
										Preview
									</Button>
									<Button
										startIcon={<CodeRounded />}
										variant='outlined'
										sx={{ width: 'fit-content' }}>
										Source code
									</Button>
								</Stack>
							</Stack>
						</Stack>
					</Paper>
				))}
			</Box>
		</>
	)
}

export default Portfolio
