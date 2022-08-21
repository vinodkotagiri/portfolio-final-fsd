import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { MenuRounded, CloseRounded } from '@mui/icons-material';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [displayDrawer, setDisplayDrawer] = useState('none');
  const navigate = useNavigate();
  const toggleMenu = () => {
    setToggle(!toggle);
    displayDrawer === 'none'
      ? setDisplayDrawer('flex')
      : setDisplayDrawer('none');
  };
  return (
    <div>
      <AppBar sx={{ marginBottom: '3rem', position: 'fixed' }}>
        <Toolbar>
          <Stack
            direction='row'
            sx={{ flexGrow: 1, justifyContent: 'space-between' }}
          >
            <Typography
              variant='h4'
              component='div'
              sx={{ fontFamily: 'Great Vibes', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              {' '}
              Vinod Kotagiri
            </Typography>
            {/* NavItems */}

            <Stack direction='row' sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant='large' onClick={() => navigate('/')}>
                Home
              </Button>
              <Button variant='large' onClick={() => navigate('/about')}>
                About
              </Button>
              <Button variant='large' onClick={() => navigate('/skills')}>
                Skills
              </Button>
              <Button variant='large' onClick={() => navigate('/portfolio')}>
                Portfolio
              </Button>
              <Button variant='large' onClick={() => navigate('/contact')}>
                Contact
              </Button>
            </Stack>
            {!toggle ? (
              <IconButton
                size='large'
                color='inherit'
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={() => toggleMenu()}
              >
                <MenuRounded sx={{ fontSize: 'inherit' }} />
              </IconButton>
            ) : (
              <IconButton
                size='large'
                color='inherit'
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={() => toggleMenu()}
              >
                <CloseRounded sx={{ fontSize: 'inherit' }} />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '90vh',
        }}
      > */}
      <Outlet />
      {/* </Box> */}
      <Stack
        direction='column'
        bgcolor='primary.main'
        color='#fff'
        sx={{
          zIndex: '1',
          width: '100%',
          position: 'absolute',
          top: '3.5rem',
          right: '0',
          display: { xs: `${displayDrawer}`, md: 'none' },
        }}
      >
        <Button variant='large' onClick={() => navigate('/')}>
          Home
        </Button>
        <Button variant='large' onClick={() => navigate('/about')}>
          About
        </Button>
        <Button variant='large' onClick={() => navigate('/skills')}>
          Skills
        </Button>
        <Button variant='large' onClick={() => navigate('/portfolio')}>
          Portfolio
        </Button>
        <Button variant='large' onClick={() => navigate('/contact')}>
          Contact
        </Button>
      </Stack>
    </div>
  );
};

export default Navbar;
