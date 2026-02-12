import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Heart,
  Coffee,
  Headphones,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn, AnimatedContainer, AnimatedItem } from "@/components/shared/AnimatedContainer";

const timeline = [
  {
    year: "2023 - Present",
    title: "Fullstack Developer",
    company: "PT. Pantona Teknologi Indonesia",
    desc: "Building full-stack web apps with Laravel, CodeIgniter, React, Vue, Node.js. MySQL/PostgreSQL, WebSocket for real-time features. Microservice & monolith architectures.",
    type: "work",
  },
  {
    year: "2022 - 2023",
    title: "Junior Developer",
    company: "PT. Ambis Nusantara (Schoolfess Indonesia)",
    desc: "Developed client projects using PHP (Laravel/CodeIgniter), JavaScript, React, Vue. Fullstack development with MySQL/PostgreSQL.",
    type: "work",
  },
  {
    year: "2018 - 2022",
    title: "PT. Dasena Prima",
    company: "Assistant Manager",
    desc: "Started my professional journey managing Fiber Optic Construction Projects",
    type: "work",
  },
  {
    year: "2014 - 2018",
    title: "Bachelor's Degree",
    company: "Computer Science",
    desc: "Studied algorithms, data structures, software engineering, and web development fundamentals.",
    type: "education",
  },
];

const interests = [
  { icon: Coffee, label: "Coffee Enthusiast" },
  { icon: Headphones, label: "Lo-fi Music" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: BookOpen, label: "Tech Reading" },
];

const values = [
  {
    title: "Clean Architecture",
    desc: "I believe in writing code that's easy to read, maintain, and scale. Every function has a clear purpose.",
  },
  {
    title: "Continuous Learning",
    desc: "Technology evolves fast. I dedicate time daily to learn new tools, patterns, and best practices.",
  },
  {
    title: "User-First Thinking",
    desc: "Great software starts with understanding the user. I always focus on creating intuitive experiences.",
  },
  {
    title: "Remote Reliability",
    desc: "Clear communication, consistent delivery, and proactive updates. I make remote collaboration seamless.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[15%] w-100 h-100 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-87.5 h-87.5 bg-frost/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image / Visual */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-frost via-azure/10 to-frost-200 border border-frost-200 shadow-2xl shadow-azure/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-28 h-28 mx-auto mb-6 rounded-3xl bg-linear-to-br from-azure to-midnight flex items-center justify-center shadow-xl">
                          <span className="text-5xl font-display font-extrabold text-white">D</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-midnight mb-1">Dzulfikri</h3>
                        <p className="font-mono text-sm text-azure">Fullstack Developer · PHP & JavaScript</p>
                        <div className="flex items-center justify-center gap-2 mt-3 text-sm text-midnight/50">
                          <MapPin className="w-3.5 h-3.5" />
                          Indonesia
                        </div>
                      </div>
                    </div>

                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage: `radial-gradient(circle, var(--color-midnight) 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-frost-200 shadow-lg"
                >
                  <span className="text-xs font-medium text-midnight">🎯 Goal-Oriented</span>
                </motion.div>

                <motion.div
                  animate={{ x: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -left-4 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-frost-200 shadow-lg"
                >
                  <span className="text-xs font-medium text-midnight">💡 Creative Thinker</span>
                </motion.div>
              </div>
            </FadeIn>

            {/* Right - Text */}
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="glow" className="mb-4">About Me</Badge>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6 leading-tight">
                  Passionate about building{" "}
                  <span className="gradient-text">great software</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4 text-midnight/60 leading-relaxed">
                  <p>
                    I'm a fullstack developer based in Indonesia with 3+ years of experience,
                    specializing in <strong className="text-midnight">PHP</strong> and <strong className="text-midnight">JavaScript</strong>. I build both
                    monolith applications (Laravel, CodeIgniter) and microservice-based systems
                    with React, Vue, or vanilla JS on the frontend and Node.js or PHP on the backend.
                  </p>
                  <p>
                    I work with MySQL and PostgreSQL, implement real-time features using WebSocket,
                    and have experience in mobile development with React Native, Framework 7,
                    and Native Android. For styling, I use vanilla CSS, Bootstrap, and Tailwind.
                  </p>
                  <p>
                    I'm currently seeking remote opportunities where I can contribute my fullstack
                    expertise to meaningful projects. I thrive in collaborative environments and
                    believe in clear communication as the foundation of great teamwork.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Button asChild>
                    <Link to="/projects">
                      See My Work <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-frost/20 via-azure-50/10 to-frost/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-azure/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="My Core Values"
            subtitle="Principles that guide my work and make me a reliable developer"
          />

          <AnimatedContainer className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimatedItem key={value.title}>
                <Card className="h-full bg-white/60 border-frost/40 hover:border-azure/15">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-azure/10 border border-azure/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-display font-bold text-azure text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-midnight mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-midnight/50 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="My Journey"
            subtitle="A timeline of my professional growth and education"
          />

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-frost-200 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-azure border-4 border-snow -translate-x-1.5 mt-2 z-10 shadow-sm" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <Badge variant={item.type === "work" ? "default" : "frost"} className="mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.year}
                    </Badge>
                    <h3 className="font-display text-lg font-bold text-midnight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-azure mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-midnight/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-frost/10 via-azure-50/10 to-frost/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-bold text-midnight mb-2">
                Beyond Coding
              </h2>
              <p className="text-midnight/50 text-sm">
                Things I enjoy when I'm not writing code
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 border border-frost/60 shadow-sm hover:shadow-md hover:border-azure/15 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-azure" />
                  <span className="text-sm font-medium text-midnight">
                    {item.label}
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
