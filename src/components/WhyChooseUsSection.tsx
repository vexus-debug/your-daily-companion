import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Award, HeartHandshake, Microscope } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Modern Sterilization",
    desc: "International-grade sterilization protocols for your complete safety.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "Digital scanners, 3D imaging, and computer-guided procedures.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle Approach",
    desc: "Pain-minimizing techniques that make even anxious patients comfortable.",
  },
  {
    icon: Award,
    title: "Expert Specialists",
    desc: "Internationally trained dentists with years of specialized experience.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "No hidden fees. Know the full cost before any treatment begins.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Open 6 days a week with emergency slots available same-day.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            Why Smile 365 Star
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Why Patients <span className="text-primary">Choose Us</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We've built every part of the experience around one goal: making you genuinely comfortable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-colors duration-300">
                <r.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
