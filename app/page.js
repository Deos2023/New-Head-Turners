

"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import BrandHero from "./component/Hero";
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

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="h-[80vh] md:h-screen w-full"
      >
        <img
          src="/hero.jpeg"
          alt="Hero"
          className="w-full h-full object-cover md:object-contain pt-16 md:pt-5"
        />
      </motion.section>


<BrandHero />
      {/* Info Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-white py-12 px-4 sm:px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div variants={item} className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
              At <span className="font-semibold">New Head Turners</span>, we
              believe your hair is your crown and it deserves the best care and
              styling. Our experts specialize in creating stunning looks that
              complement your personality and lifestyle. Whether you're getting
              ready for a special occasion or just want a refreshing new style,
              we've got you covered.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
              <li>
                <span className="font-semibold">Loose Waves:</span> Romantic and
                feminine, perfect for any occasion.
              </li>
              <li>
                <span className="font-semibold">Half-Up, Half-Down:</span> Show
                off your long hair while keeping it neat and stylish.
              </li>
              <li>
                <span className="font-semibold">Ponytail:</span> A classic and
                easy-to-style option for everyday wear.
              </li>
              <li>
                <span className="font-semibold">Braids:</span> Versatile styles
                that can be dressed up or down.
              </li>
              <li>
                <span className="font-semibold">Chignon:</span> A low, elegant
                updo perfect for formal occasions.
              </li>
            </ul>

            <a
              href="tel:9875662289"
              className="inline-block bg-yellow-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-800 transition text-sm sm:text-base"
            >
              Contact Now
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={item} className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/img2.png"
                alt="Head Turners"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative stars */}
            <div className="absolute -bottom-6 -left-6 text-yellow-800 text-4xl sm:text-5xl">
              ★
            </div>
            <div className="absolute -top-6 -right-6 text-yellow-800 text-4xl sm:text-5xl">
              ★
            </div>
          </motion.div>
        </div>
      </motion.section>

      

      

      {/* About Products Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-black text-center px-10 py-20"
      >
        <h2 className="text-yellow-500 text-4xl font-bold mb-6">About Our Products</h2>
        <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          We provide premium quality products crafted with precision and care. 
          Our brand stands for elegance, trust, and timeless style. 
          With every creation, we ensure excellence and a touch of luxury.
        </p>

        {/* Feature Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-yellow-500 rounded-2xl shadow-lg hover:bg-yellow-500/10 transition"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-3.313 0-6 2.687-6 6h12c0-3.313-2.687-6-6-6z" />
              </svg>
            </div>
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-white text-base">Every product is made from the finest materials ensuring durability and elegance.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-yellow-500 rounded-2xl shadow-lg hover:bg-yellow-500/10 transition"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">Luxury Design</h3>
            <p className="text-white text-base">Our designs blend tradition with modern aesthetics to create timeless style.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-yellow-500 rounded-2xl shadow-lg hover:bg-yellow-500/10 transition"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9m-9 8h9M3 12h.01M3 6h.01M3 18h.01" />
              </svg>
            </div>
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">Trusted Brand</h3>
            <p className="text-white text-base">We have built trust by consistently delivering excellence and reliability.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Full-width Image Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="h-[80vh] md:h-screen w-full"
      >
        <img
          src="/img1.jpeg"
          alt="Salon Interior"
          className="w-full h-full object-cover md:object-contain pt-16 md:pt-5"
        />
      </motion.section>


      {/* Services Section */}
      <motion.section 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={container}
  className="bg-black py-20 px-4 sm:px-6"
