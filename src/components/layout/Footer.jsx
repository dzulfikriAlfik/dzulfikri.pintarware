import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Skills", path: "/skills" },
      { label: "Projects", path: "/projects" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/dzulfikriAlfik", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dzulfikri-alkautsari-b5b892187/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dzulfikri.alkautsari@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-linear-to-br from-midnight via-midnight-300 to-midnight-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(63,114,175,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(89,171,207,0.1)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-azure/40 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-azure/8 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-azure-300/5 blur-[80px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8 text-snow/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/pintarware.png"
                alt="Pintarware"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col -space-y-0.5">
                <span className="font-display font-bold text-snow text-lg">
                  Dzulfikri
                </span>
                <span className="text-[10px] font-mono text-azure-200 tracking-widest uppercase">
                  Fullstack · PHP & JS
                </span>
              </div>
            </Link>
            <p className="text-snow/50 text-sm leading-relaxed max-w-sm mb-6">
              Fullstack programmer & remote developer. PHP, Laravel, React, Vue, Node.js.
              Programming blog • Hire for web development projects.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-snow/5 border border-snow/10 flex items-center justify-center text-snow/50 hover:text-azure hover:bg-azure/10 hover:border-azure/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-snow text-sm uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-snow/50 hover:text-azure transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-snow/10" />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4 text-sm text-snow/40">
          <p>
            &copy; {new Date().getFullYear()} Dzulfikri. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
