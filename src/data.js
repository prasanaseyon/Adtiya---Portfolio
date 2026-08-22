/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   Source: Aditya_Patil_Resume.pdf
   Nothing below is invented — every field is traceable to the resume.
   Fields the resume does not cover are left as empty strings.
   ================================================================== */

export const PROFILE = {
  first: "Aditya",
  last: "Patil",
  fullName: "Aditya Patil",
  tagline: "Founder, Xponentia | Number Theory & Cryptography Researcher",
  location: "India",
  email: "",
  phone: "",
  bio: [
    "I'm a Grade 11 student at Global Indian International School, Whitefield, Bangalore, where I study Physics, Chemistry, Mathematics, English and Computer Science as a Global Citizen Scholar on a full-ride scholarship. My work sits in pure mathematics — number theory, Diophantine analysis, and cryptography — and in the systems that let those ideas reach people who would not otherwise see them.",
    "My research has been mentored by Prof. Ila Varma at the University of Toronto and Prof. Ramesh Shreekantan at the Indian Statistical Institute, Bangalore. I've proved the non-existence of integer solutions to an unsolved cubic–quartic Diophantine equation, proposed a framework for a post-quantum cryptosystem, and introduced a Norm Interval Theorem in ongoing work on the additive properties of pure Hurwitz quaternions. I spent six weeks at PROMYS India (IISc Bangalore) as a Mehta Fellow and returned as an alumnus to lecture.",
    "Outside research, I founded Xponentia to open advanced STEM research to students who lack access to it, and I lead teams building practical hardware — SOLAR-SMART for household solar recovery and BreathNext for indoor air quality. The thread through all of it is the same: rigorous work, and then the effort to make that work reach further than my own desk."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/aditya-patil-giis",
    github: "",
    scholar: "",
    doi: "https://doi.org/10.51244/IJRSI.2025.120800409",
    twitter: ""
  },
  cv: "/cv.pdf",
  photo: "",
  aboutPhoto: ""
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "My Venture", to: "/volunteering" },
  {
    label: "Experience",
    children: [
      { label: "Research", to: "/work?tab=research" },
      { label: "Fellowships & Programmes", to: "/work?tab=fellowships" },
      { label: "Applied & Industry", to: "/work?tab=applied" },
      { label: "Projects", to: "/work?tab=projects" },
      { label: "Publications", to: "/publications" }
    ]
  },
  { label: "Achievements", to: "/awards" },

];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Global Indian International School, Whitefield",
    location: "Bangalore, Karnataka, India",
    dates: "2025 – 2027",
    detail: "Grade 11 (CBSE) — 92/100",
    bullets: [
      "Subjects: Physics, Chemistry, Mathematics, English, Computer Science",
      "Global Citizen Scholar (full-ride scholarship)"
    ]
  },
  {
    school: "Podar International School, Chalisgaon",
    location: "Maharashtra, India",
    dates: "2013 – 2025",
    detail: "Grade 10 (CBSE) — 96/100 · Grade 9 (CBSE) — 95/100",
    bullets: []
  }
];

/* ---- Experience tabs ----
   `id` is what goes in the URL: /work?tab=research
   Order here is the order the tabs render in. */

export const EXPERIENCE_TABS = [
  {
    id: "research",
    label: "Research",
    note: "Mentored & independent",
    lead: "Number theory and cryptography, supervised at the University of Toronto and the Indian Statistical Institute."
  },
  {
    id: "fellowships",
    label: "Fellowships & Programmes",
    note: "Selective admission",
    lead: "Funded places on programmes that take a small fraction of applicants."
  },
  {
    id: "applied",
    label: "Applied & Industry",
    note: "Outside pure maths",
    lead: "Applied science with the New York Academy of Sciences, and quantitative finance in industry."
  },
  {
    id: "projects",
    label: "Projects",
    note: "Built to be used",
    lead: "Hardware, software and models that left the notebook."
  },

];

/* ---- Research & professional experience ---- */

