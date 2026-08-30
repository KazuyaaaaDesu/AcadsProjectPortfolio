export default function Homesection() {
  return (
    
    <section className="w-full h-screen snap-start flex gap-6">
      {/* Left Coloumn */}
        <div className="w-1/2 flex flex-col justify-center items-start p-12">
          
          {/* Top Tag */}
          <div className=" inline-flex items-center justify-center border rounded-full font-bold mb-2 gap-2 px-3 py-1 border-teal-500/30 bg-teal-500/10 text-teal-500">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          Student
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            <span>BS Mathematics with</span>
            <span> Specialization in </span>
            <br></br>
            <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Computer Science
            </span>
          </h1>

          {/* Divider */}
          <div className="h-[2px] w-64 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 mb-5"></div>
          
          {/* Text */}
          <p className="max-w-2xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-teal-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition-colors ">
              View Projects
            </button>
            <button className="border border-teal-500 hover:bg-purple-500/20 hover:text-purple hover:border-purple-400 font-bold py-2 px-4 rounded-md transition-colors">
              Contact Me
            </button>
          </div>

        </div>

        

      {/* Right Coloumn */}
        <div className=" w-1/2 h-full w-100 flex items-center justify-center">
          
          {/* Border Wrapper */}
          <div className="relative border-2 border-teal-500/30 p-5 rounded-2xl">
            <div className="relative border-teal-500/30 rounded-2xl">
            
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-400"></div>

            {/* Profile Image Container */}
            <div className="w-72 h-80 lg:w-80 lg:h-96 overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                src="/src/assets/avatar.svg" 
                alt="Kirby Benj Gutierrez" 
              />
            </div>
          </div>

          {/* Top-Right Floating Card */}
          <div className="absolute -top-6 -right-10 bg-black/80 backdrop-blur-md border border-purple-400/40 p-4 rounded-xl shadow-xl w-44">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-mono font-bold mb-2">
              <span>&lt;/&gt;</span> Problem Solver
            </div>
            <ul className="text-gray-400 text-xs space-y-1 font-mono">
              <li>• Code Enthusiast</li>
              <li>• Lifelong Learner</li>
            </ul>
          </div>

          {/* Bottom-Left Floating Card */}
          <div className="absolute -bottom-6 -left-10 bg-black/80 backdrop-blur-md border border-teal-500/40 p-4 rounded-xl shadow-xl w-48">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-mono font-bold mb-1">
              <span>&lt;/&gt;</span>
            </div>
            <p className="text-gray-300 text-xs leading-tight">
              Building solutions through logic and creativity.
            </p>
          </div>

          {/* Bottom Right Graphic Bars */}
          <div className="absolute bottom-1.5 right-4 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-white/20"></div>
            <div className="w-2 h-2 bg-white/40"></div>
            <div className="w-2 h-2 bg-teal-400"></div>
            <div className="w-6 h-2 bg-gradient-to-r from-teal-400 to-pink-500 rounded-sm"></div>
          </div>

          </div>
        </div>
      
      {/* Scroll Down */}
          <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-8 border-b-2 border-r-2 border-teal-400 rotate-45"></div>
          </div>

    </section>
  );
}
