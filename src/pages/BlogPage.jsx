import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn, AnimatedContainer, AnimatedItem } from "@/components/shared/AnimatedContainer";
import { blogPosts } from "@/pages/BlogDetailPage";

const categories = ["All", "React", "TypeScript", "Productivity", "Backend", "Career", "DevOps"];

export default function BlogPage() {
  return (
    <PageTransition>
      <section className="relative pt-28 pb-20 lg:pb-24 overflow-hidden min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-100 h-100 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-87.5 h-87.5 bg-frost/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Blog & Articles"
            subtitle="Sharing insights, tutorials, and thoughts on web development, best practices, and my journey as a developer."
          />

          {/* Featured Post */}
          <FadeIn>
            <Card className="mb-12 bg-white/60 border-frost/40 hover:border-azure/15 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className={`relative h-64 md:h-auto bg-linear-to-br ${blogPosts[0].color} flex items-center justify-center`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative text-center text-white p-8">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <Badge className="bg-white/20 text-white border-white/20 mb-2">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Latest Post
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <Badge variant="default" className="w-fit mb-3">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-midnight mb-3 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-midnight/50 text-sm leading-relaxed mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-midnight/40 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-fit" asChild>
                    <Link to={`/blog/${blogPosts[0].slug}`}>
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </FadeIn>

          {/* Blog Posts Grid */}
          <AnimatedContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <AnimatedItem key={post.id}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                <Card className="group h-full bg-white/60 border-frost/40 hover:border-azure/15 overflow-hidden flex flex-col cursor-pointer">
                  {/* Post visual header */}
                  <div className={`relative h-36 bg-linear-to-br ${post.color} overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white/60" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20 text-[10px]">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2 flex-1">
                    <CardTitle className="text-base group-hover:text-azure transition-colors leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-3 text-[11px] text-midnight/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-azure/60 flex items-center gap-0.5"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          {/* Newsletter CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-20">
              <Card className="bg-linear-to-br from-midnight to-midnight-200 border-0 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-azure/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-azure/5 rounded-full blur-2xl" />

                <CardContent className="relative p-10 md:p-14 text-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-snow/50 mb-6 max-w-md mx-auto text-sm">
                    I write about web development, best practices, and my journey as a developer.
                    More articles coming soon!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-snow placeholder:text-snow/30 text-sm focus:outline-none focus:ring-2 focus:ring-azure/30"
                    />
                    <Button className="w-full sm:w-auto bg-azure hover:bg-azure-500 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
