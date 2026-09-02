import type { IconType } from "react-icons";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiApachenetbeanside,
  SiEclipseide,
  SiUnity,
  SiFigma,
  SiKrita,
  SiLatex,
} from "react-icons/si";

import {
  FaJava,
  FaMicrosoft,
  FaTools,
  FaDesktop,
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

import { VscVscode } from "react-icons/vsc";


/* =========================================================
   TYPES
========================================================= */

export type Tool = {
  name: string;
  icon: IconType;
};

export type ToolCategory = {
  number: string;
  code: string;
  title: string;
  icon: IconType;

  gradient: string;
  glow: string;
  accent: string;

  tools: Tool[];
};


/* =========================================================
   TOOL DATA
========================================================= */

export const toolData: ToolCategory[] = [

  /* =======================================================
     01 — PROGRAMMING LANGUAGES
  ======================================================= */

  {
    number: "01",
    code: "PRG_01",

    title: "Programming Languages",

    icon: FaTools,

    gradient:
      "bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500",

    glow:
      "hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",

    accent:
      "text-emerald-400",

    tools: [
      {
        name: "Java",
        icon: FaJava,
      },

      {
        name: "Python",
        icon: SiPython,
      },

      {
        name: "C++",
        icon: SiCplusplus,
      },

      {
        name: "C",
        icon: SiC,
      },

      {
        name: "C#",
        icon: TbBrandCSharp,
      },
    ],
  },


  /* =======================================================
     02 — FRONT-END DEVELOPMENT
  ======================================================= */

  {
    number: "02",
    code: "WEB_02",

    title: "Front-End Development",

    icon: SiReact,

    gradient:
      "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500",

    glow:
      "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",

    accent:
      "text-cyan-400",

    tools: [
      {
        name: "HTML",
        icon: SiHtml5,
      },

      {
        name: "CSS",
        icon: SiCss,
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
      },

      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },


  /* =======================================================
     03 — BACK-END & DATABASES
  ======================================================= */

  {
    number: "03",
    code: "DB_03",

    title: "Back-End & Databases",

    icon: SiMysql,

    gradient:
      "bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500",

    glow:
      "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",

    accent:
      "text-purple-400",

    tools: [
      {
        name: "SQL",
        icon: FaTools,
      },

      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },


  /* =======================================================
     04 — DEVELOPMENT TOOLS
  ======================================================= */

  {
    number: "04",
    code: "DEV_04",

    title: "Development Tools",

    icon: SiGithub,

    gradient:
      "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",

    glow:
      "hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]",

    accent:
      "text-indigo-400",

    tools: [
      {
        name: "Git",
        icon: SiGit,
      },

      {
        name: "GitHub",
        icon: SiGithub,
      },

      {
        name: "Visual Studio Code",
        icon: VscVscode,
      },

      {
        name: "NetBeans",
        icon: SiApachenetbeanside,
      },

      {
        name: "Eclipse",
        icon: SiEclipseide,
      },

      {
        name: "Unity",
        icon: SiUnity,
      },
    ],
  },


  /* =======================================================
     05 — DESIGN & DOCUMENTATION
  ======================================================= */

  {
    number: "05",
    code: "DES_05",

    title: "Design & Documentation",

    icon: SiFigma,

    gradient:
      "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-orange-400",

    glow:
      "hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",

    accent:
      "text-pink-400",

    tools: [
      {
        name: "Figma",
        icon: SiFigma,
      },

      {
        name: "Krita",
        icon: SiKrita,
      },

      {
        name: "Canva",
        icon: FaTools,
      },

      {
        name: "Microsoft Office",
        icon: FaMicrosoft,
      },

      {
        name: "LaTeX",
        icon: SiLatex,
      },
    ],
  },


  /* =======================================================
     06 — HARDWARE SKILLS
  ======================================================= */

  {
    number: "06",
    code: "HW_06",

    title: "Hardware Skills",

    icon: FaDesktop,

    gradient:
      "bg-gradient-to-br from-orange-400 via-amber-500 to-red-500",

    glow:
      "hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]",

    accent:
      "text-orange-400",

    tools: [
      {
        name: "PC Assembly",
        icon: FaDesktop,
      },

      {
        name: "Hardware Troubleshooting",
        icon: FaTools,
      },
    ],
  },

];