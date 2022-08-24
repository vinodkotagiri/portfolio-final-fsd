import React from 'react';
import ParticlesBg from 'particles-bg';
import { Stack, Typography, Box } from '@mui/material';
import { MySkills } from './skills';
import { Lightbulb } from '@mui/icons-material';
const Skills = () => {
  return (
    <div>
      <ParticlesBg num={5} type='square' bg={true} />
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
          <Lightbulb sx={{ fontSize: '32px' }} color='secondary' />
          <Typography variant='h4' color='secondary'>
            Skills
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          backgroundColor: '#00000095',
          width: { md: '75%', xs: '100%' },
          height: { md: '65%', xs: '0' },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-40%)',
          padding: '2rem',
          borderRadius: '4rem',

          boxShadow: '2px 2px 32px 8px #9124A3',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          gap={6}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {MySkills.map((skill) => (
            <Stack
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              key={skill.id}
            >
              <img src={skill.logo} alt='html-logo' style={{ width: '5rem' }} />
              <Typography color='#FFFfff98' variant='p'>
                {skill.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Skills;
