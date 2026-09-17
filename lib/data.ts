export const profile = {
  name: "Samreen Hasan Zaidi",
  title: "Lead Frontend Developer",
  tagline: "React & TypeScript at scale — with a growing AI habit.",
  location: "Dubai, UAE",
  email: "er.samreenzaidi@gmail.com",
  phone: "+971 588 726 757",
  linkedin: "https://linkedin.com/in/samreen-zaidi",
  github: "https://github.com/buildwithsamreen",
  resumeUrl: "/resume-samreen-zaidi.pdf",
  summary:
    "I've spent 12+ years making enterprise and high-traffic eCommerce interfaces fast, accessible, and hard to break — in React, TypeScript, and Node.js, on platforms like Salesforce Commerce Cloud and Shopify. Lately that means shipping AI-powered features that actually solve problems: a visual-search chatbot, a demand-forecasting tool that reads real inventory data instead of guessing. I lead a team of 5+ engineers, and I still care whether the focus ring looks right.",
};

export const stats = [
  { label: "Years experience", value: "12+" },
  { label: "Engineers led", value: "5+" },
  { label: "Page speed gains", value: "30-40%" },
  { label: "Companies", value: "4" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "RESTful APIs", "API Integration"],
  },
  {
    category: "Databases",
    items: ["MongoDB"],
  },
  {
    category: "Platforms",
    items: ["Salesforce Commerce Cloud", "Shopify"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Jira", "Agile / Scrum", "CI/CD", "Microservices", "Performance Optimization", "Accessibility (WCAG)", "Responsive Design"],
  },
  {
    category: "AI & Automation",
    items: ["AI-Powered Features", "Chatbots", "Predictive Analytics"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  logo?: string;
  role: string;
  period: string;
  summary: string;
  projects: Project[];
};

export const experience: Experience[] = [
  {
    company: "GMG",
    logo: "/logos/gmg.svg",
    role: "Lead Frontend Developer",
    period: "May 2024 - Present",
    summary:
      "Own frontend and full-stack delivery for GMG's retail platforms — spanning performance optimization, backend integration, and AI-powered feature delivery.",
    projects: [
      {
        name: "Sun & Sand Sports & NIKE",
        description:
          "Lead end-to-end frontend development and backend API integration for the eCommerce platform, improving page load speed by 30-40% and lifting user engagement and conversion, while directing Agile delivery across a cross-functional team of 5+ developers. Also building a proof-of-concept AI chatbot integrated with backend services that enables image-based visual search on the SSS website and cuts manual product-search effort by ~40%.",
        tags: ["React", "Node.js", "Performance", "AI Chatbot", "Agile Leadership"],
      },
      {
        name: "Group Loyalty Program",
        description:
          "Develop a full-stack admin dashboard that manages brand loyalty campaigns and offers, owning UI design, implementation, and delivery end to end.",
        tags: ["React", "Node.js", "MongoDB", "Admin Dashboard"],
      },
      {
        name: "Demand Forecasting (Ordering Tool)",
        description:
          "Engineer an AI-driven demand forecasting and ordering tool that applies predictive data pipelines to optimize inventory planning and replenishment decisions.",
        tags: ["TypeScript", "Python", "MongoDB", "Predictive Analytics"],
      },
    ],
  },
  {
    company: "Dentsu",
    logo: "/logos/dentsu.svg",
    role: "Lead Frontend Developer",
    period: "Apr 2022 - Dec 2023",
    summary:
      "Led frontend development for enterprise clients, integrating backend services and owning code quality through review and release management.",
    projects: [
      {
        name: "George (ASDA)",
        description:
          "Spearheaded UI development integrated with backend services, improving application performance by 25% through targeted optimization techniques; conducted code reviews and directed CI/CD-driven release processes.",
        tags: ["Performance", "CI/CD", "Code Review"],
      },
      {
        name: "Prescription Lab (Webedia)",
        description:
          "Built a shared frontend-backend collaboration workflow and informed microservices-aligned architecture decisions, reducing scope-related delays and keeping releases on schedule.",
        tags: ["Microservices", "UI Architecture", "Collaboration"],
      },
    ],
  },
  {
    company: "Publicis Sapient",
    logo: "/logos/publicis-sapient.svg",
    role: "Senior Frontend Developer",
    period: "May 2019 - Apr 2022",
    summary:
      "Built responsive, backend-integrated applications for enterprise-scale platforms, owning frontend development from design through testing and deployment.",
    projects: [
      {
        name: "Kate Spade & COACH (Tapestry)",
        description:
          "Mentored a junior developer on the eCommerce platform, designing key interactions, integrating with backend APIs, and ensuring WCAG accessibility compliance.",
        tags: ["Mentorship", "Accessibility", "eCommerce"],
      },
      {
        name: "Lightnest & CIAM (Nestlé)",
        description:
          "Owned the project's frontend from concept through launch, handling JavaScript implementation, backend data flow, and full testing cycles.",
        tags: ["JavaScript", "Testing"],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    logo: "/logos/tcs.svg",
    role: "Frontend Developer",
    period: "Mar 2014 - May 2019",
    summary:
      "Started as a Frontend Developer building and maintaining enterprise web applications, integrating frontend with backend APIs across multiple environments.",
    projects: [
      {
        name: "Citibank Projects (Singapore, North America)",
        description:
          "Developed responsive pages from mockups and integrated frontend with Citibank's sandbox environment and backend APIs, driving production rollouts across both markets to completion.",
        tags: ["Responsive Design", "API Integration"],
      },
      {
        name: "SIP Trunking (TDC) & Field Force (Fulton Hogan)",
        description:
          "Built cross-browser compatible UIs with AngularJS and React, reducing defect counts and optimizing rendering performance across devices.",
        tags: ["AngularJS", "React", "Cross-Browser"],
      },
    ],
  },
];

export const certifications = [
  { name: "One Million Prompters", issued: "Jul 2026" },
  { name: "Generative AI Mastermind", issued: "Aug 2025" },
  { name: "Salesforce AI", issued: "Jan 2025" },
  { name: "Salesforce JavaScript Developer I", issued: "Jan 2023" },
  { name: "Salesforce Certified B2C Commerce Developer", issued: "Mar 2021" },
];

export const awards = [
  "Star of the Month Award",
  "On-the-Spot Award",
  "Best Team Award",
  "The Rising Star Award",
  "Extra Mile Award",
];

export const education = {
  school: "GBTU",
  degree: "Bachelor of Technology (B.Tech), Computer Science",
};
