import { Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CircularProgress } from '@mui/material'
import { DoneAll } from '@mui/icons-material'
const Blog = () => {
	const [loading, setLoading] = useState(true)

	const openBlog = () => {
		window.open('https://medium.com/@vinodkotagiri', '_blank')
	}

	useEffect(() => {
		setTimeout(() => {
			openBlog()
			setLoading(false)
		}, 2500)
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<Box my={24} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Paper sx={{ width: '75vw', padding: '5rem', textAlign: 'center' }}>
					{loading && <CircularProgress sx={{ color: '#FDC435' }} />}
					{loading && (
						<Typography>
							Redirecting to external site:{' '}
							<em>https://medium.com/@vinodkotagiri</em>
						</Typography>
					)}
					{!loading && (
						<div>
							<DoneAll sx={{ fontSize: '3rem', color: 'green' }} />
							<Typography sx={{ color: 'green' }}>
								opened succesfully in new window
								<br />
								<br />
								<Divider />
								<br />
								<br />
								<em> https://medium.com/@vinodkotagiri</em>
							</Typography>
						</div>
					)}
				</Paper>
			</Box>
		</motion.div>
	)
}

export default Blog
