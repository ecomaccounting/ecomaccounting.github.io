import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { navLinks } from "@/data/navLinks.json";
import data from "@/data/data1.json";

export default function Footer() {
  
  return (
    <footer className="px-4 py-12 bg-accent">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-10 p-2">

        {/* Brand + Description */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logo/task360-logo-r.png"
              alt="Task360 Logo"
              width={160}
              height={60}
              className="object-contain"
            />
            
          </Link>

          <p className="text-sm leading-relaxed">
            Focus on growing your online business while we handle your books, taxes, and compliance.
            Specialized services for Amazon, Flipkart, and other marketplace sellers.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl transition" size={30} />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-xl transition" size={30} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-xl transition" size={30} />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="text-xl transition" size={30} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <nav>
          <h4 className="text-lg mb-4 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((n, index) => (
              <li key={index}>
                <Link href={n.link} className="transition">{n.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Services Column */}
        <div>
          <h4 className="text-lg mb-4 pb-2">Services</h4>
          <ul className="space-y-2 text-sm">

            {
              data.services
                .filter(srv => srv.footer===true)
                .map((child, idx) => {
                  return (
                    <div className="flex items-center gap-3" key={idx}>
                      <li>
                        <Link href={`/services/${child.id}`} className="transition">
                          {child.name}
                        </Link>
                      </li>
                    </div>
                  );
                })}
          </ul>
        </div>            

        {/* Contact Us — now includes Locations */}
        <address className="not-italic">
          <h4 className="text-lg mb-4 pb-2">Contact Us</h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-muted text-lg" />
              <a href="mailto:support@task360.co" className="transition">
                support@task360.co
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-muted text-lg" />
              <a href="tel:+918989459947" className="transition">
                +91 89894-59947
              </a>
            </li>

            {/* Primary Address */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-muted text-lg mt-1" />
              <address className="text-muted">
                186 Goyal Nagar, Indore, <br />MP, India, 452018
              </address>
            </li>
          </ul>

          {/* Locations inside Contact Us */}
          <div className="mt-6">
            <h5 className="text-sm font-semibold mb-2">Our Locations</h5>
            <ul className="space-y-1 text-sm">
              {
              data.locations.map((child, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={`${child.locationURL}`} className="transition">
                        {child.city}
                      </Link>
                    </li>
                  );
                })              
              }
            </ul>
          </div>
        </address>
      </div>

      <div className="text-center text-xs text-muted mt-8 pt-6">
        © {new Date().getFullYear()}Task360. All rights reserved.
      </div>
    </footer>
  );
}
