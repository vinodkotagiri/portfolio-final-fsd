import React, { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Paper } from '@mui/material';
import './styles.navbar.css';
import {
  Home,
  Info,
  Lightbulb,
  Assignment,
  ContactPage,
  RssFeed
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Fragment>
      <AppBar
        position='sticky'
        component='nav'
        sx={{ backgroundColor: '#00000090' }}>
        <Toolbar>
          <Stack
            direction='row'
            sx={{
              width: '100%',
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'center'
            }}>
            <Stack>
              <NavLink to='/'>
                <Typography
                  variant='h3'
                  color='success.light'
                  sx={{ fontFamily: 'Great Vibes', padding: '4px' }}>
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
                display: { xs: 'none', md: 'flex' }
              }}>
              <Stack>
                <NavLink to='/'>
                  <Typography className='nav-link' color='warning.light'>
                    HOME
                  </Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/about'>
                  <Typography className='nav-link' color='warning.light'>
                    ABOUT
                  </Typography>
                </NavLink>
              </Stack>

              <Stack >
                <NavLink to='/skills'>
                  <Typography className='nav-link' color='warning.light'>
                    SKILLS
                  </Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/portfolio'>
                  <Typography className='nav-link' color='warning.light'>
                    PORTFOLIO
                  </Typography>
                </NavLink>
              </Stack>

              <Stack>
                <NavLink to='/contact'>
                  <Typography className='nav-link' color='warning.light'>
                    CONTACT
                  </Typography>
                </NavLink>
              </Stack>

              <Stack>
                <Typography
                  color='warning.light'
                  className='nav-link'
                  onClick={() =>
                    window.open('https://medium.com/@vinodkotagiri')
                  }
                  sx={{ cursor: 'pointer' }}>
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
          backgroundColor: '#000000'
        }}
        elevation={3}>
        <Stack
          direction='row'
          gap={3}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: { xs: 'flex', md: 'none' }
          }}>
          <NavLink to='/'>
            <Home
              className='navlink-mobile'
              sx={{ fontSize: '40px', color: '#ffffff50' }}
            />
          </NavLink>
          <NavLink to='/about'>
            <Info
              className='navlink-mobile'
              sx={{ fontSize: '40px', color: '#ffffff50' }}
            />
          </NavLink>
          <NavLink to='/skills'>
            <Lightbulb
              className='navlink-mobile'
              sx={{ fontSize: '40px', color: '#ffffff50' }}
            />
          </NavLink>
          <NavLink to='/portfolio'>
            <Assignment
              className='navlink-mobile'
              sx={{ fontSize: '40px', color: '#ffffff50' }}
            />
          </NavLink>
          <NavLink to='/contact'>
            <ContactPage
              className='navlink-mobile'
              sx={{ fontSize: '40px', color: '#ffffff50' }}
            />
          </NavLink>

          <RssFeed
            className='navlink-mobile'
            sx={{ fontSize: '40px', color: '#ffffff50' }}
            onClick={() => window.open('https://medium.com/@vinodkotagiri')}
          />
        </Stack>
      </Paper>
    </Fragment>
  );
};

export default Navbar;
