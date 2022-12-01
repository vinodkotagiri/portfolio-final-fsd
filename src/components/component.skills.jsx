import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import shape from './blob.svg'
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
	const skills = [
		{
			id: '1',
			name: 'HTML',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665327275/My%20Websites%20assets/logos/html5_jtlfg8.svg',
			color: '#e54a1d',
		},
		{
			id: '2',
			name: 'CSS',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665327360/My%20Websites%20assets/logos/css3_spcm1e.svg',
			color: '#34aadc',
		},
		{
			id: '3',
			name: 'JavaScript',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/js_yxno8i.svg',
			color: '#f1dc4f',
		},
		{
			id: '4',
			name: 'Figma',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/figma_cwofax.svg',
			color: '#02d085',
		},
		{
			id: '5',
			name: 'Bootstrap',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/bootstrap_xcoad9.svg',
			color: '#563e7c',
		},
		{
			id: '6',
			name: 'MaterailUI',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/mui_rh1spy.svg',
			color: '#0082cd',
		},
		{
			id: '7',
			name: 'AntDesign',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/antd_l5btbc.svg',
			color: '#f74e5f',
		},
		{
			id: '8',
			name: 'React',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665328392/My%20Websites%20assets/logos/react_hzxqzv.svg',
			color: '#00d9ff',
		},
		{
			id: '9',
			name: 'NodeJs',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329106/My%20Websites%20assets/logos/nodejs_e0yu5g.svg',
			color: '#529f41',
		},
		{
			id: '10',
			name: 'Python',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329108/My%20Websites%20assets/logos/python_d1w28x.svg',
			color: '#5aa0d4',
		},
		{
			id: '11',
			name: 'MongoDB',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329108/My%20Websites%20assets/logos/mongodb_jfe0cw.svg',
			color: '#53aa4b',
		},
		{
			id: '12',
			name: 'MySQL',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329108/My%20Websites%20assets/logos/mysql_bmaevk.svg',
			color: '#2e8da2',
		},
		{
			id: '13',
			name: 'Git',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329393/My%20Websites%20assets/logos/git_nlyelc.svg',
			color: '#f05030',
		},
		{
			id: '14',
			name: 'AWS',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665329393/My%20Websites%20assets/logos/aws_lgynjt.svg',
			color: '#ff9a02',
		},
		{
			id: '15',
			name: 'Linux',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665330282/My%20Websites%20assets/logos/linux_jmb4gj.svg',
			color: '#ffcc21',
		},
		{
			id: '17',
			name: 'Tailwind',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665684497/My%20Websites%20assets/logos/tailwind_vxpk6j.svg',
			color: '#44a8b3',
		},
		{
			id: '18',
			name: 'Firebase',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665770353/My%20Websites%20assets/logos/firebase_jbse13.svg',
			color: '#f68304',
		},
		{
			id: '19',
			name: 'Redux',
			logo: 'https://res.cloudinary.com/vinodkotagiri/image/upload/v1665899459/My%20Websites%20assets/logos/redux_urlu7c.svg',
			color: '#7749bd',
		},
	]

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{/* <img
				src={shape}
				alt='shape'
				style={{
					width: '66%',
					position: 'absolute',
					top: 0,
					right: 0,
					zIndex: -100,
				}}
			/> */}
			<Typography
				variant='h3'
				sx={{
					textAlign: 'center',
					borderBottom: '4px double #828282',
					fontFamily: 'Nunito',
					color: '#828282',
				}}>
				Skills
			</Typography>
			<Box
				my={6}
				mx={5}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
					justifyContent: 'center',
				}}>
				{skills.map((skill) => (
					<Stack
						key={skill.id}
						direction='row'
						gap={2}
						sx={{
							padding: '1.25rem',
							margin: '0.25rem',
							width: { xs: '75vw', md: '15rem' },
							justifyContent: 'start',
							alignItems: 'center',
							border: `1px solid ${skill.color}`,
							backgroundColor: '#00000015',
							opacity: '.75',
							borderRadius: '1rem',
							boxShadow: `4px 4px 16px 1px ${skill.color}`,
							cursor: 'pointer',
							'&:hover': {
								transform: 'scale(1.5)',
								backgroundColor: '#000000',
								Zindex: 1000,
								overflow: 'hidden',
							},
							transition: '0.75s ease-in-out',
						}}>
						<Typography variant='h5' color={skill.color}>
							{skill.name}
						</Typography>
						<img src={skill.logo} alt={skill.name} style={{ width: '8rem', height: '4rem' }} />
					</Stack>
				))}
			</Box>
		</motion.div>
	)
}

export default Skills
