import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";
import anniversaryBanner from "@/assets/gallery/anniversary-banner.jpg";
import patientTreatment from "@/assets/patient-treatment.jpg";
import modernOffice from "@/assets/modern-dental-office.jpg";
import clinicBuilding from "@/assets/clinic-building.jpg";

const images = [
  { src: clinicEntrance, alt: "Clinic entrance", span: "col-span-2 row-span-2" },
  { src: patientTreatment, alt: "Patient receiving treatment", span: "col-span-1 row-span-1" },
  { src: modernOffice, alt: "Modern dental office", span: "col-span-1 row-span-1" },
  { src: dentalTeam, alt: "Our dental team", span: "col-span-1 row-span-2" },
  { src: clinicBuilding, alt: "Smile 365 Dental Clinic", span: "col-span-1 row-span-1" },
  { src: anniversaryBanner, alt: "Anniversary celebration", span: "col-span-1 row-span-1" },
];

const GalleryPreviewSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
              Inside Our Clinic
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              See Where the <span className="text-primary">Magic Happens</span>
            </h2>
          </div>
          <Button variant="outline" asChild className="w-fit">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[480px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
