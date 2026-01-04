import HeroImage from "/assets/myphoto.jpg";

const Image = {
  HeroImage,
};

export default Image;


import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/railway.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/visualparadigm.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/mvs.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/powebi.png";
import Tools14 from "/assets/tools/laravel.png";
import Tools15 from "/assets/tools/crystal.png";

export const listTools = [
  {
    id: 1,
    image: Tools1,
    name: "Visual Studio Code",
    description: "Code Editor",
    delay: "100",
  },
  {
    id: 2,
    image: Tools2,
    name: "React JS",
    description: "Framework",
    delay: "200",
  },
  {
    id: 3,
    image: Tools3,
    name: "Railway",
    description: "Deployment Platform",
    delay: "300",
  },
  {
    id: 4,
    image: Tools4,
    name: "Tailwind CSS",
    description: "CSS Framework",
    delay: "400",
  },
  {
    id: 5,
    image: Tools5,
    name: "Bootstrap",
    description: "CSS Framework",
    delay: "500",
  },
  {
    id: 6,
    image: Tools6,
    name: "JavaScript",
    description: "Programming Language",
    delay: "600",
  },
  {
    id: 7,
    image: Tools7,
    name: "Visual Paradigm",
    description: "Design Application",
    delay: "700",
  },
  {
    id: 8,
    image: Tools8,
    name: "GitHub",
    description: "Code Repository",
    delay: "800",
  },
  {
    id: 9,
    image: Tools9,
    name: "Microsoft Visual Studio",
    description: "IDE",
    delay: "900",
  },
  {
    id: 10,
    image: Tools10,
    name: "Canva",
    description: "Design Tool",
    delay: "1000",
  },
  {
    id: 11,
    image: Tools11,
    name: "Figma",
    description: "UI/UX Design Tool",
    delay: "1100",
  },
  {
    id: 12,
    image: Tools12,
    name: "MySQL",
    description: "Database",
    delay: "1200",
  },
  {
    id: 13,
    image: Tools13,
    name: "Power BI",
    description: "Data Visualization Tool",
    delay: "1300",
  },
  {
    id: 14,
    image: Tools14,
    name: "Laravel",
    description: "Backend Framework",
    delay: "1400",
  },
  {
    id: 15,
    image: Tools15,
    name: "Crystal Reports",
    description: "Reporting Tool",
    delay: "1500",
  },
];

import JS from "/assets/lang/js.png";
import HTML from "/assets/lang/html.png";
import CSS from "/assets/lang/css.png";
import SQL from "/assets/lang/sql.png";
import Python from "/assets/lang/python.png";
import Java from "/assets/lang/java.png";
import PHP from "/assets/lang/php.png";

export const listLanguage = [
  {
    id: 1,
    image: JS,
    name: "JavaScript",
    level: "Advanced",
    percent: 85,
    category: "Frontend",
  },
  {
    id: 2,
    image: HTML,
    name: "HTML",
    level: "Advanced",
    percent: 90,
    category: "Frontend",
  },
  {
    id: 3,
    image: CSS,
    name: "CSS",
    level: "Advanced",
    percent: 88,
    category: "Frontend",
  },
  {
    id: 4,
    image: SQL,
    name: "SQL",
    level: "Intermediate",
    percent: 95,
    category: "Backend, Database",
  },
  {
    id: 5,
    image: Python,
    name: "Python",
    level: "Intermediate",
    percent: 70,
    category: "Backend",
  },
  {
    id: 6,
    image: Java,
    name: "Java",
    level: "Intermediate",
    percent: 90,
    category: "Backend",
  },
  {
    id: 7,
    image: PHP,
    name: "PHP",
    level: "Advanced",
    percent: 80,
    category: "Backend",
  },
];

import Project1 from "/assets/proyek/proyek1.png";
import Project2 from "/assets/proyek/proyek2.png";
import Project3 from "/assets/proyek/proyek3.png";
import Project4 from "/assets/proyek/proyek4.png";
import Project5 from "/assets/proyek/proyek5.png";
import Project6 from "/assets/proyek/proyek6.png";

export const listProjects = [
  {
    id: 1,
    image: Project1,
    name: "DiamondCut Motors",
    period: "Feb 2024 – Jun 2024",
    description:
      "DiamondCut Motors is a web platform designed to showcase and trade luxury cars. The website features both new and used car inventories with brand-based filters such as Audi, Porsche, and Ferrari. It also includes a login system and an interactive showroom to enhance user experience.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    image: Project2,
    name: "SkinVigil",
    period: "Feb 2025 – Jun 2025",
    description:
      "SkinVigil is a React-based web application aimed at increasing awareness of skin cancer. It provides educational content alongside an AI-powered system capable of analyzing skin images and displaying the probability of cancer, helping users become more proactive about skin health.",
    tools: ["React.js", "AI Image Analysis"],
  },
  {
    id: 3,
    image: Project3,
    name: "MataBatik",
    period: "Sep 2024 – Dec 2024",
    description:
      "MataBatik is a machine learning-based web application that classifies the origin of Indonesian batik motifs through image uploads. The system predicts the batik region, such as Solo or Pekalongan, and displays a confidence score for each prediction. This project integrates TensorFlow and Flask with an HTML, CSS, and JavaScript interface.",
    tools: ["HTML", "CSS", "JavaScript", "Python", "Flask", "TensorFlow"],
  },
  {
    id: 4,
    image: Project4,
    name: "BitHub",
    period: "Feb 2024 – Jul 2024",
    description:
      "BitHub is an educational web platform for Computer Science and IT students, providing a coding question bank, discussion forum, and leaderboard. The website is designed to be responsive and interactive to create an engaging learning experience.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    image: Project5,
    name: "Data Jobs Analytics Dashboard",
    period: "2025",
    description:
      "An interactive analytics dashboard that presents in-depth insights into the global data jobs industry. Visualizations include annual vs hourly salary comparisons, job trend analysis throughout 2024, highest-paying data roles, the proportion of jobs without degree requirements, and work-from-home distribution. The dashboard is designed to help job seekers and analysts understand data job market patterns comprehensively.",
    tools: [
      "Power BI",
      "Data Visualization",
      "Data Analysis",
      "Dashboard Design",
    ],
  },
  {
  id: 6,
  image: Project6,
  name: "Library Management System",
  period: "2025",
  description:
    "A full-stack library management system that enables users to search, borrow, and return books through a web interface. The system implements authentication, borrowing history, due date tracking, and book availability status. Built with a Laravel backend and MySQL database to manage user data, book records, and transactions efficiently.",
  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "Laravel",
    "MySQL",
  ],
  }
];
