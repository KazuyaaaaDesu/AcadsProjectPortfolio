import {
  FaCode,
  FaGraduationCap,
  FaPalette,
  FaBrain,
  FaLightbulb,
  FaSyncAlt,
  FaBullseye,
  FaSearch,
} from "react-icons/fa";

import { SiReact, SiFigma } from "react-icons/si";

import profileImage from "/images/aboutme2.jfif";

export default function Aboutmesections() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        min-h-screen
        bg-transparent
        text-white
        px-4
        sm:px-6
        lg:px-10
        py-24
        overflow-hidden
        pt-0
      "
    >

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          absolute
          pointer-events-none
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[120px]
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      />


      <div className="relative max-w-[1450px] mx-auto">


        {/* ===================================================
            SECTION LABEL
        =================================================== */}

        <div className="mb-8">

          <span
            className="
              font-mono
              text-sm
              tracking-[0.25em]
              text-cyan-400
            "
          >
            / ABOUT ME
          </span>

        </div>


        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
          "
        >


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              lg:col-span-4
              flex
              flex-col
            "
          >

            {/* ===============================================
                INTRO
            =============================================== */}

            <div className="mb-8">

              <h1
                className="
                  text-5xl
                  md:text-6xl
                  font-bold
                  tracking-tight
                  leading-[1.1]
                  mb-5
                "
              >
                Hey, I'm
                <br />

                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-cyan-400
                    via-teal-400
                    to-blue-500
                  "
                >
                  Kirby Benj!
                </span>
              </h1>


              <div
                className="
                  font-mono
                  text-base
                  md:text-lg
                  text-gray-400
                  leading-relaxed
                  mb-7
                  text-purple-400
                "
              >
                Developer. Researcher.
                <br />
                Designer. Problem solver.
                <span className="text-cyan-400 animate-pulse">
                  _
                </span>
              </div>


              {/* Vertical accent */}

              <div className="flex gap-4">

                <div className="relative w-[2px] bg-gradient-to-b from-cyan-400 to-transparent">

                  <div
                    className="
                      absolute
                      -left-[3px]
                      top-0
                      w-2
                      h-2
                      bg-cyan-400
                    "
                  />

                </div>


                <div className="flex-1">

                  <p
                    className="
                      text-white-400
                      leading-relaxed
                      text-sm
                      md:text-base
                    "
                  >
                    I'm a student at the Bulacan State University, currently pursuing a degree in Bachelor of Science in Mathematics with Specialization in Computer Science. I have a passion for technology and software development, and I'm eager to learn and grow in this field.
                  </p>

                  <p
                    className="
                      text-white-400
                      leading-relaxed
                      text-sm
                      md:text-base
                      mt-4
                    "
                  >
                    
                    I enjoy building software, exploring
                    mathematics, designing interfaces, and
                    solving problems that challenge the way
                    I think.
                  </p>

                </div>

              </div>

            </div>


            {/* ===============================================
                STAT CARDS
            =============================================== */}

            <div
              className="
                grid
                grid-cols-3
                gap-3
                mt-auto
              "
            >

              {/* 10+ */}

              <div
                className="
                  border
                  border-white/[0.1]
                  bg-[#080b0f]/75
                  rounded-xl
                  p-4
                  text-center
                "
              >

                <FaCode
                  className="
                    mx-auto
                    text-xl
                    text-cyan-400
                    mb-4
                  "
                />

                <p className="text-3xl text-cyan-400 font-mono">
                  10+
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  Projects
                </p>

              </div>


              {/* 06 */}

              <div
                className="
                  border
                  border-white/[0.1]
                  bg-[#080b0f]/75
                  rounded-xl
                  p-4
                  text-center
                "
              >

                <FaBrain
                  className="
                    mx-auto
                    text-xl
                    text-purple-400
                    mb-4
                  "
                />

                <p className="text-3xl text-purple-400 font-mono">
                  6+
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  Study
                </p>

              </div>


              {/* 2+ */}

              <div
                className="
                  border
                  border-white/[0.1]
                  bg-[#080b0f]/75
                  rounded-xl
                  p-4
                  text-center
                "
              >

                <FaLightbulb
                  className="
                    mx-auto
                    text-xl
                    text-blue-400
                    mb-4
                  "
                />

                <p className="text-3xl text-blue-400 font-mono">
                  3+
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  Years Learning
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              CENTER — PROFILE
          ================================================= */}

          <div
            className="
              lg:col-span-4
              p-[1.5px]
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-purple-500
              rounded-[20px]
            "
          >

            <div
              className="
                relative
                h-full
                min-h-[600px]
                bg-[#080b0f]
                rounded-[18px]
                overflow-hidden
              "
            >

              {/* =============================================
                  TOP BAR
              ============================================= */}

              <div
                className="
                  h-14
                  border-b
                  border-white/[0.08]
                  flex
                  items-center
                  justify-between
                  px-5
                  font-mono
                "
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      w-2
                      h-2
                      bg-cyan-400
                    "
                  />

                  <span
                    className="
                      text-xs
                      tracking-[0.2em]
                      text-cyan-400
                    "
                  >
                    PROFILE.EXE
                  </span>

                </div>


                <span className="text-[10px] text-gray-600">
                  001
                </span>

              </div>


              {/* =============================================
                  PHOTO
              ============================================= */}

              <div
                className="
                  relative
                  h-[calc(100%-112px)]
                  min-h-[480px]
                  p-5
                "
              >

                {/* Pixel-ish background */}

                <div
                  className="
                    absolute
                    inset-8
                    opacity-20
                    bg-[radial-gradient(#22d3ee_1px,transparent_1px)]
                    [background-size:8px_8px]
                  "
                />


                {/* Photo */}

                <div
                  className="
                    relative
                    h-full
                    rounded-xl
                    overflow-hidden
                    border
                    border-cyan-400/20
                    bg-black
                  "
                >

                  <img
                    src={profileImage}
                    alt="Profile"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-center
                    "
                  />


                  {/* Dark gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080b0f]
                      via-transparent
                      to-transparent
                    "
                  />


                  {/* Scanline */}

                  <div
                    className="
                      absolute
                      inset-0
                      pointer-events-none
                      bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.015)_50%)]
                      bg-[length:100%_4px]
                    "
                  />


                  {/* Corner HUD */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      w-12
                      h-12
                      border-t-2
                      border-l-2
                      border-cyan-400
                    "
                  />

                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-12
                      h-12
                      border-t-2
                      border-r-2
                      border-purple-400
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-12
                      h-12
                      border-b-2
                      border-l-2
                      border-blue-400
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      w-12
                      h-12
                      border-b-2
                      border-r-2
                      border-purple-400
                    "
                  />

                </div>

              </div>


              {/* =============================================
                  STATUS BAR
              ============================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-14
                  border-t
                  border-white/[0.08]
                  px-5
                  flex
                  items-center
                  justify-between
                  font-mono
                "
              >

                <span className="text-xs">

                  <span className="text-cyan-400">
                    STATUS:
                  </span>

                  <span className="text-gray-400 ml-2">
                    ALWAYS LEARNING
                  </span>

                </span>


                <div className="flex gap-2">

                  <span className="w-2 h-2 bg-cyan-400" />
                  <span className="w-2 h-2 bg-blue-400" />
                  <span className="w-2 h-2 bg-purple-400" />

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              lg:col-span-4
              flex
              flex-col
              gap-6
            "
          >


            {/* ===============================================
                EDUCATION
            =============================================== */}

            <div
              className="
                p-[1.5px]
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-teal-500
              "
            >

              <div
                className="
                  rounded-[15px]
                  bg-[#080b0f]
                  p-6
                  min-h-[190px]
                "
              >

                <div className="flex justify-between mb-6">

                  <div>

                    <p className="text-xs text-cyan-400 font-mono tracking-[0.2em]">
                      // EDUCATION
                    </p>

                  </div>

                  <FaGraduationCap className="text-cyan-400 text-xl" />

                </div>


                <h2 className="text-lg font-semibold mb-2">
                  Bachelor of Science in Mathematics
                </h2>

                <p className="text-sm text-cyan-400 mb-3">
                  Specialization in Computer Science
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Focused on software development,
                  algorithms, systems, mathematics,
                  and research.
                </p>

              </div>

            </div>


            {/* ===============================================
                INTERESTS
            =============================================== */}

            <div
              className="
                p-[1.5px]
                rounded-2xl
                bg-gradient-to-br
                from-fuchsia-400
                via-purple-500
                to-pink-500
              "
            >

              <div
                className="
                  rounded-[15px]
                  bg-[#080b0f]
                  p-6
                  min-h-[245px]
                "
              >

                <div className="flex justify-between mb-7">

                  <p className="text-xs text-fuchsia-400 font-mono tracking-[0.2em]">
                    // INTERESTS
                  </p>

                  <FaPalette className="text-fuchsia-400" />

                </div>


                <div
                  className="
                    grid
                    grid-cols-2
                    gap-y-6
                    gap-x-4
                  "
                >

                  <Interest
                    icon={<FaCode />}
                    text="Software Development"
                    color="text-cyan-400"
                  />

                  <Interest
                    icon={<FaPalette />}
                    text="Digital Art"
                    color="text-pink-400"
                  />

                  <Interest
                    icon={<FaBrain />}
                    text="Mathematics"
                    color="text-purple-400"
                  />

                  <Interest
                    icon={<FaBullseye />}
                    text="Problem Solving"
                    color="text-teal-400"
                  />

                  <Interest
                    icon={<SiFigma />}
                    text="UI / UX Design"
                    color="text-fuchsia-400"
                  />

                  <Interest
                    icon={<SiReact />}
                    text="Web Development"
                    color="text-cyan-400"
                  />

                </div>

              </div>

            </div>


            {/* ===============================================
                QUOTE
            =============================================== */}

            <div
              className="
                flex-1
                p-[1.5px]
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-purple-500
              "
            >

              <div
                className="
                  h-full
                  min-h-[150px]
                  rounded-[15px]
                  bg-[#080b0f]
                  p-7
                  flex
                  flex-col
                  justify-center
                "
              >

                <span
                  className="
                    text-6xl
                    text-purple-500/50
                    font-serif
                    leading-none
                  "
                >
                  “
                </span>


                <p
                  className="
                    text-gray-400
                    font-mono
                    text-sm
                    leading-relaxed
                    mt-[-20px]
                  "
                >
                  If you didn't like the problem, you might not like the solution. But if you understand the problem, you will know what to do.
                </p>


                <span
                  className="
                    text-xs
                    text-cyan-400
                    font-mono
                    mt-4
                  "
                >
                    — Kirby
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            STRENGTHS
        =================================================== */}

        <div className="mt-6">

          <div
            className="
              p-[1.5px]
              rounded-2xl
              bg-gradient-to-r
              from-teal-400
              via-blue-500
              to-purple-500
            "
          >

            <div
              className="
                rounded-[15px]
                bg-[#080b0f]
                p-6
                md:p-7
              "
            >

              <div className="flex items-center gap-3 mb-7">

                <span className="text-cyan-400 font-mono">
                  //
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.25em]
                    font-mono
                    text-cyan-400
                  "
                >
                  STRENGTHS
                </span>

              </div>


              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-5
                  gap-6
                "
              >

                <Strength
                  icon={<FaBrain />}
                  title="Analytical Thinking"
                  description="Breaking problems down to their core."
                  color="text-cyan-400"
                />

                <Strength
                  icon={<FaLightbulb />}
                  title="Creativity"
                  description="Designing with imagination."
                  color="text-purple-400"
                />

                <Strength
                  icon={<FaSyncAlt />}
                  title="Adaptability"
                  description="Learning and adapting to new things."
                  color="text-blue-400"
                />

                <Strength
                  icon={<FaBullseye />}
                  title="Consistency"
                  description="Discipline and dedication in every step."
                  color="text-pink-400"
                />

                <Strength
                  icon={<FaSearch />}
                  title="Curiosity"
                  description="Always asking questions and learning."
                  color="text-teal-400"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   INTEREST COMPONENT
============================================================ */

function Interest({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <span className={`${color} text-sm`}>
        {icon}
      </span>

      <span className="text-xs text-gray-400">
        {text}
      </span>

    </div>
  );
}


/* ============================================================
   STRENGTH COMPONENT
============================================================ */

function Strength({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex gap-4">

      <div
        className={`
          ${color}
          text-xl
          shrink-0
          pt-1
        `}
      >
        {icon}
      </div>

      <div>

        <h3 className="text-sm font-semibold text-gray-200 mb-2">
          {title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed">
          {description}
        </p>

        {/* tiny HUD line */}

        <div
          className="
            mt-3
            h-[3px]
            w-24
            bg-gradient-to-r
            from-current
            to-transparent
            opacity-60
          "
        />

      </div>

    </div>
  );
}