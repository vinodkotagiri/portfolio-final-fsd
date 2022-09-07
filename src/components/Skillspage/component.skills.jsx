import React from 'react';
// import ParticlesBg from 'particles-bg';
import { Stack, Typography, Grid } from '@mui/material';
import { MySkills } from './skills';
import { Lightbulb } from '@mui/icons-material';
const Skills = () => {
  return (
    <div>
      {/* <ParticlesBg type='' bg={true} /> */}
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          marginBottom: '64px',

          paddingTop: '16px'
        }}>
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Lightbulb sx={{ fontSize: '32px' }} color='secondary' />
          <Typography variant='h4' color='secondary'>
            Skills
          </Typography>
        </Stack>
      </Stack>

      <Grid
        container
        spacing={8}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem '
        }}>
        {MySkills.map((skill) => (
          <Grid item key={skill.id}>
            <Stack
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
              key={skill.id}>
              <img src={skill.logo} alt='html-logo' style={{ width: '5rem' }} />
              <Typography
                color='#ffffff75'
                variant='p'
                sx={{ marginTop: '8px' }}>
                {skill.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
