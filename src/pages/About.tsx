import SectionReveal from "@/components/SectionReveal";
import aboutImage from "@/assets/about-craftsmanship.jpg";
import { Diamond, Heart, Globe, Sparkles } from "lucide-react";

const commitments = [
  { icon: Diamond, title: "Premium Materials", description: "We source only the finest gold, platinum, and ethically mined gemstones from around the world." },
  { icon: Heart, title: "Handcrafted with Love", description: "Every piece is meticulously crafted by hand, ensuring uniqueness and unparalleled quality." },
  { icon: Globe, title: "Sustainable Practices", description: "We are committed to ethical sourcing and environmentally responsible manufacturing." },
  { icon: Sparkles, title: "Lifetime Guarantee", description: "Each creation comes with our promise of lifetime quality assurance and care." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="relative z-10">
          <Diamond size={24} className="text-primary mx-auto mb-4 animate-pulse-gold" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">About Palamuti</h1>
          <div className="gold-line-wide mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            A legacy of excellence in fine jewelry craftsmanship, where every piece is a testament to artistry, passion, and timeless beauty.
          </p>
        </SectionReveal>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="relative group">
              <img src={aboutImage} alt="Jewelry craftsmanship" className="w-full relative z-10" loading="lazy" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 group-hover:border-primary/40 transition-all duration-500 z-0" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t border-l border-primary/30" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Heritage</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">A Legacy of Brilliance</h2>
            <div className="gold-line mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Add a touch of elegance and simplicity to your everyday style with this beautifully crafted 925 Sterling Silver Pendant Necklace. Designed with a modern polished barrel pendant featuring delicate cut-out detailing, this necklace reflects light beautifully and adds subtle sophistication to any outfit.


            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
             Made from high-quality 925 sterling silver, this piece offers durability, shine, and timeless appeal. Its minimalist design makes it perfect for both casual wear and special occasions.
           
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <SectionReveal>
            <div className="border border-border p-10 hover:border-primary/30 transition-all duration-500 h-full">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Purpose</p>
              <h2 className="font-display text-3xl font-semibold mb-2">Our Mission</h2>
              <div className="gold-line mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed">
                To create exquisite jewelry that celebrates life's most precious moments, empowering individuals to express their unique identity through timeless craftsmanship and ethical luxury.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="border border-border p-10 hover:border-primary/30 transition-all duration-500 h-full">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Future</p>
              <h2 className="font-display text-3xl font-semibold mb-2">Our Vision</h2>
              <div className="gold-line mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed">
                To be recognized globally as the pinnacle of artisanal jewelry, setting the standard for excellence, sustainability, and innovation in the fine jewelry industry.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-background">
        <SectionReveal className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Our Pledge</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Commitment to Excellence</h2>
          <div className="gold-line-wide mx-auto" />
        </SectionReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, i) => (
            <SectionReveal key={c.title} delay={i * 0.1}>
              <div className="text-center p-8 border border-border hover:border-primary/30 transition-all duration-500 group h-full">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500">
                  <c.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{c.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
