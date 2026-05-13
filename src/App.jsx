import { useEffect } from "react";
export default function Portfolio() {

  const projects = [
    
    {
      title: "SudhaarSetu",
      desc: "A platform focused on connecting citizens with authorities to report and resolve local issues efficiently.",
      github: "https://github.com/Sami-1105/E-Waste-.git",
    },

    {
      title: "ServiGo",
      desc: "A service-based application that helps users find and connect with nearby professionals easily.",
      github: "https://github.com/Sami-1105",
    },

    {
      title: "CareMaa",
      desc: "AI-powered maternal & child healthcare platform featuring pregnancy risk prediction, vaccination tracking, and healthcare guidance.",
      github: "https://github.com/Sami-1105/CareMaa.git",
    },

    {
      title: "Airlytics",
      desc: "ML-powered aviation analytics platform transforming historical incident data into actionable safety insights.",
      github: "https://github.com/Sami-1105/AirLytics.git",
    },

    {
      title: "CampVerse",
      desc: "An all-in-one campus management platform for Gen-Z students featuring AI tools, event systems, and collaboration features.",
      github: "https://github.com/Sami-1105/CampVerse.git",
    },
  ];


  const skills = {
    Languages: ["C++", "Java", "Python", "MySQL"],

    "AI / ML": [
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Computer Vision",
      "NLP",
      "Streamlit",
    ],

    "Web & Backend": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "FastAPI",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
    ],
  };

