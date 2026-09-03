import { useState } from "react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
  FaCheck,
  FaPhone
} from "react-icons/fa";


// ============================================================
// FORM SETTINGS
// ============================================================

// Replace this with your Formspree endpoint.
//
// Example:
// https://formspree.io/f/xxxxxxxx
//
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjyvrjyn";


export default function ContactSection() {

  // ==========================================================
  // FORM STATE
  // ==========================================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");


  // ==========================================================
  // SEND MESSAGE
  // ==========================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");
    setIsSending(true);
    setIsSent(false);


    try {

      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );


      if (!response.ok) {
        throw new Error("Failed to send message.");
      }


      // ======================================================
      // SUCCESS
      // ======================================================

      setName("");
      setEmail("");
      setMessage("");

      setIsSent(true);


      // Remove success message after 5 seconds

      setTimeout(() => {
        setIsSent(false);
      }, 5000);


    } catch (err) {

      console.error(err);

      setError(
        "Something went wrong. Please try again."
      );

    } finally {

      setIsSending(false);

    }
  };


  return (
    <section
      id="contact"
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
        md:pb-0
        md:pt-0

        overflow-hidden
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

          bg-cyan-500/[0.025]

          blur-[130px]

          left-0
          top-1/3
        "
      />


      <div
        className="
          pointer-events-none
          absolute

          w-[450px]
          h-[450px]

          rounded-full

          bg-purple-500/[0.02]

          blur-[130px]

          right-0
          bottom-0
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
            / CONTACT
          </p>


          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-end
              lg:justify-between

              gap-6
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
                Let's build something.
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
                Have a project, opportunity, or just want
                to say hello? My inbox is always open.
              </p>

            </div>


            {/* STATUS */}

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

              CONNECTION_AVAILABLE

            </div>

          </div>

        </div>


        {/* ===================================================
            MAIN CONTACT AREA
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
              CONTACT FORM
          ================================================= */}

          <div
            className="
              lg:col-span-7

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
                h-full

                rounded-[15px]

                bg-[#080b0f]

                p-6
                md:p-8
                lg:p-10
              "
            >


              {/* FORM HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  mb-8
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]

                      tracking-[0.25em]

                      text-cyan-400

                      font-mono

                      mb-2
                    "
                  >
                    // SEND_MESSAGE
                  </p>


                  <h2
                    className="
                      text-xl
                      md:text-2xl

                      font-semibold
                    "
                  >
                    Start a conversation.
                  </h2>

                </div>


                <FaPaperPlane
                  className="
                    text-cyan-400
                    text-xl
                  "
                />

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >


                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      block

                      text-[10px]

                      tracking-[0.2em]

                      text-gray-500

                      font-mono

                      mb-2
                    "
                  >
                    NAME
                  </label>


                  <input
                    id="name"
                    name="name"
                    type="text"

                    value={name}

                    onChange={(e) =>
                      setName(e.target.value)
                    }

                    placeholder="Your name..."

                    required

                    disabled={isSending}

                    className="
                      w-full

                      rounded-lg

                      border
                      border-white/[0.08]

                      bg-white/[0.02]

                      px-4
                      py-3.5

                      text-sm
                      text-white

                      placeholder:text-gray-700

                      outline-none

                      transition-all
                      duration-300

                      focus:border-cyan-400/60

                      focus:bg-cyan-400/[0.02]

                      focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]

                      disabled:opacity-50
                    "
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      block

                      text-[10px]

                      tracking-[0.2em]

                      text-gray-500

                      font-mono

                      mb-2
                    "
                  >
                    EMAIL
                  </label>


                  <input
                    id="email"
                    name="email"

                    type="email"

                    value={email}

                    onChange={(e) =>
                      setEmail(e.target.value)
                    }

                    placeholder="your@email.com"

                    required

                    disabled={isSending}

                    className="
                      w-full

                      rounded-lg

                      border
                      border-white/[0.08]

                      bg-white/[0.02]

                      px-4
                      py-3.5

                      text-sm
                      text-white

                      placeholder:text-gray-700

                      outline-none

                      transition-all
                      duration-300

                      focus:border-cyan-400/60

                      focus:bg-cyan-400/[0.02]

                      focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]

                      disabled:opacity-50
                    "
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      block

                      text-[10px]

                      tracking-[0.2em]

                      text-gray-500

                      font-mono

                      mb-2
                    "
                  >
                    MESSAGE
                  </label>


                  <textarea
                    id="message"
                    name="message"

                    rows={7}

                    value={message}

                    onChange={(e) =>
                      setMessage(e.target.value)
                    }

                    placeholder="Tell me what's on your mind..."

                    required

                    disabled={isSending}

                    className="
                      w-full

                      resize-none

                      rounded-lg

                      border
                      border-white/[0.08]

                      bg-white/[0.02]

                      px-4
                      py-3.5

                      text-sm
                      text-white

                      placeholder:text-gray-700

                      outline-none

                      transition-all
                      duration-300

                      focus:border-cyan-400/60

                      focus:bg-cyan-400/[0.02]

                      focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]

                      disabled:opacity-50
                    "
                  />

                </div>


                {/* =================================================
                    ERROR MESSAGE
                ================================================= */}

                {error && (

                  <div
                    className="
                      border
                      border-red-400/20

                      bg-red-400/[0.04]

                      rounded-lg

                      px-4
                      py-3

                      text-xs
                      text-red-400

                      font-mono
                    "
                  >

                    {error}

                  </div>

                )}


                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {isSent && (

                  <div
                    className="
                      flex
                      items-center
                      gap-3

                      border
                      border-emerald-400/20

                      bg-emerald-400/[0.04]

                      rounded-lg

                      px-4
                      py-3

                      text-xs
                      text-emerald-400

                      font-mono

                      animate-[fadeIn_0.3s_ease-out]
                    "
                  >

                    <div
                      className="
                        w-6
                        h-6

                        rounded-full

                        border
                        border-emerald-400/40

                        flex
                        items-center
                        justify-center
                      "
                    >

                      <FaCheck
                        className="text-[10px]"
                      />

                    </div>


                    <div>

                      <p>
                        MESSAGE_SENT
                      </p>

                      <p
                        className="
                          text-[10px]
                          text-gray-600
                          mt-1
                        "
                      >
                        Thanks for reaching out.
                      </p>

                    </div>

                  </div>

                )}


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"

                  disabled={isSending}

                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    rounded-lg

                    border
                    border-cyan-400/40

                    bg-cyan-400/[0.05]

                    px-6
                    py-3.5

                    text-xs

                    font-mono

                    tracking-[0.15em]

                    text-cyan-400

                    transition-all
                    duration-300

                    hover:bg-cyan-400/10

                    hover:border-cyan-400/80

                    hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {isSending ? (

                    <>
                      <span
                        className="
                          w-3
                          h-3

                          rounded-full

                          border
                          border-cyan-400/30
                          border-t-cyan-400

                          animate-spin
                        "
                      />

                      SENDING...

                    </>

                  ) : isSent ? (

                    <>
                      <FaCheck />

                      MESSAGE SENT

                    </>

                  ) : (

                    <>
                      SEND MESSAGE

                      <FaArrowRight
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      />

                    </>

                  )}

                </button>

              </form>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              lg:col-span-5

              flex
              flex-col

              gap-6
            "
          >


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <div
              className="
                rounded-2xl

                p-[1.5px]

                bg-gradient-to-br
                from-purple-500
                via-blue-500
                to-cyan-400
              "
            >

              <div
                className="
                  rounded-[15px]

                  bg-[#080b0f]

                  p-6
                  md:p-8
                "
              >

                <p
                  className="
                    text-[10px]

                    tracking-[0.25em]

                    text-purple-400

                    font-mono

                    mb-6
                  "
                >
                  // CONTACT_INFO
                </p>


                <div className="space-y-6">


                  {/* EMAIL */}

                  <ContactItem
                    icon={<FaEnvelope />}
                    label="EMAIL"
                    value="kirbybenj271@gmail.com"
                    href="mailto:kirbybenj271@gmail.com"
                    color="text-cyan-400"
                  />


                  {/* GITHUB */}

                  <ContactItem
                    icon={<FaGithub />}
                    label="GITHUB"
                    value="github.com/KazuyaaaaDesu"
                    href="https://github.com/KazuyaaaaDesu"
                    color="text-purple-400"
                  />

                  {/* LINKEDIN */}

                  <ContactItem
                    icon={<FaLinkedin />}
                    label="LINKEDIN"
                    value="linkedin.com/in/kirby-benj-gutierrez"
                    href="https://www.linkedin.com/in/kirby-benj-gutierrez/"
                    color="text-blue-400"
                  />


                  {/* LOCATION */}

                  <ContactItem
                    icon={< FaPhone />}
                    label="PHONE"
                    value="+63 657 581 324"
                    color="text-pink-400"
                  />

                </div>

              </div>

            </div>


            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div
              className="
                flex-1

                rounded-2xl

                p-[1.5px]

                bg-gradient-to-br
                from-cyan-400
                to-teal-500
              "
            >

              <div
                className="
                  h-full

                  min-h-[220px]

                  rounded-[15px]

                  bg-[#080b0f]

                  p-6
                  md:p-8

                  flex
                  flex-col
                  justify-between
                "
              >

                <div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      mb-7
                    "
                  >

                    <p
                      className="
                        text-[10px]

                        tracking-[0.25em]

                        text-cyan-400

                        font-mono
                      "
                    >
                      // AVAILABILITY
                    </p>


                    <span
                      className="
                        w-2
                        h-2

                        bg-emerald-400

                        shadow-[0_0_12px_rgba(52,211,153,0.8)]
                      "
                    />

                  </div>


                  <h2
                    className="
                      text-2xl
                      md:text-3xl

                      font-bold

                      mb-4
                    "
                  >
                    Open to opportunities.
                  </h2>


                  <p
                    className="
                      text-sm

                      text-gray-500

                      leading-relaxed

                      max-w-md
                    "
                  >
                    I'm always interested in learning,
                    building new things, and connecting
                    with people working on interesting
                    projects.
                  </p>

                </div>


                {/* STATUS */}

                <div
                  className="
                    pt-7
                    mt-7

                    border-t
                    border-white/[0.08]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      font-mono

                      text-[10px]

                      text-gray-600
                    "
                  >

                    <span>
                      RESPONSE_STATUS
                    </span>

                    <span className="text-emerald-400">
                      ONLINE
                    </span>

                  </div>


                  <div
                    className="
                      mt-3

                      w-full
                      h-[2px]

                      bg-white/[0.05]

                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        w-[75%]
                        h-full

                        bg-gradient-to-r
                        from-cyan-400
                        to-purple-500
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
  icon,
  label,
  value,
  href,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color: string;
}) {

  const content = (
    <>
      <div
        className={`
          shrink-0

          w-10
          h-10

          rounded-lg

          border
          border-white/[0.08]

          bg-white/[0.02]

          flex
          items-center
          justify-center

          ${color}
        `}
      >

        {icon}

      </div>


      <div className="min-w-0">

        <p
          className="
            text-[9px]

            tracking-[0.2em]

            text-gray-600

            font-mono

            mb-1
          "
        >
          {label}
        </p>


        <p
          className="
            text-sm

            text-gray-400

            truncate
          "
        >
          {value}
        </p>

      </div>
    </>
  );


  if (href) {

    return (
      <a
        href={href}

        target={
          href.startsWith("http")
            ? "_blank"
            : undefined
        }

        rel={
          href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }

        className="
          flex
          items-center
          gap-4

          group
        "
      >

        {content}

      </a>
    );

  }


  return (
    <div
      className="
        flex
        items-center
        gap-4
      "
    >

      {content}

    </div>
  );
}