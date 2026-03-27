import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";

const values = [
  { icon: Shield, title: "Advanced Technology", desc: "Digital scanners, 3D imaging & modern sterilization" },
  { icon: Heart, title: "Patient Comfort", desc: "Pain-minimizing techniques & gentle care" },
  { icon: Sparkles, title: "Expert Team", desc: "Internationally trained dentists & specialists" },
  { icon: Users, title: "Family Friendly", desc: "Care for all ages, from children to adults" },
];

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[380px] md:h-[460px]">
              <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-elevated">
                <img src={waitingArea} alt="Smile 365 Star comfortable waiting area" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card">
                <img src={clinicEntrance} alt="Clinic entrance" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card">
                <img src={loungeArea} alt="Lounge area" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-5 -right-2 md:-right-6 bg-primary rounded-2xl p-5 text-primary-foreground shadow-elevated"
            >
              <div className="text-3xl font-display font-bold">2023</div>
              <div className="text-xs opacity-80 font-body">Est. Nigeria</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Modern Dentistry,{" "}
              <span className="text-primary">Trusted Care</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, known for delivering 
              modern, technology-driven oral healthcare. Founded in 2023, we've built a strong reputation across 
              Rivers, Abia, and Imo States.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              We combine advanced dental technology with patient-focused care — because your comfort matters as much as your treatment.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-background border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-foreground text-xs md:text-sm">{v.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 hidden md:block">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" asChild className="group">
              <Link to="/about">
                Learn More About Us 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
