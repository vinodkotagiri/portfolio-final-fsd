import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { IntegrationInstructionsRounded } from '@mui/icons-material';

import {
  HtmlLogo,
  CssLogo,
  JSLogo,
  FigmaLogo,
  TypescriptLogo,
  PythonLogo,
  NodeLogo,
  BootstrapLogo,
  TailwindLogo,
  MUILogo,
  AntLogo,
  ReactLogo,
  ReduxLogo,
  GraphQlLogo,
  MongoLogo,
  MSQlLogo,
  GitLogo,
  AwsLogo,
  GCPLogo,
} from '../assets/logos';

const SkillsPage = () => {
  const skills = [
    {
      id: '1',
      name: 'HTML',
      logo: HtmlLogo,
      color: '#E55126',
    },
    {
      id: '2',
      name: 'CSS',
      logo: CssLogo,
      color: '#264DE4',
    },
    {
      id: '3',
      name: 'JAVA SCRIPT',
      logo: JSLogo,
      color: '#F1DC50',
    },
    {
      id: '4',
      name: 'TYPE SCRIPT',
      logo: TypescriptLogo,
      color: '#3178C6',
    },
    {
      id: '5',
      name: 'PYTHON',
      logo: PythonLogo,
      color: '#FFD242',
    },
    {
      id: '6',
      name: 'BOOTSTRAP',
      logo: BootstrapLogo,
      color: '#563D7C',
    },
    {
      id: '7',
      name: 'TAILWIND',
      logo: TailwindLogo,
      color: '#44A8B3',
    },
    {
      id: '8',
      name: 'MATERIAL UI',
      logo: MUILogo,
      color: '#0081CB',
    },
    {
      id: '9',
      name: 'ANT DESIGN',
      logo: AntLogo,
      color: '#000000',
    },
    {
      id: '10',
      name: 'FIGMA',
      logo: FigmaLogo,
      color: '#A259FF',
    },
    {
      id: '11',
      name: 'REACT',
      logo: ReactLogo,
      color: '#00D8FF',
    },
    {
      id: '12',
      name: 'REDUX',
      logo: ReduxLogo,
      color: '#764ABC',
    },
    {
      id: '13',
      name: 'NODE JS',
      logo: NodeLogo,
      color: '#83CD29',
    },
    {
      id: '14',
      name: 'MONGODB',
      logo: MongoLogo,
      color: '#58AA50',
    },
    {
      id: '15',
      name: 'MY SQL',
      logo: MSQlLogo,
      color: '#158098',
    },

    {
      id: '16',
      name: 'GraphQL',
      logo: GraphQlLogo,
      color: '#E10098',
    },
    {
      id: '17',
      name: 'GIT',
      logo: GitLogo,
      color: '#DE4C36',
    },
    {
      id: '18',
      name: 'AWS',
      logo: AwsLogo,
      color: '#FF9900',
    },
    {
      id: '19',
      name: 'GCP',
      logo: GCPLogo,
      color: '#4285F4',
    },
  ];

  return (
    <Box sx={{ flexWrap: 'wrap', marginBlockStart: '4rem' }}>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <IntegrationInstructionsRounded
          color='primary'
          sx={{ fontSize: '2.7rem' }}
        />
        <Typography variant='h3' color='primary'>
          SKILLS
        </Typography>
      </Stack>
      
      <Stack
        direction='column'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          {skills.map((skill) => (
            <Stack
              direction='row'
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '0.25rem',
                border: `2px solid ${skill.color}`,
                borderRadius: '1rem',
                boxShadow: `1px 1px 6px 1px ${skill.color}`,
              }}
              key={skill.id}
            >
              <img
                src={skill.logo}
                alt='logo'
                style={{
                  width: '3.5rem',
                  marginRight: '1rem',
                  padding: '0.25rem 0.25rem',
                }}
              />
              <Typography variant='h4' color={skill.color}>
                {skill.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkillsPage;
