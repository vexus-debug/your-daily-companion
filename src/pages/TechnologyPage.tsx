import { motion } from "framer-motion";
import { ScanLine, MonitorSmartphone, Cpu, ShieldCheck, Zap, Scan, Microscope, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import clinicImg from "@/assets/clinic-interior.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const technologies = [
  {
    icon: ScanLine,
    title: "Digital Intraoral Scanners",
    desc: "Our advanced 3D intraoral scanners capture detailed digital impressions of your teeth in minutes — no messy molds required. This allows for more comfortable experiences and highly precise treatment planning for crowns, aligners, and restorations.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Smile Design (DSD)",
    desc: "Using sophisticated software, we can show you a digital preview of your smile transformation before treatment begins. This technology allows you to visualize results and collaborate with your dentist on your ideal smile.",
  },
  {
    icon: Cpu,
    title: "Computer-Guided Implant Planning",
    desc: "Our implant procedures use 3D computer planning to determine the optimal position, angle, and depth for each implant. This results in greater accuracy, shorter surgery times, and faster healing.",
  },
  {
    icon: Scan,
    title: "High-Resolution Digital X-Rays",
    desc: "Digital X-rays provide instant, highly detailed images with up to 90% less radiation than traditional film X-rays. This allows for faster diagnosis and safer imaging for patients of all ages.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Sterilization Systems",
    desc: "We maintain the highest infection control standards with advanced autoclave sterilization systems. Every instrument is thoroughly sterilized and monitored to ensure complete patient safety.",
  },
  {
    icon: Syringe,
    title: "Pain-Minimizing Techniques",
    desc: "We use modern anesthesia delivery systems and minimally invasive techniques to ensure maximum comfort during all procedures. Many patients report feeling little to no discomfort during treatment.",
  },
];

const benefits = [
  { title: "Earlier Detection", desc: "Digital imaging catches problems before they become serious, saving time and money." },
  { title: "Greater Precision", desc: "Computer-guided tools ensure more accurate treatments with predictable outcomes." },
  { title: "More Comfort", desc: "Modern techniques minimize pain and reduce treatment and recovery times." },
  { title: "Better Communication", desc: "Digital previews help you understand your treatment and see expected results." },
];

const TechnologyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Innovation"
        title="Advanced Dental"
        highlight="Technology"
        description="We invest in cutting-edge dental technology to improve accuracy, comfort, and treatment outcomes — ensuring you receive the best possible care."
        breadcrumb="Technology"
      />

      {/* Technology Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Equipment</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              State-of-the-Art <span className="text-primary">Equipment</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-4">
              Every piece of technology in our clinic is selected to deliver safer, faster, and more comfortable dental experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{tech.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Image */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <img src={clinicImg} alt="Our modern dental technology" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">The Difference</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                How Technology <span className="text-primary">Benefits You</span>
              </h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">{b.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Experience Modern Dentistry
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              See the difference that advanced technology makes. Book a visit and experience world-class dental care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnologyPage;
