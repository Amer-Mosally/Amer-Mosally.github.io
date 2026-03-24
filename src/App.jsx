import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Shield, 
  ChevronRight, 
  Mail, 
  MapPin,
  Linkedin,
  FileText,
  Terminal,
  Moon,
  Sun,
  Users,
  Code,
  FolderGit2,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

// --- DATA ---
const DATA = {
  personal: {
    name: "Amer Mosally",
    headline: "Cybersecurity Engineer & Researcher",
    email: "amer.mosally@gmail.com",
    phone: "+966590520182",
    linkedin: "https://www.linkedin.com/in/amer-mosally/",
    nationality: "Taiwanese",
    summary: "Research-oriented Professional Services Consultant and published author specializing in emerging security paradigms. Co-authored a CRC Press book on Post-Quantum Cryptography and published an IEEE conference paper on enhancing intrusion detection via machine learning. Expert in automating security operations, backed by a strong technical foundation in programming and penetration testing."
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "King Fahd University Of Petroleum & Minerals (KFUPM)",
      period: "2019 - 2023",
      gpa: "3.68/4.00",
      details: "Major Concentration: Cloud Computing"
    }
  ],
  publications: [
    {
      title: "Improving Intrusion Detection System Accuracy Through PCA-Based Feature Reduction and Machine Learning Techniques",
      publisher: "IEEE Cyber-AI: International Conference on Cybersecurity and AI-Based Systems",
      date: "Sep 2025", 
      type: "Conference Paper",
      description: "A peer-reviewed paper presenting a data processing and machine learning approach to improving anomaly-based Intrusion Detection Systems (IDS). The research reduces false positive rates and enhances detection accuracy."
    },
    {
      title: "Quantum Computing: A Journey into the Next Frontier of Information and Communication Security",
      publisher: "CRC Press, Taylor & Francis Group",
      date: "Dec 2024",
      type: "Co-authored Book",
      description: "Co-authored a book on Post-Quantum Cryptography (PQC), analyzing principal algorithm families and highlighting NIST's role in cryptographic standardization to secure systems against quantum threats."
    }
  ],
  experience: [
    {
      role: "Cybersecurity Professional Services Consultant",
      company: "Ingram Micro",
      period: "Aug 2024 - Present",
      type: "Industry",
      bullets: [
        "Architected and deployed cybersecurity solutions for the Ministry of Health, managing the entire lifecycle from design to optimization.",
        "Significantly improved web and network security posture and resilience against cyber threats.",
        "Developed automation workflows using Python and APIs to orchestrate investigative workflows and routine security tasks, reducing manual deployment and response effort by 90%."
      ]
    },
    {
      role: "Cybersecurity Engineer Intern",
      company: "Trend Micro",
      period: "Jan 2024 - Jul 2024",
      type: "Industry",
      bullets: [
        "Implemented and managed Apex One and Deep Security to protect servers and endpoints against advanced malware.",
        "Executed comprehensive security assessments and identified misconfigurations, recommending specific policy enhancements.",
        "Strengthened security posture and operational efficiency by developing Python-based automation for Trend Micro solutions via REST APIs, reducing manual overhead and response latency."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "King Abdullah University of Science and Technology (KAUST) Academy",
      period: "Jan 2024 - Mar 2024",
      type: "Academic",
      bullets: [
        "Delivered and helped in designing technical training curricula to over 100 participants.",
        "Translated complex theoretical concepts into practical lab exercises enhancing technical competencies in modern threat defense."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "King Fahd University of Petroleum and Minerals (KFUPM)",
      period: "Aug 2023 - Jan 2024",
      type: "Academic",
      bullets: [
        "Delivered a comprehensive practical lab course on embedded systems and microcontroller programming (C/C++)."
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "Intelligent Secure Systems Center",
      period: "Feb 2023 - Jun 2023",
      type: "Academic",
      bullets: [
        "Worked on an edge-based video analytics system using Jetson Nano and AI-based models for real-time vehicle detection."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Safseer",
      period: "Jun 2022 - Aug 2022",
      type: "Industry",
      bullets: [
        "Developed a web application using Streamlit framework for IoT devices utilizing LoRa technology."
      ]
    }
  ],
  awards: [
    {
      title: "Best Entrepreneurial Award (Road Pothole Detection System)",
      issuer: "KFUPM",
      date: "May 2023",
      description: "Developed an AI-powered road assessment system with custom edge computing devices. Deployed a scalable Docker-based pipeline on GCP to classify road damage severity."
    },
    {
      title: "Merit-Based Full Undergraduate Scholarship",
      issuer: "KFUPM",
      date: "Aug 2019",
      description: "Selected for a full-ride scholarship covering tuition and living expenses, awarded based on academic excellence."
    }
  ],
  certifications: [
    { name: "CPTS - Certified Penetration Testing Specialist", issuer: "Hack The Box", date: "In Progress" },
    { name: "Trend Vision One Cloud Security Advanced", issuer: "Trend Micro", date: "May 2025" },
    { name: "FortiWeb Administrator", issuer: "Fortinet", date: "Mar 2025" },
    { name: "AWS Certified Solutions Architect Associate", issuer: "Amazon Web Services", date: "Sep 2024" },
    { name: "Deep Discovery Certified Professional", issuer: "Trend Micro", date: "May 2024" },
    { name: "Deep Security Certificate Professional", issuer: "Trend Micro", date: "Mar 2024" },
    { name: "Apex One Certified Professional", issuer: "Trend Micro", date: "Feb 2024" },
    { name: "Supervised Machine Learning", issuer: "Coursera", date: "Feb 2024" },
    { name: "eJPTv2 - Junior Penetration Tester", issuer: "INE", date: "Jan 2024" },
    { name: "CCNA - Cisco Certified Network Associate", issuer: "Cisco", date: "Aug 2022" }
  ],
  skills: [
    {
      category: "Cybersecurity & Cloud",
      items: ["Penetration Testing", "Vulnerability Assessment", "Endpoint Security", "WAF", "AWS", "GCP", "Docker"]
    },
    {
      category: "Programming & Automation",
      items: ["Python", "C/C++", "Bash", "API Integration", "Streamlit", "Automation Workflows"]
    },
    {
      category: "AI & Embedded Systems",
      items: ["Machine Learning", "PCA", "Jetson Nano", "Edge Computing", "IoT (LoRa)"]
    }
  ],
  projects: [
    {
      title: "AI-Powered Road Pothole Detection",
      tech: "Python, Docker, GCP, Edge Computing",
      description: "Developed an automated assessment system using custom edge computing devices in a 3D-printed enclosure. Deployed a scalable pipeline on GCP to classify road damage severity."
    },
    {
      title: "Edge-Based Video Analytics",
      tech: "Jetson Nano, C/C++, Computer Vision",
      description: "Engineered a real-time vehicle detection system utilizing AI models optimized for edge hardware at the Intelligent Secure Systems Center."
    },
    {
      title: "LoRa IoT Web Dashboard",
      tech: "Streamlit, Python, IoT",
      description: "Created an interactive web application framework to monitor and visualize data from connected IoT devices communicating via LoRa protocols."
    }
  ],
  extracurricular: [
    {
      role: "Vice President",
      organization: "KFUPM Sumou Club",
      period: "Aug 2022 - Jan 2023",
      description: "Led the planning and execution of seminars and workshops aimed at fostering student development, leadership, and career growth."
    },
    {
      role: "Team Leader",
      organization: "KFUPM Guidance Committee",
      period: "Aug 2021 - May 2022",
      description: "Directed a specialized team responsible for overseeing financial operations and logistics, optimizing resource allocation and supporting strategic committee initiatives."
    },
    {
      role: "Science Engagement Lead",
      organization: "Aramco",
      period: "Jul 2010 - Sep 2010",
      description: "Designed and conducted interactive scientific demonstrations, engaging festival attendees and enhancing public understanding of applied science."
    }
  ]
};

// --- COMPONENTS ---

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 last:border-0 transition-colors duration-300">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex items-center space-x-3 mb-12">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-700 dark:text-indigo-400 transition-colors duration-300">
          <Icon size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const TerminalGraphic = () => (
  <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[380px] mx-auto bg-[#0a0f1c] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center group">
    {/* Background stylized >_ */}
    <div className="absolute inset-0 flex items-center justify-center opacity-20 select-none pb-24">
      <Terminal size={150} strokeWidth={1.5} className="text-slate-400" />
    </div>

    {/* Floating code block */}
    <div className="relative z-10 w-[92%] sm:w-[85%] bg-[#111827]/80 backdrop-blur-md rounded-xl border border-slate-700/50 p-4 sm:p-5 shadow-xl mt-auto mb-6 sm:mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
        <div>
          <span className="text-emerald-400">$ whoami</span>
          <div className="text-cyan-400 ml-3 sm:ml-4 mt-1">amer_mosally</div>
        </div>
        <div>
          <span className="text-emerald-400">$ status</span>
          <div className="text-slate-300 ml-3 sm:ml-4 mt-1 whitespace-nowrap">Cybersecurity Engineer</div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  // Changed to TRUE so Dark Mode is the default
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync dark mode state with HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Reordered sections to match new layout
      const sections = ['home', 'education', 'experience', 'publications', 'awards', 'certifications', 'projects', 'skills', 'extracurricular'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close menu when item is clicked on mobile
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-700 dark:text-slate-300 selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300 overflow-x-hidden">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="font-bold text-xl text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
              AM<span className="text-indigo-600 dark:text-indigo-500">.</span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6">
              {['Home', 'Education', 'Experience', 'Publications', 'Awards', 'Certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2">
                  <span>More</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-0 w-44 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                  {['Projects', 'Skills', 'Extracurricular'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollTo(item.toLowerCase())}
                      className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                        activeSection === item.toLowerCase() 
                          ? 'text-indigo-600 dark:text-indigo-400' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Contact Me Dropdown (Desktop) */}
              <div className="hidden lg:block relative group">
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-md transition-colors shadow-sm">
                  Contact Me
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                  <a href={`mailto:${DATA.personal.email}`} className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <Mail size={16} className="mr-2" /> Email Me
                  </a>
                  <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <Linkedin size={16} className="mr-2" /> Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-lg px-6 py-4 flex flex-col space-y-4 transition-colors duration-300">
              {['Home', 'Education', 'Experience', 'Publications', 'Awards', 'Certifications', 'Projects', 'Skills', 'Extracurricular'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-left text-base font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Contact Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a 
                  href={`mailto:${DATA.personal.email}`}
                  className="flex items-center justify-center px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-md transition-colors shadow-sm"
                >
                  <Mail size={16} className="mr-2" /> Email
                </a>
                <a 
                  href={DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-bold rounded-md transition-colors shadow-sm"
                >
                  <Linkedin size={16} className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
                {DATA.personal.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                {DATA.personal.headline}
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl transition-colors duration-300">
                {DATA.personal.summary}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${DATA.personal.email}`} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md">
                  <Mail size={18} />
                  <span>{DATA.personal.email}</span>
                </a>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
                  <MapPin size={18} />
                  {/* <span>Taipei, Taiwan</span> */}
                </div>
              </div>
            </div>

            {/* Terminal Graphic */}
            <div className="w-full max-w-sm md:w-2/5 md:flex-shrink-0">
              <TerminalGraphic />
            </div>

          </div>
        </section>

        {/* Education Section */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="grid gap-6">
            {DATA.education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden transition-colors duration-300">
                <div className="absolute -right-10 -top-10 opacity-10">
                  <GraduationCap size={200} />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full font-semibold border border-indigo-500/30">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xl text-slate-300 mb-4">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                      <span className="block text-sm text-slate-400 mb-1">GPA</span>
                      <span className="font-bold text-lg text-emerald-400">{edu.gpa}</span>
                    </div>
                    <div className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                      <span className="block text-sm text-slate-400 mb-1">Concentration</span>
                      <span className="font-bold text-lg text-blue-400">Cloud Computing</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Professional & Academic Experience" icon={Briefcase}>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-indigo-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 transition-colors duration-300">
                  {exp.type === 'Academic' ? <GraduationCap size={16} /> : <Shield size={16} />}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-indigo-200 dark:group-hover:border-indigo-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{exp.period}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${exp.type === 'Academic' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'}`}>
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300">{roleText(exp.role)}</h3>
                  <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        <ChevronRight size={16} className="shrink-0 text-indigo-400 dark:text-indigo-500 mt-0.5 mr-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Research & Publications" icon={BookOpen}>
          <div className="grid gap-6">
            {DATA.publications.map((pub, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded-md transition-colors duration-300">
                        <FileText size={14} />
                        {pub.type}
                      </span>
                      <span>{pub.publisher}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-bold transition-colors duration-300">
                      {pub.date}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards" icon={Award}>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.awards.map((award, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg transition-colors duration-300">
                    <Award size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 transition-colors duration-300">{award.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{award.title}</h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3 transition-colors duration-300">{award.issuer}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors duration-300">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Grid */}
        <Section id="certifications" title="Certifications" icon={Shield}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA.certifications.map((cert, idx) => (
              <div key={idx} className="flex flex-col bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm transition-colors duration-300">{cert.name}</h4>
                <div className="mt-auto flex justify-between items-center text-xs font-medium text-slate-500 dark:text-slate-400 pt-3 transition-colors duration-300">
                  <span>{cert.issuer}</span>
                  <span className={cert.date === 'In Progress' ? 'text-amber-500 dark:text-amber-400' : ''}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects & Write-ups Section */}
        <Section id="projects" title="Projects & Write-ups" icon={FolderGit2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold transition-colors duration-300">
                    {project.tech}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Skills Section */}
        <Section id="skills" title="Technical Skills" icon={Code}>
          <div className="grid md:grid-cols-3 gap-6">
            {DATA.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, iIdx) => (
                    <span key={iIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Extracurricular Activities */}
        <Section id="extracurricular" title="Extracurricular Activities" icon={Users}>
          <div className="grid md:grid-cols-3 gap-6">
            {DATA.extracurricular.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block transition-colors duration-300">{item.period}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{item.role}</h3>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 transition-colors duration-300">{item.organization}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 mt-20 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="flex justify-center gap-6 mb-8">
              <a href={`mailto:${DATA.personal.email}`} className="p-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

// Helper to style specific words in roles
function roleText(role) {
  return role.split(' ').map((word, i) => {
    if (['Consultant', 'Researcher', 'Assistant'].includes(word)) {
      return <span key={i} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300">{word} </span>;
    }
    return word + ' ';
  });
}