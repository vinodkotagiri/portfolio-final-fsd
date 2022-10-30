import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Send } from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import shape from './yellowshape.svg'
import { motion } from 'framer-motion'
const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		if (email && email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
			setDisabled(false)
		else setDisabled(true)
		if (name && email && phone && message) setDisabled(false)
		else setDisabled(true)
	}, [name, email, phone, message])

	const handleSubmit = (e) => {
		e.preventDefault()
		emailjs
			.send(
				'service_kjuek39',
				'template_2jvnlwp',
				{
					name,
					email,
					phone,
					message,
				},
				'srHBL7gISQA2U302c'
			)
			.then(
				function (response) {
					toast.success('Thank you for contacting!')
					console.log('SUCCESS!', response.status, response.text)
				},
				function (error) {
					toast.error('Something went wrong, please try again later!')
					console.log('FAILED...', error)
				}
			)
		setName('')
		setEmail('')
		setPhone('')
		setMessage('')
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<img
				src={shape}
				alt='shape'
				style={{ position: 'absolute', top: 0, right: 0, zIndex: -100 }}
			/>

			<Typography
				variant='h3'
				sx={{
					textAlign: 'center',
					borderBottom: '4px double #5F3DC4',
					fontFamily: 'Nunito',
				}}>
				Contact me
			</Typography>
			<Stack
				gap={4}
				sx={{
					width: '66vw',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '1rem auto',
					fontFamily: 'Nunito',
				}}>
				<TextField
					required
					id='outlined-required'
					label='Name'
					sx={{ width: '66%', backgroundColor: '#fff', borderRadius: 2 }}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<TextField
					required
					id='outlined-required'
					label='Email Address'
					type='email'
					sx={{ width: '66%', backgroundColor: '#fff', borderRadius: 2 }}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					required
					id='outlined-required'
					label='Phone Number'
					sx={{ width: '66%', backgroundColor: '#fff', borderRadius: 2 }}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<textarea
					required
					placeholder='Your message*'
					id='outlined-required'
					rows='8'
					cols='30'
					style={{
						resize: 'none',
						fontSize: '16px',
						width: '66%',
						borderRadius: 2,
					}}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<Button
					endIcon={<Send />}
					variant='contained'
					size='large'
					sx={{ backgroundColor: '#FDC435' }}
					disabled={disabled}
					onClick={handleSubmit}>
					Submit
				</Button>
			</Stack>
			<Toaster position='top-right' reverseOrder={false} />
		</motion.div>
	)
}

export default Contact
