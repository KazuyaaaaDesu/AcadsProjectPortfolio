export default function Projectsection() {
  return (
    <section className="w-full min-h-screen bg-transparent text-white px-6 md:px-8 py-24">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col items-center justify-center text-center mb-14">

        <span className="text-sm tracking-[0.35em] uppercase text-emerald-400 mb-3">
          / Projects
        </span>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Things I've Built
        </h1>

        <p className="max-w-2xl text-gray-400 leading-relaxed">
          A collection of academic, personal, and technical projects
          that reflect my skills, interests, and problem-solving approach.
        </p>

      </div>


      {/* ================= DEVELOPMENT PROJECTS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">


        {/* ================= CARD 1 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 hover:shadow-[0_0_35px_rgba(45,212,191,0.18)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="Fever Dream"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-emerald-400">
                Game Development
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                Fever Dream
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                A pixel-art side-scroller that blends emotional storytelling
                with surrealist horror. The game tracks the psychological
                journey of a protagonist searching for his lost dog.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/5">
                  Game Dev
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5">
                  Pixel Art
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>



        {/* ================= CARD 2 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-400 via-blue-500 to-purple-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="Subscription Management System"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-indigo-400">
                Web Development
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                Management System: Automating Billing and Enhancing Customer Experience
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                A subscription plan management system designed to help
                businesses handle recurring revenue by automating and
                optimizing the subscription service lifecycle.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-indigo-400/30 text-indigo-300 bg-indigo-400/5">
                  Web
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-blue-400/30 text-blue-300 bg-blue-400/5">
                  Management
                </span>
              </div>

              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>



        {/* ================= CARD 3 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:shadow-[0_0_35px_rgba(217,70,239,0.18)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="Automated Grading System"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-pink-400">
                Academic System
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                Automated Grading System
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                Developed a robust automated grading system centered on
                data integrity and consistency. The project organizes
                performance data into an autonomous evaluation framework.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-pink-400/30 text-pink-300 bg-pink-400/5">
                  Automation
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-purple-400/30 text-purple-300 bg-purple-400/5">
                  Data
                </span>
              </div>

              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-pink-300 hover:text-pink-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>



        {/* ================= CARD 4 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-400 via-green-500 to-lime-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.18)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="Combinations and Permutations Calculator"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-emerald-400">
                Mathematics
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                Combinations and Permutations Calculator
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                A functional calculator designed to solve complex counting
                problems using Permutations, Combinations, and Circular
                Permutations.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/5">
                  Mathematics
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-lime-400/30 text-lime-300 bg-lime-400/5">
                  Calculator
                </span>
              </div>

              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>



        {/* ================= CARD 5 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-500 hover:shadow-[0_0_35px_rgba(20,184,166,0.18)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="Appare Vestigium"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-cyan-400">
                Productivity
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                Appare Vestigium
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                A student activity tracker designed to combat burnout and
                disorganized workflows by centralizing tasks, deadlines,
                and semester progress.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-teal-400/30 text-teal-300 bg-teal-400/5">
                  Productivity
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5">
                  Web App
                </span>
              </div>

              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>



        {/* ================= CARD 6 ================= */}
        <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] transition-all duration-500">

          <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src="/src/assets/placeholder.png"
                alt="MADS"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-widest text-purple-400">
                Mathematical Computing
              </span>

              <h2 className="text-xl font-semibold mt-2 mb-3">
                MADS: Modular Arithmetic and Diophantine Scheduling
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                A mathematical scheduling system that applies Modular
                Arithmetic and Linear Diophantine Equations to intelligently
                distribute appointment loads.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs rounded-full border border-purple-400/30 text-purple-300 bg-purple-400/5">
                  Mathematics
                </span>

                <span className="px-3 py-1 text-xs rounded-full border border-pink-400/30 text-pink-300 bg-pink-400/5">
                  Algorithms
                </span>
              </div>

              <div className="flex items-center justify-between mt-7">

                <button className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                  View Project ↗
                </button>

                <span className="text-gray-500 text-lg">
                  ⌁
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>



      {/* ================= EXPOSITION PAPERS ================= */}

      <div className="max-w-7xl mx-auto mt-32">

        <div className="text-center mb-12">

          <span className="text-sm tracking-[0.35em] uppercase text-purple-400">
            / Research
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Mathematical Exposition
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Research and mathematical papers exploring theoretical concepts
            and their applications to real-world problems.
          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">


          {/* ================= PAPER 1 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="Ray Tracing Paper"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  Mathematics & Computer Science
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  Power of Ray Tracing, Calculus in Your Hands
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  This paper explores the mathematical side of ray tracing,
                  focusing on calculus and vector rendering procedures.
                </p>

                <button className="mt-6 text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>



          {/* ================= PAPER 2 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 hover:shadow-[0_0_35px_rgba(20,184,166,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="Blood Distribution Model"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-teal-400">
                  Operations Research
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  Multi-Commodity Minimum-Cost Flow for Blood Distribution
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  A directed capacity-constrained network model focused on
                  optimizing blood distribution while minimizing transportation
                  costs.
                </p>

                <button className="mt-6 text-sm text-teal-300 hover:text-teal-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>



          {/* ================= PAPER 3 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="Complex Impedance"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-purple-400">
                  Applied Mathematics
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  Complex Impedance and Phasor Relationships
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  An exploration of complex analysis, phasors, and complex
                  impedance as tools for understanding AC circuit behavior.
                </p>

                <button className="mt-6 text-sm text-purple-300 hover:text-purple-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>



          {/* ================= PAPER 4 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 hover:shadow-[0_0_35px_rgba(236,72,153,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="MADS Research"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-pink-400">
                  Discrete Mathematics
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  MADS: Modular Arithmetic and Diophantine Scheduling
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  A scheduling framework using modular arithmetic and
                  Diophantine equations to distribute appointment loads
                  across available time slots.
                </p>

                <button className="mt-6 text-sm text-pink-300 hover:text-pink-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>



          {/* ================= PAPER 5 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-500 hover:shadow-[0_0_35px_rgba(217,70,239,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="Fractional Calculus"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-fuchsia-400">
                  Calculus
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  Fractional Calculus of Piecewise Continuous Functions
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  An exploration of Fractional Calculus alongside piecewise
                  continuous functions and the problems that arise from their
                  interaction.
                </p>

                <button className="mt-6 text-sm text-fuchsia-300 hover:text-fuchsia-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>



          {/* ================= PAPER 6 ================= */}
          <div className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 hover:shadow-[0_0_35px_rgba(251,146,60,0.18)] transition-all duration-500">

            <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden">

              <img
                src="/src/assets/placeholder.png"
                alt="Typhoon Related Rates"
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              <div className="p-6">

                <span className="text-xs uppercase tracking-widest text-orange-400">
                  Applied Calculus
                </span>

                <h2 className="text-xl font-semibold mt-2 mb-3">
                  Real-Life Application of Related Rates on Typhoons
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  This project applies related rates to model the changing
                  area of a typhoon and visualize the speed of disaster
                  expansion.
                </p>

                <button className="mt-6 text-sm text-orange-300 hover:text-orange-200 transition-colors">
                  Read Paper ↗
                </button>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM CTA =================

      <div className="flex justify-center mt-16">

        <button className="group px-7 py-3 rounded-xl border border-emerald-400/40 bg-[#080b0f]/70 hover:bg-emerald-400/5 hover:border-emerald-300 transition-all duration-300">

          <span className="text-sm text-gray-300 group-hover:text-emerald-300 transition-colors">
            View More Projects
          </span>

          <span className="ml-3 text-emerald-400 group-hover:translate-x-1 inline-block transition-transform">
            →
          </span>

        </button>

      </div>
       */}

    </section>
  );
}