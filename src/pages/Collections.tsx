import SectionReveal from "@/components/SectionReveal";
import ProductCard from "@/components/ProductCard";
import { Diamond } from "lucide-react";
import necklaceFlora from "@/assets/product-necklace-ballerina.jpg";
import inlaymosaic from "@/assets/Inlay Mosaic Pendant.jpg";
import filigree from "@/assets/filigree barrel slide pendant.jpg";
import pearlheart from "@/assets/Pearl Heart Pendant Necklace.jpg";
import paparzai from "@/assets/Paparazzi.jpg";
import leaffringe from  "@/assets/leaf-fringe.jpg";
import multitone from "@/assets/multitonebutterfly.jpg";
import doubledrop from "@/assets/CZDoubledroptennis.jpg";

const products = [
  { image: necklaceFlora, name: "Ballerina Pendant", description: "Graceful handcrafted silver dancer.", price: "$199", category: "Necklaces" },
  { image: inlaymosaic, name: "Inlay Mosaic Pendant", description: "Sophisticated layered silver mosaic.", price: "$199", category: "Necklaces" },
  { image: filigree, name: "Filigree Barrel Slide Pendant", description: "Elegant filigree design pendant", price: "$199", category: "Necklaces" },
  { image: pearlheart, name: "Pearl Heart Pendant", description: "Elegant pearl heart pendant", price: "$199", category: "Necklaces" },
  { image: paparzai, name: "Paparazzi", description: "Bold, stunning silver statement.", price: "$199", category: "Necklaces" },
  { image: leaffringe, name: "Leaf Fringe", description: "Elegant leaf fringe necklace", price: "$199", category: "Necklaces" },
  { image: multitone, name: "Multitone Butterfly", description: "Colorful butterfly design necklace", price: "$199", category: "Necklaces" },
  { image: doubledrop, name: "Double Drop Tennis", description: "Refined sparkling silver tennis.", price: "₱50,000", category: "Necklaces" }
];


const Collections = () => {
  const filtered = products;

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary text-center relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary" />
        </div>
        <SectionReveal className="relative z-10">
          <Diamond size={24} className="text-primary mx-auto mb-4 animate-pulse-gold" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-3">Our Pieces</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">Collections</h1>
          <div className="gold-line-wide mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Explore our curated selection of fine jewelry, each piece crafted with exceptional skill and passion.
          </p>
        </SectionReveal>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Product count */}
          <div className="text-center mb-10">
            <p className="text-muted-foreground font-body text-xs tracking-wider uppercase">
              Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <SectionReveal key={product.name} delay={i * 0.05}>
                <ProductCard {...product} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
