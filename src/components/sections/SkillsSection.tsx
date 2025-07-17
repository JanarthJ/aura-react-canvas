import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  GitBranch, 
  Cloud,
  Brain,
  Users
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    skills: [
      { name: "Python Flask", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Express.js", level: 75 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Azure", level: 80 },
      { name: "AWS", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 65 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: GitBranch,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Liferay", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "Testing", level: 75 }
    ]
  }
];

const softSkills = [
  { name: "Problem Solving", icon: Brain },
  { name: "Team Collaboration", icon: Users },
  { name: "Communication", icon: Users },
  { name: "Continuous Learning", icon: Brain },
  { name: "Project Management", icon: GitBranch },
  { name: "Innovation", icon: Cloud }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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


  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-card p-8 rounded-2xl shadow-card border border-border/50"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.bgColor} ${category.borderColor} border mr-4`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${
                              index === 0 ? 'from-primary to-primary-glow' :
                              index === 1 ? 'from-secondary to-secondary-glow' :
                              index === 2 ? 'from-accent to-accent-glow' :
                              'from-orange-500 to-orange-400'
                            } rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
              Soft Skills
            </h3>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300"
                  >
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};