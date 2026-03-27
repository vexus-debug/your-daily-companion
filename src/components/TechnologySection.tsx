import { motion } from "framer-motion";
import { ScanLine, MonitorSmartphone, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dentalTeam from "@/assets/gallery/dental-team.jpg";

const techItems = [
  { icon: ScanLine, title: "Digital Intraoral Scanners", desc: "3D imaging for precise diagnosis" },
  { icon: MonitorSmartphone, title: "Digital Smile Design", desc: "Preview your smile transformation" },
  { icon: Cpu, title: "Computer-Guided Implants", desc: "Accurate implant placement" },
  { icon: ShieldCheck, title: "Modern Sterilization", desc: "Highest safety standards" },
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-gold uppercase tracking-widest">Technology</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Advanced Dental <span className="text-gold">Technology</span>
            </h2>
            <p className="font-body opacity-80 leading-relaxed mb-10">
              We use cutting-edge dental technology to improve accuracy, comfort, and treatment outcomes. 
              Our investment in modern equipment means better results and more comfortable experiences for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {techItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm">{item.title}</div>
                    <div className="text-xs opacity-70 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" asChild>
              <Link to="/technology">
                Explore Our Technology <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={dentalTeam} alt="Our expert dental team at work" className="rounded-2xl shadow-elevated w-full h-[450px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
