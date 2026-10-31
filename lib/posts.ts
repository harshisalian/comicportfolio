export type Post = {
  slug: string;
  kind: string;      // small label on the post page
  stamp: string;     // sticker text on the blog card
  date: string;      // shown to readers
  sortKey: string;   // used for ordering: YYYY-MM-DD (or just YYYY if the month is unknown)
  title: string;
  excerpt: string;
  image?: string;    // certificate photo in /public/certificates
  facts: [string, string][];
  body: string[];
};

const all: Post[] = [
  {
    slug: "aetherion-26",
    kind: "Hackathon",
    stamp: "24-Hour Hack",
    date: "12–13 March 2026",
    sortKey: "2026-03-12",
    title: "Aetherion-26: a 24-hour hackathon at AAKRITI 2026",
    excerpt: "Twenty-four hours at Canara Engineering College's national-level techno-cultural fest.",
    image: "/certificates/aetherion-26.jpg",
    facts: [
      ["Event", "Aetherion-26, part of AAKRITI 2026"],
      ["Where", "Canara Engineering College, Sudhindra Nagara, Benjanapadavu, Mangaluru"],
      ["When", "12 and 13 March 2026"],
      ["Representing", "Shree Devi Institute of Technology, Kenjar"],
      ["Recognition", "Certificate of Participation"],
    ],
    body: [
      "On 12 and 13 March 2026 I took part in Aetherion-26, the 24-hour hackathon of AAKRITI 2026, a national-level techno-cultural fest organised by Canara Engineering College in Benjanapadavu, Mangaluru.",
      "I represented Shree Devi Institute of Technology, Kenjar. A hackathon runs on a fixed clock: you choose a problem, plan, build and present before time runs out, which is a very different rhythm from a semester project.",
      "I received a Certificate of Participation, signed by the Aetherion-26 coordinator, Dr. Gurudeva S. Hiremath, and the principal, Dr. Nagesh H. R.",
    ],
  },
  {
    slug: "sambhram-25",
    kind: "Recognition",
    stamp: "Web Team",
    date: "2025",
    sortKey: "2025",
    title: "Sambhram'25: building the website for a national-level fest",
    excerpt: "Recognised for my work on the Website Team of my college's national-level fest.",
    image: "/certificates/sambhram-25.jpg",
    facts: [
      ["Event", "Sambhram'25 — Symphony of Celebrations"],
      ["Host", "Shree Devi Institute of Technology"],
      ["Role", "Website Team member"],
      ["Recognition", "Certificate of Recognition"],
    ],
    body: [
      "Sambhram'25 is the national-level technical and cultural fest of Shree Devi Institute of Technology. I was a member of its Website Team.",
      "The certificate of recognition acknowledges the dedication and leadership I put into the team and its part in the successful execution of the fest. It sits alongside my work on the TechSpark registration site, which you can find in the Projects section.",
      "It is signed by the convenor, Prof. Rashma Jain, the Vice Principal, Dr. Nethravathi P S, and the Principal and Director, Dr. K E Prakash.",
    ],
  },
  {
    slug: "ieee-student-member-2025",
    kind: "Membership",
    stamp: "IEEE",
    date: "2025",
    sortKey: "2025",
    title: "Joining IEEE as a student member",
    excerpt: "A 2025 IEEE Student Membership through the Bangalore Section.",
    image: "/certificates/ieee.png",
    facts: [
      ["Organisation", "IEEE"],
      ["Membership", "Student Member, Bangalore Section"],
      ["Membership year", "2025 (valid through 31 December 2025)"],
    ],
    body: [
      "In 2025 I became an IEEE Student Member through the Bangalore Section.",
      "IEEE membership opens the door to a worldwide professional network, technical publications, activities run by the local section and student branch, and career resources such as online learning and job listings.",
    ],
  },
  {
    slug: "code-meet-2024",
    kind: "Hackathon",
    stamp: "Code Meet",
    date: "20 October 2024",
    sortKey: "2024-10-20",
    title: "Code Meet 2024: a 24-hour hackathon at Srinivas University",
    excerpt: "A 24-hour hackathon in Mukka, sponsored by IBM and run with the Webflow Community.",
    image: "/certificates/code-meet-2024.jpg",
    facts: [
      ["Event", "Code Meet 2024"],
      ["Where", "Srinivas University Institute of Engineering & Technology, Mukka"],
      ["When", "20 October 2024"],
      ["Sponsors", "IBM and 10Seconds"],
      ["In collaboration with", "Webflow Community"],
      ["Recognition", "Certificate of Participation"],
    ],
    body: [
      "On 20 October 2024 I took part in Code Meet 2024, a 24-hour hackathon held at Srinivas University Institute of Engineering & Technology in Mukka. It was sponsored by IBM and 10Seconds and run in collaboration with the Webflow Community.",
      "My Certificate of Participation is signed by the event coordinator, Prof. Thanmayee, the Dean, Dr. Ramakrishna N Hegde, and the Webflow mentor, Dr. Sushma Akkaraju.",
    ],
  },
];

// Newest first. Posts with the same sortKey keep the order they are listed in above.
export const posts: Post[] = [...all].sort((a, b) => b.sortKey.localeCompare(a.sortKey));
