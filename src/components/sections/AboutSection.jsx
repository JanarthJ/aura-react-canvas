import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import { Code, Coffee, Lightbulb } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: <Coffee sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and best practices',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)',
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Passionate developer with 2+ years of experience creating digital solutions
          </Typography>
        </MotionBox>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    bgcolor: 'primary.main',
                    fontSize: '4rem',
                    fontWeight: 700,
                  }}
                >
                  J
                </Avatar>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Hi there! I'm Janarthanan
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                I'm a passionate Full Stack Developer with over 2 years of experience in creating 
                innovative web applications. My journey in tech has been driven by curiosity and 
                a love for solving complex problems through code.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                I specialize in the MERN stack, with expertise in React, Python Flask, Azure cloud 
                services, MongoDB, and Liferay. I'm constantly learning and adapting to new technologies 
                to stay at the forefront of web development.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {['React', 'Python', 'Azure', 'MongoDB', 'Flask', 'Node.js'].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 8 }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={highlight.title}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(30, 41, 59, 0.3)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {highlight.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  {highlight.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;