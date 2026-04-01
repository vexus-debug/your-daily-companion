import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-mint">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Book Your <span className="text-primary">Appointment</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Ready for a healthier, brighter smile? Contact us today to schedule your appointment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+2348165257737" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-body">Call Us</div>
                      <div className="font-body font-semibold text-foreground">+234 816 525 7737</div>
                    </div>
                  </a>

                  <a href="https://wa.me/2348165257737" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-body">WhatsApp</div>
                      <div className="font-body font-semibold text-foreground">Chat with us</div>
                    </div>
                  </a>

                  <a href="https://instagram.com/smile365star" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-body">Instagram</div>
                      <div className="font-body font-semibold text-foreground">@smile365star</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-8 bg-secondary/50 rounded-2xl">
                <div className="text-5xl mb-4">🦷</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Expert Consultation</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Get professional dental advice from our expert dentists.
                </p>
                <Button size="lg" asChild className="w-full max-w-xs">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
