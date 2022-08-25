import React, { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Paper } from '@mui/material';
import {
  Home,
  Info,
  Lightbulb,
  Assignment,
  ContactPage,
  RssFeed,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Fragment>
      <AppBar
        position='sticky'
        component='nav'
        sx={{ backgroundColor: '#000000' }}
      >
        <Toolbar>
          <Stack
            direction='row'
            sx={{
              width: '100%',
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'center',
            }}
          >
            <Stack>
              <NavLink to='/'>
                <Typography
                  variant='h3'
                  color='secondary'
                  sx={{ fontFamily: 'Great Vibes', padding: '4px' }}
                >
                  Vinod Kotagiri
                </Typography>
              </NavLink>
            </Stack>

            <Stack
              direction='row'
              gap={2}
              sx={{
                justifyContent: 'even',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Stack>
                <NavLink to='/'>
                  <Typography color='primary'>HOME</Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/about'>
                  <Typography color='primary'>ABOUT</Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/skills'>
                  <Typography color='primary'>SKILLS</Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/portfolio'>
                  <Typography color='primary'>PORTFOLIO</Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/contact'>
                  <Typography color='primary'>CONTACT</Typography>
                </NavLink>
              </Stack>

              <Stack>
                <Typography
                  color='primary'
                  onClick={() => window.open('https://codingfsd.blogspot.com/')}
                  sx={{ cursor: 'pointer' }}
                >
                  BLOG
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#000000',
        }}
        elevation={3}
      >
        <Stack
          direction='row'
          gap={3}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NavLink to='/'>
            <Home sx={{ fontSize: '40px', color: '#fff' }} />
          </NavLink>
          <NavLink to='/about'>
            <Info sx={{ fontSize: '40px', color: '#fff' }} />
          </NavLink>
          <NavLink to='/skills'>
            <Lightbulb sx={{ fontSize: '40px', color: '#fff' }} />
          </NavLink>
          <NavLink to='/portfolio'>
            <Assignment sx={{ fontSize: '40px', color: '#fff' }} />
          </NavLink>
          <NavLink to='/contact'>
            <ContactPage sx={{ fontSize: '40px', color: '#fff' }} />
          </NavLink>

          <RssFeed
            sx={{ fontSize: '40px', color: '#fff' }}
            onClick={() => window.open('https://codingfsd.blogspot.com/')}
          />
        </Stack>
      </Paper>
    </Fragment>
  );
};

export default Navbar;
