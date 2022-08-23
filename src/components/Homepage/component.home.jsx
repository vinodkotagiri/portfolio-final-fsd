import React from 'react';
import ParticlesBg from 'particles-bg';
import { Typography, Stack, Button, Fab } from '@mui/material';
import {
  Visibility,
  CloudDownload,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';
import { useNavigate } from 'react-router';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ParticlesBg type='lines' bg={true} />
      <Stack
        sx={{
          alignItems: 'center',
          flexWrap: 'nowrap',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          color='lightgray'
          variant='h3'
          sx={{ fontFamily: 'ubuntu', fontWeight: 'light' }}
        >
          Hi, There!
        </Typography>
        <Typography
          color='secondary'
          variant='h1'
          sx={{ fontFamily: 'Aboreto', fontSize: '5rem' }}
        >
          I'm, Vinod
        </Typography>
        <Typography
          color='slateblue'
          variant='h4'
          sx={{
            fontFamily: 'ubuntu',
            fontWeight: 'light',
          }}
        >
          A Full Stack Developer
        </Typography>
        <Stack direction='row' gap={3} sx={{ marginTop: '4rem' }}>
          <Button
            variant='contained'
            endIcon={<Visibility />}
            onClick={() => navigate('/portfolio')}
          >
            View My Work
          </Button>
          <Button
            variant='contained'
            endIcon={<CloudDownload />}
            sx={{ backgroundColor: '#9C27B0' }}
            onClick={() =>
              window.open(
                'https://1drv.ms/b/s!AqUO-r5Zn68aieYq4jZ_LEf9aDFv4A?e=3YBMDP',
                '_blank'
              )
            }
          >
            Resume
          </Button>
        </Stack>
      </Stack>
      <Stack
        gap={2}
        sx={{
          position: 'absolute',
          top: '40%',
          right: '10%',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Fab
          color='primary'
          onClick={() =>
            window.open(
              'https://https://www.linkedin.com/in/kotagiri-vinod-a10ba856/'
            )
          }
        >
          <LinkedIn />
        </Fab>
        <Fab
          color='primary'
          onClick={() => window.open('https://github.com/vinodkotagiri')}
        >
          <GitHub />
        </Fab>
        <Fab
          color='primary'
          onClick={() => window.open('https://twitter.com/vinodkotagiri')}
        >
          <Twitter />
        </Fab>
      </Stack>
    </div>
  );
};

export default Home;
