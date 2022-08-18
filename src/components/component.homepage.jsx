import { Stack, Button, Typography, Fab } from '@mui/material'
import { Visibility, AssignmentTurnedInRounded, LinkedIn, GitHub, EmailRounded } from '@mui/icons-material'
import React from 'react'

const HomePage = () => {
    return (
        <Stack direction='column' gap={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h3' color='#616161' sx={{ fontSize: { xs: '1.17em' } }}>Hi There!</Typography>
            <Typography variant='h2' color='#616161' sx={{ fontSize: { xs: '200%' } }}>I'm <span style={{ color: '#1976D2' }}>Vinod Kotagiri</span></Typography>
            <Typography variant='h5' sx={{ color: '#616161', fontStyle: 'italic', fontSize: { xs: '150%' } }}>A Fullstack Developer</Typography>
            <Stack direction='row' gap={3} sx={{ marginTop: '2rem' }}>
                <Button variant="contained" size='large' endIcon={<Visibility />}>My Work</Button>
                <Button variant="outlined" size='large' endIcon={<AssignmentTurnedInRounded />}>Hire Me</Button>
            </Stack>
            <Stack direction='column' gap={2} sx={{ position: 'absolute', top: '40%', right: '5%', display: { xs: 'none', md: 'flex' } }}>
                <Fab color='primary'>
                    <LinkedIn />
                </Fab>
                <Fab color='primary' >
                    <GitHub />
                </Fab>
                <Fab color='primary' >
                    <EmailRounded />
                </Fab>
            </Stack>
        </Stack >
    )
}

export default HomePage