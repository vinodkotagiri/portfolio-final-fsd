import React from 'react';
import {
  Stack,
  Typography,
  Button,
  Card,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Paper
} from '@mui/material';
import ParticlesBg from 'particles-bg';
import { Assessment, Preview, Code } from '@mui/icons-material';
import { Projects } from './projects';

const Portfolio = () => {
  return (
    <div>
      <ParticlesBg num={5} type='thick' bg={true} />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          marginBottom: '8px'
        }}>
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Assessment sx={{ fontSize: '32px',color:'#ffc107' }}  />
          <Typography variant='h4' color='#ffc107'>
            Portfolio
          </Typography>
        </Stack>
      </Stack>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: { xs: 'flex-start', md: 'center' },
          alignItems: 'center',
          marginLeft: '32px'
        }}>
        {Projects.map((project) => (
          <Grid item key={project.id}>
            <Card
              sx={{
                maxWidth: { xs: '80%', md: 400 },
                borderRadius: 5,
                height: 'auto',
                width: { xs: '70%', md: 'auto' },
                boxShadow: '1px 1px 8px 2px #9B27AF'
              }}>
              <CardMedia
                component='img'
                image={project.cover}
                alt={`${project.name}-logo`}
                height={140}
              />
              <Stack gap={2}>
                <CardContent sx={{ height: 250 }}>
                  <Typography variant='h4' color='#000'>
                    {project.name}
                  </Typography>
                  <Typography variant='p' color='#616161'>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: { xs: 8, md: 'auto' } }}>
                  <Stack
                    gap={2}
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto'
                    }}>
                    <Button
                      endIcon={<Preview />}
                      variant='contained'
                      size='small'
                      sx={{backgroundColor:'#ffc107'}}>
                      Demo
                    </Button>
                    <Button
                      startIcon={<Code />}
                      variant='outlined'
                      color='secondary'
                      size='small'>
                      Frontend
                    </Button>
                    <Button
                      startIcon={<Code />}
                      variant='outlined'
                      color='secondary'
                      size='small'>
                      Backend
                    </Button>
                  </Stack>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* TEMPORARY OVERLAY: REMOVE AFTER ALL PROJETCS COMPLETED */}
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#ffffff30',
          borderRadius: '2rem',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100
        }}>
        <img src={require('./wip.gif')} alt='wip-logo' />
      </Paper>
    </div>
  );
};

export default Portfolio;
