// src/data/projectData.ts

export interface Tag {
  label: string;
  border: string;
  text: string;
  bg: string;
}

export interface DevelopmentProject {
  title: string;
  category: string;
  description: string;
  tags?: Tag[];
  gradient: string;
  shadow: string;
  tagColor: string;
  buttonColor: string;
  image: string;
}

export interface ResearchPaper {
  title: string;
  category: string;
  description: string;
  gradient: string;
  shadow: string;
  tagColor: string;
  buttonColor: string;
  image: string;
  pdfUrl: string;
}

export const developmentProjects: DevelopmentProject[] = [
  {
    title: "Fever Dream",
    category: "Game Development",
    description: "A pixel-art side-scroller that blends emotional storytelling with surrealist horror. The game tracks the psychological journey of a protagonist searching for his lost dog.",
    tags: [
      { label: "C#", border: "border-emerald-400/30", text: "text-emerald-300", bg: "bg-emerald-400/5" },
      { label: "Unity", border: "border-sky-400/30", text: "text-sky-300", bg: "bg-sky-400/5" },
      { label: "Krita ", border: "border-cyan-400/30", text: "text-cyan-300", bg: "bg-cyan-400/5" },
    ],
    gradient: "from-emerald-400 via-cyan-400 to-blue-500",
    shadow: "hover:shadow-[0_0_35px_rgba(45,212,191,0.18)]",
    tagColor: "text-emerald-400",
    buttonColor: "text-emerald-300 hover:text-emerald-200",
    image: "images/feverdream.png",
  },
  {
    title: "Management System: Automating Billing and Enhancing Customer Experience",
    category: "Application Development",
    description: "A subscription plan management system designed to help businesses handle recurring revenue by automating and optimizing the subscription service lifecycle.",
    tags: [
      { label: "Java", border: "border-indigo-400/30", text: "text-indigo-300", bg: "bg-indigo-400/5" },
      { label: "MySQL", border: "border-blue-400/30", text: "text-blue-300", bg: "bg-blue-400/5" },
      { label: "Apache Netbeans", border: "border-violet-400/30", text: "text-violet-300", bg: "bg-violet-400/5" },
    ],
    gradient: "from-indigo-400 via-blue-500 to-purple-500",
    shadow: "hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]",
    tagColor: "text-indigo-400",
    buttonColor: "text-indigo-300 hover:text-indigo-200",
    image: "images/managementsystem.png",
  },
  {
    title: "Automated Grading System",
    category: "Academic System",
    description: "Developed a robust automated grading system centered on data integrity and consistency. The project organizes performance data into an autonomous evaluation framework.",
    tags: [
      { label: "Java", border: "border-pink-400/30", text: "text-pink-300", bg: "bg-pink-400/5" },
      { label: "Apache Netbeans", border: "border-purple-400/30", text: "text-purple-300", bg: "bg-purple-400/5" },
    ],
    gradient: "from-pink-400 via-fuchsia-500 to-purple-500",
    shadow: "hover:shadow-[0_0_35px_rgba(217,70,239,0.18)]",
    tagColor: "text-pink-400",
    buttonColor: "text-pink-300 hover:text-pink-200",
    image: "images/grading.png",
  },
  {
    title: "Combinations and Permutations Calculator",
    category: "Mathematical Computing",
    description: "A functional calculator designed to solve complex counting problems using Permutations, Combinations, and Circular Permutations.",
    tags: [
      { label: "Java", border: "border-emerald-400/30", text: "text-emerald-300", bg: "bg-emerald-400/5" },
      { label: "Eclipse", border: "border-lime-400/30", text: "text-lime-300", bg: "bg-lime-400/5" },
    ],
    gradient: "from-emerald-400 via-green-500 to-lime-400",
    shadow: "hover:shadow-[0_0_35px_rgba(74,222,128,0.18)]",
    tagColor: "text-emerald-400",
    buttonColor: "text-emerald-300 hover:text-emerald-200",
    image: "images/miggy.jfif",
  },
  {
    title: "Appare Vestigium",
    category: "Productivity",
    description: "A student activity tracker designed to combat burnout and disorganized workflows by centralizing tasks, deadlines, and semester progress.",
    tags: [
      { label: "Figma", border: "border-teal-400/30", text: "text-teal-300", bg: "bg-teal-400/5" },
      /*{ label: "", border: "border-cyan-400/30", text: "text-cyan-300", bg: "bg-cyan-400/5" }, */
    ],
    gradient: "from-teal-400 via-cyan-500 to-indigo-500",
    shadow: "hover:shadow-[0_0_35px_rgba(20,184,166,0.18)]",
    tagColor: "text-cyan-400",
    buttonColor: "text-cyan-300 hover:text-cyan-200",
    image: "images/scheduler.png",
  },
  {
    title: "Multi-Commodity Minimum-Cost Flow for Blood Distribution",
    category: "Graph Theory and Optimization",
    description: "A directed capacity-constrained network model focused on optimizing blood distribution while minimizing transportation costs.",
    tags: [
      { label: "Python", border: "border-purple-400/30", text: "text-purple-300", bg: "bg-purple-400/5" },
      { label: "MATLAB", border: "border-pink-400/30", text: "text-pink-300", bg: "bg-pink-400/5" },
    ],
    gradient: "from-violet-400 via-purple-500 to-pink-500",
    shadow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]",
    tagColor: "text-purple-400",
    buttonColor: "text-purple-300 hover:text-purple-200",
    image: "images/graph.png",
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    title: "Power of Ray Tracing, Calculus in Your Hands",
    category: "Applied Calculus & Computer Science",
    description: "This paper explores the mathematical side of ray tracing, focusing on calculus and vector rendering procedures.",
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    shadow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]",
    tagColor: "text-cyan-400",
    buttonColor: "text-cyan-300 hover:text-cyan-200",
    image: "images/raytracing.png",
    pdfUrl: "papers/ray-tracing.pdf",
  },
  {
    title: "Multi-Commodity Minimum-Cost Flow for Blood Distribution",
    category: "Operations Research",
    description: "A directed capacity-constrained network model focused on optimizing blood distribution while minimizing transportation costs.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    shadow: "hover:shadow-[0_0_35px_rgba(20,184,166,0.18)]",
    tagColor: "text-teal-400",
    buttonColor: "text-teal-300 hover:text-teal-200",
    image: "images/graph.png",
    pdfUrl: "papers/gta.pdf",
  },
  {
    title: "Complex Impedance and Phasor Relationships",
    category: "Applied Complex Analysis",
    description: "An exploration of complex analysis, phasors, and complex impedance as tools for understanding AC circuit behavior.",
    gradient: "from-pink-400 via-purple-500 to-indigo-500",
    shadow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]",
    tagColor: "text-purple-400",
    buttonColor: "text-purple-300 hover:text-purple-200",
    image: "images/complex.png",
    pdfUrl: "papers/complex.pdf",
  },
  {
    title: "MADS: Modular Arithmetic and Diophantine Scheduling",
    category: "Discrete Mathematics",
    description: "A scheduling framework using modular arithmetic and Diophantine equations to distribute appointment loads across available time slots.",
    gradient: "from-orange-400 via-pink-500 to-purple-500",
    shadow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.18)]",
    tagColor: "text-pink-400",
    buttonColor: "text-pink-300 hover:text-pink-200",
    image: "images/modulararithmethic.png",
    pdfUrl: "papers/mads.pdf",
  },
  /* { 
     title: "Fractional Calculus of Piecewise Continuous Functions",
     category: "Calculus",
     description: "An exploration of Fractional Calculus alongside piecewise continuous functions and the problems that arise from their interaction.",
     gradient: "from-violet-400 via-fuchsia-500 to-pink-500",
     shadow: "hover:shadow-[0_0_35px_rgba(217,70,239,0.18)]",
     tagColor: "text-fuchsia-400",
     buttonColor: "text-fuchsia-300 hover:text-fuchsia-200",
     image: "images/placeholder.png",
     pdfUrl: "papers/sample-paper.pdf",
   }, */
  {
    title: "Real-Life Application of Related Rates on Typhoons",
    category: "Applied Calculus",
    description: "This project applies related rates to model the changing area of a typhoon and visualize the speed of disaster expansion.",
    gradient: "from-yellow-300 via-orange-400 to-pink-500",
    shadow: "hover:shadow-[0_0_35px_rgba(251,146,60,0.18)]",
    tagColor: "text-orange-400",
    buttonColor: "text-orange-300 hover:text-orange-200",
    image: "images/placeholder.png",
    pdfUrl: "papers/sample-paper.pdf",
  },
];