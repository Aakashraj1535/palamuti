import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Diamond, Shield, Star, Quote, ArrowRight, Gem, Award } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-jewelry.jpg";
import necklaceFlora from "@/assets/product-necklace-ballerina.jpg";
import inlaymosaic from "@/assets/Inlay Mosaic Pendant.jpg";
import doubledrop from "@/assets/CZDoubledroptennis.jpg";
import { useRef } from "react";

const featuredProducts = [
  { image: necklaceFlora, name: "Flora Pendant", description: "Graceful handcrafted silver dancer.", price: "$199" },
  { image: inlaymosaic, name: "Inlay Mosaic Pendant", description: "Sophisticated layered silver mosaic.", price: "$199" },
  { image: doubledrop, name: "Double Drop Tennis", description: "Refined sparkling silver tennis.", price: "$199" },
];

const values = [
  { icon: Diamond, title: "Quality", description: "Only the finest materials and gemstones in every piece we create" },
  { icon: Award, title: "Craftsmanship", description: "Handcrafted by master artisans with decades of experience" },
  { icon: Shield, title: "Trust", description: "Certified authenticity and lifetime quality guarantee on every piece" },
];

const testimonials = [
  { name: "Maria Santos", text: "Palamuti's craftsmanship is unmatched. My engagement ring is absolutely breathtaking and has become a family treasure.", rating: 5 },
  { name: "Ana Reyes", text: "Every piece I own from Palamuti receives countless compliments. True artistry that stands the test of time.", rating: 5 },
  { name: "Isabella Cruz", text: "The attention to detail is remarkable. Palamuti has become my go-to for fine jewelry and gifting.", rating: 5 },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "5,000+", label: "Pieces Crafted" },
  { value: "50+", label: "Master Artisans" },
  { value: "100%", label: "Ethically Sourced" },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img src={heroImage} alt="Palamuti luxury jewelry collection" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>

        {/* Decorative floating elements */}
        <div className="absolute top-1/4 left-[10%] w-1 h-1 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-[20%] w-1 h-1 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "4s" }} />

        <motion.div className="relative z-10 text-center px-6 max-w-5xl" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Gem size={32} className="text-primary mx-auto mb-4 animate-pulse-gold" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary text-xs md:text-sm tracking-[0.5em] uppercase font-body mb-6"
          >
            Palamuti Fine Jewelry
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-4"
          >
            Timeless Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-10"
          >
            <span className="shimmer-text italic">Crafted with Perfection</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground font-body text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Where heritage meets artistry — discover jewelry that tells your story for generations to come.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 px-10 py-4 gold-gradient text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-bold hover:opacity-90 transition-all"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-block px-10 py-4 border border-primary/40 text-primary text-xs tracking-[0.2em] uppercase font-body hover:bg-primary/10 transition-all"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-secondary border-y border-border py-4 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6">
              {["Handcrafted Excellence", "Ethically Sourced", "Lifetime Guarantee", "Master Artisans", "Premium Silver", "Certified Authentic"].map((text) => (
                <span key={text} className="flex items-center gap-3 text-muted-foreground font-body text-xs tracking-[0.2em] uppercase">
                  <Diamond size={10} className="text-primary" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <SectionReveal className="text-center mb-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Curated Selection</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Featured Pieces</h2>
          <div className="gold-line-wide mx-auto mb-6" />
          <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
            Each piece is a masterwork of precision, passion, and timeless beauty
          </p>
        </SectionReveal>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {featuredProducts.map((product, i) => (
            <SectionReveal key={product.name} delay={i * 0.1}>
              <ProductCard {...product} />
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="text-center mt-14">
          <Link
            to="/collections"
            className="group inline-flex items-center gap-2 text-primary font-body text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all duration-300"
          >
            View All Collections
            <ArrowRight size={14} />
          </Link>
        </SectionReveal>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold shimmer-text mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-body text-xs tracking-[0.15em] uppercase">{stat.label}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-padding bg-background">
        <SectionReveal className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Our Promise</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Why Palamuti</h2>
          <div className="gold-line-wide mx-auto" />
        </SectionReveal>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.15}>
              <div className="text-center p-8 border border-border hover:border-primary/30 transition-all duration-500 group gold-glow-hover">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:gold-glow">
                  <v.icon size={30} className="text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{v.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <SectionReveal className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Client Stories</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">What They Say</h2>
          <div className="gold-line-wide mx-auto" />
        </SectionReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.15}>
              <div className="bg-card border border-border p-8 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-500" />
                <Quote size={28} className="text-primary/30 mb-6" />
                <p className="text-foreground font-body text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={12} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-primary font-display text-sm tracking-wide">{t.name}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-background text-center overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="relative z-10">
          <Gem size={28} className="text-primary mx-auto mb-6 animate-pulse-gold" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            Discover Your <span className="shimmer-text italic">Perfect Piece</span>
          </h2>
          <p className="text-muted-foreground font-body mb-10 max-w-xl mx-auto leading-relaxed">
            Visit our collections and find the jewelry that speaks to your soul — a piece that will be treasured for generations.
          </p>
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 px-12 py-4 gold-gradient text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-bold hover:opacity-90 transition-all"
          >
            Explore Our Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Index;
