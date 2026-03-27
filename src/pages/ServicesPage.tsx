import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, CalendarCheck, ChevronDown, ChevronUp, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import { services } from "@/data/services";

const serviceDetails: Record<string, string> = {
  // Orthodontics
  "Traditional metal braces": "Time-tested metal brackets and wires that gradually straighten teeth over 12–24 months. Effective for all levels of misalignment.",
  "Ceramic braces": "Tooth-colored brackets that blend with your smile for a more discreet orthodontic experience with the same effectiveness as metal braces.",
  "Clear aligners": "Removable, virtually invisible plastic trays custom-made to shift your teeth into place. Great for mild to moderate alignment issues.",
  "Retainers": "Custom-fitted devices worn after braces or aligners to maintain your new smile and prevent teeth from shifting back.",
  "Bite correction (overbite, underbite, crossbite)": "Specialized treatment to fix how your upper and lower teeth meet, improving chewing, speech, and facial symmetry.",
  "Teeth spacing correction": "Closes gaps between teeth using braces or aligners, improving both appearance and preventing food trapping.",
  "Crowded teeth alignment": "Gradually repositions overlapping or crowded teeth to create a straighter, easier-to-clean smile.",

  // Cosmetic Dentistry
  "Professional teeth whitening": "In-office whitening that can brighten your teeth several shades in a single visit using safe, professional-grade bleaching agents.",
  "Dental veneers": "Thin porcelain or composite shells bonded to the front of teeth to correct chips, stains, gaps, or uneven shapes.",
  "Hollywood Smile design": "A complete smile makeover combining veneers, whitening, and contouring to achieve a flawless, celebrity-style smile.",
  "Tooth reshaping and contouring": "Minor reshaping of tooth enamel to smooth rough edges, fix small chips, or improve tooth symmetry.",
  "Gum contouring": "Reshapes the gum line to fix a 'gummy smile' or uneven gums, creating a more balanced, attractive smile.",
  "Composite bonding": "Tooth-colored resin applied to repair chips, cracks, discoloration, or gaps — a quick and affordable cosmetic fix.",
  "Smile makeover consultations": "A personalized assessment where our cosmetic dentist designs a comprehensive plan to transform your smile.",

  // Restorative Dentistry
  "Dental implants": "Titanium posts surgically placed in the jawbone to permanently replace missing teeth with natural-looking, fully functional crowns.",
  "Dental crowns": "Custom-made caps that cover and protect damaged, weakened, or root-canal-treated teeth, restoring their shape and strength.",
  "Dental bridges": "Fixed prosthetics that bridge the gap left by one or more missing teeth, anchored to neighboring teeth or implants.",
  "Root canal therapy": "Removes infected pulp inside a tooth to eliminate pain and save the tooth from extraction. Fully painless with modern techniques.",
  "Tooth-colored fillings": "Mercury-free composite fillings that match your natural tooth color, used to treat cavities and minor tooth damage.",
  "Full or partial dentures": "Removable prosthetics that replace multiple missing teeth, restoring your ability to eat, speak, and smile confidently.",
  "Broken tooth restoration": "Repairs fractured or chipped teeth using bonding, crowns, or veneers depending on the severity of the damage.",

  // General Dentistry
  "Scaling and polishing": "Professional deep cleaning that removes tartar and plaque buildup, leaving your teeth smooth, clean, and fresh.",
  "Dental examinations": "Comprehensive oral health checkup including visual inspection, gum assessment, and early detection of potential problems.",
  "Digital dental X-rays": "Low-radiation digital imaging that reveals hidden cavities, bone loss, and other issues not visible during a regular exam.",
  "Cavity detection & fillings": "Early identification of tooth decay followed by minimally invasive, tooth-colored fillings to restore the tooth.",
  "Tooth extractions": "Safe, gentle removal of severely damaged, decayed, or problematic teeth under local anesthesia for a pain-free experience.",
  "Gum disease treatment": "Treatment for gingivitis and periodontitis including deep cleaning, medication, and ongoing management to protect your gums.",
  "Fluoride treatments": "Protective mineral treatment applied to teeth to strengthen enamel and prevent cavities — especially beneficial for children.",

  // Pediatric Dentistry
  "Children's dental checkups": "Gentle, fun dental exams designed for kids, building positive associations with dental visits from an early age.",
  "Preventive fluoride treatments": "Professional fluoride application to strengthen young teeth and provide extra protection against cavities.",
  "Dental sealants": "Thin protective coatings applied to the chewing surfaces of back teeth to prevent decay in hard-to-brush grooves.",
  "Early orthodontic assessments": "Evaluation of jaw and teeth development in children to identify alignment issues early and plan timely treatment.",
  "Cavity treatment for children": "Child-friendly cavity fillings using gentle techniques and tooth-colored materials in a comfortable, reassuring environment.",
  "Gentle tooth extractions": "Careful removal of baby teeth or problematic teeth in children using gentle techniques and appropriate anesthesia.",
  "Habit correction (thumb sucking)": "Guidance and appliances to help children break oral habits that could affect teeth and jaw development.",

  // Emergency & Specialized
  "Wisdom tooth removal": "Surgical or non-surgical extraction of impacted or problematic wisdom teeth to prevent pain, infection, and crowding.",
  "Emergency dental care": "Immediate treatment for dental emergencies including severe toothache, knocked-out teeth, broken teeth, and oral injuries.",
  "Jaw pain treatment (TMJ)": "Diagnosis and treatment of temporomandibular joint disorders causing jaw pain, clicking, or difficulty opening your mouth.",
  "Mouth guard fittings": "Custom-fitted mouth guards for sports protection or to prevent teeth grinding (bruxism) during sleep.",
  "Gum disease management": "Ongoing treatment and monitoring of periodontal disease to prevent tooth loss and maintain healthy gums.",
  "Oral infection treatment": "Prompt treatment of dental abscesses, oral infections, and swelling with antibiotics and drainage when necessary.",
  "Tooth sensitivity treatment": "Identifies the cause of sensitivity and provides treatments like desensitizing agents, fluoride, or bonding for relief.",
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="bg-card rounded-2xl border border-border shadow-card overflow-hidden group hover:shadow-elevated transition-shadow duration-300"
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
              <service.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm font-body text-primary/80 font-medium">{service.subtitle}</p>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{service.desc}</p>
        </div>

        {/* Sub-services grid */}
        <div className="px-6 pb-2">
          <div className="space-y-0">
            {(expanded ? service.items : service.items.slice(0, 4)).map((item) => (
              <div key={item} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
                <BookingDialog
                  preselectedServices={[item]}
                  trigger={
                    <button className="text-xs font-body font-semibold text-primary hover:text-primary/80 transition-colors px-2 py-1 rounded-lg hover:bg-primary/5 flex-shrink-0">
                      Book
                    </button>
                  }
                />
              </div>
            ))}
          </div>

          {service.items.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs font-body font-medium text-muted-foreground hover:text-foreground transition-colors mt-2 mb-1"
            >
              {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              {expanded ? "Show less" : `+${service.items.length - 4} more services`}
            </button>
          )}
        </div>

        {/* Benefit + CTAs */}
        <div className="px-6 pb-6 pt-2">
          <div className="bg-muted/60 rounded-xl p-3.5 mb-4">
            <p className="font-body text-xs text-muted-foreground leading-relaxed">💡 {service.benefit}</p>
          </div>
          <div className="space-y-2">
            <BookingDialog
              preselectedServices={service.items}
              trigger={
                <Button className="w-full" size="lg">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Book {service.title}
                </Button>
              }
            />
            <Button
              variant="outline"
              className="w-full"
              size="lg"
              onClick={() => setLearnMoreOpen(true)}
            >
              <Info className="mr-2 h-4 w-4" />
              Learn About These
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Learn More Dialog */}
      <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 font-display text-xl">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              {service.title}
            </DialogTitle>
          </DialogHeader>
          <p className="font-body text-sm text-muted-foreground mb-4">{service.desc}</p>
          <div className="space-y-4">
            {service.items.map((item) => (
              <div key={item} className="bg-muted/40 rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <h4 className="font-display text-sm font-bold text-foreground">{item}</h4>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed pl-6">
                  {serviceDetails[item] || service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <BookingDialog
              preselectedServices={service.items}
              trigger={
                <Button className="w-full" size="lg">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Book {service.title}
                </Button>
              }
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="What We Offer"
        title="Comprehensive"
        highlight="Dental Services"
        description="From routine check-ups to advanced cosmetic procedures, we provide a full range of dental services for individuals and families across all ages."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your <span className="text-primary">Treatment</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Select any service to book directly — pick multiple services and choose your preferred location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "20+", label: "Dental Services" },
              { stat: "6", label: "Specialty Areas" },
              { stat: "3", label: "Convenient Locations" },
              { stat: "100%", label: "Patient Satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-3xl font-display font-bold text-gold mb-2">{item.stat}</div>
                <div className="font-body text-sm text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
              Book a free consultation and let our experts recommend the right treatment plan for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BookingDialog />
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/2348165257737" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
