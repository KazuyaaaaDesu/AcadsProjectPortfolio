export default function Navbar() {
  return (
    <nav className="  w-full bg-gray-800/40 backdrop-blur-sm p-4 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl tracking-wider">
            &gt;_ KIRBY BENJ GUTIERREZ    
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#projects" className="text-gray-400 hover:text-[#c084fc] transition-colors">
              Projects
            </a>
            <a href="#tools" className="text-gray-400 hover:text-[#c084fc] transition-colors">
              Tools
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
