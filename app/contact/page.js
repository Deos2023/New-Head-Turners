'use client';
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;
    const text = `Hello New Head Turners!%0A%0AName: ${name}%0APhone: ${phone}%0AService Interested In: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/919875662289?text=${text}`, '_blank');
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="h-[40vh] w-full relative"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-20 text-center px-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">Contact Us</h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto">
              Reach out to book your luxury beauty experience
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 px-4 sm:px-6 text-black"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={item}
            className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-yellow-700 mb-8">Send Us a Message</h2>
            
            <form onSubmit={sendWhatsAppMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="">Select a service</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Spa Services">Spa Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-yellow-700 transition"
              >
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-8">
            <div className="bg-yellow-900/20 p-8 rounded-xl border border-yellow-600 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Our Location</h4>
                    <p className="text-yellow-200">
                      Santoshpur Avenue, Near Mini Bus Stand<br />
                      Adipally, Santoshpur Kolkata<br />
                      Kolkata, West Bengal 700075
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-yellow-200">
                      <a href="tel:9875662289" className="hover:text-yellow-400 transition">+91 98756 62289</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-yellow-200">
                      <a href="mailto:Barunnayak23@gmail.com" className="hover:text-yellow-400 transition">Barunnayak23@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Opening Hours</h4>
                    <div className="text-yellow-200 space-y-1">
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 p-6 rounded-xl border border-yellow-600">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123 0-2.43-.013-2.784-.06-3.808-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.772-1.153 4.902 4.902 0 012.427-.465c1.067-.047 1.407-.06 4.123-.06h.08zM12 6.803a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Big Map Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="px-4 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Find Us</h2>
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-600">
            
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.298267200705!2d88.3884638!3d22.492989800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713a4f894e27%3A0xb221240f0667982!2sNew%20Head%20Turners!5e0!3m2!1sen!2sin!4v1755517115535!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 bg-yellow-900/10 pointer-events-none"></div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-yellow-900 text-white py-16 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the New Head Turners difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:9875662289" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
            >
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/919875662289" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-yellow-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}