import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight: string;
  description: string;
  breadcrumb: string;
}

const PageHero = ({ badge, title, highlight, description, breadcrumb }: PageHeroProps) => (
  <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
      backgroundSize: '30px 30px'
    }} />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 text-sm font-body text-primary-foreground/60 mb-6">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
          <ArrowRight className="h-3 w-3" />
          <span className="text-primary-foreground">{breadcrumb}</span>
        </div>
        {badge && (
          <span className="inline-block text-xs font-body font-semibold text-gold uppercase tracking-widest mb-3">{badge}</span>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
          {title} <span className="text-gold">{highlight}</span>
        </h1>
        <p className="font-body text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">{description}</p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
