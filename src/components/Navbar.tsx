interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const links = ['home', 'projects', 'tools', 'about', 'experience', 'contact'];

  return (
    <nav className="w-full bg-[#030712]/80 backdrop-blur-md border-b border-gray-800/50 p-4 font-mono">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="/home" 
          className="text-purple-500 font-bold text-xl tracking-wider hover:text-cyan-500 transition-colors"
        >
          {/* Shows on mobile/small screens, hides on medium screens and up */}
          <span className="md:hidden"></span>

          {/* Hides on mobile/small screens, shows on medium screens and up */}
          <span className="hidden md:inline">KIRBY BENJ GUTIERREZ</span>
        </a>
        
        <div className="flex items-center space-x-6 text-sm">
          {links.map((link) => {
            const isActive = activeSection === link;
            return (
              <a
                key={link}
                href={`#${link}`}
                className={`capitalize transition-colors relative py-1 ${
                  isActive ? 'text-[#c084fc] font-bold' : 'text-gray-400 hover:text-[#c084fc]'
                }`}
              >
                {link}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c084fc] rounded-full" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}