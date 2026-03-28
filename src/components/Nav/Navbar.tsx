import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, User, Zap, Briefcase, Palette, Mail, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', icon: <Home size={15} />, href: '#hero' },
    { name: 'About', icon: <User size={15} />, href: '#about' },
    { name: 'Skills', icon: <Zap size={15} />, href: '#skills' },
    { name: 'Services', icon: <Briefcase size={15} />, href: '#services' },
    { name: 'Portfolio', icon: <Palette size={15} />, href: '#portfolio' },
    { name: 'Certificates', icon: <GraduationCap size={15} />, href: '#certificates' },
    { name: 'Contact', icon: <Mail size={15} />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2">
            <Code2 size={18} className="text-primary-400" />
            <span className="font-bold text-sm text-white/90">
              evgen<span className="text-slate-500">.dev</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300
                  ${activeSection === link.href.slice(1)
                    ? 'text-white bg-white/[0.08]'
                    : 'text-slate-500 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white/60 hover:text-white p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 p-3 rounded-2xl bg-surface-950/95 backdrop-blur-xl border border-white/[0.06] animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm transition-all duration-300
                  ${activeSection === link.href.slice(1)
                    ? 'text-white bg-white/[0.06]'
                    : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                  }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
