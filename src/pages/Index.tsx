import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, HeartPulse, Clock, CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import hatcheryTanks from "@/assets/hatchery-tanks.jpg";
import shrimpLarvae from "@/assets/shrimp-larvae.jpg";

const whyChooseUs = [
  {
    icon: Shield,
    title: "40 Days Unconditional Guarantee",
    desc: "Complete seed replacement guarantee for 40 days — no questions asked.",
  },
  {
    icon: HeartPulse,
    title: "High Survival & Disease-Free",
    desc: "Our larvae are scientifically tested and certified disease-free before dispatch.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    desc: "Round-the-clock hatchery operations ensuring continuous supply availability.",
  },
  {
    icon: CheckCircle,
    title: "Quality Tested Before Dispatch",
    desc: "Every batch undergoes rigorous quality testing for optimal farming results.",
  },
];

const aboutFeatures = [
  "Fast growth rate",
  "High survival rate",
  "Disease resistant strains",
  "Scientific hatchery management",
  "Quality broodstock selection",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-primary/30" />

        {/* Ripple overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Premium Venamei
            <br />
            <span className="text-seafoam">Shrimp Hatchery</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Supplying High Healthy Shrimp Seed with 40 Days Unconditional Guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Contact Now</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Hatchery Section */}
      <section className="section-padding gradient-seafoam">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Our <span className="text-gradient-ocean">Hatchery</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SR Aqua Hatchery specializes in breeding and supplying premium quality
                Litopenaeus vannamei (Pacific White Shrimp) larvae. Our state-of-the-art
                facility ensures the highest standards of aquaculture practices.
              </p>
              <ul className="space-y-3">
                {aboutFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={hatcheryTanks}
                alt="Hatchery tanks at SR Aqua Hatchery"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-ocean opacity-20" />
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-gradient-ocean">SR Aqua</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            We deliver excellence in every batch of shrimp larvae
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-ocean p-6 text-center group">
                <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialization */}
      <section className="section-padding gradient-ocean text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Specialization
              </h2>
              <p className="text-primary-foreground/80 text-xl mb-4 font-display italic">
                "We Only Supply Venamei Shrimp Larvae"
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                By focusing exclusively on Litopenaeus vannamei, we have perfected every
                aspect of the breeding, rearing, and supply process. Our single-species
                dedication means unmatched quality and expertise.
              </p>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/services" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={shrimpLarvae}
                alt="Venamei shrimp larvae close-up"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Looking for Reliable <span className="text-gradient-ocean">Shrimp Seed Supply?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get in touch with us today for bulk orders, pricing, and availability.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
