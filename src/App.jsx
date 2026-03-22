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
  Server
} from 'lucide-react';

// --- DATA ---
const DATA = {
  personal: {
    name: "Amer Mosally",
    headline: "Cybersecurity Consultant & Computer Science Researcher",
    email: "amer.mosally@gmail.com",
    phone: "+966590520182",
    linkedin: "LinkedIn", // Update with actual URL if needed
    nationality: "Taiwanese",
    summary: "Research-oriented Professional Services Consultant and published author specializing in emerging security paradigms. Co-authored a CRC Press book on Post-Quantum Cryptography and published an IEEE conference paper on enhancing intrusion detection via machine learning. Expert in automating security operations, backed by a strong technical foundation in programming and penetration testing. Currently seeking a Master's in Computer Science to further research in intelligent secure systems."
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "King Fahd University Of Petroleum & Minerals (KFUPM)",
      period: "2018 - 2023",
      gpa: "3.68/4.00",
      details: "Major Concentration: Cloud Computing"
    }
  ],
  publications: [
    {
      title: "Improving Intrusion Detection System Accuracy Through PCA-Based Feature Reduction and Machine Learning Techniques",
      publisher: "IEEE Cyber-AI: International Conference on Cybersecurity and AI-Based Systems",
      date: "Sep 2024", // Adjusted from 2025/09 to make chronological sense based on resume context
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
        "Architected and deployed secure cybersecurity solutions for the Ministry of Health in Saudi Arabia, managing the entire lifecycle from design to optimization.",
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
        "Executed comprehensive security assessments and identified misconfigurations, recommending specific policy enhancements."
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
  ]
};

// --- COMPONENTS ---

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-20 border-b border-slate-200/60 last:border-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex items-center space-x-3 mb-12">
        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-700">
          <Icon size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'publications', 'experience', 'education', 'awards', 'certifications'];
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
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900 tracking-tight">
            AM<span className="text-indigo-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Publications', 'Experience', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activeSection === item.toLowerCase() ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => window.open(`mailto:${DATA.personal.email}`)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Prospective Master's Student</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {DATA.personal.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {DATA.personal.headline}
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {DATA.personal.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={`mailto:${DATA.personal.email}`} className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm hover:shadow-md">
                <Mail size={18} />
                <span>{DATA.personal.email}</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <MapPin size={18} />
                <span>Saudi Arabia / Taiwan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section (Prioritized for Academic Application) */}
      <Section id="publications" title="Research & Publications" icon={BookOpen}>
        <div className="grid gap-6">
          {DATA.publications.map((pub, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pub.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                      <FileText size={14} />
                      {pub.type}
                    </span>
                    <span>{pub.publisher}</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold">
                    {pub.date}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {pub.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional & Academic Experience" icon={Briefcase}>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-indigo-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                {exp.type === 'Academic' ? <GraduationCap size={16} /> : <Shield size={16} />}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group-hover:border-indigo-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{exp.period}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${exp.type === 'Academic' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{roleText(exp.role)}</h3>
                <h4 className="text-md font-medium text-slate-600 mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-slate-600">
                      <ChevronRight size={16} className="shrink-0 text-indigo-400 mt-0.5 mr-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="grid gap-6">
          {DATA.education.map((edu, idx) => (
            <div key={idx} className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
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
                  <div className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
                    <span className="block text-sm text-slate-400 mb-1">GPA</span>
                    <span className="font-bold text-lg text-emerald-400">{edu.gpa}</span>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
                    <span className="block text-sm text-slate-400 mb-1">Concentration</span>
                    <span className="font-bold text-lg text-blue-400">Cloud Computing</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards & Projects */}
      <Section id="awards" title="Awards & Technical Projects" icon={Award}>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.awards.map((award, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Award size={20} />
                </div>
                <span className="text-sm font-bold text-slate-500">{award.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>
              <p className="text-sm font-medium text-indigo-600 mb-3">{award.issuer}</p>
              <p className="text-slate-600 leading-relaxed text-sm">
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
            <div key={idx} className="flex flex-col bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-slate-800 mb-1 text-sm">{cert.name}</h4>
              <div className="mt-auto flex justify-between items-center text-xs font-medium text-slate-500 pt-3">
                <span>{cert.issuer}</span>
                <span className={cert.date === 'In Progress' ? 'text-amber-500' : ''}>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${DATA.personal.email}`} className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors">
              <Mail size={24} />
            </a>
            {/* Replace # with your actual linkedin URL */}
            <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.<br/>
            Designed for Master's Program Application.
          </p>
        </div>
      </footer>

    </div>
  );
}

// Helper to style specific words in roles
function roleText(role) {
  return role.split(' ').map((word, i) => {
    if (['Consultant', 'Researcher', 'Assistant'].includes(word)) {
      return <span key={i} className="text-indigo-600">{word} </span>;
    }
    return word + ' ';
  });
}