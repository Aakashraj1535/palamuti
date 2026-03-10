import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Diamond, Send } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Thank you for your message. We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = "w-full bg-input border border-border px-5 py-4 text-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-all duration-300 placeholder:text-muted-foreground/60 hover:border-border/80";

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="relative z-10">
          <Diamond size={24} className="text-primary mx-auto mb-4 animate-pulse-gold" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">Contact Us</h1>
          <div className="gold-line-wide mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Visit our showroom or send us a message.
          </p>
        </SectionReveal>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <SectionReveal>
            <h2 className="font-display text-2xl font-semibold mb-2">Send a Message</h2>
            <div className="gold-line mb-8" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className={inputClasses}
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-bold hover:opacity-90 transition-all self-start"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-2xl font-semibold mb-2">Visit Our Showroom</h2>
            <div className="gold-line mb-8" />
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: MapPin, label: "Address", value: "123 Jewelry Avenue, Makati City, Metro Manila, Philippines" },
                { icon: Phone, label: "Phone", value: "+63 (2) 8888-7777" },
                { icon: Mail, label: "Email", value: "hello@palamuti.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-primary tracking-[0.15em] uppercase mb-1">{label}</p>
                    <p className="text-muted-foreground font-body text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-10">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(43_72%_55%/0.15)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="w-full aspect-video border border-border overflow-hidden gold-border-hover transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802!2d121.0244!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzE3LjAiTiAxMjHCsDAxJzI3LjgiRQ!5e0!3m2!1sen!2sph!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Palamuti showroom location"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
