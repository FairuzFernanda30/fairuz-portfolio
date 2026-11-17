export const heroData = {
  name: 'FAIRUZ FERNANDA HERMAWAN',
  headline: 'Python-Focused AI Professional',
  description:
    'Building practical AI solutions through machine learning, data processing, and reliable software systems.',
};

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#capabilities' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
];

export const aboutData = {
  summary:
    'I am a Python-focused AI professional dedicated to building practical AI solutions through machine learning, structured data processing, and reliable software engineering.',
  approach:
    'With a foundation in Telecommunications Engineering (Cum Laude) and ongoing graduate study in Information Systems at Telkom University, my work bridges applied machine learning, data analytics, and dependable web operations.',
  focusAreas: [
    {
      title: 'Applied AI & Machine Learning',
      description:
        'Developing machine learning, deep learning, NLP, and computer vision workflows tailored to real-world problem statements.',
    },
    {
      title: 'Data Processing & Analytics',
      description:
        'Transforming raw datasets into structured insights using Python, SQL, Pandas, Tableau, Power BI, and Advanced Excel.',
    },
    {
      title: 'Reliable Software Systems',
      description:
        'Writing maintainable code backed by version control, containerization, and software testing practices.',
    },
  ],
};

export const capabilitiesData = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Designing and training predictive models and computer vision pipelines using Scikit-learn, deep learning, and NLP techniques.',
    highlights: ['Predictive Modeling', 'Deep Learning & CV', 'NLP Workflows'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description:
      'Cleaning, structuring, and visualizing complex datasets to surface clear, actionable insights across business and academic domains.',
    highlights: ['Pandas & SQL', 'Tableau & Power BI', 'Advanced Excel'],
  },
  {
    id: 'python-dev',
    title: 'Python Development',
    description:
      'Building modular Python applications, automated document extractors, web scrapers, and interactive Streamlit tools.',
    highlights: ['Data Automation', 'Web Scraping', 'Streamlit Apps'],
  },
  {
    id: 'software-eng',
    title: 'Software Engineering',
    description:
      'Ensuring system reliability through functional testing, version control, containerized environments, and structured technical QA.',
    highlights: ['Git & Docker', 'Software Testing', 'System Validation'],
  },
];

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages for AI engineering, data querying, and systems development.',
    skills: ['Python', 'SQL', 'C', 'C++', 'Java'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Modeling paradigms for predictive analytics, language, and visual tasks.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    id: 'data-bi',
    title: 'Data & Analytics',
    description: 'Tools for data manipulation, reporting, and business intelligence.',
    skills: ['Pandas', 'Tableau', 'Power BI', 'Advanced Excel'],
  },
  {
    id: 'engineering',
    title: 'Engineering & Tools',
    description: 'Workflows for version control, reproducible environments, and quality assurance.',
    skills: ['Git', 'Docker', 'Software Testing'],
  },
];

export const featuredProjects = [
  {
    id: 'customer-churn-prediction',
    featured: true,
    category: 'Machine Learning / Predictive Analytics',
    title: 'Customer Churn Prediction',
    description:
      'An end-to-end customer churn prediction project involving exploratory data analysis, Random Forest modeling, class imbalance experimentation, and a Streamlit application.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    repoUrl: 'https://github.com/FairuzFernanda30/churn-app',
  },
  {
    id: 'pdf-to-excel-extractor',
    featured: false,
    category: 'Data Processing / Automation',
    title: 'PDF to Excel Extractor',
    description:
      'A Python tool that extracts invoice information, including invoice number, date, customer name, and total amount, from PDF files and exports the results to Excel.',
    stack: ['Python', 'pdfplumber', 'Pandas', 'OpenPyXL'],
    repoUrl: 'https://github.com/FairuzFernanda30/pdf-to-excel-extractor',
  },
  {
    id: 'web-scraper-books-to-scrape',
    featured: false,
    category: 'Data Collection / Web Scraping',
    title: 'Web Scraper – Books to Scrape',
    description:
      'A Python web scraper that collects book titles, prices, stock status, and ratings from multiple pages, then cleans and exports the data to CSV and Excel.',
    stack: ['Python', 'Requests', 'BeautifulSoup4', 'Pandas', 'OpenPyXL'],
    repoUrl: 'https://github.com/FairuzFernanda30/Web-Scraper',
  },
  {
    id: 'excel-auto-cleaner-formatter',
    featured: false,
    category: 'Data Analytics / Automation',
    title: 'Excel Auto-Cleaner & Formatter',
    description:
      'A Python automation tool for cleaning Excel datasets by handling missing values, removing duplicates, standardizing text, normalizing date formats, and exporting cleaned data.',
    stack: ['Python', 'Pandas', 'OpenPyXL'],
    repoUrl: 'https://github.com/FairuzFernanda30/Excel-Auto-Cleaner-Formatter',
  },
];

