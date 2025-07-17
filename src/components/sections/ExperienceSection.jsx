import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { Work, CalendarToday } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of multiple web applications using React and Python Flask. Implemented cloud solutions on Azure and improved application performance by 40%.',
      technologies: ['React', 'Python Flask', 'Azure', 'MongoDB', 'REST APIs'],
      achievements: [
        'Developed 5+ full-stack applications',
        'Reduced load times by 40%',
        'Led a team of 3 developers',
      ],
    },
    {
      company: 'Digital Innovations Ltd.',
      role: 'Frontend Developer',
      period: '2021 - 2022',
      description: 'Specialized in creating responsive web interfaces and implementing modern design systems. Collaborated with UX designers to deliver pixel-perfect implementations.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Material-UI', 'Git'],
      achievements: [
        'Built 10+ responsive web interfaces',
        'Implemented design system',
        'Improved user experience metrics by 25%',
      ],
    },
    {
      company: 'StartUp Hub',
      role: 'Junior Developer',
      period: '2020 - 2021',
      description: 'Started my journey in web development, working on various projects and learning modern technologies. Gained experience in both frontend and backend development.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
      achievements: [
        'Completed 20+ small projects',
        'Learned full-stack development',
        'Contributed to open source projects',
      ],
    },
  ];

  return (
    <Box
      id="experience"
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
            Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            My professional journey and key contributions in software development
          </Typography>
        </MotionBox>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #6366f1, #ec4899)',
              transform: { md: 'translateX(-50%)' },
              zIndex: 1,
            }}
          />

          {experiences.map((experience, index) => (
            <MotionBox
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 6,
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '12px', md: '50%' },
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                  transform: { md: 'translateX(-50%)' },
                  zIndex: 2,
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                }}
              />

              {/* Content card */}
              <MotionCard
                sx={{
                  ml: { xs: 6, md: index % 2 === 0 ? 0 : 'auto' },
                  mr: { md: index % 2 === 0 ? 'auto' : 0 },
                  width: { xs: '100%', md: '45%' },
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Work sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {experience.role}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                    }}
                  >
                    <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {experience.period}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {experience.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      Key Achievements:
                    </Typography>
                    {experience.achievements.map((achievement, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 0.5,
                          '&:before': {
                            content: '"•"',
                            color: 'primary.main',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            width: '1em',
                            marginLeft: '1em',
                          },
                        }}
                      >
                        {achievement}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {experience.technologies.map((tech) => (
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
                </CardContent>
              </MotionCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;