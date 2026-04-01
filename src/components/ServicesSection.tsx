import { motion } from "framer-motion";
import { Smile, Sparkles, Wrench, Stethoscope, Baby, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smile,
    title: "Orthodontics",
    desc: "Braces, clear aligners, bite correction & teeth alignment for a perfect smile.",
    items: ["Metal & Ceramic Braces", "Clear Aligners", "Bite Correction"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, Hollywood Smile design & complete smile makeovers.",
    items: ["Teeth Whitening", "Dental Veneers", "Smile Makeover"],
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    desc: "Dental implants, crowns, bridges, root canals & tooth reconstruction.",
    items: ["Dental Implants", "Crowns & Bridges", "Root Canal"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Scaling, polishing, check-ups, X-rays, fillings & gum disease treatment.",
    items: ["Teeth Cleaning", "Dental Exams", "Cavity Treatment"],
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Gentle dental care for children including check-ups, sealants & fluoride.",
    items: ["Kids Check-ups", "Fluoride Treatments", "Dental Sealants"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: AlertCircle,
    title: "Emergency Care",
    desc: "Emergency care, wisdom tooth removal, TMJ treatment & mouth guards.",
    items: ["Emergency Care", "Wisdom Tooth", "TMJ Treatment"],
    color: "bg-accent/10 text-accent-foreground",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-mint relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive <span className="text-primary">Dental Care</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to advanced cosmetic procedures, we provide a full range of dental services for the whole family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 shadow-card hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`h-12 w-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="group">
            <Link to="/services">
              View All Services 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
