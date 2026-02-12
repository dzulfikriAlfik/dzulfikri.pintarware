import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Layers,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn } from "@/components/shared/AnimatedContainer";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "2", label: "Primary Languages" },
];

const highlights = [
  {
    icon: Code2,
    title: "PHP & JavaScript Specialist",
    desc: "Deep expertise in both languages—monolith (Laravel, CodeIgniter) & microservice architecture.",
  },
  {
    icon: Layers,
    title: "Full Stack Developer",
    desc: "From React/Vue frontends to Node.js/PHP backends. MySQL, PostgreSQL, real-time WebSocket.",
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    desc: "Web apps, mobile (React Native, Framework 7, Native Android). Vanilla CSS to Tailwind & Bootstrap.",
  },
];

const techStack = [
  "PHP", "Laravel", "CodeIgniter", "JavaScript", "Node.js", "React", "Vue.js",
  "MySQL", "PostgreSQL", "Tailwind", "Bootstrap", "WebSocket",
  "React Native", "jQuery",
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section - light background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-snow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-azure/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frost/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Badge variant="glow" className="mb-6 gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Available for Remote Work
                </Badge>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6">
                  <span className="text-midnight">Hi, I'm</span>
                  <br />
                  <span className="gradient-text">Dzulfikri</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p className="text-lg sm:text-xl text-midnight/60 leading-relaxed mb-4 max-w-lg">
                  A{" "}
                  <span className="text-azure font-semibold">
                    Fullstack Developer
                  </span>{" "}
                  specializing in <span className="text-emphasis">PHP</span> & <span className="text-emphasis">JavaScript</span>—building
                  monolith apps (Laravel, CodeIgniter) and microservice-based solutions with React/Vue and Node.js.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
                <div className="flex items-center gap-2 text-sm text-midnight/50 mb-8">
                  <MapPin className="w-4 h-4" />
                  <span>Indonesia · Remote Worldwide</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Button size="lg" asChild>
                    <Link to="/projects">
                      View My Work <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/Resume Dzulfikri.pdf" download="Resume Dzulfikri.pdf">
                      <Download className="w-4 h-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-midnight/40 uppercase tracking-wider font-medium">
                    Connect
                  </span>
                  <div className="h-px flex-1 bg-frost-200 max-w-12" />
                  {[
                    { icon: Github, href: "https://github.com/dzulfikriAlfik" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/dzulfikri-alkautsari-b5b892187/" },
                    { icon: Mail, href: "mailto:dzulfikri.alkautsari@gmail.com" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-frost-200 flex items-center justify-center text-midnight/40 hover:text-azure hover:border-azure/30 hover:bg-azure/5 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="relative">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* Animated ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-azure/20"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 rounded-full border border-frost-200"
                    />

                    {/* Inner gradient circle */}
                    <div className="absolute inset-8 rounded-full bg-linear-to-br from-frost via-azure/10 to-frost-200 flex items-center justify-center shadow-2xl shadow-azure/10">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-2xl bg-linear-to-br from-azure to-midnight flex items-center justify-center shadow-lg">
                          <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <p className="font-mono text-xs text-midnight/50">
                          {"<Developer />"}
                        </p>
                      </div>
                    </div>

                    {/* Floating badges */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-frost-200 shadow-lg text-xs font-medium text-midnight flex items-center gap-1.5"
                    >
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      Problem Solver
                    </motion.div>

                    <motion.div
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-frost-200 shadow-lg text-xs font-medium text-midnight"
                    >
                      🚀 Fast Learner
                    </motion.div>

                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-frost-200 shadow-lg text-xs font-medium text-midnight"
                    >
                      ⚡ 3+ Years Exp
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-20"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-5 sm:p-6 rounded-2xl bg-white/50 border border-frost/60 backdrop-blur-sm hover:bg-white/70 hover:shadow-md transition-all duration-300"
              >
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-midnight/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - wave di bawah, transisi ke Technologies */}
      <section className="section-wave-highlights bg-snow py-20 lg:py-24 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="frost" className="mb-4">
                What I Bring
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-midnight">
                Why Work With Me?
              </h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-white/60 border-frost/40 hover:border-azure/20 h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-azure/10 to-azure/5 border border-azure/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-azure/10 transition-all duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-azure" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-midnight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-midnight/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-azure/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-8 translate-x-8" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1 Wave section - tengah page, Deel-style. Dark blue, wave top & bottom beda, biru gelap */}
      <section className="section-wave-center py-24 lg:py-32 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Technologies I Work With
              </h2>
              <p className="text-snow/70 text-sm">
                PHP • Laravel • CodeIgniter • React • Vue • Node.js • MySQL • PostgreSQL • Tailwind • WebSocket
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/15 border border-white/20 text-sm font-medium text-snow/90 hover:bg-white/25 hover:border-white/30 shadow-sm transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <p className="text-snow/60 mb-4">
                Interested in working together?
              </p>
              <Button size="lg" className="bg-azure hover:bg-azure-300 text-white" asChild>
                <Link to="/contact">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="max-w-3xl mx-auto text-center mt-20 pt-16 border-t border-white/10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Let's build something great together
              </h3>
              <p className="text-snow/60 mb-8">
                Monolith, microservice, or real-time features—I'm ready to contribute.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-azure hover:bg-azure-300" asChild>
                  <Link to="/contact">Get in touch <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
