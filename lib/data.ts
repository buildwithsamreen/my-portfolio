export const profile = {
  name: "Samreen Hasan Zaidi",
  title: "Lead Frontend Developer",
  tagline: "React & TypeScript Specialist — AI-Powered UI",
  location: "Dubai, UAE",
  email: "er.samreenzaidi@gmail.com",
  linkedin: "https://linkedin.com/in/samreen-zaidi",
  github: "https://github.com/buildwithsamreen",
  summary:
    "Lead Frontend Developer with 12+ years building high-traffic eCommerce and enterprise UIs in React, TypeScript, and modern JavaScript, on platforms including Salesforce Commerce Cloud and Shopify. Specializes in performance optimization, WCAG-accessible interface design, and AI-powered UI features — including a visual-search chatbot — while integrating cleanly with backend and RESTful services. Leads Agile teams of 5+ engineers from design through production release.",
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
    category: "Platforms",
    items: ["Salesforce Commerce Cloud", "Shopify"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Jira", "Agile / Scrum", "CI/CD", "Performance Optimization", "Accessibility (WCAG)", "Responsive Design"],
  },
  {
    category: "AI & Automation",
    items: ["AI-Powered Features", "Chatbots", "Predictive Analytics"],
  },
  {
    category: "Backend Integration",
    items: ["Node.js", "Python", "RESTful APIs", "MongoDB"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  projects: Project[];
};

export const experience: Experience[] = [
  {
    company: "GMG",
    role: "Lead Frontend Developer",
    period: "May 2024 - Present",
    summary:
      "Own frontend development and UI architecture for GMG's retail platforms — driving performance optimization and AI-powered feature delivery.",
    projects: [
      {
        name: "Sun & Sand Sports & NIKE",
        description:
          "Lead frontend development and UI performance optimization for the eCommerce platform, improving page load speed by 30-40% and lifting user engagement and conversion, while directing Agile delivery across a cross-functional team of 5+ developers. Also building a proof-of-concept AI chatbot UI that enables image-based visual search on the SSS website and cuts manual product-search effort by ~40%.",
        tags: ["React", "Performance", "AI Chatbot", "Agile Leadership"],
      },
      {
        name: "Group Loyalty Program",
        description:
          "Develop the React frontend for a full-stack admin dashboard that manages brand loyalty campaigns and offers, owning UI design, implementation, and delivery.",
        tags: ["React", "Admin Dashboard"],
      },
      {
        name: "Demand Forecasting (Ordering Tool)",
        description:
          "Build the TypeScript interface layer for an AI-driven demand forecasting and ordering tool, surfacing predictive inventory insights for planning and replenishment decisions.",
        tags: ["TypeScript", "Predictive Analytics"],
      },
    ],
  },
  {
    company: "Dentsu",
    role: "Lead Frontend Developer",
    period: "Apr 2022 - Dec 2023",
    summary:
      "Led frontend development for enterprise clients, owning UI architecture, performance, and release quality.",
    projects: [
      {
        name: "George (ASDA)",
        description:
          "Spearheaded UI development, improving application performance by 25% through targeted optimization techniques; conducted code reviews and directed CI/CD-driven release processes.",
        tags: ["Performance", "CI/CD", "Code Review"],
      },
      {
        name: "Prescription Lab (Webedia)",
        description:
          "Built a shared frontend collaboration workflow with backend teams and informed UI architecture decisions, reducing scope-related delays and keeping releases on schedule.",
        tags: ["UI Architecture", "Collaboration"],
      },
    ],
  },
  {
    company: "Publicis Sapient",
    role: "Senior Frontend Developer",
    period: "May 2019 - Apr 2022",
    summary:
      "Built responsive, accessible applications for enterprise-scale platforms, owning frontend development from design through testing and deployment.",
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
          "Owned the project's frontend from concept through launch, handling JavaScript implementation and full testing cycles.",
        tags: ["JavaScript", "Testing"],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
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
  { name: "Salesforce Certified B2C Commerce Developer", issued: "Mar 2021" },
  { name: "Salesforce JavaScript Developer I", issued: "Jan 2023" },
  { name: "HackerRank — JavaScript (Basic & Intermediate), React, Node, CSS, Problem Solving", issued: "2024" },
  { name: "Toggl Hire — MongoDB & React", issued: "Jul 2024" },
  { name: "W3Schools Certified HTML Developer", issued: "Jul 2023" },
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
