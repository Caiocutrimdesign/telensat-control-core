import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Soluções", href: "#solucao" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-slate-200' : 'bg-navy/95 backdrop-blur-md border-b border-primary/10'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#hero" className={`font-display text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-brand-primary' : 'text-primary-foreground'}`}>
          TELENSAT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-primary' : 'text-primary-foreground/70 hover:text-primary-foreground'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598984138739?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20da%20minha%20frota."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-slate-600' : 'text-primary-foreground'}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden border-t overflow-hidden ${scrolled ? 'bg-white border-slate-200' : 'bg-navy border-primary/10'}`}
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium ${scrolled ? 'text-slate-600 hover:text-brand-primary' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5598984138739?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20da%20minha%20frota."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