>
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      variants={item} 
      className="text-4xl font-bold mb-16 text-center text-yellow-500"
    >
      Our Services
    </motion.h2>
    
    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Services Cards - Left Side (2/3 width) */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          {
            title: "Hair Styling",
            description: "From classic cuts to modern trends, we create looks that turn heads.",
            icon: "✂️"
          },
          {
            title: "Hair Coloring",
            description: "Expert coloring techniques that enhance your natural beauty.",
            icon: "🎨"
          },
          {
            title: "Hair Treatments",
            description: "Nourishing treatments to restore health and vitality to your hair.",
            icon: "💆‍♀️"
          },
          {
            title: "Bridal Makeup",
            description: "Flawless bridal looks that last all day and night.",
            icon: "💍"
          },
          {
            title: "Spa Services",
            description: "Relaxing treatments for complete rejuvenation.",
            icon: "🧖‍♀️"
          },
          {
            title: "Extensions",
            description: "High-quality hair extensions for instant length and volume.",
            icon: "👑"
          }
        ].map((service, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ 
              y: -5,
              backgroundColor: "rgba(0,0,0,0.8)"
            }}
            className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 h-full flex flex-col"
          >
            <div className="text-4xl mb-4 text-yellow-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">{service.title}</h3>
            <p className="text-yellow-200 text-sm flex-grow">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Framed Image - Right Side (1/3 width) */}
      <motion.div 
        variants={item}
        className="lg:w-1/3 relative min-h-[500px] rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0 border-2 border-yellow-600 rounded-xl pointer-events-none z-10"></div>
        <Image
          src="/img3.png"
          alt="Luxury Salon Services"
          fill
          className="object-fit"
          quality={100}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 z-10">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Experience Luxury</h3>
          <p className="text-yellow-200 text-sm">Our award-winning stylists create magic</p>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Testimonials Section */}
      <motion.section 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={container}
  className="bg-white py-20 px-4 sm:px-6"
>
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      variants={item} 
      className="text-4xl font-bold mb-16 text-center text-yellow-700"
    >
      Client Testimonials
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "The best hair salon I've ever been to! The stylists are true artists.",
          name: "Priya Sharma",
          rating: 5,
          delay: 0.1
        },
        {
          quote: "My bridal makeup was flawless and lasted all night. Highly recommend!",
          name: "Ananya Chatterjee",
          rating: 5,
          delay: 0.3
        },
        {
          quote: "Consistently excellent service. I won't go anywhere else now.",
          name: "Rahul Kapoor",
          rating: 5,
          delay: 0.5
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: testimonial.delay,
            type: "spring",
            damping: 10
          }}
          className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-all"
        >
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className="italic mb-6 text-gray-700">"{testimonial.quote}"</p>
          <p className="font-semibold text-yellow-700">- {testimonial.name}</p>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-yellow-100 text-5xl opacity-20">
            ”
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white text-center px-6 md:px-16 py-20"
      >
        <div className="mt-20">
          <h3 className="text-yellow-700 text-3xl font-bold mb-6">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              <h4 className="text-white text-xl font-semibold mb-3">Premium Quality</h4>
              <p className="text-gray-400 text-sm">
                We use only the finest ingredients and tools to ensure long-lasting results.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              <h4 className="text-white text-xl font-semibold mb-3">Professional Care</h4>
              <p className="text-gray-400 text-sm">
                Our experts provide top-notch treatments tailored to your unique style.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              <h4 className="text-white text-xl font-semibold mb-3">Luxury Experience</h4>
              <p className="text-gray-400 text-sm">
                Step into an atmosphere of elegance, comfort, and modern beauty solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-white py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-4xl font-bold mb-16 text-center text-black">
            Visit Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-2xl font-semibold text-yellow-700">New Head Turners</h3>
<p className="text-black">
                  154,Santoshpur Avenue, 1st Floor, Kolkata- 700075<br />
                  (OLD Minibus Stand, OPP. Central Bank)
                </p>
              
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Mobile:</span> 9875662289
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> Barunnayak23@gmail.com
                </p>
              </div>
              
              <div className="pt-4 text-neutral-500">
                <h4 className="font-semibold text-lg mb-3">Opening Hours</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between max-w-xs">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Saturday:</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Sunday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.298267200705!2d88.3884638!3d22.492989800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713a4f894e27%3A0xb221240f0667982!2sNew%20Head%20Turners!5e0!3m2!1sen!2sin!4v1755517115535!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ONWARDS Branding Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="bg-black py-20 px-4 text-center"
      >
        <motion.div variants={item} className="max-w-4xl mx-auto">
          <div className="text-white text-5xl sm:text-7xl font-bold tracking-widest mb-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["O", "N", "W", "A", "R", "D", "S"].map((letter, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4">
              {["O", "N", "W", "A", "R", "D", "S"].map((letter, index) => (
                <motion.span 
                  key={index + 7}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4">
              {["O", "N", "W", "A", "R", "D", "S"].map((letter, index) => (
                <motion.span 
                  key={index + 14}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 1.4 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.p 
            variants={item}
            className="text-yellow-500 text-xl max-w-2xl mx-auto"
          >
            Moving forward with style, elegance, and innovation in beauty and hair care.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}