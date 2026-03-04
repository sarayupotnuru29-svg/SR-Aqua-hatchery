import { Target, Eye, CheckCircle } from "lucide-react";
import farmAerial from "@/assets/farm-aerial.jpg";
import broodstock from "@/assets/broodstock.jpg";
import hatcheryTanks from "@/assets/hatchery-tanks.jpg";
import waterTesting from "@/assets/water-testing.jpg";
import packing from "@/assets/packing.jpg";

const processSteps = [
  {
    step: "01",
    title: "Broodstock Selection",
    desc: "Carefully selected healthy, mature broodstock for superior genetic quality.",
    image: broodstock,
  },
  {
    step: "02",
    title: "Larval Rearing Tanks",
    desc: "State-of-the-art tanks with controlled environment for optimal larvae growth.",
    image: hatcheryTanks,
  },
  {
    step: "03",
    title: "Water Quality Management",
    desc: "Continuous monitoring of pH, salinity, dissolved oxygen, and temperature.",
    image: waterTesting,
  },
  {
    step: "04",
    title: "Health Monitoring",
    desc: "Regular PCR testing and microscopic examination to ensure disease-free larvae.",
    image: waterTesting,
  },
  {
    step: "05",
    title: "Packaging & Transport",
    desc: "Professional oxygenated packaging for safe and healthy transportation.",
    image: packing,
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${farmAerial})` }} />
        <div className="absolute inset-0 gradient-seafoam opacity-80" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-ocean">SR Aqua Hatchery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner in premium shrimp seed supply since day one.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">
            Our <span className="text-gradient-ocean">Story</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            SR Aqua Hatchery, located in Bondayikodu Village, Mummidivaram, Konaseema District,
            has been serving shrimp farmers across Konaseema and nearby regions with premium quality
            Venamei (Litopenaeus vannamei) shrimp seed. Our commitment to quality, scientific practices,
            and farmer satisfaction has made us a trusted name in the aquaculture industry.
          </p>
        </div>
      </section>

      {/* Hatchery Process */}
      <section className="section-padding gradient-seafoam">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4 text-center">
            Our Hatchery <span className="text-gradient-ocean">Process</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A scientific, step-by-step approach ensuring the highest quality larvae
          </p>
          <div className="space-y-8">
            {processSteps.map((item, i) => (
              <div
                key={item.step}
                className={`card-ocean p-6 md:p-8 flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 items-center`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-64 h-48 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="text-secondary font-bold text-sm mb-1">STEP {item.step}</div>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-ocean p-8 text-center">
              <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide high-quality, healthy shrimp seed for sustainable aquaculture,
                empowering farmers with reliable supply and unwavering support.
              </p>
            </div>
            <div className="card-ocean p-8 text-center">
              <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To become a trusted aquaculture partner across India, setting the benchmark
                for shrimp seed quality and farmer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
