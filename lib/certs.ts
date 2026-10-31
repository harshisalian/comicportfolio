export type Cert = {
  seal: string;
  title: string;
  issuer: string;
  date: string;
  kind: string;
  file?: string; // optional file in /public/certificates
};

// Newest first within each group.
export const internships: Cert[] = [
  { seal: "CL", title: "MERN Stack Web Development", issuer: "CodeLab Systems, Mangaluru",
    date: "2 Feb – 9 May 2026", kind: "Internship", file: "/certificates/codelab-internship.jpg" },
  { seal: "KI", title: "Industrial Training — Pellet Plant Unit", issuer: "KIOCL Limited, Mangaluru",
    date: "December 2025", kind: "Internship", file: "/certificates/kiocl-training.jpg" },
];

export const courses: Cert[] = [
  { seal: "AWS", title: "Cloud Practitioner Essentials", issuer: "AWS Skill Builder",
    date: "June 2026", kind: "Course" },
  { seal: "DA", title: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)",
    date: "4 June 2026", kind: "Job simulation", file: "/certificates/deloitte-data-analytics.pdf" },
  { seal: "AI", title: "AI Tools & ChatGPT Workshop", issuer: "be10x",
    date: "29 June 2025", kind: "Workshop", file: "/certificates/be10x-ai-tools.jpg" },
  { seal: "CY", title: "Cyber Job Simulation", issuer: "Deloitte (Forage)",
    date: "22 June 2025", kind: "Job simulation", file: "/certificates/deloitte-cyber.jpg" },
  { seal: "CSS", title: "CSS3", issuer: "Infosys Springboard",
    date: "28 March 2025", kind: "Course", file: "/certificates/infosys-css3.pdf" },
  { seal: "JS", title: "JavaScript", issuer: "Infosys Springboard",
    date: "28 March 2025", kind: "Course", file: "/certificates/infosys-javascript.pdf" },
  { seal: "H5", title: "HTML5 — The Language", issuer: "Infosys Springboard",
    date: "20 March 2025", kind: "Course", file: "/certificates/infosys-html5.pdf" },
];

export const certs: Cert[] = [...internships, ...courses];
