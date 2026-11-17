import {
  heroData,
  aboutData,
  skillCategories,
  featuredProjects,
  experienceItems,
  educationItems,
  certificationCategories,
  contactData,
} from '../data/portfolioData.js';

export const WELCOME_MESSAGE =
  "Hello! I'm Fairuz's portfolio assistant. I can help you explore his background, technical skills, projects, experience, and certifications. What would you like to know?";

export const FALLBACK_MESSAGE_EN =
  "I can help you explore Fairuz's projects, technical skills, experience, education, certifications, and contact information. What would you like to know?";

export const FALLBACK_MESSAGE_ID =
  'Saya bisa membantu menjelaskan proyek, keahlian teknis, pengalaman, pendidikan, sertifikasi, dan kontak Fairuz. Bagian mana yang ingin Anda ketahui?';

export const CLARIFICATION_MESSAGE_EN =
  "Could you clarify which topic or project you'd like to know more about? You can ask about Fairuz's projects, technical skills, experience, education, or certifications.";

export const CLARIFICATION_MESSAGE_ID =
  'Bisa diperjelas topik atau proyek mana yang ingin Anda ketahui? Anda bisa bertanya tentang proyek, keahlian teknis, pengalaman, pendidikan, atau sertifikasi Fairuz.';

export const SUGGESTED_QUESTIONS = [
  'What projects has Fairuz built?',
  'What programming languages does he know?',
  'Where did he study?',
  'What experience does he have?',
  'What certifications does he have?',
  'How can I contact him?',
];

const ID_WORDS = new Set([
  'apa',
  'saja',
  'yang',
  'bagaimana',
  'gimana',
  'ceritakan',
  'jelaskan',
  'sekarang',
  'proyek',
  'projek',
  'pertama',
  'kedua',
  'ketiga',
  'keempat',
  'kesatu',
  'tersebut',
  'itu',
  'ini',
  'digunakan',
  'dipakai',
  'kerjanya',
  'keunggulannya',
  'keunggulan',
  'kelebihan',
  'ada',
  'nya',
  'dimana',
  'kuliah',
  'kerja',
  'pengalaman',
  'sertifikat',
  'sertifikasi',
  'keahlian',
  'kemampuan',
  'bahasa',
  'siapa',
  'tentang',
  'hubungi',
  'menghubungi',
  'kontak',
  'bisa',
  'pernah',
  'bikin',
  'buat',
  'hasil',
  'karya',
  'karyanya',
  'halo',
  'hai',
  'detail',
  'lebih',
  'pakai',
  'lihat',
  'cek',
  'sekolah',
  'bersekolah',
  'pendidikannya',
  'universitasnya',
  'kampusnya',
  'kuliahnya',
  'lulusan',
  'mana',
  'di',
  'latar',
  'belakang',
  'apakah',
  'masih',
  'saat',
  's1-nya',
  's2-nya',
]);

const EN_WORDS = new Set([
  'what',
  'which',
  'where',
  'who',
  'how',
  'tell',
  'explain',
  'show',
  'more',
  'about',
  'projects',
  'project',
  'first',
  'second',
  'third',
  'fourth',
  'one',
  'used',
  'technologies',
  'technology',
  'tools',
  'work',
  'experience',
  'study',
  'studied',
  'education',
  'skills',
  'certifications',
  'certification',
  'contact',
  'hello',
  'hi',
  'hey',
  'built',
  'does',
  'did',
  'his',
  'languages',
  'language',
  'there',
  'now',
  'currently',
  'current',
  'bachelor',
  'undergraduate',
  'master',
  'masters',
  'graduate',
  'gpa',
]);

const GREETING_TOKENS = new Set(['hi', 'hello', 'hey', 'halo', 'hai']);
const GREETING_PHRASES = [
  'good morning',
  'good afternoon',
  'good evening',
  'selamat pagi',
  'selamat siang',
  'selamat sore',
  'selamat malam',
];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s+#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectLanguage(tokens, previousLanguage = 'en') {
  let idScore = 0;
  let enScore = 0;

  for (const token of tokens) {
    if (ID_WORDS.has(token)) idScore += 1;
    if (EN_WORDS.has(token)) enScore += 1;
  }

  if (idScore > enScore) return 'id';
  if (enScore > idScore) return 'en';
  return previousLanguage || 'en';
}

