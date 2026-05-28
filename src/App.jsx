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
    scholar: "https://scholar.google.com/citations?user=Zuv217sAAAAJ&hl=en", 
    nationality: "Taiwanese",
    summary: ""
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "King Fahd University Of Petroleum & Minerals (KFUPM)",
      period: "2023",
      details: "Major Concentration: Cloud Computing"
    }
  ],
  publications: [
    {
      title: "Improving Intrusion Detection System Accuracy Through PCA-Based Feature Reduction and Machine Learning Techniques",
      publisher: "IEEE Cyber-AI: International Conference on Cybersecurity and AI-Based Systems",
      date: "Sep 2025", 
      type: "Conference Paper",
      description: "Applied PCA-based feature reduction and fast-training machine learning algorithms to optimize anomaly-based Intrusion Detection Systems (IDS), enhancing accuracy rates while ensuring rapid model training."
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
      role: "Cybersecurity Engineer",
      company: "Ingram Micro",
      period: "Aug 2024 - Mar 2026",
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
    { name: "IELTS Academic (Overall Score: 7.0)", issuer: "IELTS", date: "Jun 2025" },
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
      category: "Cybersecurity & Cloud Computing",
      items: ["Penetration Testing", "Vulnerability Assessment", "Endpoint Security", "WAF", "AWS", "GCP", "Docker"]
    },
    {
      category: "Systems & Programming",
      items: ["Python", "Java", "GOlang", "C/C++", "Linux", "Bash", "API Integration", "Streamlit", "Automation Workflows"]
    },
    {
      category: "AI & Embedded Systems",
      items: ["Machine Learning", "PCA", "Jetson Nano", "Edge Computing", "ARM Assembly"]
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
  ]
};

