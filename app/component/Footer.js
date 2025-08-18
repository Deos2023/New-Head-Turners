"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black text-yellow-100 border-t border-yellow-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="New Head Turners" 
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-yellow-300">
              Where every style tells your unique story. Crafting beauty with passion since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-500 transition text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 transition text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-yellow-300 hover:text-yellow-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-yellow-500 text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Hair Styling',
                'Hair Coloring',
                'Bridal Makeup',
                'Spa Treatments',
                'Hair Extensions',
                'Keratin Smoothing'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-yellow-300 hover:text-yellow-500 transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-500 text-lg font-bold mb-6">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-yellow-300">
                  Santoshpur Avenue, Near Mini Bus Stand,<br />
                  Kolkata, West Bengal 700075
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <a href="tel:9875662289" className="text-yellow-300 hover:text-yellow-500 transition">
                  +91 98756 62289
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:Barunnayak23@gmail.com" className="text-yellow-300 hover:text-yellow-500 transition">
                  Barunnayak23@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-900 my-8"></div>

        {/* Copyright & Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-yellow-400 text-sm">
            © {new Date().getFullYear()} New Head Turners. All rights reserved. Website Developed & Maintained by Digital Exposure Online Services.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-yellow-400 hover:text-yellow-500 text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 text-sm transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;