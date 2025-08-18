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

export default function About() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="h-[50vh] md:h-[60vh] w-full relative"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* <img
          src="/logo.png" // Use a different hero image for About page
          alt="About New Head Turners"
          className="w-full h-full object-cover"
        /> */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-20 text-center px-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">Our Story</h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto">
              Crafting beauty with passion and precision since 2010
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Founder Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-white py-20 px-4 sm:px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Founder Image */}
          <motion.div 
            variants={item}
            className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/img2.png" // Add your founder image
              alt="Founder - New Head Turners"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl pointer-events-none"></div>
          </motion.div>

          {/* Founder Story */}
          <motion.div variants={item} className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">Meet Our Founder</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-black">Barun Nayak</span>, the visionary behind New Head Turners, started this journey with a simple belief: 
              <span className="text-yellow-700 font-medium"> "Every client deserves to feel extraordinary."</span>
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 15 years of experience in the beauty industry, Barun has trained under master stylists in Paris and Milan before bringing 
              world-class techniques to Kolkata. His passion for creating personalized beauty solutions has made New Head Turners a beloved destination 
              for those seeking exceptional hair and beauty services.
            </p>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="italic text-gray-600">
                "We don't just style hair - we craft confidence and transform how people see themselves."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Philosophy */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-black text-center px-10 py-20"
      >
        <h2 className="text-yellow-500 text-4xl font-bold mb-6">Our Philosophy</h2>
        <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          At New Head Turners, we believe beauty is an art form that should enhance your natural features while expressing your unique personality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
          {[
            {
              title: "Personalized Care",
              description: "Tailored services for your unique features and lifestyle",
              icon: "💫"
            },
            {
              title: "Quality First",
              description: "Using only premium products that care for your hair and skin",
              icon: "✨"
            },
            {
              title: "Continuous Innovation",
              description: "Regular training in the latest global techniques and trends",
              icon: "🌍"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-yellow-500 rounded-2xl shadow-lg hover:bg-yellow-500/10 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-yellow-400 text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-yellow-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-white py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-4xl font-bold mb-16 text-center text-yellow-700">
            Our Expert Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Malhotra",
                role: "Master Stylist",
                specialty: "Bridal & Editorial Styles",
                image: "/stylist-1.jpg"
              },
              {
                name: "Rahul Verma",
                role: "Color Specialist",
                specialty: "Balayage & Creative Coloring",
                image: "/stylist-2.jpg"
              },
              {
                name: "Ananya Das",
                role: "Spa Director",
                specialty: "Holistic Hair Treatments",
                image: "/stylist-3.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-yellow-500"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-black py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-yellow-500 text-4xl font-bold mb-16 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-yellow-500 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Humble Beginnings",
                  description: "Opened our first small studio in Santoshpur with just 2 chairs"
                },
                {
                  year: "2014",
                  title: "First Expansion",
                  description: "Moved to our current location with full-service salon facilities"
                },
                {
                  year: "2018",
                  title: "Award Winning",
                  description: "Recognized as 'Best Salon in Kolkata' by Beauty Times"
                },
                {
                  year: "2022",
                  title: "Luxury Upgrade",
                  description: "Complete renovation with premium interiors and new spa services"
                }
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}
                  >
                    <div className="bg-yellow-900/30 p-6 rounded-xl backdrop-blur-sm border border-yellow-700">
                      <h3 className="text-yellow-400 text-2xl font-bold mb-2">{milestone.year}</h3>
                      <h4 className="text-white text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-yellow-200">{milestone.description}</p>
                    </div>
                  </motion.div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-yellow-900 text-white py-20 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the New Head Turners difference - where every visit leaves you more confident and beautiful.
          </p>
          <motion.a
            href="/contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
          >
            Book Your Appointment
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}