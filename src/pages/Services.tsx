import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Microscope, TrendingUp, Package } from "lucide-react";
import shrimpLarvae from "@/assets/shrimp-larvae.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Shield, text: "40 Days Unconditional Guarantee" },
  { icon: TrendingUp, text: "High Survival Rate" },
  { icon: Microscope, text: "Scientifically Monitored Hatchery" },
  { icon: Package, text: "Bulk Orders Available" },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 gradient-seafoam opacity-80" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-ocean">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium Venamei shrimp larvae supply — our singular focus, your guaranteed quality.
          </p>
        </div>
      </section>

      {/* Main Service */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🦐 Our Core Service
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Venamei Shrimp <span className="text-gradient-ocean">Larvae Supply</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We specialize exclusively in <strong>Litopenaeus vannamei</strong> (Pacific White Shrimp)
                larvae supply. Our hatchery produces high-quality post-larvae (PL) that are
                scientifically bred, health-certified, and backed by our industry-leading guarantee.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Each batch undergoes rigorous PCR testing, water quality analysis, and health
                monitoring before dispatch, ensuring you receive only the healthiest, most
                resilient shrimp seed for your farm.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-ocean flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div>
              <img
                src={shrimpLarvae}
                alt="Premium Venamei shrimp larvae"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-ocean text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Contact us today to discuss your requirements, pricing, and delivery schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20">
              <a
                href="https://wa.me/919000318188?text=Hi%20SR%20Aqua%20Hatchery%2C%20I%20would%20like%20to%20inquire%20about%20Venamei%20Shrimp%20Larvae."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