function hasPhrase(text, phrase) {
  return text.includes(phrase);
}

function hasWord(tokens, word) {
  return tokens.includes(word);
}

function matchesAnyPhrase(text, phrases) {
  return phrases.some((phrase) => hasPhrase(text, phrase));
}

function findProjectById(projectId) {
  return featuredProjects.find((project) => project.id === projectId) || null;
}

function detectExplicitProject(text) {
  if (matchesAnyPhrase(text, ['customer churn', 'churn-app', 'churn'])) {
    return findProjectById('customer-churn-prediction');
  }
  if (matchesAnyPhrase(text, ['pdf to excel', 'pdf-to-excel', 'pdf', 'invoice', 'pdfplumber'])) {
    return findProjectById('pdf-to-excel-extractor');
  }
  if (matchesAnyPhrase(text, ['web scraper', 'books to scrape', 'scraper', 'scraping', 'beautifulsoup'])) {
    return findProjectById('web-scraper-books-to-scrape');
  }
  if (matchesAnyPhrase(text, ['excel auto-cleaner', 'excel auto cleaner', 'auto-cleaner', 'auto cleaner', 'formatter'])) {
    return findProjectById('excel-auto-cleaner-formatter');
  }
  return null;
}

function detectOrdinalProject(text, tokens) {
  if (hasWord(tokens, 'pertama') || hasWord(tokens, 'kesatu') || hasWord(tokens, 'first') || hasWord(tokens, '1st') || hasPhrase(text, 'nomor 1') || hasPhrase(text, 'no 1') || hasPhrase(text, 'ke 1')) {
    return featuredProjects[0] || null;
  }
  if (hasWord(tokens, 'kedua') || hasWord(tokens, 'second') || hasWord(tokens, '2nd') || hasPhrase(text, 'nomor 2') || hasPhrase(text, 'no 2') || hasPhrase(text, 'ke 2')) {
    return featuredProjects[1] || null;
  }
  if (hasWord(tokens, 'ketiga') || hasWord(tokens, 'third') || hasWord(tokens, '3rd') || hasPhrase(text, 'nomor 3') || hasPhrase(text, 'no 3') || hasPhrase(text, 'ke 3')) {
    return featuredProjects[2] || null;
  }
  if (hasWord(tokens, 'keempat') || hasWord(tokens, 'fourth') || hasWord(tokens, '4th') || hasWord(tokens, 'terakhir') || hasWord(tokens, 'last') || hasPhrase(text, 'nomor 4') || hasPhrase(text, 'no 4') || hasPhrase(text, 'ke 4')) {
    return featuredProjects[3] || null;
  }
  return null;
}

function detectFollowUpAspect(text, tokens) {
  if (
    matchesAnyPhrase(text, [
      'teknologi apa',
      'tools apa',
      'pakai apa',
      'yang digunakan',
      'yang dipakai',
      'tech stack',
      'what technologies',
      'what tech',
      'what tools',
      'tools were used',
      'technologies did he use',
      'stacknya',
    ]) ||
    (hasWord(tokens, 'teknologi') && (hasWord(tokens, 'apa') || hasWord(tokens, 'digunakan') || hasWord(tokens, 'dipakai')))
  ) {
    return 'tech';
  }

  if (
    matchesAnyPhrase(text, [
      'ada github',
      'github-nya',
      'githubnya',
      'repository github',
      'link github',
      'repo-nya',
      'reponya',
      'where can i see',
      'where is it',
      'source code',
    ]) ||
    (hasWord(tokens, 'github') && (hasWord(tokens, 'ada') || hasWord(tokens, 'link') || hasWord(tokens, 'mana')))
  ) {
    return 'github';
  }

  if (
    matchesAnyPhrase(text, [
      'cara kerja',
      'cara kerjanya',
      'how does it work',
      'keunggulannya',
      'keunggulan',
      'kelebihan',
      'lebih detail',
      'jelaskan lebih',
      'ceritakan lebih',
      'tell me more',
      'more details',
      'explain more',
      'selengkapnya',
      'detailnya',
      'tujuannya',
    ])
  ) {
    return 'details';
  }

  return null;
}

