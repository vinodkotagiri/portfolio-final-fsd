import {
	Button,
	Card,
	Box,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { PublicRounded } from '@mui/icons-material'
import React from 'react'

// const style = {
// 	position: 'absolute',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 400,
// 	height: 200,
// 	bgcolor: 'background.paper',
// 	boxShadow: 24,
// 	p: 4,
// 	pt: 6,
// }

// const truncate = (text, chars) => {
// 	return text.substring(0, chars) + '...'
// }

const PortfolioCard = ({ project }) => {
	return (
		<Box sx={{ position: 'relative' }}>
			<Card
				sx={{
					width: '95%',
					maxWidth: 345,
					minWidth: 345,
					backgroundColor: '#3b4252',
				}}>
				<CardMedia
					component='img'
					height='140'
					image={project.cover}
					alt={project.name}
				/>
				<CardContent>
					<Typography
						variant='h6'
						color='primary.light'
						sx={{ fontWeight: 'bold', color: '#fff' }}>
						{project.name}
					</Typography>
					<Typography
						variant='p'
						color='text.secondary'
						sx={{ fontWeight: 'bold' }}>
						{project.subtitle}
					</Typography>
					<Box>
						<Button
							startIcon={<PublicRounded />}
							variant='outlined'
							sx={{ margin: '1rem 0', float: 'right' }}
							onClick={() => window.open(project.deployedUrl)}>
							Visit
						</Button>
					</Box>
				</CardContent>
			</Card>
			{/* <Box
				sx={{
					'&:hover': {
						backgroundColor: '#ff8c0090',
						opacity: 1,
						cursor: 'pointer',
					},
					opacity: { xs: 1, md: 0 },
					backgroundColor: { xs: '#ff8c0050' },
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					borderRadius: '2rem',
					zIndex: 10,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Stack direction='row' gap={3}>
					<Button
						size='large'
						variant='contained'
						sx={{ opacity: { xs: 0.6, md: 0.85 } }}
						onClick={() => window.open(project.deployedUrl, '_blank')}>
						Visit
					</Button>
					<Button
						size='large'
						variant='contained'
						sx={{
							backgroundColor: 'secondary.main',
							opacity: { xs: 0.6, md: 0.85 },
						}}
						onClick={() => setOpenCodeModal(true)}>
						Code
					</Button>
				</Stack>
			</Box> */}
			{/* <Modal
				style={style}
				open={openCodeModal}
				onClose={() => setOpenCodeModal(false)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography
						variant='h3'
						color='#fff'
						sx={{ fontWeight: 'bold', textAlign: 'center' }}>
						{project.name}
					</Typography>
					<Stack
						sx={{ justifyContent: 'center', alignItems: 'center', mt: 2 }}
						gap={2}>
						{project.beSource ? (
							<Button
								onClick={() => window.open(project.feSource, '_blank')}
								variant='contained'
								sx={{ backgroundColor: '#FDC435' }}>
								Frontend Source Code
							</Button>
						) : (
							<Button variant='contained'>Source Code</Button>
						)}
						{project.beSource && (
							<Button variant='contained'> Backend Source Code</Button>
						)}
					</Stack>
				</Box>
			</Modal> */}
		</Box>
	)
}

export default PortfolioCard
