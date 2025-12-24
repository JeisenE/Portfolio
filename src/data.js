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

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Railway",
    ket: "Deployment",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Visual Paradigm",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Microsoft Visual Studio",
    ket: "IDE Application",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
{
  id: 12,
  gambar: Tools12,
  nama: "MySQL",
  ket: "Database",
  dad: "1200",
},
{
  id: 13,
  gambar: Tools13,
  nama: "Power BI",
  ket: "Data Visualization",
  dad: "1300",
},
];

import JS from "/assets/lang/js.png";
import HTML from "/assets/lang/html.png";
import CSS from "/assets/lang/css.png";
import SQL from "/assets/lang/sql.png";
import Python from "/assets/lang/python.png";
import Java from "/assets/lang/java.png";

export const listLanguage = [
  {
    id: 1,
    gambar: JS,
    nama: "JavaScript",
    level: "Advanced",
    percent: 85,
    group: "Frontend",
  },
  {
    id: 2,
    gambar: HTML,
    nama: "HTML",
    level: "Advanced",
    percent: 90,
    group: "Frontend",
  },
  {
    id: 3,
    gambar: CSS,
    nama: "CSS",
    level: "Advanced",
    percent: 88,
    group: "Frontend",
  },
  {
    id: 4,
    gambar: SQL,
    nama: "SQL",
    level: "Intermediate",
    percent: 95,
    group: "Backend",
  },
  {
    id: 5,
    gambar: Python,
    nama: "Python",
    level: "Intermediate",
    percent: 65,
    group: "Backend",
  },
  {
    id: 6,
    gambar: Java,
    nama: "Java",
    level: "Intermediate",
    percent: 90,
    group: "Backend",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "DiamondCut Motors",
    periode: "Feb 2024 – Jun 2024",
    desk:
      "DiamondCut Motors adalah platform web untuk menampilkan dan memperdagangkan mobil mewah. Website ini memiliki fitur inventori mobil New & Used Cars dengan filter berdasarkan brand seperti Audi, Porsche, dan Ferrari, serta dilengkapi sistem login dan showroom interaktif untuk meningkatkan pengalaman pengguna.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "SkinVigil",
    periode: "Feb 2025 – Jun 2025",
    desk:
      "SkinVigil adalah aplikasi web berbasis React yang bertujuan meningkatkan kesadaran terhadap kanker kulit. Aplikasi ini menyediakan konten edukatif sekaligus sistem AI yang mampu menganalisis foto kulit dan menampilkan persentase kemungkinan kanker, sehingga membantu pengguna lebih proaktif terhadap kesehatan kulit.",
    tools: ["React.js", "AI Image Analysis"],
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "MataBatik",
    periode: "Sep 2024 – Dec 2024",
    desk:
      "MataBatik adalah aplikasi web berbasis Machine Learning yang mampu mengklasifikasikan asal motif batik Indonesia melalui unggahan gambar. Sistem ini memprediksi daerah asal batik seperti Solo atau Pekalongan sekaligus menampilkan confidence score dari hasil prediksi. Proyek ini mengintegrasikan TensorFlow dan Flask dengan antarmuka HTML, CSS, dan JavaScript.",
    tools: ["HTML", "CSS", "JavaScript", "Python", "Flask", "TensorFlow"],
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "BitHub",
    periode: "Feb 2024 – Jul 2024",
    desk:
      "BitHub merupakan platform web edukasi untuk mahasiswa Computer Science dan IT yang menyediakan bank soal coding, forum diskusi, serta leaderboard. Website ini dirancang responsif dan interaktif untuk menciptakan pengalaman belajar yang engaging.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
  id: 5,
  gambar: Proyek5,
  nama: "Data Jobs Analytics Dashboard",
  periode: "2024",
  desk:
    "Dashboard analitik interaktif yang menampilkan insight mendalam terkait industri Data Jobs secara global. Visualisasi mencakup perbandingan gaji tahunan vs per jam, tren lowongan sepanjang 2024, peran data dengan bayaran tertinggi, proporsi pekerjaan tanpa syarat gelar, hingga distribusi work-from-home. Dashboard ini dirancang untuk membantu pencari kerja dan analis memahami pola pasar kerja data secara komprehensif.",
  tools: [
    "Power BI",
    "Data Visualization",
    "Data Analysis",
    "Dashboard Design"
  ],
  }

];

