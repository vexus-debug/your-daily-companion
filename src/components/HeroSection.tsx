import { motion } from "framer-motion";
import { ArrowRight, Star, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import treatmentImg from "@/assets/patient-treatment.jpg";
import receptionImg from "@/assets/gallery/reception-desk.jpg";
import treatmentRoomImg from "@/assets/gallery/treatment-room.jpg";
import dentalTeamImg from "@/assets/gallery/dental-team.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-mint" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left content — 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-card"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-body text-muted-foreground font-medium">Trusted by 5,000+ patients since 2023</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Your Smile Deserves{" "}
              <span className="relative inline-block">
                <span className="text-primary">World-Class</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full origin-left"
                />
              </span>{" "}
              Care
              <span className="text-gradient-gold">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-base md:text-lg font-body text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Modern, technology-driven dental care across Rivers, Abia & Imo States. 
              Experience gentle, expert dentistry designed around your comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button size="lg" asChild className="text-base px-8 shadow-elevated">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="tel:+2348165257737">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center gap-6 md:gap-10 pt-8 border-t border-border"
            >
              {[
                { value: "3", label: "Clinic Branches" },
                { value: "5K+", label: "Happy Patients" },
                { value: "15+", label: "Dental Experts" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center md:text-left">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="text-2xl md:text-3xl font-display font-bold text-primary"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[11px] md:text-xs font-body text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image mosaic — 5 cols */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[420px] md:h-[520px]">
              {/* Main large image */}
              <motion.div
                className="col-span-4 row-span-6 rounded-3xl overflow-hidden shadow-elevated"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={treatmentImg}
                  alt="Expert dental treatment at Smile 365 Star"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top right thumbnail */}
              <motion.div
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={receptionImg} alt="Welcoming reception" className="w-full h-full object-cover" />
              </motion.div>

              {/* Middle right thumbnail */}
              <motion.div
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={treatmentRoomImg} alt="Modern treatment room" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom right thumbnail */}
              <motion.div
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={dentalTeamImg} alt="Our dental team" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl p-4 shadow-elevated border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🦷</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">Free Consultation</div>
                  <div className="text-[11px] text-muted-foreground font-body">All 3 branches</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-body text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
