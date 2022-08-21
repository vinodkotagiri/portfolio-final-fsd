import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import { InfoRounded } from '@mui/icons-material';
import { AuthorImg } from '../assets/logos';
const AboutPage = () => {
  return (
    <Box
      sx={{
        marginBlockStart: '5rem',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        <InfoRounded color='primary' sx={{ fontSize: '2.7rem' }} />
        <Typography variant='h3' color='primary'>
          ABOUT
        </Typography>
      </Stack>

      <Stack
        direction='row'
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          src={AuthorImg}
          alt='author'
          style={{
            width: '50%',
            filter: 'brightness(120%)',
          }}
        />
        <Typography variant='p' color='#616161' sx={{ fontSize: '1.55rem' }}>
          A Fullstack web developer specialized in MERN stack with a good hands
          on experience in building web applications which are Responsive,
          Scalable, Reliable and Maintainable.
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutPage;
