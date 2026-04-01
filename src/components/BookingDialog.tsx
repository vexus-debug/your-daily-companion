import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, MapPin, CheckCircle2, ArrowRight, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { branches, services } from "@/data/services";

interface BookingDialogProps {
  trigger?: React.ReactNode;
  preselectedServices?: string[];
}

const BookingDialog = ({ trigger, preselectedServices = [] }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(preselectedServices);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const resetForm = () => {
    setStep(1);
    setSelectedServices(preselectedServices);
    setSelectedLocation("");
    setName("");
    setPhone("");
    setNotes("");
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      setSelectedServices(preselectedServices);
      setStep(preselectedServices.length > 0 ? 2 : 1);
    } else {
      resetForm();
    }
  };

  const toggleService = (item: string) => {
    setSelectedServices((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const branch = branches.find((b) => b.name === selectedLocation);

  const handleBook = () => {
    if (!branch) return;
    const message = `Hi Smile 365 Star 👋\n\nI'd like to book an appointment.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${branch.name}\n*Services:*\n${selectedServices.map((s) => `• ${s}`).join("\n")}${notes ? `\n\n*Notes:* ${notes}` : ""}`;
    const url = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
    resetForm();
  };

  const canProceedStep1 = selectedServices.length > 0;
  const canProceedStep2 = selectedLocation !== "";
  const canProceedStep3 = name.trim() !== "" && phone.trim() !== "";

  // Flatten all sub-services grouped by category
  const allServiceGroups = services.map((s) => ({
    title: s.title,
    icon: s.icon,
    items: s.items,
  }));

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg">
            <CalendarCheck className="mr-2 h-5 w-5" /> Book Appointment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0">
        {/* Progress bar */}
        <div className="flex gap-1 px-6 pt-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <DialogHeader className="px-6 pt-4 pb-0">
          <DialogTitle className="font-display text-xl">
            {step === 1 && "Select Services"}
            {step === 2 && "Choose Location"}
            {step === 3 && "Your Details"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground font-body">
            {step === 1 && "Pick one or more services you're interested in"}
            {step === 2 && "Select the branch nearest to you"}
            {step === 3 && "We'll reach out to confirm your appointment"}
          </p>
        </DialogHeader>

        <div className="px-6 pb-6 pt-4">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {allServiceGroups.map((group) => (
                  <div key={group.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <group.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold font-body text-foreground">{group.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const selected = selectedServices.includes(item);
                        return (
                          <button
                            key={item}
                            onClick={() => toggleService(item)}
                            className={`text-xs font-body px-3 py-1.5 rounded-full border transition-all ${
                              selected
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-foreground border-border hover:border-primary/50"
                            }`}
                          >
                            {selected && <CheckCircle2 className="inline h-3 w-3 mr-1" />}
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {branches.map((b) => {
                  const isSelected = selectedLocation === b.name;
                  return (
                    <button
                      key={b.name}
                      onClick={() => setSelectedLocation(b.name)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-foreground">{b.name}</span>
                        <span className={`text-xs font-body px-2 py-0.5 rounded-full ${
                          b.tag === "Headquarters"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {b.tag}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-body text-muted-foreground">{b.address}</span>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1 block">Full Name *</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1 block">Phone Number *</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234..." />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1 block">Additional Notes</label>
                  <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special requirements..." rows={3} />
                </div>

                {/* Summary */}
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <p className="text-xs font-body font-semibold text-foreground">Booking Summary</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <MapPin className="h-3.5 w-3.5" /> {selectedLocation}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedServices.map((s) => (
                      <span key={s} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-body">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6 gap-3">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                Back
              </Button>
            ) : (
              <div className="flex-1" />
            )}

            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 ? !canProceedStep1 : !canProceedStep2}
                className="flex-1"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleBook} disabled={!canProceedStep3} className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white">
                <MessageCircle className="mr-2 h-4 w-4" /> Book via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