function formatProjectsList(lang) {
  const lines = featuredProjects.map(
    (project, index) =>
      `${index + 1}. ${project.title} (${project.category})\n   ${project.description}\n   ${lang === 'id' ? 'Teknologi' : 'Stack'}: ${project.stack.join(', ')}`
  );

  return {
    text:
      lang === 'id'
        ? `Fairuz memiliki empat proyek utama di GitHub:\n\n${lines.join('\n\n')}`
        : `Fairuz has four featured projects on GitHub:\n\n${lines.join('\n\n')}`,
    links: featuredProjects.map((project) => ({
      label: project.title,
      href: project.repoUrl,
    })),
    context: {
      lastIntent: 'projects',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function formatSingleProject(project, aspect, lang) {
  const isChurn = project.id === 'customer-churn-prediction';

  if (aspect === 'tech') {
    const text =
      lang === 'id'
        ? `Pada proyek ${project.title}, teknologi yang digunakan adalah: ${project.stack.join(', ')}.`
        : `${project.title} uses the following technologies: ${project.stack.join(', ')}.`;

    return {
      text,
      links: [{ label: project.title, href: project.repoUrl }],
      context: {
        lastIntent: 'projects',
        lastEntity: project.id,
        lastEntityType: 'project',
        responseLanguage: lang,
      },
    };
  }

  if (aspect === 'github') {
    const text =
      lang === 'id'
        ? `Repository GitHub untuk ${project.title} tersedia di tautan berikut:`
        : `You can view the GitHub repository for ${project.title} here:`;

    return {
      text,
      links: [{ label: project.title, href: project.repoUrl }],
      context: {
        lastIntent: 'projects',
        lastEntity: project.id,
        lastEntityType: 'project',
        responseLanguage: lang,
      },
    };
  }

  if (isChurn) {
    const text =
      lang === 'id'
        ? `${project.title} (${project.category})\n\n• Tujuan: Prediksi customer churn.\n• Alur kerja: Exploratory Data Analysis (EDA), pemodelan Random Forest, eksperimen ketidakseimbangan kelas (class imbalance), serta aplikasi interaktif Streamlit.\n• Hasil yang tercatat: ROC-AUC 0.8233 tanpa SMOTE.\n• Teknologi: ${project.stack.join(', ')}.`
        : `${project.title} (${project.category})\n\n• Purpose: Customer churn prediction.\n• Workflow: Exploratory Data Analysis, Random Forest modeling, class imbalance experimentation, and a Streamlit application.\n• Reported metric: ROC-AUC of 0.8233 without SMOTE.\n• Stack: ${project.stack.join(', ')}.`;

    return {
      text,
      links: [{ label: project.title, href: project.repoUrl }],
      context: {
        lastIntent: 'projects',
        lastEntity: project.id,
        lastEntityType: 'project',
        responseLanguage: lang,
      },
    };
  }

  const text =
    lang === 'id'
      ? `${project.title} (${project.category})\n\n${project.description}\n\n• Teknologi: ${project.stack.join(', ')}.`
      : `${project.title} (${project.category})\n\n${project.description}\n\n• Stack: ${project.stack.join(', ')}.`;

  return {
    text,
    links: [{ label: project.title, href: project.repoUrl }],
    context: {
      lastIntent: 'projects',
      lastEntity: project.id,
      lastEntityType: 'project',
      responseLanguage: lang,
    },
  };
}

function formatProgrammingLanguages(lang) {
  const langCategory = skillCategories.find((c) => c.id === 'languages');
  const skills = langCategory ? langCategory.skills.join(', ') : '';

  return {
    text:
      lang === 'id'
        ? `Bahasa pemrograman yang dikuasai Fairuz meliputi: ${skills}.`
        : `Fairuz works with these programming languages: ${skills}.`,
    links: [],
    context: {
      lastIntent: 'skills',
      lastEntity: 'languages',
      lastEntityType: 'skill_category',
      responseLanguage: lang,
    },
  };
}

function formatSkills(lang) {
  const lines = skillCategories.map(
    (category) => `• ${category.title}: ${category.skills.join(', ')}`
  );

  return {
    text:
      lang === 'id'
        ? `Berikut keahlian teknis dan tools yang digunakan Fairuz:\n\n${lines.join('\n')}`
        : `Here are Fairuz's technical skills and tools:\n\n${lines.join('\n')}`,
    links: [],
    context: {
      lastIntent: 'skills',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function localizeEducationPeriod(period) {
  return period
    .replace('January', 'Januari')
    .replace('Expected', 'diperkirakan')
    .replace('October', 'Oktober');
}

function formatEducation(lang) {
  const lines = educationItems.map((edu) => {
    if (lang === 'id') {
      const roleId =
        edu.id === 'telkom-university'
          ? 'S2 — Magister Sistem Informasi'
          : edu.id === 'upi'
            ? 'S1 — Teknik Telekomunikasi'
            : edu.role;
      const periodId = localizeEducationPeriod(edu.period);
      const statusPart = edu.status ? ', masih berlangsung' : '';
      const extra = edu.description
        ? `\n   ${edu.description.replace('Focus:', 'Fokus:')}`
        : edu.highlights?.length
          ? `\n   ${edu.highlights
              .map((h) => h.replace('GPA:', 'IPK').replace('Achievement: ', ''))
              .join(', ')}`
          : '';
      return `• ${roleId}, ${edu.organization} (${periodId}${statusPart})${extra}`;
    }

    const statusPart = edu.status ? ` (${edu.status})` : '';
    const extra = edu.description
      ? `\n   ${edu.description}`
      : edu.highlights?.length
        ? `\n   ${edu.highlights.join(' • ')}`
        : '';
    return `• ${edu.role} — ${edu.organization} (${edu.period})${statusPart}${extra}`;
  });

  return {
    text:
      lang === 'id'
        ? `Riwayat pendidikan Fairuz:\n\n${lines.join('\n\n')}`
        : `Fairuz's academic background:\n\n${lines.join('\n\n')}`,
    links: [],
    context: {
      lastIntent: 'education',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function formatCurrentEducation(lang) {
  const msc = educationItems.find((edu) => edu.id === 'telkom-university');
  if (!msc) return formatEducation(lang);

  const text =
    lang === 'id'
      ? `Ya, Fairuz saat ini sedang menempuh pendidikan S2 Magister Sistem Informasi di ${msc.organization} (${localizeEducationPeriod(msc.period)}, masih berlangsung).\n${msc.description.replace('Focus:', 'Fokus:')}`
      : `Yes, Fairuz is currently pursuing his ${msc.role} at ${msc.organization} (${msc.period}, ${msc.status}).\n${msc.description}`;

  return {
    text,
    links: [],
    context: {
      lastIntent: 'education',
      lastEntity: msc.id,
      lastEntityType: 'education',
      responseLanguage: lang,
    },
  };
}

function formatUndergraduateEducation(lang) {
  const bsc = educationItems.find((edu) => edu.id === 'upi');
  if (!bsc) return formatEducation(lang);

  const highlightsId = bsc.highlights
    .map((h) => h.replace('GPA:', 'IPK').replace('Achievement: ', ''))
    .join(', ');

  const text =
    lang === 'id'
      ? `Pendidikan S1 Fairuz adalah Teknik Telekomunikasi di ${bsc.organization} (${localizeEducationPeriod(bsc.period)}), dengan ${highlightsId}.`
      : `Fairuz earned his ${bsc.role} from ${bsc.organization} (${bsc.period}), graduating with ${bsc.highlights.join(' and ')}.`;

  return {
    text,
    links: [],
    context: {
      lastIntent: 'education',
      lastEntity: bsc.id,
      lastEntityType: 'education',
      responseLanguage: lang,
    },
  };
}

function detectEducationSubIntent(text, tokens) {
  if (
    matchesAnyPhrase(text, [
      's1-nya',
      's1nya',
      'universitas pendidikan indonesia',
      'bachelor degree',
      'bachelor s',
      'cum laude',
      'jurusan s1',
      'kuliah s1',
    ]) ||
    hasWord(tokens, 's1') ||
    hasWord(tokens, 'sarjana') ||
    hasWord(tokens, 'bachelor') ||
    hasWord(tokens, 'undergraduate') ||
    hasWord(tokens, 'upi') ||
    hasWord(tokens, 'telekomunikasi') ||
    hasWord(tokens, 'telecommunications') ||
    hasWord(tokens, 'ipk') ||
    hasWord(tokens, 'gpa')
  ) {
    return 'undergraduate_education';
  }

  if (
    matchesAnyPhrase(text, [
      'masih kuliah',
      'masih bersekolah',
      'masih sekolah',
      'sedang kuliah',
      'kuliah sekarang',
      'study now',
      'studying now',
      'currently study',
      'currently studying',
      'current education',
      'saat ini',
      's2-nya',
      's2nya',
      'telkom university',
      'kuliah s2',
      'still studying',
    ]) ||
    hasWord(tokens, 'sekarang') ||
    hasWord(tokens, 'now') ||
    hasWord(tokens, 'currently') ||
    hasWord(tokens, 'current') ||
    hasWord(tokens, 's2') ||
    hasWord(tokens, 'magister') ||
    hasWord(tokens, 'master') ||
    hasWord(tokens, 'masters') ||
    hasWord(tokens, 'telkom') ||
    hasWord(tokens, 'ongoing')
  ) {
    return 'current_education';
  }

  return 'education_overview';
}

function formatExperience(lang) {
  const lines = experienceItems.map(
    (exp) =>
      `• ${exp.role} — ${exp.organization} (${exp.period})\n  - ${exp.highlights.join('\n  - ')}`
  );

  return {
    text:
      lang === 'id'
        ? `Pengalaman kerja dan pelatihan AI Fairuz:\n\n${lines.join('\n\n')}`
        : `Fairuz's work experience and AI training:\n\n${lines.join('\n\n')}`,
    links: [],
    context: {
      lastIntent: 'experience',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function formatCertifications(lang) {
  const total = certificationCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );
  const lines = certificationCategories.map((cat) => {
    const items = cat.items
      .map(
        (item) =>
          `  - ${item.name}${item.issuer ? ` (${item.issuer})` : ''} — ${item.year}`
      )
      .join('\n');
    return `${cat.title}:\n${items}`;
  });

  return {
    text:
      lang === 'id'
        ? `Fairuz memiliki ${total} sertifikasi yang terbagi dalam empat kategori:\n\n${lines.join('\n\n')}`
        : `Fairuz holds ${total} certifications across four categories:\n\n${lines.join('\n\n')}`,
    links: [],
    context: {
      lastIntent: 'certifications',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function formatContact(lang) {
  const hasEmail = Boolean(contactData.email && contactData.email.trim());
  const linkLines = contactData.links.map(
    (link) => `• ${link.label}: ${link.value}`
  );
  if (hasEmail) {
    linkLines.unshift(`• Email: ${contactData.email}`);
  }

  return {
    text:
      lang === 'id'
        ? `Anda dapat menghubungi Fairuz melalui tautan berikut:\n\n${linkLines.join('\n')}`
        : `You can connect with Fairuz through his profiles:\n\n${linkLines.join('\n')}`,
    links: [
      ...(hasEmail
        ? [{ label: `Email (${contactData.email})`, href: `mailto:${contactData.email}` }]
        : []),
      ...contactData.links.map((link) => ({
        label: link.label,
        href: link.href,
      })),
    ],
    context: {
      lastIntent: 'contact',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

function formatAbout(lang) {
  return {
    text:
      lang === 'id'
        ? `${heroData.name} — ${heroData.headline}\n\nFairuz adalah profesional AI yang berfokus pada Python, machine learning, pengolahan data, dan sistem perangkat lunak yang andal. Ia merupakan lulusan Teknik Telekomunikasi (Cum Laude) dan sedang menempuh studi Magister Sistem Informasi di Telkom University.`
        : `${heroData.name} — ${heroData.headline}\n\n${aboutData.summary}\n\n${aboutData.approach}`,
    links: [],
    context: {
      lastIntent: 'about',
      lastEntity: null,
      lastEntityType: null,
      responseLanguage: lang,
    },
  };
}

const INTENT_RULES = [
  {
    id: 'programming_languages',
    priority: 7,
    phrases: [
      'programming language',
      'programming languages',
      'coding language',
      'bahasa pemrograman',
      'bahasa coding',
      'bahasa program',
      'languages does he know',
      'which languages',
      'what languages',
      'bahasa apa saja',
    ],
    keywords: ['languages', 'bahasa'],
  },
  {
    id: 'projects',
    priority: 6,
    phrases: [
      'hasil karya',
      'hasil karyanya',
      'bikin aplikasi',
      'buat aplikasi',
      'membuat aplikasi',
      'project apa',
      'projek apa',
      'proyek apa',
      'python projects',
      'featured projects',
      'github projects',
    ],
    keywords: [
      'project',
      'projects',
      'projek',
      'proyek',
      'karya',
      'karyanya',
      'aplikasi',
      'repository',
      'repositories',
      'repo',
      'repos',
      'built',
      'bikin',
      'buat',
    ],
  },
  {
    id: 'certifications',
    priority: 5,
    phrases: [
      'google ai essentials',
      'data analytics professional',
      'microsoft 365',
      'it support',
      'ai mastery',
      'java foundations',
      'database design',
    ],
    keywords: [
      'certification',
      'certifications',
      'certificate',
      'certificates',
      'credential',
      'credentials',
      'sertifikat',
      'sertifikasi',
      'lisensi',
      'oracle',
      'myskill',
    ],
  },
  {
    id: 'education',
    priority: 6,
    phrases: [
      'telkom university',
      'universitas pendidikan indonesia',
      'cum laude',
      'where did he study',
      'where did fairuz study',
      'what university',
      'academic background',
      'educational background',
      'kuliah di',
      'kuliah di mana',
      'kuliah dimana',
      'di mana fairuz bersekolah',
      'dimana fairuz bersekolah',
      'lulusan mana',
      'latar belakang pendidikan',
      'latar belakang pendidikannya',
      'riwayat pendidikan',
      'gelar apa',
      'masih kuliah',
      'sedang kuliah',
      'study now',
      'currently studying',
      'bachelor degree',
      's1-nya',
      's1nya',
      's2-nya',
      's2nya',
    ],
    keywords: [
      'education',
      'educational',
      'pendidikan',
      'pendidikannya',
      'study',
      'studied',
      'studying',
      'kuliah',
      'kuliahnya',
      'sekolah',
      'bersekolah',
      'school',
      'university',
      'universitas',
      'universitasnya',
      'kampus',
      'kampusnya',
      'college',
      'degree',
      'gelar',
      'jurusan',
      'major',
      'bachelor',
      'undergraduate',
      'master',
      'masters',
      'sarjana',
      'magister',
      's1',
      's1-nya',
      's2',
      's2-nya',
      'telkom',
      'upi',
      'gpa',
      'ipk',
      'lulusan',
      'graduate',
      'graduated',
    ],
  },
  {
    id: 'experience',
    priority: 3,
    phrases: [
      'work history',
      'work experience',
      'pengalaman kerja',
      'riwayat kerja',
      'riwayat pekerjaan',
      'pernah kerja',
      'kampus merdeka',
      'orbit venture',
      'cybers globals',
      'quality control',
      'system analyst',
      'ai trainee',
    ],
    keywords: [
      'experience',
      'pengalaman',
      'work',
      'kerja',
      'pekerjaan',
      'job',
      'jobs',
      'career',
      'karir',
      'karier',
      'intern',
      'internship',
      'magang',
      'trainee',
      'cybers',
      'orbit',
    ],
  },
  {
    id: 'skills',
    priority: 2,
    phrases: [
      'tech stack',
      'technical skills',
      'machine learning',
      'deep learning',
      'computer vision',
      'power bi',
      'advanced excel',
      'software testing',
      'what can he do',
      'what does he do',
      'keahlian apa',
      'skill apa',
      'bisa apa',
      'menguasai apa',
    ],
    keywords: [
      'skill',
      'skills',
      'keahlian',
      'kemampuan',
      'stack',
      'tool',
      'tools',
      'teknologi',
      'technology',
      'technologies',
      'python',
      'sql',
      'java',
      'pandas',
      'tableau',
      'excel',
      'docker',
      'git',
      'nlp',
      'ml',
      'ai',
      'capabilities',
    ],
  },
  {
    id: 'contact',
    priority: 1,
    phrases: [
      'how to contact',
      'how can i contact',
      'cara menghubungi',
      'hubungi fairuz',
      'get in touch',
      'reach out',
      'social media',
      'media sosial',
    ],
    keywords: [
      'contact',
      'kontak',
      'hubungi',
      'menghubungi',
      'reach',
      'email',
      'linkedin',
      'github',
      'connect',
      'hire',
      'rekrut',
    ],
  },
  {
    id: 'about',
    priority: 0,
    phrases: [
      'who is fairuz',
      'siapa fairuz',
      'siapa itu fairuz',
      'about fairuz',
      'tentang fairuz',
      'tell me about fairuz',
      'ceritakan tentang fairuz',
      'professional profile',
      'profil profesional',
    ],
    keywords: [
      'about',
      'tentang',
      'siapa',
      'profile',
      'profil',
      'background',
      'summary',
      'ringkasan',
      'bio',
      'biodata',
      'overview',
      'introduce',
    ],
  },
];

function scoreIntents(text, tokens) {
  let bestIntent = null;
  let bestScore = 0;
  let bestPriority = -1;

  for (const rule of INTENT_RULES) {
    let score = 0;

    for (const phrase of rule.phrases) {
      if (hasPhrase(text, phrase)) {
        score += 5;
      }
    }

    for (const keyword of rule.keywords) {
      if (hasWord(tokens, keyword)) {
        score += 2;
      }
    }

    if (
      score > bestScore ||
      (score > 0 && score === bestScore && rule.priority > bestPriority)
    ) {
      bestScore = score;
      bestIntent = rule.id;
      bestPriority = rule.priority;
    }
  }

  return bestScore > 0 ? bestIntent : null;
}

export function getPortfolioAssistantReply(rawQuery, prevContext = {}) {
  const text = normalize(rawQuery);
  const tokens = text ? text.split(' ') : [];
  const lang = detectLanguage(tokens, prevContext.responseLanguage || 'en');

  if (!text) {
    return {
      text:
        lang === 'id'
          ? 'Silakan ketik pertanyaan tentang proyek, keahlian, pendidikan, pengalaman, sertifikasi, atau kontak Fairuz.'
          : 'Please enter a question about Fairuz’s projects, skills, education, experience, certifications, or contact links.',
      links: [],
      context: { ...prevContext, responseLanguage: lang },
    };
  }

  // 1. Short greetings
  if (
    tokens.length <= 4 &&
    (tokens.some((token) => GREETING_TOKENS.has(token)) ||
      matchesAnyPhrase(text, GREETING_PHRASES))
  ) {
    return {
      text:
        lang === 'id'
          ? 'Halo! Saya asisten portofolio Fairuz. Anda bisa menanyakan tentang proyek, keahlian teknis, pengalaman, pendidikan, sertifikasi, atau kontaknya.'
          : WELCOME_MESSAGE,
      links: [],
      context: {
        lastIntent: null,
        lastEntity: null,
        lastEntityType: null,
        responseLanguage: lang,
      },
    };
  }

  // 2. Explicit project entity mention (e.g. "Jelaskan Customer Churn Prediction" / "Sekarang jelaskan proyek PDF to Excel Extractor")
  const explicitProject = detectExplicitProject(text);
  const followUpAspect = detectFollowUpAspect(text, tokens);

  if (explicitProject) {
    return formatSingleProject(explicitProject, followUpAspect || 'details', lang);
  }

  // 3. Ordinal project reference (e.g. "proyek pertama", "the first one")
  const ordinalProject = detectOrdinalProject(text, tokens);
  if (
    ordinalProject &&
    (prevContext.lastIntent === 'projects' ||
      matchesAnyPhrase(text, ['proyek', 'projek', 'project', 'one']))
  ) {
    return formatSingleProject(ordinalProject, followUpAspect || 'details', lang);
  }

  // 4. Contextual follow-up when a specific project entity is already active
  if (prevContext.lastEntityType === 'project' && prevContext.lastEntity) {
    const activeProject = findProjectById(prevContext.lastEntity);
    if (
      activeProject &&
      (followUpAspect ||
        matchesAnyPhrase(text, ['proyek itu', 'proyek tersebut', 'that project', 'this project']))
    ) {
      return formatSingleProject(activeProject, followUpAspect || 'details', lang);
    }
  }

  // 5. Contextual follow-up when projects list was just discussed (no single entity yet)
  if (prevContext.lastIntent === 'projects' && followUpAspect) {
    if (followUpAspect === 'tech') {
      const lines = featuredProjects.map(
        (p) => `• ${p.title}: ${p.stack.join(', ')}`
      );
      return {
        text:
          lang === 'id'
            ? `Berikut teknologi yang digunakan pada keempat proyek Fairuz:\n\n${lines.join('\n')}`
            : `Here are the technologies used across Fairuz's four projects:\n\n${lines.join('\n')}`,
        links: featuredProjects.map((p) => ({ label: p.title, href: p.repoUrl })),
        context: {
          lastIntent: 'projects',
          lastEntity: null,
          lastEntityType: null,
          responseLanguage: lang,
        },
      };
    }

    if (followUpAspect === 'github') {
      return {
        text:
          lang === 'id'
            ? 'Semua proyek unggulan Fairuz tersedia di GitHub melalui tautan berikut:'
            : 'All four featured projects are available on GitHub here:',
        links: featuredProjects.map((p) => ({ label: p.title, href: p.repoUrl })),
        context: {
          lastIntent: 'projects',
          lastEntity: null,
          lastEntityType: null,
          responseLanguage: lang,
        },
      };
    }

    return formatProjectsList(lang);
  }

  // 6. Follow-up when no context exists yet (e.g. after Reset)
  if (followUpAspect && !prevContext.lastIntent && !prevContext.lastEntity) {
    return {
      text: lang === 'id' ? CLARIFICATION_MESSAGE_ID : CLARIFICATION_MESSAGE_EN,
      links: [],
      context: {
        lastIntent: null,
        lastEntity: null,
        lastEntityType: null,
        responseLanguage: lang,
      },
    };
  }

  // 7. Score general intents
  const matchedIntent = scoreIntents(text, tokens);
  if (matchedIntent) {
    switch (matchedIntent) {
      case 'programming_languages':
        return formatProgrammingLanguages(lang);
      case 'projects':
        return formatProjectsList(lang);
      case 'certifications':
        return formatCertifications(lang);
      case 'education': {
        const subIntent = detectEducationSubIntent(text, tokens);
        if (subIntent === 'current_education') {
          return formatCurrentEducation(lang);
        }
        if (subIntent === 'undergraduate_education') {
          return formatUndergraduateEducation(lang);
        }
        return formatEducation(lang);
      }
      case 'experience':
        return formatExperience(lang);
      case 'skills':
        return formatSkills(lang);
      case 'contact':
        return formatContact(lang);
      case 'about':
        return formatAbout(lang);
      default:
        break;
    }
  }

  // 8. Generic follow-up for non-project intents (skills, experience, education, certifications)
  if (followUpAspect && prevContext.lastIntent) {
    switch (prevContext.lastIntent) {
      case 'skills':
        return formatSkills(lang);
      case 'experience':
        return formatExperience(lang);
      case 'education': {
        const subIntent = detectEducationSubIntent(text, tokens);
        if (subIntent === 'current_education') {
          return formatCurrentEducation(lang);
        }
        if (subIntent === 'undergraduate_education') {
          return formatUndergraduateEducation(lang);
        }
        return formatEducation(lang);
      }
      case 'certifications':
        return formatCertifications(lang);
      case 'contact':
        return formatContact(lang);
      case 'about':
        return formatAbout(lang);
      default:
        break;
    }
  }

  return {
    text: lang === 'id' ? FALLBACK_MESSAGE_ID : FALLBACK_MESSAGE_EN,
    links: [],
    context: { ...prevContext, responseLanguage: lang },
  };
}
