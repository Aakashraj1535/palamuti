import SectionReveal from "@/components/SectionReveal";
import ownerImage from "@/assets/owner-portrait.jpg";
import { Diamond, Award, Gem, Globe } from "lucide-react";

const milestones = [
  { icon: Award, year: "2004", title: "Apprenticeship", description: "Began learning traditional goldsmith techniques" },
  { icon: Gem, year: "2010", title: "Gemology Studies", description: "Certified gemologist from Antwerp, Belgium" },
  { icon: Globe, year: "2014", title: "Milan Design", description: "Studied contemporary jewelry design in Italy" },
  { icon: Diamond, year: "2026", title: "Founded Palamuti", description: "Launched the brand with a singular vision" },
];

const Owner = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="relative z-10">
          <Diamond size={24} className="text-primary mx-auto mb-4 animate-pulse-gold" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">The Visionary</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">Our Founder</h1>
          <div className="gold-line-wide mx-auto" />
        </SectionReveal>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="relative group">
              <img src={ownerImage} alt="Founder of Palamuti" className="w-full relative z-10" loading="lazy" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 group-hover:border-primary/40 transition-all duration-500 z-0" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Founder & Creative Director</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">Mary Rose Sinining</h2>
            <div className="gold-line mb-4" />
        
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
             Mary Rose Sinining is the passionate founder of Palamuti, a jewelry brand created with a vision to celebrate elegance, individuality, and timeless beauty. With a deep interest in craftsmanship and design, she started Palamuti to bring unique and meaningful jewelry pieces to people who appreciate style and quality.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
             Her journey began with a love for artistic expression and a desire to create accessories that tell a story. Through Palamuti, Mary Rose focuses on blending creativity with fine detailing, ensuring that every piece reflects sophistication and charm.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              She believes jewelry is more than just an accessory — it is a symbol of identity, confidence, and personal expression. With dedication and passion, Mary Rose Sinining continues to grow Palamuti into a brand that represents beauty, authenticity, and craftsmanship.
           <p className="text-muted-foreground font-body leading-relaxed mb-4">
            </p>Through Palamuti, she aims to bring timeless styles that blend modern trends with classic charm. Her dedication continues to shape the brand into a symbol of quality, style, and meaningful craftsmanship.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-secondary">
        <SectionReveal className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">The Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Key Milestones</h2>
          <div className="gold-line-wide mx-auto" />
        </SectionReveal>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <SectionReveal key={m.year} delay={i * 0.1}>
              <div className="text-center p-6 border border-border hover:border-primary/30 transition-all duration-500 group h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500">
                  <m.icon size={22} className="text-primary" />
                </div>
                <p className="text-primary font-display text-2xl font-semibold mb-2">{m.year}</p>
                <h3 className="font-display text-base mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-xs font-body leading-relaxed">{m.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Vision Quote */}
      <section className="section-padding bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="max-w-3xl mx-auto relative z-10">
          <Gem size={28} className="text-primary mx-auto mb-6 animate-pulse-gold" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Her Vision</p>
          <h2 className="font-display text-2xl md:text-4xl font-semibold mb-6 leading-relaxed">
            "Jewelry is not just an accessory—it is an <span className="shimmer-text italic">expression of the soul</span>."
          </h2>
          <div className="gold-line-wide mx-auto mb-6" />
          <p className="text-muted-foreground font-body leading-relaxed">
            Mary believes that the true value of jewelry lies not in its material worth, but in the emotions it carries and the stories it tells. This philosophy guides every creation at Palamuti.
          </p>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Owner;
