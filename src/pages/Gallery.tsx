import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import hatcheryTanks from "@/assets/hatchery-tanks.jpg";
import shrimpLarvae from "@/assets/shrimp-larvae.jpg";
import waterTesting from "@/assets/water-testing.jpg";
import packing from "@/assets/packing.jpg";
import broodstock from "@/assets/broodstock.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";

const galleryItems = [
  { src: heroBg, title: "Hatchery Overview", category: "Facility" },
  { src: hatcheryTanks, title: "Larval Rearing Tanks", category: "Tanks" },
  { src: shrimpLarvae, title: "Venamei Shrimp Larvae", category: "Larvae" },
  { src: waterTesting, title: "Water Quality Testing", category: "Quality" },
  { src: packing, title: "Packaging & Transport", category: "Packing" },
  { src: broodstock, title: "Premium Broodstock", category: "Broodstock" },
  { src: farmAerial, title: "Coastal Shrimp Farm", category: "Facility" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${farmAerial})` }} />
        <div className="absolute inset-0 gradient-seafoam opacity-80" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-ocean">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our world-class hatchery operations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-primary-foreground font-display font-semibold">{item.title}</p>
                      <p className="text-primary-foreground/70 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full animate-fade-in">
            <img
              src={galleryItems[selected].src}
              alt={galleryItems[selected].title}
              className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
            />
            <p className="text-primary-foreground text-center mt-4 font-display text-lg">
              {galleryItems[selected].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