export const EXPERIENCE = [
  {
    slug: "utoronto-number-theory-cryptography",
    category: "research",
    role: "Research Student (Mentored Research)",
    org: "University of Toronto, Department of Mathematics",
    logo: "/logos/utoronto.png",
    location: "Online",
    dates: "Jun 2025 – Jan 2026",
    meta: "Jun 2025 – Jan 2026 · Online ·",
    badge: "Mentored Research",
    mentor: "Prof. Ila Varma",
    desc:
      "Independent research in number theory and cryptography, culminating in a published paper, a national research medal, and an international conference selection.",
    bullets: [
      "Proved the non-existence of integer solutions for an unsolved cubic–quartic Diophantine equation and its infinite families",
      "Developed signing and verification algorithms of 99% security and proposed a framework for a new post-quantum cryptosystem",
      "Presented findings at the IRIS National Fair (Mathematics category) and received a Silver Medal",
      "Published in the International Journal of Research and Science Innovation",
      "Presented at the International Mathematics and Statistics Student Research Symposium; selected for the International Conference on Number Theory and Diophantine Analysis, Mauritius"
    ],
    tags: ["Number Theory", "Diophantine Equations", "Post-Quantum Cryptography"],
    link: "https://doi.org/10.51244/IJRSI.2025.120800409",
    paper:
      "https://drive.google.com/file/d/1XU1lF-DiRQ2ah5EzxKxxu0rDnz8KOokQ/view?usp=sharing",
    featured: true
  },
  {
    slug: "isi-hurwitz-quaternions",
    category: "research",
    role: "Research Student (Mentored Research)",
    org: "Indian Statistical Institute, Bangalore",
    logo: "/logos/isi.png",
    location: "Bangalore, India · Hybrid",
    dates: "Oct 2025 – Present",
    meta: "Oct 2025 – Present · Bangalore, India · Hybrid ·",
    badge: "Ongoing",
    mentor: "Prof. Ramesh Shreekantan",
    desc:
      "Studying an additive question about the Hurwitz quaternions: which Hurwitz integers are a sum of two Hurwitz primes — elements of the maximal order whose reduced norm is a rational prime.",
    bullets: [
      "Introduced a Norm Interval Theorem and formulated conjectures contributing to the ternary Goldbach conjecture",
      "Presented at the International Mathematics and Statistics Student Research Symposium",
      "Selected for the S.T. Yau High School Science Award, Top 46 Asia Region (Round 1, Mathematics category)"
    ],
    tags: ["Quaternions", "Additive Number Theory", "Goldbach Conjecture"],
    link: "",
    paper: "",
    featured: true
  },
  {
    slug: "promys-india",
    category: "fellowships",
    role: "Mehta Fellow",
    org: "PROMYS India, Indian Institute of Science, Bangalore",
    logo: "/logos/promys.png",
    location: "Bangalore, India · On-campus",
    dates: "May 2025 – Jun 2025",
    meta: "May 2025 – Jun 2025 · 6 weeks · On-campus ·",
    badge: "Fellowship",
    mentor: "",
    desc:
      "Six-week intensive number theory programme run by the Department of Mathematics, IISc Bangalore.",
    bullets: [
      "Took the most rigorous coursework offered, including Number Theory and Galois Theory",
      "Awarded the Mehta Fellowship",
      "Returned as an alumnus to lecture on \"Additive Properties of Hurwitz Quaternions\""
    ],
    tags: ["Number Theory", "Galois Theory", "Fellowship"],
    link: "",
    paper: "",
    featured: false
  },
  {
    slug: "yale-young-global-scholars",
    category: "fellowships",
    role: "Scholar, Innovation in Science & Technology (Cohort 3)",
    org: "Yale Young Global Scholars, Yale University",
    logo: "/logos/yale.png",
    location: "New Haven, USA · On-campus",
    dates: "Jul 2026",
    meta: "Jul 2026 · 2 weeks · On-campus ·",
    badge: "Full-Ride Scholar",
    mentor: "",
    desc:
      "Two-week residential programme at Yale University on the Innovation, Science and Technology track.",
    bullets: [
      "Took seminars and classes in mathematics and medical sciences",
      "Received a full-ride scholarship to attend the programme",
      "Completed a capstone project on the impact of AI on cognitive ability"
    ],
    tags: ["Science & Technology", "Capstone Research"],
    link: "",
    paper: "",
    featured: false
  },
  {
    slug: "nyjas-junior-academy",
    category: "applied",
    role: "Researcher, The Junior Academy",
    org: "New York Academy of Sciences",
    logo: "/logos/nyas.png",
    location: "Online",
    dates: "Aug 2025 – Present",
    meta: "Aug 2025 – Present · Online ·",
    badge: "Challenge Team",
    mentor: "",
    desc:
      "Energy Infrastructure Challenge team researching how dust accumulation and battery degradation affect solar efficiency.",
    bullets: [
      "Developed SOLAR-SMART, a compact low-cost retrofit device using the SER-1 engine to automatically route energy, protect battery health with smart thresholds, and issue performance-drop alerts",
      "Design recovers 20–30% more usable solar energy",
      "Earned the Projects of Distinction award, ranking in the top 11 out of 400 competing teams"
    ],
    tags: ["Renewable Energy", "Hardware", "Applied Research"],
    link:
      "https://drive.google.com/file/d/1o4sifzjBZ28RP_fcQ1tIHJ166_ywMHGT/view?usp=sharing",
    paper: "",
    featured: false
  },
  {
    slug: "motilal-oswal-internship",
    category: "applied",
    role: "Investment Analyst Intern",
    org: "Motilal Oswal Financial Services",
    logo: "/logos/motilal-oswal.png",
    location: "Chalisgaon, Maharashtra, India · Residential",
    dates: "Apr 2024 – May 2024",
    meta: "Apr 2024 – May 2024 · 6 weeks · Residential ·",
    badge: "Internship",
    mentor: "",
    desc:
      "The only high-school student to intern with the team; received a letter of recommendation.",
    bullets: [
      "Built a mathematical valuation model for private equity investments that the team officially adopted for live deal screening",
      "Developed 3-way financial statement, leveraged buyout (LBO), and waterfall distribution models"
    ],
    tags: ["Quantitative Finance", "Valuation Modelling"],
    link: "",
    paper: "",
    featured: false
  }
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    slug: "solar-smart",
    category: "projects",
    name: "SOLAR-SMART",
    org: "New York Academy of Sciences · Team of 6",
    meta: "Aug 2023 – Present",
    dates: "Aug 2023 – Present",
    badge: "Top 11 internationally",
    desc:
      "A low-cost smart add-on that automatically manages a home's solar power, protects the battery, and warns the owner when panels get dusty. Recovers 20–30% more usable solar energy. Facilitated the transition to renewable energy for 30+ households through community awareness, installation support, and subsidy navigation. Received Projects of Distinction at the NYJAS Energy Infrastructure Challenge (Top 11).",
    tags: ["Renewable Energy", "Embedded Hardware", "Community Impact"],
    link:
      "https://drive.google.com/file/d/1o4sifzjBZ28RP_fcQ1tIHJ166_ywMHGT/view?usp=sharing",
    featured: true
  },
  {
    slug: "breathnext",
    category: "projects",
    name: "BreathNext",
    org: "GIIS Whitefield · Team Lead, 4-member team",
    meta: "Oct 2025 – Present",
    dates: "Oct 2025 – Present",
    badge: "In research phase",
    desc:
      "A portable passive bio-panel to mitigate wall dampness and indoor pollutants, paired with an AI-powered respiratory care app. The synthetic biology device detects air pollutants and eliminates them. Currently in the data collection and research phase in collaboration with ASHA community members. Won the GIIS Young Scientist Challenge and was selected for the S.T. Yau High School Science Award, Asia Round 1 (Biology category).",
    tags: ["Synthetic Biology", "AI", "Public Health"],
    link:
      "https://drive.google.com/drive/folders/1uSoANOW0_xid1Qqz0Nf0ba_zKPA2rYy",
    featured: true
  },
  {
    slug: "pe-valuation-model",
    category: "projects",
    name: "Private Equity Valuation Model",
    org: "Motilal Oswal Financial Services",
    meta: "Apr 2024 – May 2024",
    dates: "Apr 2024 – May 2024",
    badge: "",
    desc:
      "A mathematical valuation model for private equity investments, officially adopted by the team for live deal screening, alongside 3-way financial statement, leveraged buyout (LBO), and waterfall distribution models.",
    tags: ["Financial Modelling", "LBO", "Quantitative Analysis"],
    link: "",
    featured: false
  }
];

