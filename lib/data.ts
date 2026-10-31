export const site = {
  name: "Harshitha Salian",
  email: "harshisalian3003@gmail.com",
  phone: "+91 96114 95693",
  phoneHref: "tel:+919611495693",
  location: "Udupi, Karnataka, India",
  github: { label: "github.com/harshisalian", href: "https://github.com/harshisalian" },
  linkedin: { label: "in/harshiee-salian", href: "https://www.linkedin.com/in/harshiee-salian" },
  instagram: { label: "@harshiee.salian", href: "https://instagram.com/harshiee.salian" },
};

// Update the CGPA here so it matches your resume exactly.
export const about = [
  { kanji: "壱", beat: "Panel 1 — Foundation", title: "Education",
    text: "B.E. in Computer Science & Engineering, Shree Devi Institute of Technology, Udupi. Class of 2026, 8.54 CGPA." },
  { kanji: "弐", beat: "Panel 2 — Training Arc", title: "Experience",
    text: "MERN Stack Intern at Codelab Systems, building full-stack features and REST APIs. Before that, an IT infrastructure internship at KIOCL Limited." },
  { kanji: "参", beat: "Panel 3 — Powers", title: "What I Build",
    text: "Full-stack apps with Python, FastAPI, Flask, React and Next.js. Comfortable across REST APIs, SQL and NoSQL databases, and debugging under pressure." },
  { kanji: "四", beat: "Panel 4 — Side Quest", title: "Beyond Code",
    text: "Graphic designer and artist on the side — event branding, poster series and brand collateral. Looking for roles that don't make me choose." },
];

export const stack = [
  "Python", "JavaScript", "C++", "React.js", "Next.js", "Node.js", "Express.js",
  "FastAPI", "Flask", "MySQL", "MongoDB", "Supabase", "Docker", "Git & GitHub", "AWS",
];

export type Project = {
  title: string; text: string; tags: string[]; href?: string; wide?: boolean;
};

export const projects: Project[] = [
  { title: "Financify", wide: true, href: "https://github.com/harshisalian/financify",
    text: "A workforce financial tracking platform with scalable backend services for real-time uptime tracking, incident detection and asynchronous health checks. Redis-backed async task processing keeps it responsive under high throughput.",
    tags: ["Next.js", "React.js", "MongoDB", "Express.js", "FastAPI", "Redis"] },
  { title: "Expense Tracker", href: "https://github.com/harshisalian/dailyspend",
    text: "Full-stack app for logging, categorizing and viewing expenses, with a Flask backend and a MySQL schema built for clean CRUD operations.",
    tags: ["Python", "Flask", "MySQL"] },
  { title: "Nail Disease Detection", href: "https://github.com/harshisalian/naildiseasededtection",
    text: "A computer-vision project that classifies nail conditions from images, exploring practical applications of ML beyond typical web projects.",
    tags: ["Python", "OpenCV"] },
  { title: "WorkNest", href: "https://github.com/harshisalian/WorkNest",
    text: "A workspace-oriented web application focused on organizing tasks and workflows for small teams.",
    tags: ["JavaScript"] },
  { title: "Surveillance Monitoring Tool",
    text: "Built during the KIOCL internship: an automated tool using Python and OpenCV that captures and logs CCTV snapshots into Excel for record-keeping and analysis.",
    tags: ["Python", "OpenCV", "Excel"] },
  { title: "TechSpark & Sambram",
    text: "Web team member for TechSpark, the college's intra-college tech fest, building the candidate registration site. Also contributed to Sambram, the college's national-level fest site.",
    tags: ["Team Project", "Web"] },
];

export const certs = [
  { seal: "AWS", title: "Cloud Practitioner Essentials", issuer: "AWS Skill Builder", date: "June 2026" },
  { seal: "DA", title: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", date: "June 2026" },
  { seal: "FE", title: "Front-End Web Development Fundamentals", issuer: "Infosys Springboard", date: "March 2025" },
];

export const posts = [
  { slug: "blog-01", stamp: "Ship It", date: "June 2026", title: "What I learned shipping Financify",
    excerpt: "Notes on building the tracking platform, in her own words." },
  { slug: "blog-02", stamp: "Draw + Code", date: "May 2026", title: "Designing while debugging",
    excerpt: "Living with two disciplines at once." },
  { slug: "blog-03", stamp: "Cloud Notes", date: "June 2026", title: "Notes from the AWS exam",
    excerpt: "Studying for the Cloud Practitioner certification." },
];
