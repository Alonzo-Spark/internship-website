import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navigation header
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        id="alonzo-navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 hover:scale-105 transition-all cursor-pointer font-sans"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("spark-program")}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 hover:scale-105 transition-all cursor-pointer font-sans"
              >
                About Internship
              </button>
              <button
                onClick={() => scrollToSection("projects-section")}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 hover:scale-105 transition-all cursor-pointer font-sans"
              >
                Projects
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-all cursor-pointer"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer (with framer motion block) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] bg-slate-950 border-b border-slate-900 z-30 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 bg-slate-950/95 backdrop-blur-lg flex flex-col">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-left py-3 px-4 text-base font-semibold text-slate-250 hover:bg-slate-900 rounded-lg transition-all border-l-2 border-transparent hover:border-orange-500 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("spark-program")}
                className="text-left py-3 px-4 text-base font-semibold text-slate-250 hover:bg-slate-900 rounded-lg transition-all border-l-2 border-transparent hover:border-orange-500 cursor-pointer"
              >
                About Internship
              </button>
              <button
                onClick={() => scrollToSection("projects-section")}
                className="text-left py-3 px-4 text-base font-semibold text-slate-250 hover:bg-slate-900 rounded-lg transition-all border-l-2 border-transparent hover:border-orange-500 cursor-pointer"
              >
                Projects
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
