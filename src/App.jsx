import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Download, Code2, Database, BrainCircuit, Layers3, Terminal,
  ExternalLink, BriefcaseBusiness, GraduationCap, MapPin, Sparkles
} from 'lucide-react';

const profile = {
  name: 'Chandrasekar A',
  role: 'Python Full-Stack Developer',
  email: 'chandhu192002@gmail.com',
  linkedin: 'https://linkedin.com/in/chandrasekar-a-551049310/',
  github: 'https://github.com/Chandhu192002',
  location: 'Bengaluru, India'
};

const projects = [
  {
    number: '01',
    title: 'AI-First CRM',
    subtitle: 'HCP Interaction Logging',
    description: 'A full-stack CRM experience that uses natural-language input to populate interaction forms and store records, supported by AI-agent tools.',
    stack: ['React.js', 'FastAPI', 'LangGraph', 'Groq LLM', 'SQLAlchemy'],
    accent: 'violet',
    icon: BrainCircuit,
    github: 'https://github.com/Chandhu192002/AIVOA.AI',
    details: 'Resume highlights include interaction logging and editing, history retrieval, follow-up suggestions, task scheduling, and PostgreSQL/MySQL integration.'
  },
  {
    number: '02',
    title: 'Signature Matching',
    subtitle: 'Image similarity application',
    description: 'A Python application that compares two signature images and displays a structural-similarity percentage.',
    stack: ['Python', 'OpenCV', 'SciPy', 'scikit-image'],
    accent: 'orange',
    icon: Layers3,
    github: 'https://github.com/Chandhu192002/Signatureverification',
    details: 'The application supports captured or uploaded signature images and uses structural_similarity from scikit-image.'
  },
  {
    number: '03',
    title: 'Smart Agriculture',
    subtitle: 'Web + IoT concept',
    description: 'A farming-support interface combining web technologies, an IoT soil-monitoring concept, and an AI-based query system.',
    stack: ['React.js', 'JavaScript', 'HTML/CSS', 'IoT'],
    accent: 'green',
    icon: Code2,
    github: 'https://github.com/Chandhu192002/soil_monitoring_dashboard',
    details: 'A smart agriculture project focused on soil monitoring and dashboard visualization.'
  }
];

