import { Link } from "react-router";
import { Mail, Instagram } from "lucide-react";
import logo from "../../imports/Untitled_design.jpg";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Her Health Collective" className="h-24 w-auto mb-3" />
            <p className="font-semibold text-primary">Her Health Collective</p>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-end gap-4 text-sm">
            <a
              href="https://mail.google.com/mail/?view=cm&to=HerHealthCollective2026@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              HerHealthCollective2026@gmail.com
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/4.herhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About / Meet the Team
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
