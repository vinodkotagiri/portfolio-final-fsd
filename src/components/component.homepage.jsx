import { Stack, Button, Typography, Fab } from '@mui/material';
import {
  Visibility,
  CloudDownloadRounded,
  LinkedIn,
  GitHub,
  EmailRounded,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        direction='column'
        gap={2}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          variant='h3'
          color='#616161'
          sx={{ fontSize: { xs: '1.17em' } }}
        >
          Hi There!
        </Typography>
        <Typography
          variant='h2'
          color='#616161'
          sx={{ fontSize: { xs: '200%' } }}
        >
          I'm <span style={{ color: '#1976D2' }}>Vinod Kotagiri</span>
        </Typography>
        <Typography
          variant='h5'
          sx={{
            color: '#616161',
            fontStyle: 'italic',
            fontSize: { xs: '150%' },
          }}
        >
          A Fullstack Developer
        </Typography>
        <Stack direction='row' gap={3} sx={{ marginTop: '2rem' }}>
          <Button
            variant='contained'
            size='large'
            endIcon={<Visibility />}
            onClick={() => navigate('/portfolio')}
          >
            My Work
          </Button>
          <Button
            variant='outlined'
            size='large'
            endIcon={<CloudDownloadRounded />}
            onClick={() =>
              window.open(
                'https://1drv.ms/b/s!AqUO-r5Zn68aieYq4jZ_LEf9aDFv4A',
                '_blank'
              )
            }
          >
            Resume
          </Button>
        </Stack>
        <Stack
          direction='column'
          gap={2}
          sx={{
            position: 'absolute',
            top: '40%',
            right: '5%',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Fab
            color='primary'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/kotagiri-vinod-a10ba856/',
                '_blank'
              )
            }
          >
            <LinkedIn />
          </Fab>
          <Fab
            color='primary'
            onClick={() =>
              window.open('https://www.github.com/vinodkotagiri', '_blank')
            }
          >
            <GitHub />
          </Fab>
          <Fab color='primary' href='mailto:vinodkotagiri@icloud.com'>
            <EmailRounded />
          </Fab>
        </Stack>

        <Stack
          direction='row'
          gap={2}
          sx={{
            position: 'fixed',
            bottom: '20%',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <Fab
            color='primary'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/kotagiri-vinod-a10ba856/',
                '_blank'
              )
            }
          >
            <LinkedIn />
          </Fab>
          <Fab
            color='primary'
            onClick={() =>
              window.open('https://www.github.com/vinodkotagiri', '_blank')
            }
          >
            <GitHub />
          </Fab>
          <Fab color='primary' href='mailto:vinodkotagiri@icloud.com'>
            <EmailRounded />
          </Fab>
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
