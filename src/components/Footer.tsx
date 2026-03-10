import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Diamond } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl tracking-[0.3em] shimmer-text font-semibold mb-4">
              PALAMUTI
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">
              Timeless elegance crafted with perfection. Each piece tells a story of artistry and dedication.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Collections", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary text-sm font-body transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-5">Collections</h4>
            <div className="flex flex-col gap-3">
              {["Rings", "Necklaces", "Earrings", "Bracelets"].map((item) => (
                <Link
                  key={item}
                  to="/collections"
                  className="text-muted-foreground hover:text-primary text-sm font-body transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-body text-sm">
              <p>Mary Rose Sinining</p>
              <p>Newzealand</p>
              <p>‪+64 22 365 8485‬</p>
              <p>mary@palamuti.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body tracking-wider">
            © 2026 Palamuti. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground/50">
            <Diamond size={10} className="text-primary/40" />
            <p className="text-xs font-body tracking-wider">Crafted with passion </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
