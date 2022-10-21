import React from 'react'
import shape from './yellowshape.svg'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import PortfolioCard from './component.portfolioCard'
import { projects } from './projects'
const Portfolio = () => {
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