/* ---- Publications, papers & presentations ---- */

export const ARTICLES = [
  {
    title:
      "Proving Non-Existent Solutions in an Unsolved Cubic-Quartic Diophantine Equation & its Infinite Families, and Proposing a Framework for a Novel Cryptosystem",
    outlet:
      "International Journal of Research and Science Innovation, 2025 · Peer-reviewed publication",
    link: "https://doi.org/10.51244/IJRSI.2025.120800409"
  },
  {
    title:
      "Proving Non-Existent Solutions in an Unsolved Cubic-Quartic Diophantine Equation & its Infinite Families, and Proposing a Framework for a Novel Cryptosystem",
    outlet:
      "International Mathematics and Statistics Student Research Symposium (IMSSRS) · Live presentation",
    link:
      "https://drive.google.com/file/d/1XU1lF-DiRQ2ah5EzxKxxu0rDnz8KOokQ/view?usp=sharing"
  },
  {
    title:
      "Beyond the Reals: Developing a Robust Arithmetic Framework for Quaternions using Fundamental Operators",
    outlet:
      "International Mathematics and Statistics Student Research Symposium (IMSSRS) · Asynchronous presentation",
    link: ""
  },
  {
    title: "Additive Properties of Pure Hurwitz Quaternions",
    outlet:
      "Indian Statistical Institute, Bangalore · Ongoing research, presented as a PROMYS India alumni lecture",
    link: ""
  },
  {
    title:
      "Cubic-Quartic Diophantine Equations and Post-Quantum Cryptosystems",
    outlet:
      "International Conference on Number Theory and Diophantine Analysis, Mauritius · Selected for presentation",
    link: ""
  }
];

