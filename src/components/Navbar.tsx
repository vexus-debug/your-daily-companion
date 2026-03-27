import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-smile365.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Technology", href: "/technology" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? "bg-primary border-primary/80" : "bg-card/95 border-border"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Smile 365 Star Dental Clinic" className="h-14 w-14 object-contain" />
          <div className="hidden sm:block">
            <span className={`font-display text-lg font-bold transition-colors ${scrolled ? "text-primary-foreground" : "text-primary"}`}>Smile 365 Star</span>
            <span className={`block text-xs font-body tracking-widest uppercase transition-colors ${scrolled ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Dental Clinic</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium font-body transition-colors ${
                location.pathname === link.href
                  ? scrolled ? "text-primary-foreground font-semibold" : "text-primary"
                  : scrolled ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://www.facebook.com/smile365star" target="_blank" rel="noopener noreferrer" className={`transition-colors ${scrolled ? "text-primary-foreground/70 hover:text-primary-foreground" : "text-muted-foreground hover:text-[#1877F2]"}`}>
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/smile365star" target="_blank" rel="noopener noreferrer" className={`transition-colors ${scrolled ? "text-primary-foreground/70 hover:text-primary-foreground" : "text-muted-foreground hover:text-[#E4405F]"}`}>
            <Instagram className="h-4 w-4" />
          </a>
          <span className={`w-px h-5 ${scrolled ? "bg-primary-foreground/30" : "bg-border"}`} />
          <a href="tel:+2348165257737" className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-primary-foreground" : "text-primary"}`}>
            <Phone className="h-4 w-4" />
            +234 816 525 7737
          </a>
          <Button asChild variant={scrolled ? "secondary" : "default"}>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${scrolled ? "text-primary-foreground" : "text-foreground"}`}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-body ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-border">
            <a href="https://www.facebook.com/smile365star" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/smile365star" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <Button asChild className="w-full mt-3">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
