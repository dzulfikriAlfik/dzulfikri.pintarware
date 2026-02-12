import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn, AnimatedContainer, AnimatedItem } from "@/components/shared/AnimatedContainer";
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  GitBranch,
  Cloud,
  Terminal,
  Palette,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    description: "Responsive UIs with React, Vue, vanilla JS & jQuery",
    gradient: "from-azure to-azure-300",
    skills: [
      { name: "React / ReactJS", highlight: true },
      { name: "Vue.js", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "jQuery", highlight: false },
      { name: "Vanilla JS", highlight: false },
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap", highlight: true },
      { name: "Vanilla CSS", highlight: false },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Monolith & microservice—PHP, Node.js, Python, Java",
    gradient: "from-azure-300 to-midnight",
    skills: [
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "CodeIgniter", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Python", highlight: false },
      { name: "Java", highlight: false },
      { name: "REST API", highlight: true },
      { name: "WebSocket", highlight: true },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Relational databases for scalable applications",
    gradient: "from-midnight to-azure-500",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Query Optimization", highlight: false },
      { name: "Schema Design", highlight: false },
    ],
  },
  {
    title: "Mobile & DevOps",
    icon: Cloud,
    description: "Mobile dev, real-time, and deployment",
    gradient: "from-azure-200 to-azure",
    skills: [
      { name: "React Native", highlight: true },
      { name: "Framework 7", highlight: true },
      { name: "Native Android (Java)", highlight: false },
      { name: "Docker", highlight: false },
      { name: "Git / GitHub", highlight: true },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "Terminal", icon: Terminal },
  { name: "Figma", icon: Palette },
  { name: "Docker", icon: Cloud },
  { name: "Postman", icon: Wrench },
  { name: "Mobile-First", icon: Smartphone },
  { name: "npm / yarn", icon: Server },
];

export default function SkillsPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[20%] w-100 h-100 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[10%] w-87.5 h-87.5 bg-frost/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technologies and tools I use to bring ideas to life. Always learning, always improving."
          />

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <FadeIn key={category.title} delay={catIndex * 0.15}>
                <Card className="group h-full bg-white/60 border-frost/40 hover:border-azure/20 overflow-hidden transition-all duration-300">
                  {/* Category gradient header */}
                  <div className={`h-1.5 bg-linear-to-r ${category.gradient}`} />

                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-azure/10 to-azure/5 border border-azure/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-azure" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-midnight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-midnight/50">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.05 + catIndex * 0.1,
                          }}
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                              skill.highlight
                                ? "bg-azure/10 text-azure border border-azure/15 hover:bg-azure/15"
                                : "bg-frost/50 text-midnight/60 border border-frost/80 hover:bg-frost/80 hover:text-midnight/80"
                            }`}
                          >
                            {skill.highlight && (
                              <Sparkles className="w-3 h-3" />
                            )}
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Legend */}
                    <div className="mt-5 pt-4 border-t border-frost/60 flex items-center gap-4 text-[11px] text-midnight/35">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-azure/50" />
                        Primary skill
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-frost" />
                        Familiar with
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-frost/25 via-azure-50/15 to-frost/35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-azure/12 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-bold text-midnight mb-2">
                Tools & Workflow
              </h2>
              <p className="text-midnight/50 text-sm">
                My everyday development toolkit
              </p>
            </div>
          </FadeIn>

          <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <AnimatedItem key={tool.name}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/60 border border-frost/60 hover:border-azure/20 hover:shadow-lg hover:shadow-azure/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-frost/50 flex items-center justify-center">
                    <tool.icon className="w-5 h-5 text-azure" />
                  </div>
                  <span className="text-sm font-medium text-midnight/70">
                    {tool.name}
                  </span>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <Card className="bg-linear-to-br from-midnight to-midnight-200 border-0 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-azure/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-azure/5 rounded-full blur-2xl" />

              <CardContent className="relative p-10 md:p-14 text-center">
                <Badge className="bg-azure/20 text-azure-100 border-azure/20 mb-4">
                  Always Growing
                </Badge>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Currently Exploring
                </h3>
                <p className="text-snow/60 mb-8 max-w-lg mx-auto">
                  I dedicate time every day to learn new technologies and
                  improve my skills. Here's what I'm diving into right now.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Python",
                    "Java",
                    "Microservices",
                    "System Design",
                    "API Integration",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm text-snow/80 font-medium hover:bg-white/15 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}