const skills = [
  { title: 'Programming', icon: Terminal, items: ['Python', 'JavaScript ES6+', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', icon: Code2, items: ['React.js', 'Redux Toolkit', 'Vite', 'Bootstrap', 'Responsive UI'] },
  { title: 'Backend', icon: Layers3, items: ['Flask', 'FastAPI', 'REST APIs', 'SQLAlchemy ORM', 'API Integration'] },
  { title: 'Data & AI', icon: Database, items: ['MySQL', 'PostgreSQL', 'LangGraph', 'Groq LLM', 'AI Agents'] }
];

const experience = [
  {
    date: 'DEC 2025 — MAY 2026',
    role: 'Python Full-Stack Developer',
    company: 'BDreamz Global Solutions Private Limited',
    bullets: [
      'Built an AI-first CRM using LangGraph and Groq LLM to extract information from natural-language input.',
      'Developed the React.js frontend and FastAPI backend with SQLAlchemy database integration.',
      'Engineered AI-agent tools for interaction logging/editing, history retrieval, follow-up suggestions, and task scheduling.'
    ]
  },
  {
    date: 'NOV 2024 — MAR 2025',
    role: 'DevOps Engineering Intern',
    company: 'Rooman Technologies Pvt. Ltd.',
    bullets: [
      'Gained practical exposure to CI/CD workflows, Git, Linux command-line operations, basic deployment activities, and SDLC practices.'
    ]
  },
  {
    date: 'AUG 2023 — OCT 2023',
    role: 'IoT Edge Node & Gateway Intern',
    company: 'Cranes Varsity',
    bullets: [
      'Worked with IoT device setup, configuration, monitoring, and troubleshooting, with foundational exposure to edge computing.'
    ]
  }
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LaptopScene() {
  return (
    <div className="laptop-scene" aria-label="Decorative 3D laptop displaying portfolio interface">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="profile-float" aria-label="Professional portrait of Chandrasekar A">
        <img src="/profile.jpg" alt="Chandrasekar A, Python Full-Stack Developer" />
        <div className="profile-float-caption"><span className="live-dot" /> CHANDRASEKAR A <small>DEVELOPER</small></div>
      </div>
      <div className="laptop-float">
        <div className="laptop-screen">
          <div className="screen-topbar">
            <span className="window-dots"><i /><i /><i /></span>
            <span>chandrasekar.dev</span>
            <span className="screen-lock">● SECURE</span>
          </div>
          <div className="screen-content">
            <div className="screen-kicker"><span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <div className="screen-name">CHANDRA<br/><em>SEKAR.</em></div>
            <div className="screen-role">PYTHON FULL-STACK DEVELOPER</div>
            <div className="screen-lines"><i /><i /><i /></div>
            <div className="screen-tags"><b>PYTHON</b><b>REACT</b><b>AI / LLM</b></div>
          </div>
          <div className="screen-glow" />
        </div>
        <div className="laptop-base">
          <div className="keyboard-grid" />
          <div className="trackpad" />
          <div className="laptop-notch" />
        </div>
      </div>
      <div className="float-chip chip-code"><Code2 size={15} /> Clean code</div>
      <div className="float-chip chip-ai"><Sparkles size={15} /> AI applications</div>
      <div className="scene-caption">PORTFOLIO / 2026 <span>—</span> INDEPENDENTLY BUILT</div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Contact', '#contact']];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Chandrasekar home"><span className="brand-mark">C<span>.</span></span><span>CHANDRASEKAR A</span></a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <Reveal delay={index * 0.08}>
      <article
        className={`project-card ${project.accent}`}
        style={{ cursor: 'pointer' }}
        role="link"
        tabIndex={0}
        aria-label={`Open ${project.title} GitHub repository in a new tab`}
        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.open(project.github, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        <div className="project-top"><span className="mono">{project.number} / SELECTED PROJECT</span><Icon size={23} strokeWidth={1.5}/></div>
        <div className="project-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="art-window">
            <div className="art-window-head"><i/><i/><i/><span>{project.title.toLowerCase().replaceAll(' ', '-')}</span></div>
            <div className="art-window-body">
              <div className="art-side"><i/><i/><i/><i/></div>
              <div className="art-main"><b/><b/><b/><div className="art-chart"><span/><span/><span/><span/><span/><span/><span/></div></div>
            </div>
          </div>
          <div className="art-orb" />
        </div>
        <div className="project-copy">
          <p className="eyebrow">{project.subtitle}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
          <details className="project-details" onClick={(event) => event.stopPropagation()}>
            <summary>Project details <ArrowUpRight size={14}/></summary>
            <p>{project.details}</p>
          </details>
          <a
            className="project-repo-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            View GitHub repository <ExternalLink size={14} />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" /><div className="ambient ambient-b" />
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <Reveal>
              <div className="availability"><span className="live-dot" /> OPEN TO SUITABLE OPPORTUNITIES</div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="hero-overline">HELLO, I'M</p>
              <h1>Chandrasekar<span className="accent-dot">.</span><br/><span className="hero-lastname">A</span></h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-role">Python Full-Stack Developer <span>·</span> AI Applications</p>
              <p className="hero-description">I build web applications that connect thoughtful interfaces, reliable APIs, databases, and AI-powered workflows.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
                <a className="button button-quiet" href="/Chandrasekar_A_Python_FullStack_Resume.pdf" download><Download size={16}/> Download resume</a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-meta"><span><MapPin size={14}/> Bengaluru, India</span><span className="meta-divider" /><span>PYTHON · REACT · FASTAPI · AI</span></div>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.2}><LaptopScene /></Reveal>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner"><span className="eyebrow">MY APPROACH</span><p>Useful software. Clear interfaces. <em>Intelligent systems.</em></p><span className="strip-index">01 — 05</span></div>
        </section>

        <section className="section-wrap about-section section-pad" id="about">
          <Reveal><div className="section-heading"><span className="section-number">01</span><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Engineering with<br/><em>purpose.</em></h2></div></div></Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="about-lead">I'm a Computer Science graduate and Python Full-Stack Developer interested in building practical web applications and AI-powered tools.</p>
              <p>My work spans React interfaces, Python APIs, SQL databases, and LLM integrations. I enjoy connecting the pieces—from user interaction and API design to data storage and useful automation.</p>
              <p>My recent professional experience includes developing an AI-first CRM with natural-language interaction logging and AI-agent tools.</p>
              <div className="education-card"><GraduationCap size={21}/><div><strong>B.E. Computer Science</strong><span>K.S. Institute of Technology · 2025 · CGPA 7.6</span></div></div>
            </Reveal>
            <Reveal className="skills-column" delay={0.1}>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return <div className="skill-group" key={skill.title}><div className="skill-heading"><Icon size={17}/><span>{skill.title}</span><small>0{index + 1}</small></div><div className="skill-pills">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>;
              })}
            </Reveal>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <Reveal><div className="section-heading work-heading"><span className="section-number">02</span><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with<br/><em>a purpose.</em></h2></div><p className="heading-note">A selection of projects and technologies from my development experience.</p></div></Reveal>
            <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index}/>)}</div>
            <p className="project-note"><span>GITHUB</span> Select any project card to open its repository in a new tab.</p>
          </div>
        </section>

        <section className="section-wrap experience-section section-pad" id="experience">
          <Reveal><div className="section-heading"><span className="section-number">03</span><div><p className="eyebrow">THE JOURNEY</p><h2>Experience &<br/><em>education.</em></h2></div></div></Reveal>
          <div className="timeline">
            {experience.map((job, index) => <Reveal key={job.company} delay={index * 0.08}><article className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-date">{job.date}</div><div className="timeline-content"><p className="eyebrow">{job.company}</p><h3>{job.role}</h3><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article></Reveal>)}
          </div>
          <Reveal><div className="education-row"><div className="education-icon"><GraduationCap/></div><div><p className="eyebrow">EDUCATION</p><h3>Diploma in Computer Science</h3><p>Sri Krishna Polytechnic College · 88%</p></div><span className="education-year">2019</span></div></Reveal>
          <Reveal><div className="cert-row"><span className="eyebrow">CERTIFICATIONS</span><p>Python Full Stack Development — Besant Technologies</p><p>DevOps Engineering — Rooman Technologies</p><p>IoT Edge Node & Gateway — Cranes Varsity</p></div></Reveal>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <Reveal><p className="eyebrow"><span className="live-dot"/> CONTACT / NEXT CHAPTER</p><h2>Have a role<br/>in <em>mind?</em></h2><p className="contact-description">I'm interested in opportunities where I can contribute to full-stack development and practical AI applications.</p>
              <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=Portfolio%20enquiry`}>Email me <ArrowUpRight size={17}/></a><button className="button button-quiet" onClick={copyEmail}><Mail size={16}/>{copiedEmail ? 'Email copied' : 'Copy email'}</button></div>
            </Reveal>
            <Reveal className="contact-links" delay={0.12}><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={18}/> LinkedIn</span><ArrowUpRight size={17}/></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={18}/> GitHub</span><ArrowUpRight size={17}/></a><a href={`mailto:${profile.email}`}><span><Mail size={18}/> Email</span><ArrowUpRight size={17}/></a><div className="contact-location"><MapPin size={16}/>{profile.location}</div></Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">C<span>.</span></span><span>CHANDRASEKAR A</span></a><span>DESIGNED & BUILT WITH CARE</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
