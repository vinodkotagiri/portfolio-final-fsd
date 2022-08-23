import React from 'react';
import { Typography, Stack, Paper } from '@mui/material';
import { Info } from '@mui/icons-material';
import HeroImg from '../../assets/vinu.png';
import ParticlesBg from 'particles-bg';
const About = () => {
  return (
    <div>
      <ParticlesBg type='cobweb' color='#616161' bg={true} />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
        }}
      >
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Info sx={{ fontSize: '32px' }} color='secondary' />
          <Typography variant='h4' color='secondary'>
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
          padding: '0 64px',
        }}
      >
        <img
          src={HeroImg}
          alt='hero-img'
          style={{ width: '280px', borderRadius: '72px' }}
        />
        <Paper
          sx={{ marginBottom: '32px', backgroundColor: '#000' }}
          elevation={4}
        >
          <Typography variant='h4' color='#616161'>
            Hi! I'm{' '}
            <span style={{ fontFamily: 'Great Vibes', color: '#fff' }}>
              Vinod Kotagiri,
            </span>
          </Typography>
          <Typography variant='h5' color='#616161'>
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
          padding: '0 0 64px 0',
        }}
      >
        <Typography
          variant='p'
          color='secondary'
          sx={{
            fontFamily: 'Emilys Candy',
            fontSize: { md: '42px', xs: '20px' },
          }}
        >
          You’re in good hands
          <br />
          Let's make a great web app together!!
        </Typography>
      </Stack>
    </div>
  );
};

export default About;
