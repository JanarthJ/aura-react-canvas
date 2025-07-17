import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip,
  IconButton 
} from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Flask backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Flask', 'MongoDB', 'Stripe API', 'Azure'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and responsive design for all devices.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with modern UI design.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI, featuring smooth animations and dark/light theme toggle.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            A showcase of my recent work and side projects
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              md={project.featured ? 6 : 6} 
              key={project.title}
            >
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 2,
                    }}
                  >
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                )}

                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            color: 'primary.main',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        sx={{
                          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4f46e5, #db2777)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      
                      <IconButton
                        href={project.githubUrl}
                        sx={{
                          color: 'text.secondary',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                          '&:hover': {
                            color: 'primary.main',
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mt: 8 }}
        >
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/janarthanan"
            target="_blank"
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
          >
            View All Projects on GitHub
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ProjectsSection;