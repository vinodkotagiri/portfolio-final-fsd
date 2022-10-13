import React from 'react'
import shape from './yellowshape.svg'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import PortfolioCard from './component.portfolioCard'
const Portfolio = () => {
	const projects = [
		{
			id: '1',
			name: 'WRITZER',
			subtitle: 'content management system',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665332004/My%20Websites%20assets/portfolio-projects/storyio_bbq3ft.jpg',
			description:
				'story.io pays respects to the power of the human experience and brings it to the forefront. We believe in taking what you love about writing, developing and designing and building a system that helps you create content quickly and effortlessly.',
			deployedUrl: 'https://ytgold.netlify.app',
			feSource: 'https://github.com/vinodkotagiri/pfolio-storyio-frontend',
			beSource: 'https://github.com/vinodkotagiri/pfolio-storyio-backend',
		},
		{
			id: '2',
			name: 'BizBook.io',
			subtitle: 'An E-Commerce application',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/c_thumb,h_528,w_2707/v1665333839/My%20Websites%20assets/portfolio-projects/scart_r8en6w.jpg',
			description:
				'S-cart is an e-commerce website, where you can find products that you need. You can also use our many useful features to enhance your experience when shopping on our site.',
			deployedUrl: 'https://ytgold.netlify.app',
			feSource: 'https://github.com/vinodkotagiri/pfolio-scart-frontend',
			beSource: 'https://github.com/vinodkotagiri/pfolio-scart-backend-',
		},
		{
			id: '3',
			name: 'yepsocial',
			subtitle: 'A social media application',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665334654/My%20Websites%20assets/portfolio-projects/membook_sztp5t.jpg',
			description:
				'Membook is a social media platform that makes it easy to stay connected with friends and family. With Membook you can easily post photos, share audio and video recordings, create posts and more.',
			deployedUrl: 'https://ytgold.netlify.app',
			feSource: '',
			beSource: '',
		},
		{
			id: '4',
			name: 'chatterbeak',
			subtitle: 'A Messaging Service',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665335112/My%20Websites%20assets/portfolio-projects/nuchat_uirfod.jpg',
			description:
				'Connect and collaborate with people, businesses, and partners. nu.chat is a messenger app that puts you in control over how much information your friends know about you.',
			deployedUrl: 'https://ytgold.netlify.app',
			feSource: '',
			beSource: '',
		},
		{
			id: '5',
			name: 'ytGold',
			subtitle: 'A Youtube Clone',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665683266/My%20Websites%20assets/portfolio-projects/ytgold-cover_b8ydxt.jpg',
			description:
				'ytGold is a youtube clone application built using React and MaterialUI utilizing Rapid Api Youtube v3',
			deployedUrl: 'https://ytgold.netlify.app',
			feSource: 'https://github.com/vinodkotagiri/ytgold-youtubeClone',
			beSource: null,
		},
		{
			id: '5',
			name: 'stream rhythm',
			subtitle: 'Music Streaming App',
			cover:
				'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665683269/My%20Websites%20assets/portfolio-projects/stream-rhythm-cover_ii9iqm.jpg',
			description:
				'stream rhythm is a music streaming app built using ShazamCore Api using React',
			deployedUrl: 'https://stream-rhythm.netlify.app',
			feSource: 'https://github.com/vinodkotagiri/stream-rhythm-musicapp',
			beSource: null,
		},
	]

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
					justifyContent: 'start',
					my: 2,
				}}>
				{projects.map((project, i) => (
					<PortfolioCard key={i} project={project} />
				))}
			</Box>
		</motion.div>
	)
}

export default Portfolio
