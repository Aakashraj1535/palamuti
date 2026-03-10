import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-card border border-border overflow-hidden gold-border-hover gold-glow-hover transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* View button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            to="/collections"
            className="flex items-center gap-2 px-6 py-3 border border-primary/80 text-primary text-xs tracking-[0.2em] uppercase font-body backdrop-blur-sm bg-background/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 translate-y-4 group-hover:translate-y-0"
          >
            <Eye size={14} />
            View Details
          </Link>
        </div>
      </div>
      <div className="p-5 relative">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-muted-foreground text-sm font-body mb-3 line-clamp-1">{description}</p>
        <p className="text-primary font-display text-lg tracking-wide">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