useEffect(() => {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  const moveCursor = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);

  return (

    <div className="bg-[#030712] text-white min-h-screen overflow-x-hidden font-sans scroll-smooth cursor-default selection:bg-cyan-400 selection:text-black">
<div className="cursor-dot"></div>
<div className="cursor-ring"></div>

      {/* BACKGROUND GLOW EFFECTS */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>



      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#020617]/60 border-b border-cyan-400/10 shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Samridhi Tyagi
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">

            <a href="#home"className="cursor-hover hover:text-cyan-400 transition">Home</a>

            <a href="#about" className="cursor-hover hover:text-cyan-400 transition">About</a>

            <a href="#skills" className="cursor-hover hover:text-cyan-400 transition" >Skills</a>

            <a href="#projects" className="cursor-hover hover:text-cyan-400 transition">Projects</a>

            <a href="#experience" className="cursor-hover hover:text-cyan-400 transition" >Experience</a>

            <a href="#certificates" className="cursor-hover hover:text-cyan-400 transition" >Certificates</a>

            <a href="#publications" className="cursor-hover hover:text-cyan-400 transition">Publications</a>

            <a href="#contact" className="cursor-hover hover:text-cyan-400 transition">Contact</a>

          </div>

        </div>

      </nav>



      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-16 pt-28 relative z-10"
      >

        {/* LEFT */}

        <div className="flex-1 space-y-7">

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.25)]">
              Samridhi Tyagi
            </span>

          </h1>

          <h2 className="text-2xl text-slate-300 font-semibold tracking-wide">
            AI Engineer • Full Stack Developer • Problem Solver
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">

            AI-ML student at VIT Bhopal with a CGPA of 8.7,
            passionate about Artificial Intelligence, full-stack development,
            and building impactful digital experiences.

          </p>

          <div className="flex gap-5 pt-3 flex-wrap">

            <a
              href="#contact"
             className="cursor-hover px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_35px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              Get In Touch
            </a>

            <a
              href="Samridhi Tyagi_cv.pdf"
              className="cursor-hover px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_35px_rgba(34,211,238,0.4)] cursor-pointer">
              Download Resume
            </a>

          </div>

        </div>



        {/* RIGHT IMAGE */}

        <div className="flex-1 flex justify-center">

          <div className="relative group">

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl scale-110"></div>

            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse"></div>

            <img
  src="profile.jpg.jpeg"
  alt="profile"
  className="
  cursor-hover
  floaty
  glow
  relative
  w-[320px]
  h-[320px]
  md:w-[430px]
  md:h-[430px]
  object-cover
  rounded-full
  border-4 border-cyan-400
"
/>

          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section id="about" className="py-28 px-8 md:px-20 relative z-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-[40px]"></div>

            <img
  src="profile.jpg.jpeg"
  alt="profile"
  className="
  cursor-hover
  floaty
  glow
  relative
  w-[320px]
  h-[320px]
  md:w-[430px]
  md:h-[430px]
  object-cover
  rounded-full
  border-4 border-cyan-400
"
/>

          </div>


          <div>

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-black mb-6">
              Who I Am
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">

              I'm Samridhi Tyagi, an AI-ML student with a CGPA of 8.7,
              passionate about Artificial Intelligence, full-stack development,
              and building impactful digital experiences.

            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-5">

              From AI-powered healthcare systems and analytics platforms to
              modern web applications, I love building projects that combine
              innovation with real-world impact.

            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-5">

              Constantly learning and experimenting, I aim to grow as an AI Engineer
              who builds technology that is meaningful, scalable, and future-driven.

            </p>



            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 p-6 rounded-3xl hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300">

                <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  5+
                </h3>

                <p className="text-slate-400 mt-2">
                  Projects Built
                </p>

              </div>


              <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 p-6 rounded-3xl hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300">

                <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI
                </h3>

                <p className="text-slate-400 mt-2">
                  Focused Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* SKILLS */}

      <section id="skills" className="py-28 px-8 md:px-20 bg-[#061122]/40 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">

            Technical{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mastery
            </span>

          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {Object.entries(skills).map(([title, items]) => (

              <div
                key={title}
                className="bg-white/5 backdrop-blur-2xl border border-cyan-400/10 rounded-[32px] p-7 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition duration-500"
              >

                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {items.map((skill) => (

                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm text-slate-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-black hover:scale-105 transition duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* PROJECTS */}

      <section id="projects" className="py-28 px-8 md:px-20 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">

            Featured{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project) => (

              <a
                href={project.github}
                target="_blank"
                key={project.title}
                className="group bg-white/5 backdrop-blur-2xl border border-cyan-400/10 rounded-[32px] overflow-hidden hover:border-cyan-400/40 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(34,211,238,0.16)] transition duration-500"
              >

          

                <div className="p-6">

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mt-6 text-cyan-400 font-semibold">
                    View Project →
                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>



      {/* EXPERIENCE */}

      <section id="experience" className="py-28 px-8 md:px-20 bg-[#061122]/40 relative z-10">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">

            Work{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>

          </h2>


          <div className="space-y-8">

            <div className="bg-white/5 backdrop-blur-2xl border border-cyan-400/10 p-8 rounded-[30px] hover:border-cyan-400/40 hover:-translate-y-2 transition duration-500">

              <h3 className="text-2xl font-bold text-cyan-400">
                Technical Team Member — Null VIT Bhopal
              </h3>

              <p className="text-slate-400 mt-3">
                Organized cybersecurity CTF challenges focused on XSS and LLM vulnerabilities.
              </p>

            </div>


            <div className="bg-white/5 backdrop-blur-2xl border border-cyan-400/10 p-8 rounded-[30px] hover:border-cyan-400/40 hover:-translate-y-2 transition duration-500">

              <h3 className="text-2xl font-bold text-cyan-400">
                Technical Team Member — Mharo Rajasthan Club
              </h3>

              <p className="text-slate-400 mt-3">
                Coordinated technical operations and management for large-scale cultural events.
              </p>

            </div>


            <div className="bg-white/5 backdrop-blur-2xl border border-cyan-400/10 p-8 rounded-[30px] hover:border-cyan-400/40 hover:-translate-y-2 transition duration-500">

              <h3 className="text-2xl font-bold text-cyan-400">
                Open Source Contributor — GSSoC 2025
              </h3>

              <p className="text-slate-400 mt-3">
                Collaborated on open-source repositories contributing features, fixes, and improvements.
              </p>

            </div>

          </div>

        </div>

      </section>


{/* CERTIFICATIONS */}

<section
  id="certificates"
  className="py-28 px-8 md:px-20 relative z-10"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-black text-center mb-16">

      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Certifications
      </span>

    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}

      <div
        className="class-hover
        bg-white/5
        backdrop-blur-2xl
        border border-cyan-400/10
        p-8
        rounded-[30px]
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]
        transition duration-500
      "
      >

        <div className="mb-5 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
          
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          Deloitte Australia - Technology Job Simulation
        </h3>

        <p className="text-slate-400 leading-relaxed">
          Completed hands-on training and practical implementation projects
          focused on real-world technology workflows.
        </p>

      </div>



      {/* CARD 2 */}

      <div
        className="class-hover
        bg-white/5
        backdrop-blur-2xl
        border border-cyan-400/10
        p-8
        rounded-[30px]
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]
        transition duration-500
      "
      >

        <div className="mb-5 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
          
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          Infosys Springboard 7.0 Virtual Internship
        </h3>

        <p className="text-slate-400 leading-relaxed">
          Hands-on experience with Artificial Intelligence, NLP,
          and Generative AI technologies.
        </p>

      </div>



      {/* CARD 3 */}

      <div
        className="class-hover
        bg-white/5
        backdrop-blur-2xl
        border border-cyan-400/10
        p-8
        rounded-[30px]
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]
        transition duration-500
      "
      >

        <div className="mb-5 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
          
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          Johns Hopkins University Hackathon
        </h3>

        <p className="text-slate-400 leading-relaxed">
          Participated in healthcare innovation hackathon focused on
          solving real-world medical challenges.
        </p>

      </div>



      {/* CARD 4 */}

      <div
        className="class-hover
        bg-white/5
        backdrop-blur-2xl
        border border-cyan-400/10
        p-8
        rounded-[30px]
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]
        transition duration-500
      "
      >

        <div className="mb-5 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
          
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          Oracle Dev Gym
        </h3>

        <p className="text-slate-400 leading-relaxed">
          Completed core MySQL fundamentals and database query optimization concepts.
        </p>

      </div>

    </div>
  </div>
</section>


      {/* PUBLICATIONS */}

      <section id="publications" className="py-28 px-8 md:px-20 bg-[#061122]/40 relative z-10">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">

            Publications

          </h2>


          <div className="bg-white/5 backdrop-blur-2xl border border-cyan-400/10 p-10 rounded-[32px] hover:border-cyan-400/40 transition duration-500">

            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5">

              Agentic AI Framework for KidSafe Browser

            </h3>

            <p className="text-slate-400 leading-relaxed text-lg">

              Research work focused on balancing digital wellbeing, cybersecurity,
              and AI-powered protection systems for children against harmful online content.

            </p>

          </div>

        </div>

      </section>



      {/* CONTACT */}

      <section id="contact" className="py-28 px-8 md:px-20 text-center relative z-10">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[5px] text-cyan-400 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">

            Let's Build Something{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Amazing
            </span>

          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Open to AI projects, collaborations, internships, and innovative opportunities.
          </p>


          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="mailto:samridhityagi1105@gmail.com"
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_35px_rgba(34,211,238,0.4)]"
            >
              Email Me
            </a>


            <a
              href="https://github.com/Sami-1105"
              target="_blank"
              className="px-7 py-3 rounded-2xl border border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] transition duration-300"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}