/* ---- Leadership, community service & school activities ----
   `category: null` means the entry still renders on /volunteering but is
   not repeated in the Experience tabs (BreathNext and SOLAR-SMART live
   under Projects). */

export const VOLUNTEER = {
  stats: [
    { value: "1,000+", label: "Students Impacted" },
    { value: "20+", label: "Schools Reached" },
    { value: "7K", label: "Community Members" }
  ],
  orgs: [
    {
      slug: "xponentia",
      category: "leadership",
      spotlight: true,
      name: "Xponentia",
      role: "Founder",
      dates: "Dec 2024 – Present",
      badge: "Flagship initiative",
      tags: ["Non-profit", "STEM Access", "Mentorship"],
      desc:
        "A non-profit initiative democratising access to high-level STEM research and mentorship for high school students. Led educational outreach impacting 1,000+ students across 20+ schools by providing the foundational resources needed for independent scientific inquiry, and manages a 7,000-member Telegram community that began as an Olympiad help channel and now covers both mathematics and wider STEM.",
      link: ""
    },
    {
      slug: "alpha-pi-rates",
      category: "leadership",
      name: "Alpha Pi-rates Math Club",
      role: "Founder & President",
      dates: "Jan 2023 – Present",
      badge: "",
      tags: ["Teaching", "Competition Maths", "Community"],
      desc:
        "Founded the first mathematics club at Podar International School, Chalisgaon, building a community of 22 students and teachers. Guides peers in proof techniques and problem solving, and takes the club to competitions including the Stanford Math Tournament and Purple Comet! Math Meet.",
      link: ""
    },
    {
      slug: "seva-pledge-a-smile",
      category: "leadership",
      name: "SEVA, Pledge a Smile Foundation",
      role: "Project Lead / Fundraiser / Social Media Manager",
      dates: "Dec 2023 – Present",
      badge: "",
      tags: ["Fundraising", "Digital Campaigns", "Community Service"],
      desc:
        "Promoted from core volunteer to Social Media & Fundraising Intern. Raised $2,500 USD through targeted digital marketing campaigns and ran 3 on-the-ground food drives for vulnerable communities, alongside posters, stickers, reels, ads and fundraising campaigns on social media.",
      link: ""
    },
    
  ]
};

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥈",
    title: "Silver Medal, IRIS National Fair",
    meta: "Mathematics Category",
    detail:
      "Awarded for independent research in pure mathematics and cryptography. Ranked 2nd out of 15,000 submissions.",
    link: "",
    featured: true
  },
  {
    icon: "🎓",
    title: "Mehta Fellow, PROMYS India (IISc Bangalore)",
    meta: "2025",
    detail:
      "Fully funded fellowship to an elite number theory programme with an acceptance rate under 1%.",
    link: "",
    featured: true
  },
  {
    icon: "🏅",
    title: "S.T. Yau High School Science Award",
    meta: "Round 1 Qualifier",
    detail:
      "Qualified Round 1 in both the Mathematics and Biology categories; Top 46 Asia Region in Mathematics.",
    link: "",
    featured: true
  },
  {
    icon: "📐",
    title: "Indian National Mathematical Olympiad (INMO) Qualifier",
    meta: "INMO",
    detail:
      "Placed in the top 900 out of 100,000+ competitors nationwide after clearing IOQM and RMO.",
    link: "",
    featured: true
  },
  {
    icon: "🌍",
    title: "Top 11 Internationally, New York Junior Academy of Sciences",
    meta: "Energy Infrastructure Challenge",
    detail:
      "Recognised out of 400 competing teams for co-developing the SOLAR-SMART energy device.",
    link: "",
    featured: true
  },
  {
    icon: "🎖️",
    title: "GIIS Global Citizen Scholarship",
    meta: "2025",
    detail:
      "Highly selective full-ride scholarship to Global Indian International School — 10 selected out of 11,000.",
    link: "",
    featured: true
  },
  {
    icon: "🎤",
    title: "Dual Presenter, IMSSRS Symposium",
    meta: "International",
    detail:
      "Selected to present independent pure mathematics research globally — a live presentation on the cubic-quartic Diophantine equation and cryptosystem framework, and an asynchronous presentation on quaternion arithmetic.",
    link: "",
    featured: true
  },
  {
    icon: "🎓",
    title: "Full-Ride Scholar, Yale Young Global Scholars",
    meta: "2026",
    detail:
      "100% financial aid to attend the competitive Innovations in Science & Technology (IST) session.",
    link: "",
    featured: true
  },
  {
    icon: "🥇",
    title: "First Place India, Purple Comet! Math Meet",
    meta: "Small High School Category",
    detail: "Scored 30/30, representing GIIS Whitefield.",
    link: "",
    featured: true
  },
  {
    icon: "🏆",
    title: "Stanford Math Tournament — Honourable Mention",
    meta: "Twice",
    detail: "Honourable mention in Number Theory and in Calculus.",
    link: "",
    featured: true
  },
  {
    icon: "🔬",
    title: "Winner, GIIS Young Scientist Challenge",
    meta: "2025",
    detail:
      "Awarded for developing BreathNext, an affordable AI respiratory health platform.",
    link: "",
    featured: false
  },
  {
    icon: "🧪",
    title: "All India Rank 16, TALLENTEX 2024",
    meta: "2024",
    detail:
      "Scored 300/320 in a national STEM talent search, earning a 90% maximum scholarship.",
    link: "",
    featured: false
  },
  {
    icon: "📊",
    title: "All India Rank 24, PW-NSAT (Physics Wallah)",
    meta: "National",
    detail:
      "Ranked in the top 0.01% nationally, securing a 90% scholarship and cash reward.",
    link: "",
    featured: false
  },
  {
    icon: "📘",
    title: "100% Tuition Scholarship, FIITJEE Talent Reward Exam",
    meta: "FTRE",
    detail:
      "Scored 220/275, earning a complete tuition waiver on analytical STEM percentile ranking.",
    link: "",
    featured: false
  },
  {
    icon: "🏫",
    title: "Selected, Jawahar Navodaya Vidyalaya Selection Test",
    meta: "JNVST",
    detail:
      "Selected for a fully funded 7-year government education scholarship via the all-India test.",
    link: "",
    featured: false
  },
  {
    icon: "🌐",
    title: "International Rank 12, SOF International Mathematics Olympiad",
    meta: "2023 – 2024",
    detail: "International rank 12 in 2024 and 150 in 2023.",
    link: "",
    featured: false
  },
  {
    icon: "🏁",
    title: "National Finalist, Silver Zone Olympiads",
    meta: "Multiple Subjects",
    detail:
      "Level 3 qualifier (national finals) for Mathematics (IOM) and English (iOEL); Level 2 qualifier for Science (IOS).",
    link: "",
    featured: false
  },
  {
    icon: "🌱",
    title: "Top 1% Nationally, TERI Green Olympiad",
    meta: "2023 & 2024",
    detail:
      "Two-time recipient of the Certificate of Excellence for environmental proficiency.",
    link: "",
    featured: false
  },
  {
    icon: "📝",
    title: "CBSE National Topper — English",
    meta: "Grade 10",
    detail: "Scored a perfect 100/100 in the Grade 10 national board examinations.",
    link: "",
    featured: false
  },
  {
    icon: "🏵️",
    title: "Academic Excellence Award",
    meta: "Grade 10",
    detail: "Topped the Grade 10 board examinations with a 96.2% overall score.",
    link: "",
    featured: false
  },
  {
    icon: "➗",
    title: "Math Maestro Award",
    meta: "School Award",
    detail:
      "Awarded for consistent, top-tier excellence in advanced mathematics and complex problem solving.",
    link: "",
    featured: false
  },
  {
    icon: "🗣️",
    title: "Best English Communicator Award",
    meta: "School Award",
    detail:
      "Recognised for high-level speaking and writing proficiency across the student body.",
    link: "",
    featured: false
  }
];

