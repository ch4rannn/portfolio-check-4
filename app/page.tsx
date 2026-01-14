"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
// Removed unused GlowingEffectDemo import
import { ProjectsGlowingGrid } from "@/components/projects-glowing-grid";

export default function Portfolio() {
  const [activeMenu, setActiveMenu] = useState(false);

  // Typing Effect State
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => ["I am a Student.", "I build fast, beautiful websites.", "I turn ideas into reality."], []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    const handleScroll = () => {

      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="relative min-h-screen text-white/90">
      {/* Background Shader */}
      <WebGLShader />

      <div className="relative z-10">
        <header className="header">
          <div className="header-container">
            <a href="#home" className="logo">
              Chiranjivi<span className="dot">.</span>
            </a>
            <nav className={`navbar ${activeMenu ? "active" : ""}`}>
              <ul className="nav-list" onClick={() => setActiveMenu(false)}>
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </nav>
            <div className={`hamburger ${activeMenu ? "active" : ""}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </header>

        <main>
          <section id="home" className="hero section">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Hello, I&apos;m</h3>
              </motion.div>

              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Chiranjivi Sah
              </motion.h1>

              <motion.h2
                className="hero-role min-h-[3.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {text}
                <span className="text-brand-blue animate-pulse">|</span>
              </motion.h2>

              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Frontend developer specializing in modern, high-performance web experiences.
              </motion.p>

              <motion.div
                className="hero-buttons flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a href="#projects">
                  <LiquidButton variant="default" size="lg" className="rounded-full border border-white/20 text-white">
                    My Work
                  </LiquidButton>
                </a>
                <a href="#contact">
                  <LiquidButton variant="default" size="lg" className="rounded-full border border-white/20 text-white">
                    Contact Me
                  </LiquidButton>
                </a>
                <a href="/resume.pdf" download="Resume_Chiranjivi_Sah.pdf" target="_blank">
                  <LiquidButton variant="default" size="lg" className="rounded-full border border-white/20 text-white">
                    Download Resume
                  </LiquidButton>
                </a>
              </motion.div>

              <motion.div
                className="trust-row mt-6 text-sm text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                3+ live projects &nbsp;|&nbsp; Client websites live &nbsp;|&nbsp; Fast & responsive design
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="profile-container">
                <Image
                  src="/my_photo.jpg"
                  alt="Chiranjivi Sah"
                  width={320}
                  height={320}
                  className="profile-img"
                  priority
                />
              </div>
            </motion.div>
          </section>

          <section id="about" className="about section">
            <ScrollReveal width="100%">
              <h2 className="section-title">About Me</h2>
              <div className="about-container">
                <div className="about-text glass-card">
                  <p>
                    I am a dedicated <strong>Student</strong> and an aspiring{" "}
                    <strong>Frontend Developer</strong>. My journey involves
                    mastering the building blocks of the web while exploring
                    powerful backend logic with Python and C++.
                  </p>
                  <p>
                    I love solving problems and turning ideas into functional
                    code. Whether it&apos;s designing a colorful UI or structuring a
                    database for a management system, I am always eager to learn
                    and create.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <section id="journey" className="journey section">
            <ScrollReveal width="100%">
              <h2 className="section-title">My Journey</h2>
              <div className="journey-container glass-card mx-auto max-w-[600px] p-8">
                <ul className="timeline-list space-y-4 text-left">
                  <li className="flex items-center gap-4">
                    <span className="text-brand-blue font-bold">2024</span>
                    <span className="text-gray-400">Started Web Development</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-brand-blue font-bold">2025</span>
                    <span className="text-gray-400">Built multiple real-world projects</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-brand-blue font-bold">2026</span>
                    <span className="text-gray-400">Working on freelance & internships</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </section>

          <section id="skills" className="skills section">
            <ScrollReveal width="100%">
              <h2 className="section-title">My Tech Stack</h2>
              <div className="skills-container-strip glass-card-strip">
                <div className="skill-item">
                  <i className="fab fa-html5 skill-icon" style={{ color: "#E34F26" }}></i>
                  <h3>HTML5</h3>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt skill-icon" style={{ color: "#1572B6" }}></i>
                  <h3>CSS3</h3>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js skill-icon" style={{ color: "#F7DF1E" }}></i>
                  <h3>JavaScript</h3>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python skill-icon" style={{ color: "#3776AB" }}></i>
                  <h3>Python</h3>
                </div>
                <div className="skill-item">
                  <i className="fas fa-code skill-icon" style={{ color: "#00599C" }}></i>
                  <h3>C++</h3>
                </div>
                <div className="skill-item">
                  <i className="fas fa-terminal skill-icon" style={{ color: "#A8B9CC" }}></i>
                  <h3>C</h3>
                </div>
                <div className="skill-item">
                  <i className="fab fa-php skill-icon" style={{ color: "#777BB4" }}></i>
                  <h3>PHP</h3>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database skill-icon" style={{ color: "#4479A1" }}></i>
                  <h3>MySQL</h3>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <section id="projects" className="projects section">
            <ScrollReveal width="100%">
              <h2 className="section-title">Featured Projects</h2>
              <ProjectsGlowingGrid />
            </ScrollReveal>
          </section>

          <section id="contact" className="contact section">
            <ScrollReveal width="100%">
              <h2 className="section-title">Let&apos;s build something amazing together.</h2>
              <div className="contact-container glass-card">
                <p className="mb-8 text-lg text-gray-400">
                  Available for freelance projects and internships.
                </p>

                <a href="mailto:Chiranjivisah12345@gmail.com" className="email-link hover:scale-105 transition-transform inline-block">
                  <i className="fas fa-envelope"></i> Chiranjivisah12345@gmail.com
                </a>

                <div className="social-links">
                  <a href="https://wa.me/917739142087" aria-label="WhatsApp" target="_blank" className="hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://github.com/ch4rannn" aria-label="GitHub" className="hover:scale-110 transition-transform">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/chiranjivi-sah-9390b8326/" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/unreleased_69669?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:scale-110 transition-transform">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <footer className="footer relative z-10">
          <p>&copy; 2026 Chiranjivi Sah.</p>
        </footer>


      </div>
    </div>
  );
}
