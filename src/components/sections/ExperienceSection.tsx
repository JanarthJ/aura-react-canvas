import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    description: "Leading development of enterprise web applications using React and Python Flask. Architected scalable microservices and implemented CI/CD pipelines.",
    technologies: ["React", "TypeScript", "Python Flask", "Azure", "MongoDB", "Docker"],
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led a team of 3 developers on major product features",
      "Implemented automated testing, increasing code coverage to 90%"
    ]
  },
  {
    company: "Digital Innovations Ltd",
    role: "Full Stack Developer",
    duration: "2022 - 2023",
    location: "Chennai, India",
    description: "Developed and maintained multiple client-facing applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS", "Liferay"],
    achievements: [
      "Built 5+ responsive web applications from scratch",
      "Integrated third-party APIs and payment gateways",
      "Mentored junior developers on best practices"
    ]
  },
  {
    company: "StartupTech",
    role: "Junior Full Stack Developer",
    duration: "2021 - 2022",
    location: "Bangalore, India",
    description: "Started my professional journey contributing to various web development projects. Gained hands-on experience with modern web technologies and agile methodologies.",
    technologies: ["React", "JavaScript", "Python", "PostgreSQL", "Git"],
    achievements: [
      "Contributed to 3 major product releases",
      "Learned agile development methodologies",
      "Developed strong foundation in web technologies"
    ]
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              My journey through the tech industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />

                  <motion.div 
                    className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Building className="h-4 w-4" />
                          {experience.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};