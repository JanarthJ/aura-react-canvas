import React from 'react';
import { Box, Typography, Container, Grid, LinearProgress } from '@mui/material';
import { Code, Storage, Build, Psychology } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Material-UI', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: <Storage sx={{ fontSize: 40, color: 'secondary.main' }} />,
      skills: [
        { name: 'Python Flask', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Cloud',
      icon: <Build sx={{ fontSize: 40, color: 'primary.main' }} />,
      skills: [
        { name: 'Azure', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Liferay', level: 80 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Psychology sx={{ fontSize: 40, color: 'secondary.main' }} />,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Continuous Learning', level: 95 },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.3) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            className="gradient-text"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Technologies and tools I work with to create amazing digital experiences
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={category.title}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
                viewport={{ once: true }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  {category.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>

                <Box sx={{ space: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <MotionBox
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                      viewport={{ once: true }}
                      sx={{ mb: 3 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            color: 'text.primary',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(148, 163, 184, 0.2)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            background: `linear-gradient(90deg, ${
                              category.title === 'Frontend' || category.title === 'Tools & Cloud'
                                ? '#6366f1'
                                : '#ec4899'
                            }, ${
                              category.title === 'Frontend' || category.title === 'Tools & Cloud'
                                ? '#818cf8'
                                : '#f472b6'
                            })`,
                          },
                        }}
                      />
                    </MotionBox>
                  ))}
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;