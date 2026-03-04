// import { Link } from "react-router-dom";
// import { Instagram, Phone, Mail, MapPin } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   return (
//     <footer className="gradient-ocean text-primary-foreground">
//       <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="SR Aqua Hatchery" className="h-12 w-auto" />
//               <div>
//                 <h3 className="font-display text-xl font-bold">SR Aqua Hatchery</h3>
//                 <p className="text-primary-foreground/70 text-xs">Premium Shrimp Seed Supply</p>
//               </div>
//             </div>
//             <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
//               Supplying High-Quality Venamei Shrimp Seed with 40 Days Unconditional Guarantee.
//             </p>
//             <a
//               href="https://www.instagram.com/sraquahatcheries?utm_source=qr&igsh=MTV6eWR3ajRuamd1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
//             >
//               <Instagram className="w-5 h-5" />
//               <span className="text-sm">Follow on Instagram</span>
//             </a>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/services", label: "Services" },
//                 { to: "/gallery", label: "Gallery" },
//                 { to: "/contact", label: "Contact" },
//               ].map((link) => (
//                 <li key={link.to}>
//                   <Link
//                     to={link.to}
//                     className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               <li className="text-primary-foreground/80 text-sm">Venamei Shrimp Larvae Supply</li>
//               <li className="text-primary-foreground/80 text-sm">40 Days Seed Guarantee</li>
//               <li className="text-primary-foreground/80 text-sm">Bulk Orders Available</li>
//               <li className="text-primary-foreground/80 text-sm">24/7 Operations</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2">
//                 <Phone className="w-4 h-4 mt-0.5 shrink-0" />
//                 <div className="text-sm text-primary-foreground/80">
//                   <a href="tel:9000318188" className="hover:text-primary-foreground block">90003 18188</a>
//                   <a href="tel:9000171722" className="hover:text-primary-foreground block">9000 171722</a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Mail className="w-4 h-4 mt-0.5 shrink-0" />
//                 <a href="mailto:sraquahatchery@gmail.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
//                   sraquahatchery@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
//                 <span className="text-sm text-primary-foreground/80">
//                   Bondayikodu Village, Mummidivaram, Konaseema District
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
//           <p className="text-sm text-primary-foreground/60">
//             © {new Date().getFullYear()} SR Aqua Hatchery. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-ocean text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SR Aqua Hatchery" className="h-12 w-auto" />
              <div>
                <h3 className="font-display text-xl font-bold">SR Aqua Hatchery</h3>
                <p className="text-primary-foreground/70 text-xs">Premium Shrimp Seed Supply</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Supplying High-Quality Venamei Shrimp Seed with 40 Days Unconditional Guarantee.
            </p>
            <a
              href="https://www.instagram.com/sraquahatcheries?utm_source=qr&igsh=MTV6eWR3ajRuamd1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Follow on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { name: "About Us", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Gallery", to: "/gallery" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label || (link as any).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">Venamei Shrimp Larvae Supply</li>
              <li className="text-primary-foreground/80 text-sm">40 Days Seed Guarantee</li>
              <li className="text-primary-foreground/80 text-sm">Bulk Orders Available</li>
              <li className="text-primary-foreground/80 text-sm">24/7 Operations</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <a href="tel:9000318188" className="hover:text-primary-foreground block">90003 18188</a>
                  <a href="tel:9000171722" className="hover:text-primary-foreground block">9000 171722</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:sraquahatchery@gmail.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  sraquahatchery@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Bondayikodu Village, Mummidivaram, Konaseema District
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SR Aqua Hatchery. All rights reserved.
          </p>
          
          {/* StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/60">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:underline"
            >
              <img
                src="/staffarclogo.jpg"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;