export const experienceItems = [
  {
    id: 'cybers-globals',
    role: 'Quality Control / System Analyst – Web Operations',
    organization: 'PT. Cybers Globals Indonesia',
    period: 'December 2023 – June 2024',
    highlights: [
      'Monitored web application availability and functionality.',
      'Performed functional checks across desktop and mobile environments.',
      'Documented technical issues and validated system outputs.',
      'Supported content deployment for Cyber Academy LMS using FileZilla FTP/SFTP.',
    ],
  },
  {
    id: 'orbit-venture-academy',
    role: 'AI Trainee',
    organization: 'Orbit Venture Academy – Kampus Merdeka',
    period: 'January 2022 – June 2022',
    highlights: [
      'Worked on practical AI and data science workflows.',
      'Explored NLP, Computer Vision, and Data Science.',
      'Developed projects involving Market Basket Analysis, vehicle speed detection, and human pose tracking.',
      'Contributed to a University Admission Predictor application.',
    ],
  },
];

export const educationItems = [
  {
    id: 'telkom-university',
    role: 'Master of Science in Information Systems',
    organization: 'Telkom University',
    period: 'January 2024 – Expected 2027',
    status: 'Ongoing',
    description:
      'Focus: Autonomous AI Systems, Data Architecture, and Technical Auditability Frameworks.',
  },
  {
    id: 'upi',
    role: 'Bachelor of Engineering in Telecommunications',
    organization: 'Universitas Pendidikan Indonesia',
    period: 'September 2019 – October 2023',
    highlights: ['GPA: 3.65/4.00', 'Achievement: Cum Laude'],
  },
];

export const credentialItems = [
  {
    id: 'cred-cum-laude',
    title: 'Cum Laude Academic Distinction',
    issuer: 'Universitas Pendidikan Indonesia',
    detail: 'Bachelor of Engineering in Telecommunications (GPA: 3.65/4.00)',
    period: 'October 2023',
  },
  {
    id: 'cred-kampus-merdeka',
    title: 'AI Trainee – Kampus Merdeka Program',
    issuer: 'Orbit Venture Academy',
    detail: 'Applied AI, NLP, Computer Vision, and Data Science',
    period: 'January 2022 – June 2022',
  },
  {
    id: 'cred-telkom-msc',
    title: 'M.Sc. in Information Systems (Ongoing)',
    issuer: 'Telkom University',
    detail: 'Autonomous AI Systems, Data Architecture & Technical Auditability',
    period: 'January 2024 – Expected 2027',
  },
];

export const certificationCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    items: [
      {
        name: 'Google AI Essentials',
        issuer: 'Google',
        year: '2026',
        description:
          'Covers foundational artificial intelligence concepts, generative AI workflows, and practical prompting techniques. Emphasizes responsible AI usage and evaluating model outputs.',
      },
      {
        name: 'Artificial Intelligence with Machine Learning',
        issuer: 'Oracle Academy',
        year: '2024',
        description:
          'Covers core machine learning concepts, supervised and unsupervised learning workflows, and model evaluation fundamentals. Introduces practical problem framing for AI-driven applications.',
      },
      {
        name: 'AI Mastery',
        issuer: 'Orbit Future Academy',
        year: '2022',
        description:
          'Covers applied artificial intelligence tracks spanning machine learning, natural language processing, and computer vision. Emphasizes collaborative project development and end-to-end AI workflows.',
      },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Data Science',
    items: [
      {
        name: 'Google Data Analytics Professional Certificate',
        issuer: 'Google',
        year: '2025',
        description:
          'Focuses on the end-to-end data analytics lifecycle, including data cleaning, SQL querying, and spreadsheet analysis. Covers data visualization to support structured decision-making.',
      },
      {
        name: 'Data Science Professional Certification',
        issuer: 'MySkill',
        year: '2023',
        description:
          'Focuses on applied data science workflows using Python, exploratory data analysis, and statistical reasoning. Covers data preprocessing and introductory predictive modeling.',
      },
    ],
  },
  {
    id: 'programming-db',
    title: 'Programming & Databases',
    items: [
      {
        name: 'Database Design and Programming with SQL',
        issuer: 'Oracle Academy',
        year: '2024',
        description:
          'Focuses on relational database modeling, entity-relationship design, and normalization principles. Covers writing structured SQL queries, joins, and data manipulation statements.',
      },
      {
        name: 'Java Foundations',
        issuer: '',
        year: '2024',
        description:
          'Covers core Java programming syntax, control flow, data structures, and object-oriented programming principles. Builds foundational skills for structured software development.',
      },
    ],
  },
  {
    id: 'it-support',
    title: 'IT & Technical Support',
    items: [
      {
        name: 'Microsoft 365 Certified: Fundamentals',
        issuer: 'Microsoft',
        year: '2025',
        description:
          'Introduces cloud computing concepts and core Microsoft 365 productivity, collaboration, and security capabilities. Covers service administration and compliance fundamentals.',
      },
      {
        name: 'Google IT Support Professional Certificate',
        issuer: 'Google',
        year: '2024',
        description:
          'Covers core IT support fundamentals, including computer networking, operating systems, and system administration. Emphasizes structured troubleshooting and security best practices.',
      },
    ],
  },
];

export const contactData = {
  // Set email address when ready to publish
  email: '',
  links: [
    {
      label: 'GitHub',
      value: 'github.com/FairuzFernanda30',
      href: 'https://github.com/FairuzFernanda30',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/fairuz-fernanda-862761229',
      href: 'https://www.linkedin.com/in/fairuz-fernanda-862761229',
    },
  ],
};
