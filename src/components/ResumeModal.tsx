import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Printer, Copy, Check, Mail, Phone, MapPin, 
  ExternalLink, Github, Award, BookOpen, Brain, Briefcase, FileText
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const resumeData = {
    name: "Sanjith Anumola",
    title: "Vibe Coder & Full-Stack Developer",
    email: "sanjith.anumola@gmail.com",
    phone: "+91 9381259371",
    location: "Hyderabad, India",
    objective: "Passionate and innovative developer with a strong interest in Artificial Intelligence, web development, cybersecurity, and creative digital experiences. Skilled in building modern web applications, AI-powered tools, and interactive projects using cutting-edge technologies.",
    education: {
      degree: "Secondary (X), CBSE",
      completion: "Expected 2027",
      school: "Mount Carmel Global School, Rangareddy",
    },
    skills: [
      "Vibe Coding",
      "Full-Stack Web Development",
      "AI & GenAI Integration (@google/genai)",
      "Interactive Game Development",
      "Cybercrime Awareness & Incident Analysis",
      "Cybersecurity Concepts",
      "Modern UI/UX (Tailwind, motion, etc.)",
      "TypeScript & React Ecosystem"
    ],
    projects: [
      {
        name: "Lexora AI",
        timeline: "May 2026",
        link: "https://lexora-ai-gray.vercel.app/",
        color: "bg-[#6C5CE7]",
        textWhite: true,
        desc: "Developed an AI-powered Law & Order intelligence platform designed to assist users with cybercrime awareness, legal guidance, case analysis, and digital evidence organization. Features a futuristic cyber-themed interface, AI-based incident analysis, interactive reporting workflows, and intelligent legal assistance modules."
      },
      {
        name: "Red Pulse News",
        timeline: "May 2026",
        link: "https://red-pulse-news.vercel.app/",
        color: "bg-[#FF5252]",
        textWhite: true,
        desc: "Developed a modern AI-powered news platform focused on delivering real-time global news updates with a futuristic cyber-inspired interface. Implemented dynamic news categories, responsive layouts, trending news sections, and interactive user experience features with fast and engaging delivery."
      },
      {
        name: "7pace Time Tracker for Azure DevOps",
        timeline: "Jan 2026 - May 2026",
        link: "https://7pace-time-tracker-for-azure-dev-op.vercel.app/",
        color: "bg-[#00E676]",
        textWhite: false,
        desc: "A modern productivity and time-tracking web application inspired by Azure DevOps workflows, designed to help users manage tasks, monitor productivity in real-time, and improve workflow efficiency using a highly clean and interactive dashboard."
      },
      {
        name: "Daily Health Guardian",
        timeline: "Jan 2026 - May 2026",
        link: "https://daily-health-guardian.vercel.app/",
        color: "bg-[#00C2FF]",
        textWhite: false,
        desc: "An AI-powered health monitoring web application that helps users track daily wellness, manage health-related information, and improve daily habits through custom smart digital tracking tools."
      },
      {
        name: "Smart Notes AI",
        timeline: "Sep 2025 - Jan 2026",
        link: "https://smart-notes-ai-ecru.vercel.app/",
        color: "bg-[#FFD600]",
        textWhite: false,
        desc: "Developed an AI-powered note summarization platform that converts lengthy content into concise, structured smart notes, simplifying learning and enhancing study efficiency with cloud deployment solutions."
      }
    ],
    activities: [
      "Built and deployed multiple AI-powered websites & creative web projects independently.",
      "Passionate about futuristic technology, creative coding, cyber safety, and digital innovation.",
      "Continuously learning Artificial Intelligence models, prompt engineering, and core computer science principles."
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
        >
          {/* Custom style injection for beautiful print layout */}
          <style>{`
            @media print {
              body * {
                visibility: hidden;
              }
              #print-resume, #print-resume * {
                visibility: visible;
              }
              #print-resume {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                background: white !important;
                color: black !important;
                box-shadow: none !important;
                border: none !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              .no-print {
                display: none !important;
              }
            }
          `}</style>

          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#FFF9ED] border-4 border-black rounded-[2rem] shadow-[20px_20px_0_0_#000] overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header / Actions Panel */}
            <div className="flex items-center justify-between p-6 border-b-4 border-black bg-[#FF3E81] text-white no-print">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 stroke-[2.5]" />
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Interactive Resume</h2>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-white text-black font-black px-4 py-2 border-3 border-black rounded-xl hover:bg-[#FFD600] text-sm uppercase tracking-wider transition-colors shadow-[3px_3px_0_0_#000]"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 bg-black text-white hover:bg-white hover:text-black hover:rotate-90 border-3 border-black rounded-xl transition-all shadow-[3px_3px_0_0_#000]"
                  id="close-resume-modal-btn"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10 flex-grow" id="print-resume" ref={printAreaRef}>
              
              {/* Profile Top Block */}
              <div className="border-4 border-black bg-white p-6 md:p-8 rounded-3xl shadow-[8px_8px_0_0_#000] mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD600] rounded-bl-full opacity-20 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] mb-1">
                      {resumeData.name}
                    </h1>
                    <p className="text-xl font-bold text-[#FF3E81] mb-4 uppercase tracking-wide">
                      {resumeData.title}
                    </p>
                    
                    {/* Contact Quick Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-3 bg-[#f3f4f6] p-2.5 rounded-xl border-2 border-black group">
                        <Mail className="w-4 h-4 text-[#7C3AED]" />
                        <span className="truncate">{resumeData.email}</span>
                        <button 
                          onClick={() => handleCopy(resumeData.email, "email")}
                          className="ml-auto no-print bg-white p-1 hover:bg-[#FFD600] rounded-md border border-black transition-colors"
                          title="Copy Email"
                        >
                          {copiedText === "email" ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-3 bg-[#f3f4f6] p-2.5 rounded-xl border-2 border-black group">
                        <Phone className="w-4 h-4 text-[#00E676]" />
                        <span>{resumeData.phone}</span>
                        <button 
                          onClick={() => handleCopy(resumeData.phone, "phone")}
                          className="ml-auto no-print bg-white p-1 hover:bg-[#FFD600] rounded-md border border-black transition-colors"
                          title="Copy Phone"
                        >
                          {copiedText === "phone" ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-3 bg-[#f3f4f6] p-2.5 rounded-xl border-2 border-black">
                        <MapPin className="w-4 h-4 text-[#00C2FF]" />
                        <span>{resumeData.location}</span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#f3f4f6] p-2.5 rounded-xl border-2 border-black">
                        <Github className="w-4 h-4 text-black" />
                        <span>github.com/sanjithanumola</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Section for Content split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Objective, Education, Skills */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  
                  {/* Objective */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1">
                      <Brain className="w-5 h-5 text-[#7C3AED]" /> Career Objective
                    </h3>
                    <div className="border-3 border-black p-5 rounded-2xl bg-[#FFD600]/10 font-bold text-sm leading-relaxed text-[#1A1A1A]">
                      {resumeData.objective}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1">
                      <BookOpen className="w-5 h-5 text-[#00C2FF]" /> Education
                    </h3>
                    <div className="border-3 border-black p-5 rounded-2xl bg-[#00C2FF]/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm uppercase text-[#1A1A1A]">
                          {resumeData.education.degree}
                        </span>
                        <span className="bg-[#1A1A1A] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {resumeData.education.completion}
                        </span>
                      </div>
                      <p className="font-bold text-xs text-gray-700 uppercase">
                        {resumeData.education.school}
                      </p>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1">
                      <Award className="w-5 h-5 text-[#00E676]" /> Tech & Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`font-extrabold text-xs uppercase px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] bg-white ${
                            skill === "Vibe Coding" ? "bg-[#FF3E81] text-white" : ""
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vibe Activities block */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1">
                      <Briefcase className="w-5 h-5 text-[#FF9100]" /> Extra Activities
                    </h3>
                    <ul className="flex flex-col gap-2 font-bold text-xs">
                      {resumeData.activities.map((act, i) => (
                        <li key={i} className="flex gap-2.5 items-start p-3 border-2 border-black bg-white rounded-xl shadow-[2px_2px_0_0_#000]">
                          <span className="text-lg leading-none">🚀</span>
                          <span className="leading-snug text-gray-700">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Right Side: Detailed Projects */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 border-b-2 border-black pb-1">
                    <Briefcase className="w-5 h-5 text-[#FF3E81]" /> Projects Developed
                  </h3>

                  <div className="flex flex-col gap-4">
                    {resumeData.projects.map((proj, idx) => (
                      <div 
                        key={proj.name}
                        className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0_0_#000] flex flex-col gap-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className={`w-3.5 h-3.5 rounded-full border border-black ${proj.color}`}></span>
                            <span className="font-extrabold text-base md:text-lg uppercase tracking-tight text-[#1A1A1A]">
                              {proj.name}
                            </span>
                          </div>
                          <span className="bg-[#ffd600] text-black text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider self-start sm:self-center border border-black">
                            {proj.timeline}
                          </span>
                        </div>

                        <p className="font-medium text-xs md:text-sm leading-relaxed text-gray-700">
                          {proj.desc}
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <a 
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-print flex items-center gap-1.5 font-bold text-[10px] uppercase bg-black text-white px-2.5 py-1.5 rounded-lg border border-black hover:bg-white hover:text-black transition-colors"
                          >
                            <span>Launch Live app</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <span className="text-[10px] font-mono text-gray-400 select-all font-semibold">
                            {proj.link.replace("https://", "")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
