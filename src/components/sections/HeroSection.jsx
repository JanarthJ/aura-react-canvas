import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Download, Chat, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import ParticleBackground from '../ParticleBackground';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
      }}
    >
      <ParticleBackground />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionTypography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              mb: 3,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Box component="span" sx={{ color: 'text.primary' }}>
              Hi, I'm{' '}
            </Box>
            <Box component="span" className="gradient-text">
              Janarthanan
            </Box>
          </MotionTypography>
          
          <MotionTypography
            variant="h2"
            component="h2"
            className="gradient-text"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.75rem', lg: '2rem' },
              fontWeight: 600,
              mb: 2,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full Stack Developer
          </MotionTypography>
          
          <MotionTypography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Passionate about creating innovative web solutions with modern technologies. 
            Specializing in React, Python Flask, and cloud platforms to build scalable applications.
          </MotionTypography>
        </MotionBox>
        
        <MotionBox
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MotionButton
            variant="contained"
            size="large"
            startIcon={<Download />}
            sx={{
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #4f46e5, #db2777)',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </MotionButton>
          
          <MotionButton
            variant="outlined"
            size="large"
            startIcon={<Chat />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </MotionButton>
        </MotionBox>
      </Container>
      
      <MotionBox
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'text.secondary',
          '&:hover': {
            color: 'primary.main',
          },
        }}
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <MotionTypography variant="body2" sx={{ mb: 1 }}>
          Scroll Down
        </MotionTypography>
        <MotionBox
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <KeyboardArrowDown sx={{ fontSize: 24 }} />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default HeroSection;