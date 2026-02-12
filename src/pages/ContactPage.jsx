import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  DollarSign,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageTransition } from "@/components/shared/PageTransition";
import { FadeIn } from "@/components/shared/AnimatedContainer";
import { useStore } from "@/store/useStore";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "dzulfikri.alkautsari@gmail.com",
    link: "mailto:dzulfikri.alkautsari@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indonesia (Remote Worldwide)",
    link: null,
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Fri, Flexible Hours",
    link: null,
  },
  {
    icon: DollarSign,
    title: "Rate",
    value: "$10/hr · Negotiable",
    link: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/dzulfikriAlfik", username: "@dzulfikriAlfik" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dzulfikri-alkautsari-b5b892187/", username: "in/dzulfikri-alkautsari" },
  { icon: MessageSquare, label: "Discord", href: "https://discord.com/users/dzulfikri_alfik", username: "dzulfikri_alfik" },
];

const reasons = [
  "Need PHP/Laravel or React/Node.js expertise",
  "Building monolith or microservice architecture",
  "Real-time features (WebSocket)",
  "Mobile app or fullstack web project",
];

export default function ContactPage() {
  const { contactForm, setContactForm, resetContactForm } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      resetContactForm();

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="relative pt-28 pb-20 lg:pb-24 overflow-hidden min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-125 h-125 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[15%] w-100 h-100 bg-frost/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or want to discuss a collaboration? I'd love to hear from you. Let's build something great together."
          />

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Cards */}
              <FadeIn>
                <Card className="bg-white/60 border-frost/40">
                  <CardContent className="p-6 space-y-5">
                    {contactInfo.map((item, i) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-azure/10 border border-azure/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-azure" />
                        </div>
                        <div>
                          <p className="text-xs text-midnight/40 uppercase tracking-wider font-medium mb-0.5">
                            {item.title}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-sm font-medium text-midnight hover:text-azure transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-midnight">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.15}>
                <Card className="bg-white/60 border-frost/40">
                  <CardContent className="p-6">
                    <h4 className="font-display font-semibold text-midnight text-sm mb-4">
                      Connect on Social
                    </h4>
                    <div className="space-y-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-frost/40 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <social.icon className="w-4 h-4 text-midnight/50 group-hover:text-azure transition-colors" />
                            <div>
                              <p className="text-sm font-medium text-midnight">{social.label}</p>
                              <p className="text-xs text-midnight/40">{social.username}</p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-midnight/30 group-hover:text-azure transition-colors" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Why Contact Me */}
              <FadeIn delay={0.3}>
                <Card className="bg-linear-to-br from-midnight to-midnight-200 border-0 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-azure/10 rounded-full blur-2xl" />
                  <CardContent className="relative p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-4 h-4 text-azure-200" />
                      <h4 className="font-display font-semibold text-snow text-sm">
                        Why Work Together?
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {reasons.map((reason) => (
                        <li key={reason} className="flex items-center gap-2.5 text-sm text-snow/70">
                          <CheckCircle2 className="w-4 h-4 text-azure-200 shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <Card className="bg-white/60 border-frost/40">
                  <CardContent className="p-8 md:p-10">
                    <div className="mb-8">
                      <h3 className="font-display text-2xl font-bold text-midnight mb-2">
                        Send a Message
                      </h3>
                      <p className="text-sm text-midnight/50">
                        Fill out the form below and I'll get back to you within 24 hours.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h4 className="font-display text-xl font-bold text-midnight mb-2">
                          Message Sent!
                        </h4>
                        <p className="text-sm text-midnight/50">
                          Thanks for reaching out. I'll get back to you soon.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-midnight mb-2">
                              Name
                            </label>
                            <Input
                              placeholder="Your name"
                              value={contactForm.name}
                              onChange={(e) => setContactForm("name", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-midnight mb-2">
                              Email
                            </label>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              value={contactForm.email}
                              onChange={(e) => setContactForm("email", e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-midnight mb-2">
                            Subject
                          </label>
                          <Input
                            placeholder="What's this about?"
                            value={contactForm.subject}
                            onChange={(e) => setContactForm("subject", e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-midnight mb-2">
                            Message
                          </label>
                          <Textarea
                            placeholder="Tell me about your project, timeline, and requirements..."
                            value={contactForm.message}
                            onChange={(e) => setContactForm("message", e.target.value)}
                            required
                            className="min-h-40"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-[11px] text-midnight/30 text-center">
                          By submitting this form you agree to my privacy policy. I'll only use
                          your information to respond to your message.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
