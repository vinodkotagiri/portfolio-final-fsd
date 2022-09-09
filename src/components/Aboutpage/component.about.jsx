import React from 'react';
import { Typography, Stack, Paper } from '@mui/material';
import { Info } from '@mui/icons-material';
import ParticlesBg from 'particles-bg';
const About = () => {
  return (
    <div>
      <ParticlesBg type='cobweb' color='#ffc107' bg={true} />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px'
        }}>
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Info sx={{ fontSize: '32px',color:'#ffc107' }}  />
          <Typography variant='h4' color='#ffc107'>
            About Me
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        gap={{ md: 10, xs: 3 }}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '32px',
          padding: '0 64px'
        }}>
        <img
          src='https://res.cloudinary.com/vinodkotagiri/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1662539401/My%20Websites%20assets/vinu_ixjx9s.png'
          alt='hero-img'
          style={{
            width: '280px',
            backgroundSize: 'cover',
            borderRadius: '50%'
          }}
        />
        <Paper
          sx={{ marginBottom: '32px', backgroundColor: '#00000050' }}
          elevation={4}>
          <Typography variant='h4' color='#ffffff95'>
            Hi! I'm{' '}
            <span style={{ fontFamily: 'Great Vibes', color: '#ffffff80' }}>
              Vinod Kotagiri,
            </span>
          </Typography>
          <Typography variant='h5' color='#fff'>
            I love to design and build websites.
            <br /> I am a full stack developer with a focus on ReactJS.
            <br />I believe in building web applications with a human
            touch,currently seeking a full-time position as web developer with
            an innovative company.
            <br />I love to work on complex, interesting problems. I enjoy
            building great products with a laser focus on what the user wants
            and needs.
          </Typography>
        </Paper>
      </Stack>
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 0 64px 0'
        }}>
        <Typography
          variant='p'
          color='#ffc107'
          sx={{
            fontFamily: 'Emilys Candy',
            fontSize: { md: '42px', xs: '20px' }
          }}>
          You’re in good hands
          <br />
          Let's make a great web app together!!
        </Typography>
      </Stack>
    </div>
  );
};

export default About;
