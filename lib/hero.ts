import { projects, certs } from "@/lib/data";

// Put your files in the /public folder with exactly these names.
export const avatarSrc = "/avatar.png";
export const cvHref = "/Harshitha_Salian_Resume.pdf";

// The speech bubble cycles through these lines. Edit freely.
export const heroLines = [
  "Eligible for immediate joining. Currently building full-stack tools and looking for a team that wants both the engineer and the artist.",
  "Python, React and Node for the product. Pencils and pixels for the look.",
  "Need a developer who can also design? Hello.",
];

export const facts = [
  { value: "2", label: "Internships" },
  { value: String(projects.length), label: "Projects" },
  { value: String(certs.length), label: "Certifications" },
];
