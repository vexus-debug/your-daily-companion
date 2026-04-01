import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const branches = [
  {
    name: "Port Harcourt",
    tag: "Headquarters",
    address: "61 Stadium Road, by Mummy B Junction, Beside Golden Tulip Hotel",
    city: "Port Harcourt, Rivers State",
    phone: "+234 816 525 7737",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    features: ["Full Orthodontic Suite", "Digital Smile Design", "Implant Center", "Pediatric Wing", "Emergency Services"],
    mapQuery: "61+Stadium+Road+Port+Harcourt+Rivers+State+Nigeria",
  },
  {
    name: "Aba",
    tag: "Branch",
    address: "215 Aba–Owerri Road, By MCC Junction",
    city: "Aba, Abia State",
    phone: "+234 810 553 6130",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    features: ["General Dentistry", "Cosmetic Services", "Teeth Whitening", "Orthodontics", "Emergency Care"],
    mapQuery: "215+Aba+Owerri+Road+MCC+Junction+Aba+Abia+State+Nigeria",
  },
  {
    name: "Owerri",
    tag: "Branch",
    address: "88 Wetheral Road, By MCC Junction, Beside FCMB Bank",
    city: "Owerri, Imo State",
    phone: "+234 813 282 5366",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM",
    features: ["General Dentistry", "Cosmetic Services", "Restorative Care", "Pediatric Dentistry", "Consultations"],
    mapQuery: "88+Wetheral+Road+Owerri+Imo+State+Nigeria",
  },
];

const LocationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Visit Us"
        title="Our"
        highlight="Locations"
        description="With three branches across Southern Nigeria, quality dental care is always within reach. Find the branch nearest to you and book your appointment today."
        breadcrumb="Locations"
      />

      {/* Branch Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 space-y-10">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-3xl border border-border shadow-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-3">
                {/* Map placeholder */}
                <div className="bg-secondary h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{branch.name}</h3>
                    <span className={`inline-block mt-2 text-xs font-body px-3 py-1 rounded-full ${
                      branch.tag === "Headquarters"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {branch.tag}
                    </span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 mt-4 text-sm font-body text-primary hover:underline"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-display text-xl font-bold text-foreground">{branch.name} {branch.tag}</h3>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm text-foreground block">{branch.address}</span>
                          <span className="font-body text-sm text-muted-foreground">{branch.city}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="font-body text-sm text-primary font-semibold hover:underline">
                          {branch.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">{branch.hours}</span>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button size="sm" asChild>
                          <a href={`https://wa.me/${branch.phone.replace(/[+\s]/g, '')}`} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={`tel:${branch.phone.replace(/\s/g, '')}`}>Call Now</a>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm mb-3">Services Available</h4>
                      <div className="space-y-2">
                        {branch.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="font-body text-sm text-muted-foreground">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hours Info */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Opening Hours</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              When We're <span className="text-primary">Open</span>
            </h2>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="space-y-4">
                {[
                  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM", active: true },
                  { day: "Saturday", time: "8:00 AM – 6:00 PM", active: true },
                  { day: "Sunday", time: "Closed (Emergency only)", active: false },
                  { day: "Public Holidays", time: "Closed (Emergency only)", active: false },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="font-body font-medium text-foreground">{row.day}</span>
                    <span className={`font-body text-sm ${row.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-6">
                For dental emergencies outside regular hours, please call our Port Harcourt headquarters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Visit Any Branch Today
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Walk in or book an appointment — we're ready to give you the smile you deserve.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationsPage;
