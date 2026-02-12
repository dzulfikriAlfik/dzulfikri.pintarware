import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  BookOpen,
  Share2,
  User,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn } from "@/components/shared/AnimatedContainer";

const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications: Lessons from Production",
    excerpt:
      "After working on several large-scale React projects, here are the patterns and practices I've found most valuable for maintainability and performance.",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Best Practices"],
    color: "from-azure to-azure-300",
    content: [
      {
        type: "paragraph",
        text: "Building large-scale React applications requires more than just knowing the framework — it demands thoughtful architecture decisions, performance awareness, and disciplined coding practices. Over the past few years, I've had the opportunity to work on several production React apps, and I want to share what I've learned.",
      },
      {
        type: "heading",
        text: "1. Component Architecture Matters",
      },
      {
        type: "paragraph",
        text: "One of the most impactful decisions you'll make is how you structure your components. I've found that separating components into three categories works really well: UI components (pure, reusable), feature components (business logic), and page components (routing and layout).",
      },
      {
        type: "paragraph",
        text: "This separation of concerns makes your codebase predictable and testable. UI components can be shared across features, feature components encapsulate domain logic, and page components tie everything together.",
      },
      {
        type: "heading",
        text: "2. State Management Strategy",
      },
      {
        type: "paragraph",
        text: "Not every piece of state needs to live in a global store. I follow a simple rule: keep state as local as possible, lift it up only when needed, and reach for global state management (like Zustand or Redux) only for truly app-wide concerns like authentication, theme, or notification state.",
      },
      {
        type: "paragraph",
        text: "Server state is a completely different beast — tools like React Query or SWR handle caching, refetching, and synchronization far better than any manual approach. If you haven't adopted one of these yet, it's a game-changer.",
      },
      {
        type: "heading",
        text: "3. Performance from the Start",
      },
      {
        type: "paragraph",
        text: "Performance isn't something you bolt on at the end. Code splitting with React.lazy(), memoization with useMemo/useCallback (where it actually matters), and virtualization for long lists should be part of your toolkit from day one.",
      },
      {
        type: "paragraph",
        text: "The React DevTools Profiler is your best friend here. Measure before you optimize, and focus on the biggest bottlenecks first. Most perceived performance issues come from unnecessary re-renders or unoptimized network requests.",
      },
      {
        type: "heading",
        text: "4. Testing as a Safety Net",
      },
      {
        type: "paragraph",
        text: "In production applications, tests aren't optional — they're your safety net. I prioritize integration tests with React Testing Library for critical user flows, unit tests for complex business logic, and E2E tests with Cypress or Playwright for the most important happy paths.",
      },
      {
        type: "paragraph",
        text: "The key is to test behavior, not implementation details. Your tests should give you confidence to refactor without fear of breaking things.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Scalable React applications are built on strong foundations: clean architecture, thoughtful state management, proactive performance practices, and reliable testing. These patterns have served me well across multiple production projects, and I hope they help you too.",
      },
    ],
  },
  {
    id: 2,
    slug: "why-typescript-changed-how-i-write-code",
    title: "Why TypeScript Changed How I Write Code",
    excerpt:
      "A deep dive into how adopting TypeScript has improved my code quality, reduced bugs, and made refactoring a breeze in large codebases.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "DX"],
    color: "from-azure-300 to-midnight",
    content: [
      {
        type: "paragraph",
        text: "When I first encountered TypeScript, I was skeptical. Why add complexity to JavaScript when things seemed to work fine? But after using it seriously on a medium-sized project, I realized it wasn't just about types — it was about confidence.",
      },
      {
        type: "heading",
        text: "The Confidence Factor",
      },
      {
        type: "paragraph",
        text: "TypeScript gives you confidence that your code does what you think it does. Autocompletion becomes incredibly useful, refactoring becomes safe, and entire categories of runtime errors simply disappear. When your IDE catches a bug before you even run the code, that's developer experience done right.",
      },
      {
        type: "heading",
        text: "Better Documentation Through Types",
      },
      {
        type: "paragraph",
        text: "Types serve as living documentation. When you define an interface for a component's props or a function's parameters, you're creating a contract that's always up to date. New team members can understand your code faster, and you can revisit old code without guessing what data structures look like.",
      },
      {
        type: "heading",
        text: "Practical Tips for Getting Started",
      },
      {
        type: "paragraph",
        text: "Start gradually — you don't need to convert your entire codebase overnight. Begin with strict mode off, type your most critical modules first, and incrementally increase coverage. Use 'unknown' instead of 'any' when you're unsure, and leverage utility types like Partial, Pick, and Omit to keep your types DRY.",
      },
      {
        type: "paragraph",
        text: "The investment pays off quickly. Within a week of serious TypeScript usage, you'll wonder how you ever coded without it.",
      },
    ],
  },
  {
    id: 3,
    slug: "professional-dev-environment-2026",
    title: "Setting Up a Professional Dev Environment in 2026",
    excerpt:
      "My complete development setup guide including VS Code extensions, terminal themes, Git workflows, and productivity tools that I use daily.",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Productivity",
    tags: ["Tools", "Workflow", "VS Code"],
    color: "from-midnight to-azure-500",
    content: [
      {
        type: "paragraph",
        text: "Your development environment is your workshop. Having the right tools configured properly can dramatically boost your productivity and make coding more enjoyable. Here's my complete 2026 setup.",
      },
      {
        type: "heading",
        text: "VS Code: The Swiss Army Knife",
      },
      {
        type: "paragraph",
        text: "VS Code remains my editor of choice. My essential extensions include: ESLint and Prettier for code formatting, GitLens for git history, GitHub Copilot for AI assistance, Error Lens for inline error display, and the Thunder Client for API testing. I keep my extensions minimal — too many can slow things down.",
      },
      {
        type: "heading",
        text: "Terminal Setup",
      },
      {
        type: "paragraph",
        text: "I use iTerm2 with Oh My Zsh and the Powerlevel10k theme. Key plugins include zsh-autosuggestions, zsh-syntax-highlighting, and z for quick directory jumping. My terminal is where I spend a lot of time, so making it fast and informative pays dividends.",
      },
      {
        type: "heading",
        text: "Git Workflow",
      },
      {
        type: "paragraph",
        text: "I follow conventional commits with commitlint, use Husky for pre-commit hooks, and lint-staged to run formatters only on changed files. This keeps the codebase consistent without slowing down the development process. For branching, I use a simplified Git Flow with feature branches and squash merges.",
      },
      {
        type: "paragraph",
        text: "Investing time in your development environment isn't procrastination — it's compounding returns on every hour you spend coding afterward.",
      },
    ],
  },
  {
    id: 4,
    slug: "art-of-writing-clean-api-endpoints",
    title: "The Art of Writing Clean API Endpoints",
    excerpt:
      "Best practices for designing RESTful APIs that are intuitive, well-documented, and easy to maintain as your application grows.",
    date: "December 10, 2025",
    readTime: "7 min read",
    category: "Backend",
    tags: ["API", "Node.js", "REST"],
    color: "from-azure-200 to-azure",
    content: [
      {
        type: "paragraph",
        text: "A well-designed API is a joy to work with. It's intuitive, consistent, and self-documenting. A poorly designed one creates friction for every developer who touches it. Here's how I approach API design.",
      },
      {
        type: "heading",
        text: "Resource-Oriented Design",
      },
      {
        type: "paragraph",
        text: "Think in nouns, not verbs. Instead of POST /createUser, use POST /users. Instead of GET /getUserOrders, use GET /users/:id/orders. This makes your API predictable and follows REST conventions that most developers already understand.",
      },
      {
        type: "heading",
        text: "Consistent Error Handling",
      },
      {
        type: "paragraph",
        text: "Every error response should follow the same structure: a status code, an error code, a human-readable message, and optionally, validation details. This consistency means frontend developers can build a single error handler that works for any endpoint.",
      },
      {
        type: "heading",
        text: "Versioning and Documentation",
      },
      {
        type: "paragraph",
        text: "Always version your API from the start — /api/v1/ is much easier to manage than trying to add versioning retroactively. Pair this with auto-generated documentation using tools like Swagger/OpenAPI, and your API becomes a pleasure to integrate with.",
      },
      {
        type: "paragraph",
        text: "Clean APIs aren't just about technical correctness — they're about empathy for the developers who will consume them.",
      },
    ],
  },
  {
    id: 5,
    slug: "from-junior-to-mid-level-growth-journey",
    title: "From Junior to Mid-Level: My Growth Journey",
    excerpt:
      "Reflecting on the key milestones, challenges, and strategies that helped me grow from a junior developer to a confident mid-level professional.",
    date: "November 28, 2025",
    readTime: "12 min read",
    category: "Career",
    tags: ["Career", "Growth", "Personal"],
    color: "from-azure to-midnight-200",
    content: [
      {
        type: "paragraph",
        text: "The jump from junior to mid-level developer isn't about years of experience — it's about mindset shifts, hard-earned lessons, and consistently pushing yourself beyond your comfort zone. Here's my honest reflection on this journey.",
      },
      {
        type: "heading",
        text: "Owning My Mistakes",
      },
      {
        type: "paragraph",
        text: "As a junior, I was afraid of making mistakes. As a mid-level developer, I learned that mistakes are the fastest teachers. The key is owning them, learning from them, and making sure they don't happen again. Every production bug I caused taught me something valuable about testing, deployment, or architecture.",
      },
      {
        type: "heading",
        text: "Reading Code > Writing Code",
      },
      {
        type: "paragraph",
        text: "One of the biggest level-ups was spending more time reading other people's code. Open-source projects, senior developers' pull requests, and even codebases in languages I wasn't familiar with. Reading great code teaches patterns and approaches you'd never discover on your own.",
      },
      {
        type: "heading",
        text: "Communication is a Superpower",
      },
      {
        type: "paragraph",
        text: "Technical skills get you hired, but communication skills get you promoted. Learning to explain complex technical concepts to non-technical stakeholders, writing clear documentation, and giving constructive code reviews were all pivotal in my growth. This is especially crucial in remote work where async communication is the norm.",
      },
      {
        type: "paragraph",
        text: "The journey continues. There's always more to learn, and that's what makes this career exciting. If you're a junior developer reading this — keep going. The growth is real and worth every challenge.",
      },
    ],
  },
  {
    id: 6,
    slug: "docker-for-frontend-developers",
    title: "Docker for Frontend Developers: A Practical Guide",
    excerpt:
      "You don't need to be a DevOps engineer to use Docker. Here's how frontend developers can leverage containers in their workflow.",
    date: "November 15, 2025",
    readTime: "9 min read",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Tutorial"],
    color: "from-midnight-100 to-azure",
    content: [
      {
        type: "paragraph",
        text: "Docker often feels like a backend/DevOps tool, but it's incredibly useful for frontend developers too. Whether it's ensuring consistent environments, simplifying onboarding, or streamlining deployments, Docker deserves a place in your toolkit.",
      },
      {
        type: "heading",
        text: "Why Docker for Frontend?",
      },
      {
        type: "paragraph",
        text: "\"It works on my machine\" is a meme for a reason. Docker eliminates environment inconsistencies by packaging your entire development environment into a container. Node.js version, system dependencies, environment variables — everything is defined in a Dockerfile and stays consistent across every machine and CI/CD pipeline.",
      },
      {
        type: "heading",
        text: "A Simple Dockerfile for React",
      },
      {
        type: "paragraph",
        text: "Start with a multi-stage build: use a Node.js image to build your app, then copy the output to an Nginx image for serving. This gives you a tiny, production-ready container. Add a .dockerignore file to exclude node_modules and other unnecessary files, keeping your image lean.",
      },
      {
        type: "heading",
        text: "Docker Compose for Full-Stack Development",
      },
      {
        type: "paragraph",
        text: "Docker Compose lets you define your entire stack — frontend, backend, database, Redis — in a single YAML file. Running 'docker-compose up' spins everything up at once. This is incredibly useful when your frontend needs to connect to backend APIs during development.",
      },
      {
        type: "paragraph",
        text: "You don't need to master every Docker feature. Start with Dockerfiles, move to Compose, and gradually adopt more advanced patterns as your needs grow. The productivity gains are worth the initial learning curve.",
      },
    ],
  },
];

