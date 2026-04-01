import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chioma A.",
    location: "Port Harcourt",
    text: "I used to dread going to the dentist. Smile 365 Star completely changed that. The staff is so gentle and the clinic is spotless. My whole family goes there now.",
    rating: 5,
    service: "General Dentistry",
  },
  {
    name: "Emeka O.",
    location: "Aba",
    text: "I got my braces done here and the transformation is incredible. The orthodontist explained everything step by step. Worth every kobo.",
    rating: 5,
    service: "Orthodontics",
  },
  {
    name: "Blessing N.",
    location: "Owerri",
    text: "The teeth whitening results were amazing — my friends couldn't stop commenting! Professional service from start to finish.",
    rating: 5,
    service: "Cosmetic Dentistry",
  },
  {
    name: "Ifeanyi K.",
    location: "Port Harcourt",
    text: "Had an emergency toothache on a Saturday. They got me in within the hour and handled it perfectly. These people genuinely care.",
    rating: 5,
    service: "Emergency Care",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — hear from the thousands of patients
            who trust us with their smiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-background rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="font-body text-foreground leading-relaxed mb-6 text-sm md:text-base">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs font-body text-muted-foreground">{t.location}</div>
                </div>
                <span className="text-xs font-body bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
