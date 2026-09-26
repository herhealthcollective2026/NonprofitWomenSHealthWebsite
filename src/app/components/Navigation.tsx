import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../imports/Untitled_design.jpg";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/resources", label: "Resources" },
    { to: "/health-education", label: "Her Health Library" },
    { to: "/our-kits", label: "Our Kits" },
    { to: "/about", label: "About" },
  ];

  const feedbackUrl = "https://forms.gle/SsHDpKgA2wgb7CRw5";

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + org name */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Her Health Collective" className="h-12 w-auto" />
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wide leading-tight hidden sm:block">
              Her Health<br />Collective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors whitespace-nowrap ${
                  isActive(link.to)
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors whitespace-nowrap text-foreground hover:text-primary"
            >
              Feedback
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.to)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-lg transition-colors text-foreground hover:bg-muted"
            >
              Feedback
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
