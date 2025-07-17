import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know more about my journey and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Passionate Full Stack Developer
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 2 years of experience in full-stack development, I specialize in creating 
                robust, scalable web applications using modern technologies. My journey began with 
                a passion for problem-solving and has evolved into expertise across the entire 
                development stack.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and believe in continuous learning. 
                Whether it's exploring new frameworks, optimizing performance, or implementing 
                best practices, I'm always pushing the boundaries of what's possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <motion.div 
                  variants={itemVariants}
                  className="text-center p-6 bg-card rounded-lg shadow-card border border-border/50"
                >
                  <Code2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable and efficient code
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="text-center p-6 bg-card rounded-lg shadow-card border border-border/50"
                >
                  <Lightbulb className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Embracing new technologies and solutions
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="text-center p-6 bg-card rounded-lg shadow-card border border-border/50"
                >
                  <Target className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Delivering impactful solutions
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                <h4 className="text-xl font-semibold mb-6 gradient-text">Tech Stack Highlights</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2 text-primary">Frontend</h5>
                    <p className="text-muted-foreground">React, TypeScript, Tailwind CSS, Next.js</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-secondary">Backend</h5>
                    <p className="text-muted-foreground">Python Flask, Node.js, RESTful APIs</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-accent">Database & Cloud</h5>
                    <p className="text-muted-foreground">MongoDB, Azure, AWS, Liferay</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-primary">Development</h5>
                    <p className="text-muted-foreground">Git, Docker, CI/CD, Agile Methodologies</p>
                  </div>
                </div>
              </div>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20"
                >
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20"
                >
                  <div className="text-2xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};