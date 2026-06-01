import React from "react";
import { Logo } from "./Logo";
import { Mail, Phone, Linkedin } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (id?: string) => {
    onNavigate(id);
  };

  return (
    <footer id="website-footer" className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      {/* Background graphic */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        
        {/* Top Split */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8" id="footer-upper">
          
          {/* Brand Column */}
          <div className="space-y-4 max-w-sm">
            <Logo />
            <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
              Alonzo AI Solutions leverages next-generation cognitive architecture, statistical quantitative sandbox backrests, and robust path solvers to optimize global enterprises.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-wrap gap-x-12 gap-y-6" id="footer-links-grid">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Platform</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => handleNavClick()}
                    className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("spark-program")}
                    className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    About Internship
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("projects-section")}
                    className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>

            {/* Corporate/Contact directory */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Directory</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-slate-500" />
                  <a href="mailto:info@alonzo.ai" className="hover:text-slate-100 transition-colors">info@alonzo.ai</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={13} className="text-slate-500" />
                  <span>+1 (800) 555-ALNZ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={13} className="text-slate-500" />
                  <a href="https://linkedin.com/company/alonzo-ai" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition-colors flex items-center gap-1">
                    linkedin.com/company/alonzo-ai
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
