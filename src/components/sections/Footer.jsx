import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Button } from '@mui/material';
import { Favorite, KeyboardArrowUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(30, 41, 59, 0.8)',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                className="gradient-text"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Janarthanan
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Full Stack Developer crafting digital experiences
              </Typography>
            </MotionBox>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {quickLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      textTransform: 'none',
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </MotionBox>
          </Grid>

          {/* Back to Top */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{ textAlign: 'right' }}
            >
              <IconButton
                onClick={scrollToTop}
                sx={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  color: 'primary.main',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.2)',
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <KeyboardArrowUp />
              </IconButton>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <span>© {new Date().getFullYear()} Janarthanan. Made with</span>
            <Favorite sx={{ fontSize: 16, color: '#ef4444' }} />
            <span>and lots of coffee</span>
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Footer;