function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

function getAdjacentPosts(currentId) {
  const currentIndex = blogPosts.findIndex((p) => p.id === currentId);
  return {
    prev: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
  };
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PageTransition>
        <section className="relative pt-28 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-midnight mb-4">
              Article Not Found
            </h1>
            <p className="text-midnight/50 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </section>
      </PageTransition>
    );
  }

  const { prev, next } = getAdjacentPosts(post.id);

  return (
    <PageTransition>
      {/* Hero Banner - solid color, tanpa gradasi */}
      <section className={`relative pt-28 pb-16 overflow-hidden bg-midnight`}>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-white/20 text-white border-white/20 mb-6">
              {post.category}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              Dzulfikri
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Content - wave nempel di atas mengarah kebawah (screenshot 2 style) */}
      <section className="relative pt-36 pb-16 lg:pt-40 lg:pb-24 bg-wave-blog-down">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb - full text, no truncation */}
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-midnight-200 mb-12 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-azure transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link to="/blog" className="hover:text-azure transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-midnight font-medium max-w-full break-words">
                {post.title}
              </span>
            </nav>
          </FadeIn>

          {/* Article body - typography jelas, line height optimal */}
          <FadeIn delay={0.1}>
            <article className="blog-article">
              {post.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-xl sm:text-2xl font-bold text-midnight mt-12 mb-4 first:mt-0 scroll-mt-24"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-midnight-300 text-base sm:text-lg leading-[1.8] mb-6 max-w-[65ch]"
                  >
                    {block.text}
                  </p>
                );
              })}
            </article>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.2}>
            <div className="mt-12 pt-8 border-t border-frost-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-4 h-4 text-midnight/30" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="frost" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Share */}
          <FadeIn delay={0.25}>
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-midnight/40 font-medium">Share this article</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className="w-9 h-9 rounded-xl border border-frost-200 flex items-center justify-center text-midnight/40 hover:text-azure hover:border-azure/30 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>

          <Separator className="my-12 bg-frost-200" />

          {/* Author Card */}
          <FadeIn delay={0.3}>
            <Card className="bg-frost/20 border-frost/40">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-azure to-midnight flex items-center justify-center shrink-0">
                    <span className="text-2xl font-display font-extrabold text-white">D</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-midnight text-lg mb-1">
                      Dzulfikri
                    </h4>
                    <p className="text-sm text-azure font-medium mb-3">
                      Fullstack Developer · PHP & JavaScript
                    </p>
                    <p className="text-sm text-midnight/50 leading-relaxed">
                      I write about web development, software architecture, and my journey as a
                      developer. Currently available for remote opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Navigation between posts */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {prev && (
              <FadeIn>
                <Link
                  to={`/blog/${prev.slug}`}
                  className="group block p-5 rounded-2xl border border-frost/60 hover:border-azure/20 bg-white/60 hover:bg-white transition-all"
                >
                  <span className="text-xs text-midnight/40 flex items-center gap-1 mb-2">
                    <ArrowLeft className="w-3 h-3" /> Newer Post
                  </span>
                  <span className="text-sm font-semibold text-midnight group-hover:text-azure transition-colors line-clamp-2">
                    {prev.title}
                  </span>
                </Link>
              </FadeIn>
            )}
            {next && (
              <FadeIn delay={0.1}>
                <Link
                  to={`/blog/${next.slug}`}
                  className="group block p-5 rounded-2xl border border-frost/60 hover:border-azure/20 bg-white/60 hover:bg-white transition-all text-right sm:col-start-2"
                >
                  <span className="text-xs text-midnight/40 flex items-center justify-end gap-1 mb-2">
                    Older Post <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-midnight group-hover:text-azure transition-colors line-clamp-2">
                    {next.title}
                  </span>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/blog">
                <BookOpen className="w-4 h-4" /> All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export { blogPosts };
