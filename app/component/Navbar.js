import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-10 relative">
        {/* Left Menu */}
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-500 transition">About</a></li>
          <li><a href="/services" className="hover:text-yellow-500 transition">Services</a></li>
          <li><a href="/contact" className="hover:text-yellow-500 transition">Our Glimps</a></li>
        </ul>

        {/* Middle Logo - Absolutely centered within the max-w-6xl container */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={200}   // Adjusted size for better proportion
            height={200} 
            className="object-contain py-2"  // Removed space after object-
          />
        </div>

        {/* Right Contact Us */}
        <div>
          <a 
            href="/contact"
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}