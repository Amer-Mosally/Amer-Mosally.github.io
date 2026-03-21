import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, Linkedin, MapPin, Briefcase, 
  GraduationCap, Award, BookOpen, Shield, 
  Terminal, ChevronRight, ExternalLink, Code
} from 'lucide-react';

// --- Data based on CV ---
const cvData = {
  personal: {
    name: "Amer Mosally",
    title: "Cybersecurity Professional Services Consultant & Researcher",
    email: "amer.mosally@gmail.com",
    phone: "+966 590 520 182",
    linkedin: "LinkedIn",
    location: "Riyadh, Saudi Arabia",
    profile: "Research-oriented Professional Services Consultant and published author specializing in emerging security paradigms. Co-authored a CRC Press book on Post-Quantum Cryptography and published an IEEE conference paper on enhancing intrusion detection via machine learning. Expert in automating security operations with a strong technical foundation in networks, containers, and penetration testing. Seeking a MMath in Computer Science at the University of Waterloo with a research interest in mobile and systems security."
  },
  experience: [
    {
      role: "Cybersecurity Professional Services Consultant",
      company: "Ingram Micro",
      period: "2024/08 - Present",
      description: [
        "Architected and deployed secure cybersecurity solutions for the Ministry of Health in Saudi Arabia, managing the entire lifecycle from design to optimization, significantly improving web and network security posture.",
        "Developed automation workflows using Python and APIs to orchestrate investigative workflows and routine security tasks, reducing manual deployment and response effort by 90%."
      ]
    },
    {
      role: "Cybersecurity Engineer Intern",
      company: "Trend Micro",
      period: "2024/01 - 2024/07",
      description: [
        "Implemented and managed Apex One and Deep Security to protect servers and endpoints against advanced malware and unauthorized access.",
        "Executed comprehensive security assessments and identified misconfigurations, recommending specific policy enhancements that optimized client defense-in-depth strategies."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "KAUST Academy",
      period: "2024/01 - 2024/03",
      description: [
        "Delivered and helped in designing technical training curricula to over 100 participants, translating complex theoretical concepts into practical lab exercises."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "King Fahd University of Petroleum and Minerals (KFUPM)",
      period: "2023/08 - 2024/01",
      description: [
        "Delivered a comprehensive practical lab course on embedded systems and microcontroller programming (C/C++)."
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "Intelligent Secure Systems Center",
      period: "2023/02 - 2023/06",
      description: [
        "Worked on an edge-based video analytics system using Jetson Nano and AI-based models for real-time vehicle detection."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Safseer",
      period: "2022/06 - 2022/08",
      description: [
        "Develop a web application using Streamlit framework for IoT devices that use LoRa technology."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "King Fahd University Of Petroleum & Minerals",
      period: "2018 - 2023",
      details: "Major Concentration: Cloud Computing | GPA: 3.68/4.00"
    }
  ],
  publications: [
    {
      title: "Improving Intrusion Detection System Accuracy Through PCA-Based Feature Reduction and Machine Learning Techniques",
      publisher: "IEEE Cyber-AI: International Conference on Cybersecurity and AI-Based Systems",
      date: "2025/09",
      description: "A peer-reviewed paper presenting a data processing and machine learning approach to improving anomaly-based Intrusion Detection Systems (IDS)."
    },
    {
      title: "Quantum Computing: A Journey into the Next Frontier of Information and Communication Security",
      publisher: "CRC Press, Taylor & Francis Group",
      date: "2024/12",
      description: "Co-authored a book on Post-Quantum Cryptography (PQC), analyzing principal algorithm families and highlighting NIST role in cryptographic standardization."
    }
  ],
  certifications: [
    { name: "CPTS - Certified Penetration Testing Specialist", issuer: "Hack The Box", date: "In progress" },
    { name: "Trend Vision One Cloud Security Advanced", issuer: "Trend Micro", date: "2025/05" },
    { name: "FortiWeb Administrator", issuer: "Fortinet", date: "2025/03" },
    { name: "AWS Certified Solutions Architect Associate", issuer: "Amazon Web Services", date: "2024/09" },
    { name: "Deep Discovery Certified Professional", issuer: "Trend Micro", date: "2024/05" },
    { name: "Deep Security Certificate Professional", issuer: "Trend Micro", date: "2024/03" },
    { name: "Apex One Certified Professional", issuer: "Trend Micro", date: "2024/02" },
    { name: "Supervised Machine Learning", issuer: "Coursera", date: "2024/02" },
    { name: "eJPTv2 - Junior Penetration Tester", issuer: "INE", date: "2024/01" },
    { name: "CCNA - Cisco Certified Network Associate", issuer: "Cisco", date: "2022/08" },
  ],
  awards: [
    {
      title: "Best Entrepreneurial Award - Road Pothole Detection System",
      issuer: "KFUPM",
      date: "2023/05",
      description: "Developed an automated AI-powered road assessment system, deployed a scalable Docker-based pipeline on GCP."
    },
    {
      title: "Merit-Based Full Undergraduate Scholarship",
      issuer: "King Fahd University of Petroleum & Minerals",
      date: "2018/08",
      description: "Selected for a full-ride scholarship covering tuition and living expenses, awarded based on academic excellence."
    }
  ]
};

// --- Components ---

const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-3 bg-cyan-900/30 rounded-lg text-cyan-400">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
    <div className="h-px bg-slate-800 flex-1 ml-6"></div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10 hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs font-medium rounded-full border border-cyan-800/50">
    {children}
  </span>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'publications', 'certifications'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Research' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-white tracking-wider flex items-center gap-2">
            <Shield className="text-cyan-400" size={24} />
            A.MOSALLY
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${activeSection === link.id ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button onClick={() => window.open(`mailto:${cvData.personal.email}`)} className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            Contact Me
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Hello, I am</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                  Amer Mosally.
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-400 font-light mt-2">
                  I secure systems & automate defense.
                </h2>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                {cvData.personal.profile}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${cvData.personal.email}`} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail size={18} /> <span>{cvData.personal.email}</span>
                </a>
                <span className="flex items-center gap-2 text-slate-300">
                  <Phone size={18} /> <span>{cvData.personal.phone}</span>
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <MapPin size={18} /> <span>{cvData.personal.location}</span>
                </span>
                <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                  <Linkedin size={18} /> <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            {/* Visual Element replacing a photo for a more tech/hacker vibe */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-emerald-600/20 rounded-full animate-pulse blur-3xl"></div>
              <div className="absolute inset-0 border border-slate-700 bg-slate-900 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-transparent to-transparent"></div>
                 <Terminal className="text-slate-700 w-32 h-32" />
                 <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 p-3 rounded text-xs font-mono text-cyan-500 border border-slate-800">
                   <p className="text-emerald-500">$ whoami</p>
                   <p>amer_mosally</p>
                   <p className="text-emerald-500 mt-1">$ cat skills.txt</p>
                   <p className="text-slate-400 truncate">Cloud, PenTest, ML</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeading icon={Briefcase} title="Professional Experience" />
          <div className="space-y-6">
            {cvData.experience.map((job, idx) => (
              <Card key={idx} className="relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700 group-hover:bg-cyan-500 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 ml-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-lg text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <Badge>{job.period}</Badge>
                </div>
                <ul className="space-y-3 ml-4">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-slate-400">
                      <ChevronRight size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications">
          <SectionHeading icon={BookOpen} title="Publications & Research" />
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.publications.map((pub, idx) => (
              <Card key={idx} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <Badge>{pub.date}</Badge>
                  <ExternalLink size={20} className="text-slate-500 hover:text-cyan-400 cursor-pointer" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{pub.title}</h3>
                <p className="text-sm font-medium text-cyan-400 mb-4">{pub.publisher}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">{pub.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Dual Section: Certifications & Education/Awards */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <section id="certifications">
            <SectionHeading icon={Shield} title="Certifications" />
            <div className="space-y-4">
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:bg-slate-800/60 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-900 rounded-md">
                      <Code size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{cert.name}</h4>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-500/80">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-16">
            {/* Education */}
            <section id="education">
              <SectionHeading icon={GraduationCap} title="Education" />
              {cvData.education.map((edu, idx) => (
                <Card key={idx}>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-cyan-400 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-slate-400 mb-4">
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-slate-300 bg-slate-900/50 p-3 rounded-md border border-slate-700/50 text-sm">
                    {edu.details}
                  </p>
                </Card>
              ))}
            </section>

            {/* Awards */}
            <section id="awards">
              <SectionHeading icon={Award} title="Awards & Honors" />
              <div className="space-y-4">
                {cvData.awards.map((award, idx) => (
                  <div key={idx} className="border-l-2 border-cyan-500 pl-4 py-1">
                    <h4 className="text-white font-bold">{award.title}</h4>
                    <div className="flex gap-2 text-sm text-slate-400 mb-2">
                      <span>{award.issuer}</span>
                      <span>&bull;</span>
                      <span>{award.date}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center bg-slate-950">
        <p className="text-slate-500 text-sm">
          Designed & Built for Amer Mosally &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}