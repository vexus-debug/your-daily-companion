import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

import treatmentProcedure from "@/assets/gallery/treatment-procedure.jpg";
import anniversaryBanner from "@/assets/gallery/anniversary-banner.jpg";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import receptionDesk from "@/assets/gallery/reception-desk.jpg";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";

const galleryItems = [
  { src: treatmentProcedure, title: "Advanced Treatment", category: "Procedures", desc: "Our dentists performing precision dental procedures with modern equipment" },
  { src: dentalTeam, title: "Expert Team at Work", category: "Team", desc: "Our skilled dental professionals collaborating for the best outcomes" },
  { src: dentistAtWork, title: "Patient Care", category: "Procedures", desc: "Personalized dental care with cutting-edge digital diagnostics" },
  { src: treatmentRoom, title: "State-of-the-Art Suite", category: "Facility", desc: "Modern treatment room equipped with the latest dental technology" },
  { src: receptionDesk, title: "Welcome Reception", category: "Facility", desc: "Our warm, inviting reception area ready to greet you" },
  { src: clinicEntrance, title: "Clinic Entrance", category: "Facility", desc: "Step into our beautifully designed clinic space" },
  { src: waitingArea, title: "Comfortable Waiting Area", category: "Facility", desc: "Relax in our spacious, modern waiting lounge" },
  { src: loungeArea, title: "Patient Lounge", category: "Facility", desc: "Cozy seating area for a comfortable visit" },
  { src: anniversaryBanner, title: "2 Years of Smiles", category: "Milestones", desc: "Celebrating two years of transforming smiles and lives" },
];

const categories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our"
        highlight="Gallery"
        description="Take a virtual tour of our clinics, meet our team, and see the quality of care we provide every day."
        breadcrumb="Gallery"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                  onClick={() => setLightbox(galleryItems.indexOf(item))}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-display text-lg font-bold text-primary-foreground mt-1">{item.title}</h3>
                    <p className="text-xs text-primary-foreground/80 font-body mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].title}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h3 className="font-display text-xl font-bold text-primary-foreground">{galleryItems[lightbox].title}</h3>
                <p className="text-sm text-primary-foreground/70 font-body mt-1">{galleryItems[lightbox].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