// --- COMPONENTS ---

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-12 md:py-16 relative border-b border-slate-200/50 dark:border-slate-800/50 last:border-0 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center space-x-3 mb-8 md:mb-10">
        <div className="p-2.5 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-colors duration-300">
          <Icon size={22} strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300 tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const TerminalGraphic = () => (
  <div className="relative w-full aspect-[4/5] sm:aspect-[5/4] max-w-[360px] mx-auto rounded-xl border border-slate-300/50 dark:border-slate-700/50 shadow-2xl overflow-hidden flex flex-col group bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-500/30">
    
    {/* Terminal Header */}
    <div className="h-8 w-full bg-slate-100 dark:bg-[#1e293b] flex items-center px-3 border-b border-slate-200 dark:border-slate-700/50 transition-colors">
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_5px_rgba(244,63,94,0.5)]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
      </div>
      <div className="mx-auto text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 select-none">
        amer@mosally:~
      </div>
    </div>

    {/* Terminal Body */}
    <div className="flex-1 p-4 sm:p-5 relative overflow-hidden flex flex-col justify-center text-left">
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <Shield size={160} strokeWidth={1} className="text-cyan-500" />
      </div>

      <div className="relative z-10 space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
          <span className="text-pink-500 font-bold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="text-slate-700 dark:text-slate-200">whoami</span>
          <div className="text-emerald-600 dark:text-emerald-400 ml-2 sm:ml-3 mt-1.5 flex items-center">
            <ChevronRight size={12} className="mr-1" />
            amer_mosally
          </div>
        </div>
        
        <div className="transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
          <span className="text-pink-500 font-bold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="text-slate-700 dark:text-slate-200">cat skills.txt</span>
          <div className="text-blue-600 dark:text-blue-400 ml-2 sm:ml-3 mt-1.5 leading-relaxed">
            <div className="flex items-center"><ChevronRight size={12} className="mr-1" /> Cybersecurity</div>
            <div className="flex items-center"><ChevronRight size={12} className="mr-1" /> Penetration Testing</div>
            <div className="flex items-center"><ChevronRight size={12} className="mr-1" /> Cloud Security</div>
          </div>
        </div>

        <div className="transform group-hover:translate-x-1 transition-transform duration-300 delay-150">
          <span className="text-pink-500 font-bold">root@sys</span>
          <span className="text-slate-400">:</span>
          <span className="text-cyan-600 dark:text-cyan-400">~</span>
          <span className="text-slate-400 mr-2">$</span>
          <span className="w-1.5 h-4 bg-slate-400 dark:bg-slate-200 inline-block align-middle animate-pulse ml-1"></span>
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

  // Sync dark mode state with HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll events for navbar style and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Reordered so scroll spy detects sections in exact visual order
      const sections = ['home', 'education', 'experience', 'publications', 'skills', 'projects', 'certifications', 'awards', 'extracurricular'];
      const scrollPosition = window.scrollY + 250;

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
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] font-sans text-slate-700 dark:text-slate-300 selection:bg-cyan-200 dark:selection:bg-cyan-900/50 selection:text-cyan-900 dark:selection:text-cyan-100 transition-colors duration-300 overflow-x-hidden relative">
      
      {/* Background Cyber Grid & Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#030712]/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          
          <div className="font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tighter flex items-center gap-1 cursor-pointer" onClick={() => scrollTo('home')}>
            <Shield className="text-cyan-600 dark:text-cyan-400" size={22} />
            <span>AM<span className="text-cyan-600 dark:text-cyan-400">.</span></span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-100/50 dark:bg-slate-800/30 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
            {['Home', 'Education', 'Experience', 'Publications', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-800 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group px-1">
              <button className="flex items-center space-x-1 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all">
                <span>More</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 translate-y-2 group-hover:translate-y-0">
                {['Projects', 'Certifications', 'Awards', 'Extracurricular'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={`text-left px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      activeSection === item.toLowerCase() 
                        ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-all duration-300 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Desktop Contact Button */}
            <a 
              href={`mailto:${DATA.personal.email}`}
              className="hidden lg:flex items-center space-x-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <Mail size={14} />
              <span>Let's Talk</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors border border-slate-200 dark:border-slate-700"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-4 flex flex-col space-y-1.5 transition-all duration-300 max-h-[80vh] overflow-y-auto">
            {['Home', 'Education', 'Experience', 'Publications', 'Skills', 'Projects', 'Certifications', 'Awards', 'Extracurricular'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a 
                href={`mailto:${DATA.personal.email}`}
                className="flex items-center justify-center px-4 py-2.5 bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-900 text-sm font-bold rounded-xl transition-all shadow-md"
              >
                <Mail size={14} className="mr-2" /> Email
              </a>
              <a 
                href={DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-bold rounded-xl transition-colors shadow-md"
              >
                <Linkedin size={14} className="mr-2" /> LinkedIn
              </a>
              <a 
                href={DATA.personal.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors shadow-md"
              >
                <GraduationCap size={14} className="mr-2" /> Scholar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-10 md:pt-36 md:pb-14 px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                {DATA.personal.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-bold">
              {DATA.personal.headline}
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {DATA.personal.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a href={`mailto:${DATA.personal.email}`} className="flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
              <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-5 py-2.5 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm">
                <Linkedin size={16} className="text-[#0a66c2] dark:text-[#70b5f9]" />
                <span>LinkedIn</span>
              </a>
              <a href={DATA.personal.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-5 py-2.5 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm">
                <GraduationCap size={16} className="text-slate-700 dark:text-slate-300" />
                <span>Google Scholar</span>
              </a>
              <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 px-3 py-2 text-sm font-medium">
                <MapPin size={16} />
                <span>Saudi Arabia / Taiwan</span>
              </div>
            </div>
          </div>

          {/* Terminal Graphic */}
          <div className="w-full max-w-[340px] lg:w-[40%] lg:flex-shrink-0 relative mt-4 lg:mt-0">
            <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl rounded-[3rem] -z-10"></div>
            <TerminalGraphic />
          </div>

        </div>
      </section>

      {/* Education Section */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="grid gap-5">
          {DATA.education.map((edu, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#0f172a] dark:to-[#020617] text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden border border-slate-700 dark:border-slate-800 group hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-cyan-500/20 rounded-full blur-[60px] group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
              
              <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <GraduationCap size={200} />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">{edu.degree}</h3>
                  <span className="px-3 py-1.5 text-sm bg-cyan-500/20 text-cyan-300 rounded-full font-bold border border-cyan-500/30 backdrop-blur-sm whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-base sm:text-lg text-slate-300 font-medium">{edu.institution}</p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="bg-slate-950/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/50">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Concentration</span>
                    <span className="font-extrabold text-lg text-blue-400 block">{edu.details.replace('Major Concentration: ', '')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" icon={Briefcase}>
        <div className="relative pl-3 sm:pl-0 before:hidden sm:before:block before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/50 before:to-transparent">
          <div className="space-y-8 md:space-y-10">
            {DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start group">
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden sm:flex absolute left-0 mt-1.5 items-center justify-center w-8 h-8 rounded-full border-[3px] border-slate-50 dark:border-[#030712] bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 transition-transform duration-300 group-hover:scale-110">
                  {exp.type === 'Academic' ? <GraduationCap size={14} /> : <Shield size={14} />}
                </div>

                {/* Content Card */}
                <div className="sm:ml-12 w-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10 transition-all duration-300 group-hover:border-cyan-300/50 dark:group-hover:border-cyan-700/50 group-hover:-translate-y-1 relative overflow-hidden">
                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3 gap-2 lg:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-1.5">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full">{exp.period}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${exp.type === 'Academic' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20' : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-left text-sm text-slate-600 dark:text-slate-300">
                        <ChevronRight size={16} className="shrink-0 text-cyan-500 mt-[3px] mr-2.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Research & Publications" icon={BookOpen}>
        <div className="grid gap-5">
          {DATA.publications.map((pub, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              
              {/* Left Accent Bar */}
              <div className="hidden md:block absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-3 lg:gap-4">
                <div className="lg:w-3/4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{pub.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">{pub.publisher}</p>
                </div>
                
                <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                  <span className="inline-flex px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider rounded-full text-[11px] font-bold shadow-sm border border-slate-200 dark:border-slate-700/50">
                    {pub.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-cyan-100 dark:border-cyan-500/20">
                    <FileText size={14} />
                    {pub.type}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pub.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Grid */}
      <Section id="skills" title="Technical Skills" icon={Code}>
        <div className="grid md:grid-cols-3 gap-5">
          {DATA.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-5 lg:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-cyan-200 dark:hover:border-cyan-800/50 group">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-[3px] bg-cyan-500 rounded-full mr-2.5 group-hover:w-10 transition-all duration-300"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1 bg-slate-100 dark:bg-[#030712] text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300 cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects & Architecture" icon={FolderGit2}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {DATA.projects.map((project, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
              {/* Decorative top-right corner */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              
              <div className="mb-4 relative z-10">
                <FolderGit2 size={28} className="text-slate-300 dark:text-slate-700 mb-3 group-hover:text-cyan-500 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.split(', ').map((tech, tIdx) => (
                    <span key={tIdx} className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-[11px] font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow relative z-10">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications Grid */}
      <Section id="certifications" title="Certifications" icon={Shield}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA.certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-cyan-400/50 dark:hover:border-cyan-600/50 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h4>
                <Shield size={18} className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-cyan-500 transition-colors" />
              </div>
              <div className="mt-auto flex justify-between items-center text-[11px] font-bold pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400">{cert.issuer}</span>
                <span className={`px-2 py-1 rounded-md ${cert.date === 'In Progress' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section id="awards" title="Honors & Awards" icon={Award}>
        <div className="grid md:grid-cols-2 gap-5">
          {DATA.awards.map((award, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group flex gap-4">
              <div className="shrink-0">
                <div className="p-3 bg-amber-100/50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-200/50 dark:border-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Award size={24} strokeWidth={2} />
                </div>
              </div>
              <div>
                <span className="inline-block text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">{award.date}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{award.title}</h3>
                <p className="text-xs font-bold text-amber-600 dark:text-amber-500 mb-2.5">{award.issuer}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Extracurricular Activities */}
      <Section id="extracurricular" title="Leadership & Extracurricular" icon={Users}>
        <div className="grid md:grid-cols-3 gap-5">
          {DATA.extracurricular.map((item, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2.5 block">{item.period}</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">{item.role}</h3>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">{item.organization}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#030712] text-slate-500 dark:text-slate-400 py-10 md:py-12 border-t border-slate-200 dark:border-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-2.5 bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl mb-5 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <Shield size={26} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Let's build something secure.</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href={`mailto:${DATA.personal.email}`} className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-bold transition-all shadow-sm">
              <Mail size={16} /> Email Me
            </a>
            <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-bold transition-all shadow-sm">
              <Linkedin size={16} className="text-[#0a66c2] dark:text-[#70b5f9]" /> Connect
            </a>
            <a href={DATA.personal.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-bold transition-all shadow-sm">
              <GraduationCap size={16} /> Google Scholar
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pt-6 border-t border-slate-100 dark:border-slate-800/50 text-xs font-medium">
            <p>© {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}