import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import receptionDesk from "@/assets/gallery/reception-desk.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Who We Are"
        title="Your Trusted Partner in"
        highlight="Dental Health"
        description="Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, delivering modern, technology-driven oral healthcare across Rivers, Abia, and Imo States."
        breadcrumb="About Us"
      />

      {/* Stats — clean, no icons */}
      <section className="relative -mt-12 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl border border-border shadow-elevated"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { number: "5,000+", label: "Patients Treated" },
                { number: "3", label: "Clinic Branches" },
                { number: "15+", label: "Dental Specialists" },
                { number: "2023", label: "Year Founded" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center py-8 px-4"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="font-body text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story — big photo + text */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <div className="relative">
                <img
                  src={clinicEntrance}
                  alt="Inside Smile 365 Star Dental Clinic"
                  className="rounded-2xl w-full h-[350px] md:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <p className="font-body text-xs text-muted-foreground italic">
                    "We didn't start Smile 365 Star to be just another clinic. We started because too many Nigerians were flying abroad for dental care that should be available right here at home."
                  </p>
                  <p className="font-body text-xs text-foreground font-semibold mt-2">— Founder, Smile 365 Star</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                We opened our doors in 2023. We haven't slowed down since.
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  It started with one clinic on Stadium Road, Port Harcourt — a small team with big ambitions and equipment most dental practices in Nigeria didn't have. Digital scanners, 3D imaging, sterilization systems that meet international standards.
                </p>
                <p>
                  Within months, patients were coming from across Rivers State. Then Abia. Then Imo. Not because of advertising — because people talk when they finally find a dentist they trust.
                </p>
                <p>
                  Today we operate three branches, employ over 15 specialists, and have treated more than 5,000 patients. But the thing we're most proud of? The number of people who used to dread the dentist and now actually look forward to their visits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe — text-driven, no icons */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">What We Believe</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Four things we'll never compromise on.
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                num: "01",
                title: "Technology should serve people, not impress them.",
                desc: "We invest in digital scanners, 3D imaging, and modern equipment because they lead to better diagnoses and less pain — not because they look good on a brochure.",
              },
              {
                num: "02",
                title: "Nobody should be afraid of the dentist.",
                desc: "We've redesigned every part of the experience — from the waiting room to the chair — around one goal: making you genuinely comfortable. Our pain-minimizing techniques mean most patients are surprised by how easy it was.",
              },
              {
                num: "03",
                title: "Your family deserves a team, not a solo practitioner.",
                desc: "A child's first filling, a teenager's braces, a parent's implant — these require different skills. That's why we've built a team of specialists who collaborate on your family's care.",
              },
              {
                num: "04",
                title: "Honest pricing builds real trust.",
                desc: "We tell you what it costs before we start. No surprises on the bill, no upselling treatments you don't need. We'd rather keep a patient for life than overcharge them once.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <span className="md:col-span-1 font-display text-2xl font-bold text-primary/30">{item.num}</span>
                <div className="md:col-span-11">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team — photo-forward */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">The People</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Real specialists. Real experience. Real care.
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Our dentists and orthodontists trained at some of the best institutions in Nigeria and abroad. But credentials alone don't make a great dental team — temperament does.
                </p>
                <p>
                  We hire for patience and empathy as much as skill. Every member of our team understands that for many patients, sitting in a dental chair takes courage. We respect that.
                </p>
                <p>
                  From cosmetic dentistry to complex orthodontic work, our specialists collaborate to create treatment plans that actually make sense for your life and budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3">
                  <img src={dentalTeam} alt="Smile 365 Star dental team" className="rounded-2xl w-full h-72 md:h-96 object-cover" />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                  <img src={receptionDesk} alt="Our dentists" className="rounded-2xl w-full h-[calc(50%-0.375rem)] object-cover" />
                  <img src={dentistAtWork} alt="Specialist performing a procedure" className="rounded-2xl w-full h-[calc(50%-0.375rem)] object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inside the Clinic — full-width photo break */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">Inside the Clinic</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              See where the care happens.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            <img src={waitingArea} alt="Our waiting area" className="rounded-xl w-full h-48 md:h-64 object-cover col-span-2 md:col-span-1" />
            <img src={treatmentRoom} alt="Treatment room" className="rounded-xl w-full h-48 md:h-64 object-cover" />
            <img src={loungeArea} alt="Clinic interior" className="rounded-xl w-full h-48 md:h-64 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Timeline — minimal, text-only */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Where we've been. Where we're going.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
            {[
              { year: "2023", title: "Port Harcourt — Day One", desc: "Opened at 61 Stadium Road with a team of 5 and more determination than furniture. Our first patient came for a cleaning. She's still with us." },
              { year: "2023", title: "Aba Branch Opens", desc: "Demand from Abia State was too strong to ignore. Within weeks of opening, our second branch was running at full capacity." },
              { year: "2024", title: "Owerri Makes Three", desc: "Imo State got its own Smile 365 Star location. Three states, three clinics, one standard of care." },
              { year: "2024", title: "5,000 Patients and Counting", desc: "A number that means more to us than any award. Every one of those patients chose to trust us — and most of them keep coming back." },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16 pb-12 last:pb-0"
              >
                <div className="absolute left-2 md:left-4 top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                <span className="font-display text-sm font-bold text-primary">{m.year}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">{m.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Come see what everyone's talking about.
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              No pressure, no obligation — just honest advice about your dental health.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
