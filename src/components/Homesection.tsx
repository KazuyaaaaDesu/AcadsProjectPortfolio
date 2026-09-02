export default function Homesection() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative px-6 md:px-12 py-4">
      
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
        
        {/* Top Tag */}
        <div className="inline-flex items-center justify-center border rounded-full font-bold mb-3 gap-2 px-3 py-1 border-teal-500/30 bg-teal-500/10 text-teal-500 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          Student
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          <span>BS Mathematics with</span>
          <br />
          <span>Specialization in </span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Computer Science
          </span>
        </h1>

        {/* Divider */}
        <div className="h-[2px] w-64 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 mb-4"></div>
        
        {/* Text */}
        <p className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <a href="#projects" className="bg-teal-500 hover:bg-purple-600 text-white font-bold py-2.5 px-5 rounded-md transition-colors text-sm cursor-pointer">
            View Projects
          </a>
          <a href="#contact" className="border border-teal-500 text-teal-400 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400 font-bold py-2.5 px-5 rounded-md transition-colors text-sm cursor-pointer">
            Contact Me
          </a>
        </div>

      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative py-4">
        
        {/* Border Wrapper */}
        <div className="relative border-2 border-teal-500/30 p-5 rounded-2xl bg-black/40 backdrop-blur-sm">
          <div className="relative rounded-2xl">
          
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-400"></div>

            {/* Profile Image Container */}
            <div className="w-64 h-72 lg:w-72 lg:h-84 overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                src="/src/assets/avatar.svg" 
                alt="Kirby Benj Gutierrez" 
              />
            </div>
          </div>

          {/* Top-Right Floating Card */}
          <div className="absolute -top-6 -right-6 md:-right-10 bg-black/90 backdrop-blur-md border border-purple-400/40 p-4 rounded-xl shadow-xl w-44">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-mono font-bold mb-2">
              <span>&lt;/&gt;</span> Problem Solver
            </div>
            <ul className="text-gray-400 text-xs space-y-1 font-mono">
              <li>• Code Enthusiast</li>
              <li>• Lifelong Learner</li>
            </ul>
          </div>

          {/* Bottom-Left Floating Card */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-black/90 backdrop-blur-md border border-teal-500/40 p-4 rounded-xl shadow-xl w-48">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-mono font-bold mb-1">
              <span>&lt;/&gt;</span>
            </div>
            <p className="text-gray-300 text-xs leading-tight">
              Building solutions through logic and creativity.
            </p>
          </div>

          {/* Bottom Right Graphic Bars */}
          <div className="absolute bottom-2 right-4 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-white/20"></div>
            <div className="w-2 h-2 bg-white/40"></div>
            <div className="w-2 h-2 bg-teal-400"></div>
            <div className="w-6 h-2 bg-gradient-to-r from-teal-400 to-pink-500 rounded-sm"></div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#projects" className="block p-2 cursor-pointer">
          <div className="w-6 h-6 border-b-2 border-r-2 border-teal-400 rotate-45"></div>
        </a>
      </div>

    </div>
  );
}