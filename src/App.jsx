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
  ChevronDown,
  ExternalLink
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
    summary: "Research-oriented Cybersecurity Engineer specializing in architecting secure, high-performance systems. Passionate about bridging the gap between practice and theory by developing inherently secure, cloud-native architectures that mitigate the observability-latency tradeoff. Co-authored a CRC Press book on Post-Quantum Cryptography and published an IEEE paper on optimizing IDS accuracy through PCA-based feature reduction."
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "King Fahd University Of Petroleum & Minerals (KFUPM)",
      period: "2019 - 2023",
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
      role: "Cybersecurity Professional Services Engineer",
      company: "Ingram Micro",
      period: "Aug 2024 - Present",
      type: "Industry",
      bullets: [
        "Architected and deployed secure cybersecurity solutions for the Ministry of Health, managing the entire lifecycle from design to optimization.",
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
      date: "Aug 2018",
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
      items: ["Python", "Java", "C/C++", "Bash", "API Integration", "Streamlit", "Automation Workflows"]
    },
    {
      category: "AI & Embedded Systems",
      items: ["Machine Learning", "PCA", "Jetson Nano", "Edge Computing", "IoT (LoRa)", "ARM Assembly"]
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
  <section id={id} className="py-16 md:py-24 relative border-b border-slate-200/50 dark:border-slate-800/50 last:border-0 transition-colors duration-300 scroll-mt-20">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="flex items-center space-x-4 mb-10 md:mb-14">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300" aria-hidden="true">
          <Icon size={24} strokeWidth={2} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const TerminalGraphic = () => (
  <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col bg-white dark:bg-slate-950 transition-all duration-500 hover:shadow-2xl hover:border-cyan-500/30">
    {/* Terminal Header */}
    <div className="h-10 w-full bg-slate-50 dark:bg-slate-900 flex items-center px-4 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-rose-500 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-amber-500 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-emerald-500 transition-colors cursor-pointer"></div>
      </div>
      <div className="mx-auto text-xs font-mono font-medium text-slate-400 select-none">
        amer@mosally:~
      </div>
    </div>

    {/* Terminal Body */}
    <div className="flex-1 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-center text-left">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <Shield size={180} strokeWidth={1} />
      </div>

      <div className="relative z-10 space-y-4 font-mono text-sm">
        <div className="animate-fade-in-up">
          <span className="text-rose-500 font-semibold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="text-slate-700 dark:text-slate-200">whoami</span>
          <div className="text-emerald-600 dark:text-emerald-400 ml-3 mt-2 flex items-center font-medium">
            <ChevronRight size={14} className="mr-1 opacity-70" />
            amer_mosally
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <span className="text-rose-500 font-semibold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="text-slate-700 dark:text-slate-200">cat core_focus.txt</span>
          <div className="text-blue-600 dark:text-blue-400 ml-3 mt-2 leading-relaxed font-medium space-y-1">
            <div className="flex items-center"><ChevronRight size={14} className="mr-1 opacity-70" /> Secure Architecture</div>
            <div className="flex items-center"><ChevronRight size={14} className="mr-1 opacity-70" /> Threat Mitigation</div>
            <div className="flex items-center"><ChevronRight size={14} className="mr-1 opacity-70" /> Workflow Automation</div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <span className="text-rose-500 font-semibold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="w-2 h-4 bg-slate-400 dark:bg-slate-500 inline-block align-middle animate-pulse ml-1"></span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'education', 'experience', 'publications', 'skills', 'projects', 'certifications', 'awards', 'extracurricular'];
      const scrollPosition = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-600 dark:text-slate-400 selection:bg-cyan-200 dark:selection:bg-cyan-900/60 selection:text-cyan-900 dark:selection:text-cyan-50 transition-colors duration-300">
      
      {/* Background Ambience (Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          
          <button 
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
            aria-label="Scroll to home"
          >
            <Shield className="text-cyan-600 dark:text-cyan-500 transition-transform group-hover:scale-110" size={24} strokeWidth={2.5} aria-hidden="true" />
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">AM<span className="text-cyan-600 dark:text-cyan-500">.</span></span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/50 dark:bg-slate-900/50 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm shadow-sm">
            {['Home', 'Education', 'Experience', 'Publications', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative group px-1">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                <span>More</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2 translate-y-2 group-hover:translate-y-0">
                {['Projects', 'Certifications', 'Awards', 'Extracurricular'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={`text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      activeSection === item.toLowerCase() 
                        ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          <div className="flex items-center space-x-3 md:space-x-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-900 rounded-full transition-all border border-slate-200 dark:border-slate-800 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href={`mailto:${DATA.personal.email}`}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-sm font-semibold rounded-full transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 outline-none"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Let's Talk</span>
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-full transition-colors border border-slate-200 dark:border-slate-800 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
          <nav className="px-6 flex flex-col space-y-1 overflow-y-auto">
            {['Home', 'Education', 'Experience', 'Publications', 'Skills', 'Projects', 'Certifications', 'Awards', 'Extracurricular'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
            
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a 
                href={`mailto:${DATA.personal.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 text-sm font-semibold rounded-xl transition-all"
              >
                <Mail size={16} /> Email
              </a>
              <a 
                href={DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                  Hi, I'm <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                    {DATA.personal.name}
                  </span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium tracking-tight">
                  {DATA.personal.headline}
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {DATA.personal.summary}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a 
                  href={`mailto:${DATA.personal.email}`} 
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-full text-sm font-semibold transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>Contact Me</span>
                </a>
                <a 
                  href={DATA.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
                >
                  <Linkedin size={18} className="text-[#0a66c2] dark:text-[#70b5f9]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 px-2 py-2 text-sm font-medium">
                  <MapPin size={18} aria-hidden="true" />
                  <span>Taiwan</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[400px] lg:w-5/12 shrink-0">
              <TerminalGraphic />
            </div>

          </div>
        </section>

        {/* Education Section */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="grid gap-6">
            {DATA.education.map((edu, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-cyan-200 dark:hover:border-cyan-800/50 transition-colors">
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{edu.degree}</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400">{edu.institution}</p>
                  <div className="inline-flex items-center px-3 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-2">Concentration</span>
                    <span className="text-sm font-bold text-cyan-600 dark:text-cyan-500">{edu.details.replace('Major Concentration: ', '')}</span>
                  </div>
                </div>
                <time className="shrink-0 px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-800">
                  {edu.period}
                </time>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12 md:space-y-16">
            {DATA.experience.map((exp, idx) => (
              <article key={idx} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 transition-colors duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50">{exp.role}</h3>
                    <p className="text-base font-medium text-cyan-600 dark:text-cyan-500 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <time className="text-sm font-semibold text-slate-500 dark:text-slate-400">{exp.period}</time>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${exp.type === 'Academic' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500'}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      <ChevronRight size={18} className="shrink-0 text-slate-300 dark:text-slate-600 mt-0.5 mr-3" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications" icon={BookOpen}>
          <div className="grid gap-6">
            {DATA.publications.map((pub, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-48 shrink-0 flex flex-col items-start gap-3">
                  <time className="px-3 py-1.5 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold">
                    {pub.date}
                  </time>
                  <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-500 text-sm font-medium">
                    <FileText size={16} aria-hidden="true" />
                    {pub.type}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 leading-snug">{pub.title}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{pub.publisher}</p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technical Skills" icon={Code}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  {skillGroup.category}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item, iIdx) => (
                    <li key={iIdx} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects & Architecture" icon={FolderGit2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                <div className="mb-5 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 group-hover:border-cyan-100 dark:group-hover:border-cyan-900/50 transition-colors">
                      <FolderGit2 size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.tech.split(', ').map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Certifications & Awards Combined for Better Flow */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 max-w-5xl mx-auto px-6">
          
          <section id="certifications" className="py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-cyan-600 dark:text-cyan-500" size={24} aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Certifications</h2>
            </div>
            <div className="space-y-4">
              {DATA.certifications.map((cert, idx) => (
                <article key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm gap-3 hover:border-cyan-200 dark:hover:border-cyan-800/50 transition-colors">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{cert.name}</h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                  <time className={`shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide ${cert.date === 'In Progress' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400'}`}>
                    {cert.date}
                  </time>
                </article>
              ))}
            </div>
          </section>

          <section id="awards" className="py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-cyan-600 dark:text-cyan-500" size={24} aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Honors & Awards</h2>
            </div>
            <div className="space-y-6">
              {DATA.awards.map((award, idx) => (
                <article key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-5">
                  <div className="shrink-0 mt-1">
                    <Award className="text-amber-500" size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-1">{award.title}</h3>
                    <div className="flex items-center gap-3 mb-3 text-xs font-medium">
                      <span className="text-amber-600 dark:text-amber-500">{award.issuer}</span>
                      <span className="text-slate-300 dark:text-slate-600">&bull;</span>
                      <time className="text-slate-500 dark:text-slate-400">{award.date}</time>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>

        {/* Extracurricular Section */}
        <Section id="extracurricular" title="Leadership & Extracurricular" icon={Users}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.extracurricular.map((item, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <time className="text-xs font-semibold text-cyan-600 dark:text-cyan-500 uppercase tracking-wider mb-3 block">{item.period}</time>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">{item.role}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">{item.organization}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 py-12 md:py-16 border-t border-slate-200 dark:border-slate-800 mt-12 relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <Shield className="mx-auto text-slate-300 dark:text-slate-700 mb-6" size={32} strokeWidth={1.5} aria-hidden="true" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 tracking-tight">Let's build secure architectures together.</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href={`mailto:${DATA.personal.email}`} 
              className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
            >
              <Mail size={18} aria-hidden="true" /> Email Me
            </a>
            <a 
              href={DATA.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
            >
              <Linkedin size={18} className="text-[#0a66c2] dark:text-[#70b5f9]" aria-hidden="true" /> Connect on LinkedIn
            </a>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built for Web Accessibility</p>
          </div>
        </div>
      </footer>

    </div>
  );
}