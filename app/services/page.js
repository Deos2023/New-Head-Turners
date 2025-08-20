'use client';
import Image from "next/image";
import { motion } from "framer-motion";

// Reuse your animation variants from home page
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

export default function Services() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="h-[80vh] md:h-screen w-full relative"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/img3.png" // Different hero image for Services page
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-start justify-center z-20 text-center px-4"
        >
          <div className="pt-10">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">Our Services</h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto">
              Premium beauty treatments tailored to your unique style
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={item}
            className="text-4xl font-bold mb-16 text-center text-yellow-500"
          >
            Signature Services
          </motion.h2>

          {/* Hair Services */}
          <motion.div 
            variants={container}
            className="mb-20"
          >
            <motion.h3 
              variants={item}
              className="text-3xl font-bold mb-8 text-white border-b border-yellow-600 pb-2"
            >
              Hair Services
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxury Haircut",
                  description: "Precision cutting tailored to your face shape and lifestyle",
                  duration: "1-1.5 hrs",
                  price: "₹1,500+",
                  icon: "✂️"
                },
                {
                  title: "Premium Coloring",
                  description: "Balayage, ombre, highlights and creative color techniques",
                  duration: "2-3 hrs",
                  price: "₹3,500+",
                  icon: "🎨"
                },
                {
                  title: "Keratin Treatment",
                  description: "Smoothing treatment for frizz-free, manageable hair",
                  duration: "3-4 hrs",
                  price: "₹6,000+",
                  icon: "✨"
                },
                {
                  title: "Scalp Therapy",
                  description: "Revitalizing treatment for healthy hair growth",
                  duration: "1 hr",
                  price: "₹2,000",
                  icon: "💆‍♀️"
                },
                {
                  title: "Hair Extensions",
                  description: "High-quality extensions for instant length and volume",
                  duration: "2-3 hrs",
                  price: "₹8,000+",
                  icon: "👑"
                },
                {
                  title: "Blowout & Styling",
                  description: "Professional styling for special occasions",
                  duration: "1 hr",
                  price: "₹1,200+",
                  icon: "💫"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-yellow-500">{service.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-400 mb-2">{service.title}</h4>
                      <p className="text-yellow-200 mb-3">{service.description}</p>
                      <div className="flex justify-between text-sm text-yellow-300">
                        <span>{service.duration}</span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bridal Services */}
          <motion.div 
            variants={container}
            className="mb-20"
          >
            <motion.h3 
              variants={item}
              className="text-3xl font-bold mb-8 text-white border-b border-yellow-600 pb-2"
            >
              Bridal Packages
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Royal Bride",
                  description: "Complete bridal makeover including hair, makeup and trial session",
                  includes: [
                    "Bridal hairstyling",
                    "Professional makeup",
                    "1 trial session",
                    "Touch-up kit"
                  ],
                  duration: "4-5 hrs",
                  price: "₹25,000"
                },
                {
                  title: "Classic Bride",
                  description: "Elegant bridal look with premium products",
                  includes: [
                    "Bridal hairstyling",
                    "Professional makeup",
                    "Traditional jewelry styling"
                  ],
                  duration: "3-4 hrs",
                  price: "₹18,000"
                },
                {
                  title: "Reception Glam",
                  description: "Sophisticated evening look for wedding receptions",
                  includes: [
                    "Evening hairstyle",
                    "Glamorous makeup",
                    "False lashes included"
                  ],
                  duration: "2-3 hrs",
                  price: "₹12,000"
                },
                {
                  title: "Bridal Trial",
                  description: "Preview and perfect your bridal look before the big day",
                  includes: [
                    "1 hairstyle trial",
                    "Makeup trial",
                    "Expert consultation"
                  ],
                  duration: "2 hrs",
                  price: "₹6,000"
                }
              ].map((packageItem, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="bg-yellow-900/30 p-8 rounded-xl border-2 border-yellow-600 backdrop-blur-sm"
                >
                  <h4 className="text-2xl font-bold text-yellow-400 mb-3">{packageItem.title}</h4>
                  <p className="text-yellow-200 mb-4">{packageItem.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {packageItem.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span className="text-yellow-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-yellow-700">
                    <span className="text-yellow-300">{packageItem.duration}</span>
                    <span className="text-xl font-bold text-yellow-400">{packageItem.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spa Services */}
          <motion.div variants={container}>
            <motion.h3 
              variants={item}
              className="text-3xl font-bold mb-8 text-white border-b border-yellow-600 pb-2"
            >
              Spa & Wellness
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Signature Spa",
                  description: "Customized facial with premium skincare products",
                  duration: "1.5 hrs",
                  price: "₹3,500"
                },
                {
                  title: "Hot Stone Massage",
                  description: "Relaxing full-body massage with warm stones",
                  duration: "1 hr",
                  price: "₹2,800"
                },
                {
                  title: "Detox Body Wrap",
                  description: "Purifying treatment to rejuvenate skin",
                  duration: "1.5 hrs",
                  price: "₹4,200"
                },
                {
                  title: "Manicure & Pedicure",
                  description: "Luxury nail care with paraffin treatment",
                  duration: "1.5 hrs",
                  price: "₹2,500"
                },
                {
                  title: "Aromatherapy",
                  description: "Essential oil treatment for stress relief",
                  duration: "1 hr",
                  price: "₹2,200"
                },
                {
                  title: "Couples Spa Package",
                  description: "Shared relaxation experience for two",
                  duration: "2 hrs",
                  price: "₹7,500"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-black/50 p-6 rounded-xl border border-yellow-700 hover:shadow-yellow-500/10 hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">{service.title}</h4>
                  <p className="text-yellow-200 mb-4">{service.description}</p>
                  <div className="flex justify-between text-yellow-300">
                    <span>{service.duration}</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking CTA */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-yellow-900 text-white py-20 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts will consult with you to create the perfect service package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
            >
              Book Appointment
            </motion.a>
            <motion.a
              href="tel:9875662289" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-yellow-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
            >
              Call Now
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Preview */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="bg-white py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={item}
            className="text-4xl font-bold mb-16 text-center text-yellow-700"
          >
            Client Experiences
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The keratin treatment transformed my frizzy hair into silky perfection!",
                name: "Ananya R.",
                service: "Keratin Treatment"
              },
              {
                quote: "My bridal makeup stayed flawless through all the ceremonies and tears!",
                name: "Priya M.",
                service: "Royal Bride Package"
              },
              {
                quote: "Best haircut I've ever had - they understood exactly what I wanted.",
                name: "Rahul K.",
                service: "Luxury Haircut"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500"
              >
                <p className="italic mb-6 text-gray-700">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-yellow-700">- {testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}