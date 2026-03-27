import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak directly with our team",
    items: [
      { label: "Port Harcourt (HQ)", value: "+234 816 525 7737", href: "tel:+2348165257737" },
      { label: "Aba Branch", value: "+234 810 553 6130", href: "tel:+2348105536130" },
      { label: "Owerri Branch", value: "+234 813 282 5366", href: "tel:+2348132825366" },
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Chat with us instantly",
    items: [
      { label: "Port Harcourt", value: "Chat Now", href: "https://wa.me/2348165257737" },
      { label: "Aba", value: "Chat Now", href: "https://wa.me/2348105536130" },
      { label: "Owerri", value: "Chat Now", href: "https://wa.me/2348132825366" },
    ],
  },
  {
    icon: Facebook,
    title: "Social Media",
    desc: "Follow us for updates",
    items: [
      { label: "Facebook", value: "Smile 365 Star", href: "https://www.facebook.com/smile365star" },
      { label: "Instagram", value: "@smile365star", href: "https://www.instagram.com/smile365star" },
    ],
  },
];

const faqs = [
  { q: "Do I need to book an appointment?", a: "While walk-ins are welcome, we recommend booking an appointment to ensure availability and minimize wait times." },
  { q: "Is the consultation really free?", a: "Yes! We offer free initial consultations at all our branches. Our dentists will assess your oral health and recommend a treatment plan at no cost." },
  { q: "Do you accept health insurance?", a: "Yes, we work with several HMO and insurance providers. Please contact your nearest branch to confirm your specific plan." },
  { q: "What should I bring to my first visit?", a: "Please bring a valid ID, any previous dental records or X-rays, and your insurance card if applicable." },
  { q: "Are payment plans available?", a: "Yes, we offer flexible payment plans for many treatments. Discuss options with our team during your consultation." },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    branch: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nPreferred Branch: ${formData.branch}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/2348165257737?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    toast({ title: "Redirecting to WhatsApp", description: "Complete your booking via WhatsApp chat." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Get In Touch"
        title="Contact Us &"
        highlight="Book Appointment"
        description="Ready for a healthier, brighter smile? Reach out to us through any channel — we're here to help you every step of the way."
        breadcrumb="Contact"
      />

      {/* Contact Methods */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border shadow-card"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{method.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{method.desc}</p>
                <div className="space-y-2">
                  {method.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="font-body text-xs text-muted-foreground">{item.label}</span>
                      <span className="font-body text-sm font-semibold text-primary">{item.value}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-3">
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Book Online</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
                Request an <span className="text-primary">Appointment</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you via WhatsApp to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-2">Full Name *</label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-2">Phone Number *</label>
                    <Input
                      required
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-2">Email (Optional)</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-2">Preferred Branch *</label>
                    <select
                      required
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select branch</option>
                      <option value="Port Harcourt">Port Harcourt (HQ)</option>
                      <option value="Aba">Aba Branch</option>
                      <option value="Owerri">Owerri Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="General Check-up">General Check-up</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Orthodontics">Orthodontics (Braces/Aligners)</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Root Canal">Root Canal Treatment</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                    <option value="Emergency">Emergency Dental Care</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">Additional Message</label>
                  <Textarea
                    placeholder="Tell us more about your dental concern..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div {...fadeUp} className="lg:col-span-2 space-y-6">
              {/* Free Consultation Card */}
              <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                <div className="text-4xl mb-4">🦷</div>
                <h3 className="font-display text-2xl font-bold mb-2">Free Consultation</h3>
                <p className="font-body text-sm opacity-80 mb-6">
                  Get professional dental advice from our expert dentists at absolutely no cost. Available at all branches.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <a href="https://wa.me/2348165257737?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
              </div>

              {/* Branch Quick Contacts */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  {[
                    { branch: "Port Harcourt (HQ)", phone: "+234 816 525 7737" },
                    { branch: "Aba Branch", phone: "+234 810 553 6130" },
                    { branch: "Owerri Branch", phone: "+234 813 282 5366" },
                  ].map((b) => (
                    <div key={b.branch} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="font-body text-sm text-muted-foreground">{b.branch}</span>
                      <a href={`tel:${b.phone.replace(/\s/g,'')}`} className="font-body text-sm font-semibold text-primary hover:underline">{b.phone}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-foreground">Working Hours</h3>
                </div>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Mon – Sat</span><span className="text-foreground font-medium">8AM – 6PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="text-muted-foreground">Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-background rounded-xl border border-border p-5 shadow-card"
              >
                <summary className="font-body font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
