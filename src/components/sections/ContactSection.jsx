import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { Email, LinkedIn, GitHub, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const socialLinks = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'janarthanan@example.com',
      link: 'mailto:janarthanan@example.com',
      color: '#ea4335',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/janarthanan',
      link: 'https://linkedin.com/in/janarthanan',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'github.com/janarthanan',
      link: 'https://github.com/janarthanan',
      color: '#333',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Ready to start your next project? Let's discuss how we can work together
          </Typography>
        </MotionBox>

        <Grid container spacing={6} alignItems="stretch">
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <MotionCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{
                background: 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                height: '100%',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Send me a message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(148, 163, 184, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'text.primary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(148, 163, 184, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'text.primary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(148, 163, 184, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'text.primary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4f46e5, #db2777)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Let's connect!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </Typography>

                <Box sx={{ space: 2 }}>
                  {socialLinks.map((social, index) => (
                    <MotionBox
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(148, 163, 184, 0.05)',
                        '&:hover': {
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                          transform: 'translateX(5px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconButton
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: social.color,
                          mr: 2,
                          '&:hover': {
                            transform: 'scale(1.2)',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {social.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {social.value}
                        </Typography>
                      </Box>
                    </MotionBox>
                  ))}
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;