import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { navLinks } from "@/data/data.json";

export default function Footer() {
  return (
    <footer className="mt-12 px-4 py-12 bg-accent">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-10 p-2">

        {/* Brand + Description */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/task360.svg"
              alt="Task360 Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <h1 className="text-3xl text-dark">Task360</h1>
          </Link>

          <p className="text-sm leading-relaxed">
            Focus on growing your online business while we handle your books, taxes, and compliance.
            Specialized services for Amazon, Flipkart, and other marketplace sellers.
          </p>
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
            <li><Link href="/services/gst" className="transition">GST Registration & Filing</Link></li>
            <li><Link href="/services/accounting" className="transition">Bookkeeping & Accounting</Link></li>
            <li><Link href="/services/itr" className="transition">Income Tax Returns</Link></li>
            <li><Link href="/services/reconciliation" className="transition">Marketplace Reconciliation</Link></li>
            <li><Link href="/services/payment-gateway" className="transition">Payment Gateway Integration</Link></li>
            <li><Link href="/services/business-registration" className="transition">Business Registration</Link></li>
          </ul>
        </div>

        {/* Contact Us — now includes Locations */}
        <address className="not-italic">
          <h4 className="text-lg mb-4 pb-2">Contact Us</h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-muted text-lg" />
              <a href="mailto:support@ecomaccounting.io" className="transition">
                support@ecomaccounting.io
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-muted text-lg" />
              <a href="tel:+919424932197" className="transition">
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
              <li><Link href="/locations/indore" className="transition">Indore</Link></li>
              <li><Link href="/locations/neemuch" className="transition">Neemuch</Link></li>
              <li><Link href="/locations/jaipur" className="transition">Jaipur</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl transition" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="text-xl transition" />
            </Link>
            <Link href="/" target="_blank">
              <FaGlobe className="text-xl transition" />
            </Link>
          </div>
        </address>
      </div>

      <div className="text-center text-xs text-muted mt-8 pt-6">
        © {new Date().getFullYear()}Task360. All rights reserved.
      </div>
    </footer>
  );
}
