import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material'
import shape from './yellowshape.svg'
import { motion } from 'framer-motion'
import vinimg from './vinu_full_webp.png'

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
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
					borderBottom: '4px double #5f3dc4',
					fontFamily: 'Nunito',
				}}>
				About me
			</Typography>
			<Stack direction='row' sx={{ alignItems: 'center' }} gap={4}>
				<Stack
					sx={{ width: '75vw', padding: '6%', textAlign: 'justify' }}
					gap={2}>
					<Typography
						sx={{
							fontSize: '24px',
							lineHeight: '150%',
							color: '#828282',
							fontFamily: 'Nunito',
						}}>
						Tech-Savy Full Stack Web Developer proficient in fundamental
						front-end languages and server-side languages. In-depth knowledge of
						JavaScript, React, NodeJs, MongoDB and MySQL. Analytical and precise
						professional looking forward to take charge of front-end and
						back-end development. Skillful creating servers and databases for
						functionality, designing and developing RESTful API's.
					</Typography>
					<Stack direction='row' gap={4} mx={6} my={6}>
						<LinkedIn
							sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#5f3dc4' }}
							onClick={() =>
								window.open(
									'https://www.linkedin.com/in/kotagiri-vinod-a10ba856/'
								)
							}
						/>
						<GitHub
							sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#5f3dc4' }}
							onClick={() =>
								window.open('https://www.github.com/vinodkotagiri')
							}
						/>
						<Twitter
							sx={{ fontSize: '3.5rem', cursor: 'pointer', color: '#5f3dc4' }}
							onClick={() => window.open('https://twitter.com/vinodkotagiri')}
						/>
					</Stack>
				</Stack>
				<Box
					my={2}
					sx={{
						width: '400px',
						height: '400px',
						backgroundColor: '#5F3DC4',
						borderRadius: '50% 25%',
						display: { xs: 'none', md: 'flex' },
					}}>
					<img
						src={vinimg}
						alt='hbd'
						style={{
							width: '480px',
							borderRadius: '65% 33%',
						}}
					/>
				</Box>
			</Stack>
		</motion.div>
	)
}

export default About
