import { motion } from "framer-motion";
import Image from "next/image";

const BrandHero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[60vh] md:h-[80vh] relative bg-black overflow-hidden"
    >
      {/* Optional background image or overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-yellow-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-yellow-800 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo (optional) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Image 
            src="/logo.png" 
            alt="New Head Turners" 
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>
        
        {/* Company Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-yellow-500 mb-4"
        >
          NEW HEAD TURNERS
        </motion.h1>
        
        {/* Slogan */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-yellow-300 max-w-2xl mx-auto"
        >
          Where every style tells your unique story
        </motion.p>
      </div>
    </motion.section>
  );
};

export default BrandHero;