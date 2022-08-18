import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Box, Toolbar, Stack, Typography, Button, IconButton } from '@mui/material'
import { MenuRounded, CloseRounded } from '@mui/icons-material'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [displayDrawer, setDisplayDrawer] = useState('none')
    const toggleMenu = () => {
        setToggle(!toggle)
        displayDrawer === 'none' ? setDisplayDrawer('flex') : setDisplayDrawer('none')
    }
    return (
        <div>
            <AppBar sx={{ marginBottom: '3rem', position: 'fixed' }} >
                <Toolbar>
                    <Stack direction='row' sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
                        <Typography variant='h4' component='div' sx={{ fontFamily: 'Great Vibes' }}> Vinod Kotagiri</Typography>
                        {/* NavItems */}
                        <Stack direction='row' sx={{ display: { xs: 'none', md: 'flex' } }} >
                            <Button variant='large'>Home</Button>
                            <Button variant='large'>About</Button>
                            <Button variant='large'>Skills</Button>
                            <Button variant='large'>Portfolio</Button>
                            <Button variant='large'>Contact</Button>
                        </Stack>
                        {
                            !toggle ? <IconButton size='large' color='inherit' sx={{ display: { xs: 'flex', md: 'none' } }}
                                onClick={() => toggleMenu()}>
                                <MenuRounded sx={{ fontSize: 'inherit' }} />
                            </IconButton> :
                                <IconButton size='large' color='inherit' sx={{ display: { xs: 'flex', md: 'none' } }}
                                    onClick={() => toggleMenu()}>
                                    <CloseRounded sx={{ fontSize: 'inherit' }} />
                                </IconButton>
                        }
                    </Stack>
                </Toolbar>
            </AppBar >
            <Stack direction='column' bgcolor='text.secondary' sx={{ display: { xs: `${displayDrawer}`, md: 'none' } }} >
                <Button variant='large'>Home</Button>
                <Button variant='large'>About</Button>
                <Button variant='large'>Skills</Button>
                <Button variant='large'>Portfolio</Button>
                <Button variant='large'>Contact</Button>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                <Outlet />
            </Box>
        </div>
    )
}

export default Navbar