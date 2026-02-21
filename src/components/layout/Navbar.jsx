import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  {
    path: "/projects",
    label: "Projects",
    children: [
      { path: "/projects", label: "All Projects" },
      { href: "https://walletwise.pintarware.com", label: "WalletWise", external: true },
    ],
  },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = useLocation();
  const { isMenuOpen, toggleMenu, closeMenu } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const isBlogDetail = /^\/blog\/[^/]+$/.test(location.pathname);
  const isLightNav = isBlogDetail && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-snow/80 backdrop-blur-xl border-b border-frost/60 shadow-sm"
            : "py-4 bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/pintarware.png"
              alt="Pintarware"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col -space-y-0.5">
              <span className={cn(
                "font-display font-bold text-lg leading-tight transition-colors",
                isLightNav ? "text-white" : "text-midnight"
              )}>
                Dzulfikri
              </span>
              <span className={cn(
                "text-[10px] font-mono tracking-widest uppercase transition-colors",
                isLightNav ? "text-white/80" : "text-azure"
              )}>
                Fullstack · PHP & JS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const hasChildren = "children" in link && link.children?.length;

              if (hasChildren) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                        isLightNav
                          ? isActive
                            ? "text-white"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                          : isActive
                            ? "text-azure"
                            : "text-midnight/60 hover:text-midnight hover:bg-frost/40"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", projectsOpen && "rotate-180")} />
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className={cn(
                            "absolute inset-0 rounded-lg",
                            isLightNav ? "bg-white/15 border border-white/20" : "bg-azure/10 border border-azure/15"
                          )}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div
                            className={cn(
                              "min-w-[180px] rounded-xl border shadow-lg overflow-hidden",
                              isLightNav ? "bg-snow/95 border-frost" : "bg-snow border-frost"
                            )}
                          >
                            {link.children.map((child) =>
                              "href" in child ? (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn(
                                    "flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium transition-colors",
                                    isLightNav ? "text-midnight hover:bg-frost/50" : "text-midnight/80 hover:bg-frost/80"
                                  )}
                                >
                                  {child.label}
                                  <ExternalLink className="w-3.5 h-3.5 text-azure/70" />
                                </a>
                              ) : (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={cn(
                                    "block px-4 py-3 text-sm font-medium transition-colors",
                                    isLightNav ? "text-midnight hover:bg-frost/50" : "text-midnight/80 hover:bg-frost/80"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    isLightNav
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                      : isActive
                        ? "text-azure"
                        : "text-midnight/60 hover:text-midnight hover:bg-frost/40"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={cn(
                        "absolute inset-0 rounded-lg",
                        isLightNav ? "bg-white/15 border border-white/20" : "bg-azure/10 border border-azure/15"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant={isLightNav ? "outline" : "default"}
              size="sm"
              className={cn(
                "hidden md:inline-flex transition-colors",
                isLightNav && "border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
              )}
              asChild
            >
              <Link to="/contact">
                Hire Me <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </Button>

            <button
              onClick={toggleMenu}
              className={cn(
                "md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                isLightNav
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-frost/50 text-midnight hover:bg-frost"
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-70 bg-snow/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    const hasChildren = "children" in link && link.children?.length;

                    if (hasChildren) {
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.1 }}
                          className="flex flex-col gap-1"
                        >
                          <Link
                            to={link.path}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                              isActive
                                ? "bg-azure/10 text-azure border border-azure/15"
                                : "text-midnight/70 hover:bg-frost/50 hover:text-midnight"
                            )}
                          >
                            {link.label}
                          </Link>
                          <div className="flex flex-col gap-0.5 pl-4 border-l-2 border-frost ml-2">
                            {link.children.map((child) =>
                              "href" in child ? (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-midnight/70 hover:bg-frost/50 hover:text-midnight"
                                >
                                  {child.label}
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-midnight/70 hover:bg-frost/50 hover:text-midnight"
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                            isActive
                              ? "bg-azure/10 text-azure border border-azure/15"
                              : "text-midnight/70 hover:bg-frost/50 hover:text-midnight"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      Hire Me <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