/* ---- Skills ----

   KEY_SKILLS is the spec band on the home page: three domains, three
   or four terms each. It reads as columns, so keep the groups to three
   — a fourth column squeezes every term onto two lines. SKILLS below
   is the full grouped list, kept if a Skills page ever returns. */

export const KEY_SKILLS = [
  {
    group: "Mathematics",
    items: ["Number Theory", "Diophantine Equations", "Galois Theory", "Quaternion Arithmetic"]
  },
  {
    group: "Cryptography",
    items: ["Post-Quantum Cryptography", "Cryptosystem Design", "Signing & Verification"]
  },
  {
    group: "Applied",
    items: ["Valuation Modelling", "Academic Writing", "Team Leadership"]
  }
];

export const SKILLS = [
  {
    group: "Mathematics",
    items: [
      "Number Theory",
      "Diophantine Equations",
      "Galois Theory",
      "Quaternion Arithmetic",
      "Additive Number Theory",
      "Proof Techniques",
      "Olympiad Problem Solving"
    ]
  },
  {
    group: "Cryptography & Algorithms",
    items: [
      "Post-Quantum Cryptography",
      "Signing & Verification Algorithms",
      "Cryptosystem Design"
    ]
  },
  {
    group: "Research",
    items: [
      "Independent Research",
      "Academic Writing & Publication",
      "Conjecture Formulation",
      "Conference Presentation",
      "Field Data Collection"
    ]
  },
  {
    group: "Quantitative Finance",
    items: [
      "Valuation Modelling",
      "3-Statement Modelling",
      "Leveraged Buyout (LBO) Modelling",
      "Waterfall Distribution Modelling",
      "Deal Screening"
    ]
  },
  {
    group: "Leadership & Outreach",
    items: [
      "Team Leadership",
      "Mentorship & Teaching",
      "Community Building",
      "Fundraising",
      "Social Media & Digital Campaigns"
    ]
  },
  {
    group: "Academic Interests",
    items: [
      "Pure Mathematics",
      "Cryptography",
      "Applied Sciences & Sustainability",
      "AI in Science"
    ]
  }
];

/* ---- Footer ---- */

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/work?tab=research" },
  { label: "Projects", to: "/work?tab=projects" },
  { label: "Publications", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership", to: "/work?tab=leadership" },
  { label: "About", to: "/about" }
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "Published Paper (DOI)", href: PROFILE.socials.doi }
];

/* Short credibility strip in the footer bar. Keep to 3 — it wraps badly beyond that. */
export const FOOTER_BADGES = [
  "IRIS National Silver",
  "Mehta Fellow, PROMYS",
  "INMO Qualifier"
];
