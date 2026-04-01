import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-smile365.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Smile 365 Star" className="h-12 w-12 object-contain" />
              <div>
                <span className="font-display text-sm font-bold text-primary-foreground">Smile 365 Star</span>
                <span className="block text-xs font-body text-primary-foreground/60 tracking-wider uppercase">Dental Clinic</span>
              </div>
            </Link>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-5">
              Modern, affordable, and patient-centered dental care for healthy smiles year-round.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/smile365star"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/smile365star"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-[#E4405F] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              {["Orthodontics", "Cosmetic Dentistry", "Dental Implants", "Teeth Whitening", "General Dentistry"].map(s => (
                <li key={s}><Link to="/services" className="hover:text-primary-foreground transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              {[["Home","/"],["About","/about"],["Services","/services"],["Locations","/locations"],["Contact","/contact"]].map(([l,h]) => (
                <li key={l}><Link to={h} className="hover:text-primary-foreground transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Headquarters</h4>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              61 Stadium Road, by Mummy B Junction<br />
              Port Harcourt, Rivers State<br />
              <a href="tel:+2348165257737" className="text-gold hover:underline mt-2 inline-block">+234 816 525 7737</a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Smile 365 Star Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
