
import { toolData } from "../data/toolData";
import ToolCard from "./ToolCard";

export default function Toolssection() {
  return (
    
    <section className="w-full min-h-screen bg-transparent text-white px-6 md:px-8 py-24 relative pt-0">
        
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center text-center mb-14">
        <span className="text-sm tracking-[0.35em] uppercase text-emerald-400 mb-3">
          / Tools and Skills
        </span>

        <h1 className="relative inline-block text-4xl md:text-5xl font-bold tracking-tight mb-4 px-4 py-1">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-400"></div>
          
          What I work with
        </h1>

        <p className="max-w-2xl text-gray-400 leading-relaxed">
          Technologies, Tools, and Skills I use to build and create projects, solve problems, and explore new ideas.
        </p>
      </div>

       {/* Tool Grid */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 " >
        {toolData.map((category) => (
          <ToolCard
            key={category.code}
            category={category}
          />
        ))}

      </div>


      {/* Bottom Strip */}
      <div className="max-w-6xl mx-auto mt-8">

        <div className="rounded-xl border border-white/[0.08] bg-[#080b0f]/60 backdrop-blur-sm px-5 md:px-6 py-4 ">
          <div
            className=" flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 font-mono ">
            <span className="text-emerald-400">
              &gt; SYSTEM READY
            </span>
            <span className="hidden md:inline">
              //
            </span>
            <span>
              Always learning
            </span>
            <span className="hidden md:inline">
              //
            </span>
            <span>
              Always building
            </span>
            <span className="hidden md:inline">
              //
            </span>
            <span className="text-cyan-400">
              KEEP IMPROVING
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
