export type Project = {
  title: string; text: string; tags: string[]; href?: string; wide?: boolean;
};

// Tech stacks for Financify, AI Ticket Intelligence, WorkNest and Nail Health Detector were read from the repos
// (package.json, source files). Expense Tracker, the KIOCL tool and the fest sites are
// unchanged because their code could not be read.
export const projects: Project[] = [
  { title: "Financify", wide: true, href: "https://github.com/harshisalian/Financify-Workforce-Financial-Tracking-Platform",
    text: "A workforce and finance tracking platform for hotel, catering and event-staffing businesses. Admins create events and assign staff, team leaders respond and log hours, and an automated wage calculator applies overtime rules. Includes real-time chat, role-based dashboards with charts, and PDF report generation.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL", "Recharts", "jsPDF"] },
  { title: "AI Ticket Intelligence Platform", href: "https://github.com/harshisalian/AI-Powered-Customer-Support-Analytics-Ticket-Intelligence-Platform",
    text: "A machine-learning backend that classifies customer support tickets by category and priority. TF-IDF features feed Naive Bayes and Logistic Regression models, compared during training on a generated 1,200-ticket dataset and served through a FastAPI REST API. New tickets are auto-labelled, stored in MySQL and summarised by an analytics endpoint. Dockerised, with a pytest suite.",
    tags: ["Python", "FastAPI", "scikit-learn", "Pandas", "MySQL", "SQLAlchemy", "Docker", "Pytest"] },
  { title: "Expense Tracker", href: "https://github.com/harshisalian/dailyspendbyharshie",
    text: "Full-stack app for logging, categorizing and viewing expenses, with a Flask backend and a MySQL schema built for clean CRUD operations.",
    tags: ["Python", "Flask", "MySQL"] },
  { title: "Nail Health Detector", href: "https://github.com/harshisalian/naildiseasededtection",
    text: "An AI-powered web app that analyses a nail photo captured in the browser, returns structured health insights with Gemini Vision, and suggests nearby doctors. Netlify serverless functions proxy the Gemini and TomTom calls.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Gemini 2.5 Flash", "Netlify Functions"] },
  { title: "WorkNest", href: "https://github.com/harshisalian/WorkNest",
    text: "A role-based task manager for small teams. Admins create and assign tasks, manage users and follow progress on chart dashboards, while members work through their own tasks. Includes JWT authentication, file uploads and Excel report export.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"] },
  { title: "Surveillance Monitoring Tool",
    text: "Built during the KIOCL internship: an automated tool using Python and OpenCV that captures and logs CCTV snapshots into Excel for record-keeping and analysis.",
    tags: ["Python", "OpenCV", "Excel"] },
  { title: "TechSpark & Sambram",
    text: "Web team member for TechSpark, the college's intra-college tech fest, building the candidate registration site. Also contributed to Sambram, the college's national-level fest site.",
    tags: ["Team Project", "Web"] },
];
