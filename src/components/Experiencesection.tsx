import {
  FaBriefcase,
  FaCode,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
        md:py-32
        overflow-hidden
        pt-0
        md:pt-0
      "
    >

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/[0.025]
          blur-[130px]
          right-0
          top-1/3
        "
      />

      <div className="relative max-w-[1450px] mx-auto">


        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-12 md:mb-16">

          <p
            className="
              font-mono
              text-xs
              md:text-sm
              tracking-[0.3em]
              text-cyan-400
              mb-3
            "
          >
            / EXPERIENCE
          </p>


          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-5
            "
          >

            <div>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                "
              >
                Where I've Worked.
              </h1>


              <p
                className="
                  mt-4
                  text-gray-500
                  max-w-2xl
                  text-sm
                  md:text-base
                  leading-relaxed
                "
              >
                My experience applying what I've learned in
                a real-world development environment.
              </p>

            </div>


            {/* Experience Status */}

            <div
              className="
                flex
                items-center
                gap-3
                font-mono
                text-xs
                text-gray-500
              "
            >

              <span
                className="
                  w-2
                  h-2
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.7)]
                "
              />

              EXPERIENCE.LOG

            </div>

          </div>

        </div>


        {/* ===================================================
            EXPERIENCE TIMELINE
        =================================================== */}

        <div className="relative">


          {/* Timeline Line */}

          <div
            className="
              hidden
              md:block
              absolute
              left-[32px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-cyan-400/60
              via-blue-500/30
              to-transparent
            "
          />


          {/* Timeline Entry */}

          <div className="relative md:pl-20">


            {/* Timeline Node */}

            <div
              className="
                hidden
                md:flex
                absolute
                left-[16px]
                top-8
                w-8
                h-8
                rounded-full
                bg-[#080b0f]
                border
                border-cyan-400/60
                items-center
                justify-center
                z-10
              "
            >

              <div
                className="
                  w-2
                  h-2
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.8)]
                "
              />

            </div>


            {/* =================================================
                MAIN EXPERIENCE CARD
            ================================================= */}

            <div
              className="
                rounded-2xl
                p-[1.5px]
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-500
              "
            >

              <div
                className="
                  rounded-[15px]
                  bg-[#080b0f]/95
                  overflow-hidden
                "
              >


                {/* =============================================
                    CARD HEADER
                ============================================= */}

                <div
                  className="
                    border-b
                    border-white/[0.08]
                    px-6
                    md:px-8
                    py-5

                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between

                    gap-4
                  "
                >

                  {/* Left */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.04]
                        flex
                        items-center
                        justify-center
                        text-cyan-400
                      "
                    >

                      <FaBriefcase />

                    </div>


                    <div>

                      <p
                        className="
                          text-[10px]
                          tracking-[0.25em]
                          uppercase
                          text-cyan-400
                          font-mono
                          mb-1
                        "
                      >
                        WORK EXPERIENCE
                      </p>


                      <p
                        className="
                          text-xs
                          text-gray-600
                          font-mono
                        "
                      >
                        EXP_001
                      </p>

                    </div>

                  </div>


                  {/* Right */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-gray-500
                      font-mono
                    "
                  >

                    <FaCalendarAlt
                      className="text-cyan-400"
                    />

                    <span>
                      INTERNSHIP
                    </span>

                  </div>

                </div>


                {/* =============================================
                    CARD CONTENT
                ============================================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-12
                    gap-8
                    p-6
                    md:p-8
                    lg:p-10
                  "
                >


                  {/* ===========================================
                      LEFT — ROLE
                  =========================================== */}

                  <div className="lg:col-span-5">

                    <p
                      className="
                        text-xs
                        text-gray-600
                        font-mono
                        mb-3
                      "
                    >
                      POSITION
                    </p>


                    <h2
                      className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        mb-4
                      "
                    >
                      Junior Developer
                    </h2>


                    <div
                      className="
                        flex
                        items-start
                        gap-2
                        text-cyan-400
                        text-sm
                        mb-7
                      "
                    >

                      <img
                        src={"/src/assets/ALPS_Logo-06.png"}
                        alt="Arcana Learning and Processes Solutions"
                        className="w-15 h-15 rounded-full "
                      />

                      <span className="font-semibold flex items-center pt-5">
                        Arcana Learning & Process Solutions
                      </span>

                    </div>


                    {/* Role Summary */}

                    <div
                      className="
                        border-l
                        border-cyan-400/30
                        pl-4
                      "
                    >

                      <p
                        className="
                          text-sm
                          text-gray-400
                          leading-relaxed
                        "
                      >
                        Worked as a Junior Developer during
                        my internship, contributing to the
                        development of B2B administrative
                        pages and web-based interfaces.
                      </p>

                    </div>

                  </div>


                  {/* ===========================================
                      RIGHT — RESPONSIBILITIES
                  =========================================== */}

                  <div className="lg:col-span-7">

                    <p
                      className="
                        text-xs
                        text-gray-600
                        font-mono
                        mb-5
                      "
                    >
                      WHAT I WORKED ON
                    </p>


                    <div className="space-y-5">


                      {/* B2B */}

                      <div className="flex gap-4">

                        <div
                          className="
                            shrink-0
                            w-10
                            h-10
                            rounded-lg
                            border
                            border-blue-400/20
                            bg-blue-400/[0.04]
                            flex
                            items-center
                            justify-center
                            text-blue-400
                          "
                        >

                          <FaCode />

                        </div>


                        <div>

                          <h3
                            className="
                              text-sm
                              font-semibold
                              mb-1
                            "
                          >
                            B2B Administrative Pages
                          </h3>


                          <p
                            className="
                              text-sm
                              text-gray-500
                              leading-relaxed
                            "
                          >
                            Developed administrative pages
                            designed for business-to-business
                            workflows, focusing on usability,
                            structure, and maintainable
                            front-end implementation.
                          </p>

                        </div>

                      </div>


                      {/* React */}

                      <div className="flex gap-4">

                        <div
                          className="
                            shrink-0
                            w-10
                            h-10
                            rounded-lg
                            border
                            border-cyan-400/20
                            bg-cyan-400/[0.04]
                            flex
                            items-center
                            justify-center
                            text-cyan-400
                          "
                        >

                          <SiReact />

                        </div>


                        <div>

                          <h3
                            className="
                              text-sm
                              font-semibold
                              mb-1
                            "
                          >
                            React Development
                          </h3>


                          <p
                            className="
                              text-sm
                              text-gray-500
                              leading-relaxed
                            "
                          >
                            Built reusable interface
                            components and page layouts
                            using React while working
                            within an existing development
                            workflow.
                          </p>

                        </div>

                      </div>


                      {/* TypeScript */}

                      <div className="flex gap-4">

                        <div
                          className="
                            shrink-0
                            w-10
                            h-10
                            rounded-lg
                            border
                            border-purple-400/20
                            bg-purple-400/[0.04]
                            flex
                            items-center
                            justify-center
                            text-purple-400
                          "
                        >

                          <SiTypescript />

                        </div>


                        <div>

                          <h3
                            className="
                              text-sm
                              font-semibold
                              mb-1
                            "
                          >
                            TypeScript
                          </h3>


                          <p
                            className="
                              text-sm
                              text-gray-500
                              leading-relaxed
                            "
                          >
                            Used TypeScript to create
                            structured, type-safe front-end
                            code and maintain consistency
                            throughout the application.
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =============================================
                    TECHNOLOGY / PLATFORM FOOTER
                ============================================= */}

                <div
                  className="
                    border-t
                    border-white/[0.08]
                    px-6
                    md:px-8
                    lg:px-10
                    py-5
                    bg-white/[0.015]

                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >

                  {/* STACK LABEL */}

                  <span
                    className="
                      text-[10px]
                      text-gray-600
                      tracking-[0.2em]
                      font-mono
                      mr-2
                    "
                  >
                    STACK
                  </span>


                  {/* React */}

                  <TechBadge
                    icon={<SiReact />}
                    name="React"
                    color="text-cyan-400"
                  />


                  {/* TypeScript */}

                  <TechBadge
                    icon={<SiTypescript />}
                    name="TypeScript"
                    color="text-blue-400"
                  />


                  {/* Frontend */}

                  <TechBadge
                    icon={<FaCode />}
                    name="Frontend Development"
                    color="text-purple-400"
                  />


                  {/* =========================================
                      VIEW PLATFORM
                  ========================================= */}

                  <a
                    href="https://arcana-learning.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group

                      ml-auto
                      shrink-0

                      inline-flex
                      items-center
                      gap-2

                      border
                      border-cyan-400/30

                      bg-cyan-400/[0.03]

                      px-4
                      py-2

                      rounded-lg

                      text-xs
                      font-mono
                      tracking-wider
                      text-cyan-400

                      transition-all
                      duration-300

                      hover:bg-cyan-400/10
                      hover:border-cyan-400/70

                      hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                    "
                  >

                    VIEW PLATFORM

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />

                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              WHAT I LEARNED
          ================================================= */}

          <div className="md:pl-20 mt-8">

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
              "
            >


              {/* Experience */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#080b0f]/70
                  p-5
                "
              >

                <p
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-cyan-400
                    font-mono
                    mb-4
                  "
                >
                  01 / EXPERIENCE
                </p>


                <h3
                  className="
                    text-sm
                    font-semibold
                    mb-2
                  "
                >
                  Real-world Development
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-500
                    leading-relaxed
                  "
                >
                  Experienced working on software intended
                  for real business workflows rather than
                  purely academic projects.
                </p>

              </div>


              {/* Growth */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#080b0f]/70
                  p-5
                "
              >

                <p
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-blue-400
                    font-mono
                    mb-4
                  "
                >
                  02 / GROWTH
                </p>


                <h3
                  className="
                    text-sm
                    font-semibold
                    mb-2
                  "
                >
                  Professional Workflow
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-500
                    leading-relaxed
                  "
                >
                  Learned how development decisions,
                  requirements, and implementation come
                  together in a professional environment.
                </p>

              </div>


              {/* Skills */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#080b0f]/70
                  p-5
                "
              >

                <p
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-purple-400
                    font-mono
                    mb-4
                  "
                >
                  03 / SKILLS
                </p>


                <h3
                  className="
                    text-sm
                    font-semibold
                    mb-2
                  "
                >
                  Front-End Engineering
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-500
                    leading-relaxed
                  "
                >
                  Strengthened my ability to structure,
                  develop, and maintain modern React and
                  TypeScript interfaces.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            font-mono
            text-[10px]
            tracking-[0.2em]
            text-gray-600
          "
        >

          <span className="text-cyan-400">
            &gt;
          </span>

          <span>
            EXPERIENCE_CONTINUES
          </span>

          <FaArrowRight
            className="text-cyan-400"
          />

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   TECH BADGE
============================================================ */

function TechBadge({
  icon,
  name,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2

        rounded-lg

        border
        border-white/[0.08]

        bg-white/[0.02]

        px-3
        py-2

        text-xs
        text-gray-400

        whitespace-nowrap
      "
    >

      <span className={color}>
        {icon}
      </span>

      {name}

    </div>
  );
}