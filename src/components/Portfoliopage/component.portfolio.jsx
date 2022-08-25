import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Grid,
  Modal,
  Box,
} from '@mui/material';
import ParticlesBg from 'particles-bg';
import { Assessment } from '@mui/icons-material';
import { Projects } from './projects';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'secondary.light',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '32px',
  p: 4,
};

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [modalId, setModalId] = useState(0);
  const handleOpen = (event) => {
    setOpen(true);
    console.log(event.target.value);
    setModalId(event.target.value - 1);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ParticlesBg num={5} type='thick' bg={true} />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          marginBottom: '64px',
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
      <Grid container spacing={2} sx={{ padding: '8px' }}>
        {Projects.map((project) => (
          <Grid item key={project.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image={project.cover}
                alt={`${project.name}-cover`}
              />
              <CardContent>
                <Typography gutterBottom variant='h4' component='div'>
                  {project.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant='outlined'
                  color='secondary'
                  value={project.id}
                  size='small'
                  onClick={handleOpen}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h3' component='h2'>
            {Projects[modalId].name}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {Projects[modalId].techs}
          </Typography>
          <Stack direction='row' gap={2} sx={{ marginTop: '2rem' }}>
            <Button
              variant='contained'
              onClick={() => window.open(`${Projects[modalId].deployedUrl}`)}
            >
              View Demo
            </Button>
            <Button
              variant='outlined'
              onClick={() => window.open(`${Projects[modalId].frontEndCode}`)}
            >
              Frontend Code
            </Button>
            <Button
              variant='outlined'
              onClick={() => window.open(`${Projects[modalId].backEndCode}`)}
            >
              Backend Code
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default Portfolio;
