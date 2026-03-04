import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmAerial from "@/assets/farm-aerial.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi SR Aqua Hatchery, I would like to inquire about Venamei Shrimp Larvae.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919000318188?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${farmAerial})` }} />
        <div className="absolute inset-0 gradient-seafoam opacity-80" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-ocean">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out for orders, inquiries, or to visit our hatchery.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">
                Get in <span className="text-gradient-ocean">Touch</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:9000318188" className="text-muted-foreground hover:text-secondary block">90003 18188</a>
                    <a href="tel:9000171722" className="text-muted-foreground hover:text-secondary block">9000 171722</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:sraquahatchery@gmail.com" className="text-muted-foreground hover:text-secondary">
                      sraquahatchery@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Bondayikodu Village,<br />
                      Mummidivaram,<br />
                      Konaseema District
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">24/7 – All Days Open</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-ocean p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone</label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">
            Find <span className="text-gradient-ocean">Us</span>
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3821.123!2d82.0816826!3d16.625633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDM3JzMyLjMiTiA4MsKwMDQnNTQuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR Aqua Hatchery Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
