import SectionReveal from "@/components/SectionReveal";
import ownerImage from "@/assets/owner-portrait.jpg";
import { Diamond, Award, Gem, Globe } from "lucide-react";

const milestones = [
  { icon: Award, year: "2004", title: "Apprenticeship", description: "Began learning traditional goldsmith techniques" },
  { icon: Gem, year: "2010", title: "Gemology Studies", description: "Certified gemologist from Antwerp, Belgium" },
  { icon: Globe, year: "2014", title: "Milan Design", description: "Studied contemporary jewelry design in Italy" },
  { icon: Diamond, year: "2016", title: "Founded Palamuti", description: "Launched the brand with a singular vision" },
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
            <p className="text-primary/70 font-body text-sm mb-6 italic tracking-wide">Master Jeweler · 20+ Years of Experience</p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With over two decades of experience in the fine jewelry industry, Mary Rose Sinining has established herself as one of the most respected names in luxury jewelry design. Her journey began as an apprentice in a traditional goldsmith workshop, where she mastered the intricate art of handcrafting precious metals and setting gemstones.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              After studying gemology in Antwerp and jewelry design in Milan, Mary Rose Sinining founded Palamuti with a singular vision: to create jewelry that captures the essence of timeless elegance while pushing the boundaries of contemporary design.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Her philosophy is simple yet profound—every piece of jewelry should tell a story, evoke emotion, and become a treasured companion for generations.
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
