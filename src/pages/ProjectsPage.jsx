import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Layers,
  Eye,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn, AnimatedContainer, AnimatedItem } from "@/components/shared/AnimatedContainer";

const filters = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with Laravel backend, React/Vue frontend. Product management, cart, payment integration, admin dashboard. MySQL/PostgreSQL.",
    image: null,
    tags: ["Laravel", "React", "Vue", "MySQL", "Tailwind"],
    category: "Full Stack",
    github: null,
    demo: null,
    featured: true,
    color: "from-azure to-midnight",
  },
  {
    title: "Real-time Dashboard",
    description:
      "Collaborative dashboard with real-time updates via WebSocket. Live data visualization, notifications, and team collaboration features.",
    image: null,
    tags: ["Node.js", "React", "WebSocket", "PostgreSQL"],
    category: "Full Stack",
    github: null,
    demo: null,
    featured: true,
    color: "from-azure-300 to-azure-600",
  },
  {
    title: "Project Management (Monolith)",
    description:
      "Internal project management built with Laravel and CodeIgniter. Kanban boards, tasks, reports, and role-based access.",
    image: null,
    tags: ["Laravel", "CodeIgniter", "PHP", "MySQL", "Bootstrap"],
    category: "Full Stack",
    github: null,
    demo: null,
    featured: false,
    color: "from-azure-200 to-azure",
  },
  {
    title: "Admin Dashboard",
    description:
      "Admin panel with React/Vue frontend and Node.js/PHP API. Charts, tables, CRUD operations. Vanilla CSS, Bootstrap, Tailwind.",
    image: null,
    tags: ["React", "Vue", "Node.js", "PHP", "Tailwind"],
    category: "Frontend",
    github: null,
    demo: null,
    featured: false,
    color: "from-azure to-midnight-200",
  },
  {
    title: "Mobile App (React Native)",
    description:
      "Cross-platform mobile app built with React Native. Offline support, push notifications, and REST API integration.",
    image: null,
    tags: ["React Native", "JavaScript", "REST API"],
    category: "Mobile",
    github: null,
    demo: null,
    featured: false,
    color: "from-midnight-100 to-azure",
  },
];

function ProjectCard({ project, index }) {
  return (
    <Card className="group h-full bg-white/60 border-frost/40 hover:border-azure/20 overflow-hidden flex flex-col">
      {/* Project visual header */}
      <div className={`relative h-48 bg-linear-to-br ${project.color} overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Layers className="w-8 h-8 text-white" />
          </div>
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20 gap-1">
              <Star className="w-3 h-3 fill-current" /> Featured
            </Badge>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Eye className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="frost" className="text-[11px] px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {project.demo && (
          <Button variant="ghost" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          </Button>
        )}
        {project.github && (
          <Button variant="ghost" size="sm" className="flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <section className="relative pt-28 pb-20 lg:pb-24 overflow-hidden min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-125 h-125 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-[5%] w-100 h-100 bg-frost/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="My Projects"
            subtitle="A curated selection of projects that showcase my skills and experience in building modern web applications."
          />

          {/* Filter Tabs */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-azure text-white shadow-md shadow-azure/20"
                      : "bg-white/60 text-midnight/60 border border-frost/60 hover:text-midnight hover:bg-frost/40"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-midnight/40">
              <p className="text-lg">No projects found for this category.</p>
            </div>
          )}

          {/* GitHub CTA */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-16">
              <p className="text-midnight/50 mb-4 text-sm">
                Want to see more? Check out my GitHub for all projects.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/dzulfikriAlfik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> View GitHub Profile{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
