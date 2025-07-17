import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/janarthanan/ecommerce-platform",
    featured: true
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Integrated with Azure cloud services.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Azure", "WebSocket", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/janarthanan/task-manager",
    featured: true
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard for business intelligence with interactive charts, real-time data visualization, and customizable reports using D3.js and Python Flask.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python Flask", "D3.js", "PostgreSQL", "Redis", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/janarthanan/analytics-dashboard",
    featured: true
  },
  {
    title: "Social Media App",
    description: "A modern social media application with post sharing, real-time messaging, and user engagement features. Built with MERN stack and Socket.io.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/janarthanan/social-media-app",
    featured: false
  },
  {
    title: "Weather Forecast App",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Integrated with multiple weather APIs.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/janarthanan/weather-app",
    featured: false
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentProject, setCurrentProject] = useState(0);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Showcasing my best work and technical expertise
            </p>
          </motion.div>

          {/* Featured Projects Carousel */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <motion.div 
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredProjects[currentProject].image} 
                      alt={featuredProjects[currentProject].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      {featuredProjects[currentProject].title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredProjects[currentProject].description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredProjects[currentProject].technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="border-border/50 hover:border-primary">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Carousel Controls */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={prevProject}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={nextProject}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
              More Projects
            </h3>
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-300"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
