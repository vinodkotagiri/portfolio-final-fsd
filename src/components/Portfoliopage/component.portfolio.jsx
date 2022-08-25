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
          marginBottom: '8px',
        }}
      >
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Assessment sx={{ fontSize: '32px' }} color='secondary' />
          <Typography variant='h4' color='secondary'>
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
          marginLeft: '32px',
        }}
      >
        {Projects.map((project) => (
          <Grid item key={project.id}>
            <Card
              sx={{
                maxWidth: { xs: '80%', md: 400 },
                borderRadius: 5,
                height: 480,
                width: { xs: '100%' },
              }}
            >
              <CardMedia
                component='img'
                image={project.cover}
                alt={`${project.name}-logo`}
                height={140}
              />
              <Stack gap={4}>
                <CardContent sx={{ height: 250 }}>
                  <Typography variant='h4' color='#000'>
                    {project.name}
                  </Typography>
                  <Typography variant='p' color='#616161'>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    endIcon={<Preview />}
                    variant='contained'
                    size='large'
                  >
                    Demo
                  </Button>
                  <Button
                    startIcon={<Code />}
                    variant='outlined'
                    color='secondary'
                    size='large'
                  >
                    Frontend
                  </Button>
                  <Button
                    startIcon={<Code />}
                    variant='outlined'
                    color='secondary'
                    size='large'
                  >
                    Backend
                  </Button>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
